const FounderNote = () => (
  <section className="section-container border-t border-foreground/10">
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-4">
        <p className="section-label">
          <span className="accent-rule" />
          A note from Dave
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center font-serif text-2xl text-foreground">
            N
          </div>
          <div>
            <p className="font-serif text-xl text-foreground leading-tight">Nwankwo Ebuka Dave</p>
            <p className="text-xs text-muted-foreground mt-1 tracking-wide">
              Founder · Digital Growth Consultant
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.25] text-foreground">
          <span className="text-accent">“</span>
          I work with a small number of founders at a time —
          <em className="italic"> direct access, weekly progress, fixed scope.</em>
          No agency layers, no surprise invoices. Just craft, clarity, and
          measurable growth you can take to the bank.
          <span className="text-accent">”</span>
        </blockquote>

        <div className="mt-8 grid sm:grid-cols-3 gap-6 pt-6 border-t border-foreground/10">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Working style</p>
            <p className="text-sm text-foreground/85 leading-relaxed">Async-first, weekly checkpoints, direct WhatsApp access.</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Philosophy</p>
            <p className="text-sm text-foreground/85 leading-relaxed">Ship small, measure honestly, compound what works.</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Commitment</p>
            <p className="text-sm text-foreground/85 leading-relaxed">Limited engagements — 3 active clients at a time.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderNote;