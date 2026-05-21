import { ArrowUpRight, Trophy } from "lucide-react";

const proof = [
  { title: "Teamsource Website Optimization", role: "Web Performance & Paid Media", result: "+35% traffic · 50+ qualified leads via paid campaigns.", tags: ["WordPress", "Google Ads", "Meta Ads", "GA4"] },
  { title: "Paid Ads Lead Generation", role: "Paid Media Specialist", result: "-40% cost per lead · Scalable acquisition funnel with clear ROI.", tags: ["Google Ads", "Meta Ads", "GTM", "HubSpot"] },
  { title: "AI-Powered Content System", role: "AI Content Systems Architect", result: "Powering content output across multiple agency client accounts.", tags: ["AI/ML", "Meta Suite", "Buffer", "Canva"] },
];

const ProofSelected = () => (
  <section className="section-container">
    <div className="text-center mb-12">
      <p className="section-label">
        <span className="w-8 h-px bg-accent inline-block" />
        Selected work
      </p>
      <h2 className="section-title">Results, not promises</h2>
    </div>

    <div className="grid gap-4 max-w-5xl mx-auto">
      {proof.map((p) => (
        <div key={p.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 card-hover">
          <div className="mb-3">
            <p className="text-xs text-accent font-medium mb-1">{p.role}</p>
            <h3 className="font-display font-bold text-lg text-foreground">{p.title}</h3>
          </div>
          <div className="flex items-start gap-2.5 mb-4">
            <Trophy size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground/90 leading-relaxed">{p.result}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="skill-badge text-xs">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <a href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium">
        See Recent Client Work
        <ArrowUpRight size={16} />
      </a>
    </div>
  </section>
);

export default ProofSelected;