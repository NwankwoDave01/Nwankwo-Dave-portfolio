import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight, ArrowLeft } from "lucide-react";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import LandingFooter from "@/components/landing/LandingFooter";
import { trackPixel } from "@/lib/landingConfig";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thanks — I'll be in touch shortly";
    trackPixel("Lead", { step: "thank_you_view" });
    trackPixel("CompleteRegistration");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="glow-orb w-[500px] h-[500px] top-[-100px] right-[-100px]" style={{ background: "hsl(195 100% 55%)" }} />
        </div>

        <div className="max-w-xl w-full text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
            <CheckCircle2 size={32} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Got it — thanks!
          </h1>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Your request just landed in my inbox and WhatsApp. I'll reply within 24 hours
            with next steps and a few clarifying questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <WhatsAppButton label="Continue on WhatsApp" variant="solid" placement="thank_you" />
            <Link to="/work-with-dave" className="btn-outline-hero">
              <ArrowLeft size={16} /> Back
            </Link>
          </div>

          <div className="pt-6 border-t border-border/60">
            <p className="text-xs text-muted-foreground mb-3">While you wait — see real client work:</p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              See Recent Client Work
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
};

export default ThankYou;