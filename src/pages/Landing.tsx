import { useEffect } from "react";
import LandingNav from "@/components/landing/LandingNav";
import LandingHero from "@/components/landing/LandingHero";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemOutcome from "@/components/landing/ProblemOutcome";
import ServiceOffer from "@/components/landing/ServiceOffer";
import HowItWorks from "@/components/landing/HowItWorks";
import FounderNote from "@/components/landing/FounderNote";
import ProofSelected from "@/components/landing/ProofSelected";
import FAQ from "@/components/landing/FAQ";
import QuoteForm from "@/components/landing/QuoteForm";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import StickyMobileBar from "@/components/landing/StickyMobileBar";
import LandingFooter from "@/components/landing/LandingFooter";
import { landingConfig, trackPixel } from "@/lib/landingConfig";
import { Mail } from "lucide-react";

const Landing = () => {
  useEffect(() => {
    document.title = "Work With Dave — Websites, Ads & AI Content That Grow Your Business";
    trackPixel("ViewContent", { page: "work-with-dave" });
  }, []);

  return (
    <div className="theme-editorial min-h-screen bg-background">
      <LandingNav />
      <main>
        <div className="ink-band">
          <LandingHero />
        </div>
        <TrustStrip />
        <ProblemOutcome />
        <ServiceOffer />
        <HowItWorks />
        <FounderNote />
        <ProofSelected />
        <FAQ />

        {/* Conversion block */}
        <section id="quote" className="section-container scroll-mt-20">
          <div className="text-center mb-10">
            <p className="section-label">
              <span className="w-8 h-px bg-accent inline-block" />
              Let's build something
            </p>
            <h2 className="section-title">Get a free quote in 24 hours</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-4">
              Tell me about your project — I'll reply with a clear scope, timeline, and price.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 max-w-5xl mx-auto items-start">
            <QuoteForm />

            <aside className="rounded-2xl bg-card border border-border p-6 md:p-7 space-y-5">
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  Prefer to chat instead?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Skip the form — message me directly on WhatsApp or email.
                </p>
              </div>

              <WhatsAppButton
                label="Message me on WhatsApp"
                variant="solid"
                placement="quote_aside"
                className="w-full"
              />

              <a
                href={`mailto:${landingConfig.email}`}
                className="btn-outline-hero w-full"
              >
                <Mail size={16} /> Email me
              </a>

              <div className="pt-4 border-t border-border/60 space-y-2">
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Response time:</span> within 24 hours
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Location:</span> Lagos, NG · Remote worldwide
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Payment:</span> 50% upfront, 50% on delivery
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <LandingFooter />
      <StickyMobileBar />
    </div>
  );
};

export default Landing;