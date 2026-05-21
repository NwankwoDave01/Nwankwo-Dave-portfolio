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
  <section className="section-container">
    <div className="text-center mb-12">
      <p className="section-label">
        <span className="w-8 h-px bg-accent inline-block" />
        What you get
      </p>
      <h2 className="section-title">Three services. One growth partner.</h2>
      <p className="section-subtitle max-w-2xl mx-auto mt-4">
        Pick one or combine all three — built to work together as a single growth engine.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {services.map((s) => (
        <div key={s.title} className="group p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-accent/30 card-hover flex flex-col">
          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-5">
            <s.icon size={22} />
          </div>
          <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.pitch}</p>
          <ul className="space-y-2.5 mb-5 flex-1">
            {s.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <Check size={14} className="text-accent mt-1 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border/60">
            <p className="text-xs text-accent font-medium">{s.outcome}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <a href="#quote" className="btn-hero">Get a Free Quote</a>
    </div>
  </section>
);

export default ServiceOffer;