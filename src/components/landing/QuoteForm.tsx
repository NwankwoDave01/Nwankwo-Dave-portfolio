import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buildWhatsAppUrl, trackPixel } from "@/lib/landingConfig";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const SERVICES = ["Website / App", "Digital Marketing", "AI Video / Content", "Not sure yet"] as const;
const BUDGETS = ["< $1k", "$1k – $3k", "$3k – $7k", "$7k+"] as const;
const TIMELINES = ["ASAP", "2–4 weeks", "1–2 months", "Just exploring"] as const;

const schema = z.object({
  service: z.enum(SERVICES, { required_error: "Pick a service" }),
  budget: z.enum(BUDGETS, { required_error: "Pick a budget" }),
  timeline: z.enum(TIMELINES, { required_error: "Pick a timeline" }),
  context: z.string().trim().max(800, "Keep it under 800 characters").optional().or(z.literal("")),
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  whatsapp: z.string().trim().min(6, "Phone is required").max(30),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

type FormData = z.infer<typeof schema>;

const Choice = <T extends string>({
  value,
  active,
  onClick,
}: {
  value: T;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all text-left ${
      active
        ? "border-accent bg-accent/10 text-foreground"
        : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
    }`}
  >
    <span className="flex items-center justify-between gap-2">
      {value}
      {active && <Check size={14} className="text-accent" />}
    </span>
  </button>
);

const QuoteForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const service = watch("service");
  const budget = watch("budget");
  const timeline = watch("timeline");

  const next = async () => {
    if (step === 1) {
      const ok = await trigger(["service"]);
      if (!ok) return;
      trackPixel("Lead", { step: "form_step_1" });
      setStep(2);
    } else if (step === 2) {
      const ok = await trigger(["budget", "timeline"]);
      if (!ok) return;
      trackPixel("Lead", { step: "form_step_2" });
      setStep(3);
    }
  };

  const back = () => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s));

  const onSubmit = async (data: FormData) => {
    const lines = [
      "New quote request from landing page",
      "",
      `Service: ${data.service}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      data.company ? `Company: ${data.company}` : "",
      data.context ? `\nContext: ${data.context}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    trackPixel("Lead", { step: "form_submit", service: data.service, budget: data.budget });

    // Capture UTM params + referrer for attribution
    const params = new URLSearchParams(window.location.search);
    const isSpam = Boolean(data.website && data.website.length > 0);

    // Save to Supabase first so the lead is never lost.
    try {
      const { error } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        company: data.company || null,
        service: data.service,
        budget: data.budget,
        timeline: data.timeline,
        context: data.context || null,
        source: "work-with-dave",
        status: isSpam ? "spam" : "new",
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        referrer: document.referrer || null,
        user_agent: navigator.userAgent.slice(0, 500),
      });
      if (error) throw error;
    } catch (err) {
      console.error("Lead save failed:", err);
      toast({
        title: "We saved your details on WhatsApp instead",
        description: "Continuing to WhatsApp so your request still reaches Dave.",
      });
    }

    // Open WhatsApp in a new tab with structured details
    window.open(buildWhatsAppUrl(lines), "_blank", "noopener,noreferrer");
    // Route to thank-you so conversion event fires once
    navigate("/thank-you");
  };

  return (
    <div className="rounded-2xl bg-card border border-border p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-colors ${
              step >= s ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground mb-6 font-mono">
        Step {step} of 3
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                What do you need help with?
              </h3>
              <p className="text-sm text-muted-foreground">
                Pick the closest fit — we'll narrow it down on the call.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {SERVICES.map((opt) => (
                <Choice
                  key={opt}
                  value={opt}
                  active={service === opt}
                  onClick={() => setValue("service", opt, { shouldValidate: true })}
                />
              ))}
            </div>
            {errors.service && (
              <p className="text-xs text-destructive">{errors.service.message}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                Budget & timeline
              </h3>
              <p className="text-sm text-muted-foreground">
                A rough range helps me give you an honest answer.
              </p>
            </div>

            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Budget
              </Label>
              <div className="grid grid-cols-2 gap-2.5">
                {BUDGETS.map((opt) => (
                  <Choice
                    key={opt}
                    value={opt}
                    active={budget === opt}
                    onClick={() => setValue("budget", opt, { shouldValidate: true })}
                  />
                ))}
              </div>
              {errors.budget && (
                <p className="text-xs text-destructive mt-2">{errors.budget.message}</p>
              )}
            </div>

            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Timeline
              </Label>
              <div className="grid grid-cols-2 gap-2.5">
                {TIMELINES.map((opt) => (
                  <Choice
                    key={opt}
                    value={opt}
                    active={timeline === opt}
                    onClick={() => setValue("timeline", opt, { shouldValidate: true })}
                  />
                ))}
              </div>
              {errors.timeline && (
                <p className="text-xs text-destructive mt-2">{errors.timeline.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="context" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Project context (optional)
              </Label>
              <Textarea
                id="context"
                rows={3}
                placeholder="A few sentences about your business and what you're trying to achieve…"
                maxLength={800}
                {...register("context")}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                Where should I reach you?
              </h3>
              <p className="text-sm text-muted-foreground">
                You'll hear back within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</Label>
                <Input id="name" maxLength={80} placeholder="Your full name" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</Label>
                <Input id="email" type="email" maxLength={160} placeholder="you@company.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="whatsapp" className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">WhatsApp / Phone</Label>
                <Input id="whatsapp" maxLength={30} placeholder="+1 555 000 0000" {...register("whatsapp")} />
                {errors.whatsapp && <p className="text-xs text-destructive mt-1">{errors.whatsapp.message}</p>}
              </div>
              <div>
                <Label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Company (optional)</Label>
                <Input id="company" maxLength={120} placeholder="Company name" {...register("company")} />
              </div>
            </div>

            {/* Honeypot — hidden from real users, bots tend to fill it */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
              {...register("website")}
            />

            <p className="text-xs text-muted-foreground/70">
              Submitting opens WhatsApp pre-filled with your request so we can chat right away.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          {step > 1 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>
          ) : <span />}

          {step < 3 ? (
            <button type="button" onClick={next} className="btn-hero">
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="btn-hero">
              Send Request <Send size={16} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;