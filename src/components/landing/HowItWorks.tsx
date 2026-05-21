const steps = [
  { n: "01", title: "Discovery call", body: "We talk through your goals, audience, and current numbers. 15–30 minutes, no pitch." },
  { n: "02", title: "Proposal & scope", body: "You get a clear plan with timeline, deliverables, and fixed pricing — no surprises." },
  { n: "03", title: "Build & iterate", body: "Weekly updates, fast turnarounds, and direct access on WhatsApp throughout the project." },
  { n: "04", title: "Launch & optimize", body: "We ship, track results, and iterate so the work keeps compounding after launch." },
];

const HowItWorks = () => (
  <section className="section-container">
    <div className="text-center mb-12">
      <p className="section-label">
        <span className="w-8 h-px bg-accent inline-block" />
        How it works
      </p>
      <h2 className="section-title">Simple, transparent process</h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
      {steps.map((s) => (
        <div key={s.n} className="p-6 rounded-2xl bg-card border border-border">
          <div className="font-mono text-xs text-accent mb-4">{s.n}</div>
          <h3 className="font-display font-semibold text-base text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;