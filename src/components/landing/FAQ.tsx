import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can we start and how long do projects take?", a: "Most projects kick off within a week. Typical delivery is 2–4 weeks depending on scope. You'll get a clear timeline in the proposal." },
  { q: "What does it cost?", a: "Pricing depends on scope. Most clients invest between $800 and $5,000+ per project. You'll get a fixed quote after the discovery call — no hidden fees." },
  { q: "Do you work with international clients?", a: "Yes. I work remotely with founders and agencies worldwide. All communication is async-friendly via WhatsApp, email, and weekly calls." },
  { q: "Who owns the work after delivery?", a: "You do — fully. All code, ad accounts, designs, and content remain 100% yours." },
  { q: "What if I'm not sure which service I need?", a: "That's what the free consultation is for. We'll figure out the highest-leverage move for your business together." },
];

const FAQ = () => (
  <section className="section-container">
    <div className="text-center mb-10">
      <p className="section-label">
        <span className="w-8 h-px bg-accent inline-block" />
        FAQ
      </p>
      <h2 className="section-title">Questions, answered</h2>
    </div>

    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;