import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can we start and how long do projects take?", a: "Most projects kick off within a week. Typical delivery is 2–4 weeks depending on scope. You'll get a clear timeline in the proposal." },
  { q: "What does it cost?", a: "Pricing depends on scope. Most clients invest between $800 and $5,000+ per project. You'll get a fixed quote after the discovery call — no hidden fees." },
  { q: "Do you work with international clients?", a: "Yes. I work remotely with founders and agencies worldwide. All communication is async-friendly via WhatsApp, email, and weekly calls." },
  { q: "Who owns the work after delivery?", a: "You do — fully. All code, ad accounts, designs, and content remain 100% yours." },
  { q: "What if I'm not sure which service I need?", a: "That's what the free consultation is for. We'll figure out the highest-leverage move for your business together." },
];

const FAQ = () => (
  <section className="section-container border-t border-foreground/10">
    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="section-label">
          <span className="accent-rule" />
          FAQ
        </p>
        <h2 className="section-title">
          Questions,<br/><em className="font-serif italic text-accent">answered</em>.
        </h2>
        <p className="text-sm text-muted-foreground mt-6 max-w-xs leading-relaxed">
          Don't see yours? Send a quick WhatsApp message — usually answered within an hour.
        </p>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-foreground/10">
              <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground hover:text-accent hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;