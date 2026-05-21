import { TrendingDown, ArrowRight, TrendingUp } from "lucide-react";

const rows = [
  { problem: "Slow website losing visitors and ad spend", outcome: "Lightning-fast site that converts and ranks" },
  { problem: "Ads running with no measurable ROI", outcome: "Profitable campaigns with clear attribution" },
  { problem: "No time to keep up with content", outcome: "AI-powered video and content on autopilot" },
];

const ProblemOutcome = () => (
  <section className="section-container">
    <div className="text-center mb-12">
      <p className="section-label">
        <span className="w-8 h-px bg-accent inline-block" />
        Where most businesses get stuck
      </p>
      <h2 className="section-title">From friction to growth</h2>
    </div>

    <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
      {rows.map((r) => (
        <div key={r.problem} className="p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <TrendingDown size={14} className="text-destructive" />
            <span>Problem</span>
          </div>
          <p className="text-sm text-foreground mb-5 leading-relaxed">{r.problem}</p>
          <ArrowRight size={16} className="text-accent mb-4" />
          <div className="flex items-center gap-2 text-xs text-accent mb-3">
            <TrendingUp size={14} />
            <span>Outcome</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed">{r.outcome}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProblemOutcome;