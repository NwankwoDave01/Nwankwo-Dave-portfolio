import { Globe, Megaphone, Video, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website & App Development",
    pitch: "Fast, modern, conversion-focused sites and apps.",
    deliverables: [
      "Custom design & build (React, WordPress, Shopify)",
      "Mobile-first, SEO-ready, blazing-fast",
      "Analytics, tracking & launch support",
    ],
    outcome: "Sites that load fast, rank well, and convert.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    pitch: "Paid ads, SEO, and automation that drive real revenue.",
    deliverables: [
      "Google & Meta Ads campaign management",
      "Technical SEO + GA4 / Search Console setup",
      "Lead automation with n8n & CRM integrations",
    ],
    outcome: "Predictable, trackable customer acquisition.",
  },
  {
    icon: Video,
    title: "AI Video & Commercial Production",
    pitch: "Scroll-stopping AI-driven video and short-form content.",
    deliverables: [
      "AI-generated commercials & product demos",
      "Short-form ads for Meta, TikTok, YouTube Shorts",
      "Scalable content systems for ongoing output",
    ],
    outcome: "Premium creative at a fraction of the cost.",
  },
];

const ServiceOffer = () => (
  <section className="section-container border-t border-foreground/10">
    <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
      <div className="lg:col-span-7">
        <p className="section-label">
          <span className="accent-rule" />
          The practice
        </p>
        <h2 className="section-title">
          Three disciplines.<br/>
          One <em className="font-serif italic text-accent">growth partner</em>.
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9">
        <p className="text-base text-muted-foreground leading-relaxed">
          Pick one — or combine all three as a single, compounding growth engine designed around your numbers.
        </p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto">
      {services.map((s, i) => (
        <div
          key={s.title}
          className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-foreground/10 last:border-b"
        >
          <div className="md:col-span-1">
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
          </div>
          <div className="md:col-span-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/15 text-foreground/70 group-hover:border-accent group-hover:text-accent transition-colors mb-5">
              <s.icon size={18} />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-3">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.pitch}</p>
          </div>
          <ul className="md:col-span-5 space-y-3">
            {s.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                <Check size={14} className="text-accent mt-1 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="md:col-span-2 md:border-l md:border-foreground/10 md:pl-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Outcome</p>
            <p className="font-serif italic text-base text-accent leading-snug">{s.outcome}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#quote" className="btn-hero">Start a project</a>
      <span className="text-xs text-muted-foreground">Free consultation · No obligation</span>
    </div>
  </section>
);

export default ServiceOffer;