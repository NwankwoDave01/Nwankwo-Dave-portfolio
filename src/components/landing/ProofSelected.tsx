import { ArrowUpRight, Trophy } from "lucide-react";

const proof = [
  { title: "Teamsource Website Optimization", role: "Web Performance & Paid Media", result: "+35% traffic · 50+ qualified leads via paid campaigns.", tags: ["WordPress", "Google Ads", "Meta Ads", "GA4"] },
  { title: "Paid Ads Lead Generation", role: "Paid Media Specialist", result: "-40% cost per lead · Scalable acquisition funnel with clear ROI.", tags: ["Google Ads", "Meta Ads", "GTM", "HubSpot"] },
  { title: "AI-Powered Content System", role: "AI Content Systems Architect", result: "Powering content output across multiple agency client accounts.", tags: ["AI/ML", "Meta Suite", "Buffer", "Canva"] },
];

const ProofSelected = () => (
  <section className="section-container border-t border-foreground/10">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-6">
        <p className="section-label">
          <span className="accent-rule" />
          Selected work
        </p>
        <h2 className="section-title">
          Results,<br/><em className="font-serif italic text-accent">not promises</em>.
        </h2>
      </div>
      <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
        <p className="text-base text-muted-foreground leading-relaxed">
          A small selection of recent engagements — focused on measurable outcomes
          rather than vanity metrics or design awards.
        </p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto">
      {proof.map((p, i) => (
        <a
          key={p.title}
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="group grid md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-foreground/10 last:border-b hover:bg-foreground/[0.02] transition-colors px-2 -mx-2"
        >
          <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
            0{i + 1}
          </div>
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-3">{p.role}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
              {p.title}
            </h3>
          </div>
          <div className="md:col-span-5">
            <div className="flex items-start gap-3 mb-5">
              <Trophy size={14} className="text-ochre mt-1 flex-shrink-0" />
              <p className="text-base text-foreground/85 leading-relaxed font-serif">{p.result}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="skill-badge text-[11px]">{t}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 flex md:justify-end items-start pt-2">
            <ArrowUpRight size={20} className="text-foreground/40 group-hover:text-accent group-hover:rotate-12 transition-all" />
          </div>
        </a>
      ))}
    </div>

    <div className="text-center mt-14">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border-b border-foreground/30 hover:border-accent pb-1"
      >
        See Recent Client Work
        <ArrowUpRight size={14} />
      </a>
    </div>
  </section>
);

export default ProofSelected;