const steps = [
  { n: "01", title: "Discovery call", body: "We talk through your goals, audience, and current numbers. 15–30 minutes, no pitch." },
  { n: "02", title: "Proposal & scope", body: "You get a clear plan with timeline, deliverables, and fixed pricing — no surprises." },
  { n: "03", title: "Build & iterate", body: "Weekly updates, fast turnarounds, and direct access on WhatsApp throughout the project." },
  { n: "04", title: "Launch & optimize", body: "We ship, track results, and iterate so the work keeps compounding after launch." },
];

const HowItWorks = () => (
  <section className="section-container">
    <div className="max-w-3xl mb-16">
      <p className="section-label">
        <span className="accent-rule" />
        The process
      </p>
      <h2 className="section-title">
        A calm, transparent way<br/>of <em className="font-serif italic text-accent">working together</em>.
      </h2>
    </div>

    <div className="max-w-5xl mx-auto">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-t border-foreground/10 last:border-b group"
        >
          <div className="md:col-span-2 font-serif text-5xl md:text-6xl text-foreground/25 group-hover:text-accent transition-colors leading-none">
            {s.n}
          </div>
          <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl text-foreground leading-tight">
            {s.title}
          </h3>
          <p className="md:col-span-6 text-base text-muted-foreground leading-relaxed md:pt-2">
            {s.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;