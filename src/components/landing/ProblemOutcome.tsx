import { ArrowRight } from "lucide-react";

const rows = [
  { problem: "A slow website losing visitors and burning ad spend", outcome: "A lightning-fast site that converts and ranks" },
  { problem: "Ads running with no measurable return on investment", outcome: "Profitable campaigns with clear, honest attribution" },
  { problem: "No bandwidth to keep up with content & creative", outcome: "AI-powered video and content on a quiet autopilot" },
];

const ProblemOutcome = () => (
  <section className="section-container">
    <div className="grid lg:grid-cols-12 gap-12 mb-14">
      <div className="lg:col-span-5">
        <p className="section-label">
          <span className="accent-rule" />
          The shift
        </p>
        <h2 className="section-title">
          From quiet <em className="font-serif italic text-accent">friction</em><br/>to compounding <em className="font-serif italic underline-ochre">growth</em>.
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Most businesses don't have a marketing problem — they have a leverage problem.
          The work below is what changes when the website, ads, and content stop fighting each other.
        </p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto divide-y divide-foreground/10 border-y border-foreground/10">
      {rows.map((r, i) => (
        <div key={r.problem} className="grid md:grid-cols-12 gap-6 py-7 md:py-8 group">
          <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-1">
            0{i + 1}
          </div>
          <p className="md:col-span-5 text-base text-muted-foreground line-through decoration-foreground/20 leading-relaxed">
            {r.problem}
          </p>
          <div className="md:col-span-1 flex md:justify-center pt-1">
            <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="md:col-span-5 text-base md:text-lg text-foreground leading-relaxed font-serif">
            {r.outcome}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProblemOutcome;