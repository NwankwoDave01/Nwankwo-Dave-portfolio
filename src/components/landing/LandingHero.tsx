import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { trackPixel } from "@/lib/landingConfig";

const LandingHero = () => (
  <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="glow-orb w-[500px] h-[500px] top-[-100px] right-[-100px]" style={{ background: "hsl(195 100% 55%)" }} />
      <div className="glow-orb w-[400px] h-[400px] bottom-[-100px] left-[-100px]" style={{ background: "hsl(270 80% 65%)" }} />
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-muted-foreground">Now accepting new projects · Replies within 24h</span>
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground mb-5 leading-[1.1]">
        Helping Businesses Grow With{" "}
        <span className="gradient-text">Modern Websites, Ads & AI Content</span>
      </h1>

      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
        Fast websites, profitable paid campaigns, and AI-powered video content —
        built to turn visitors into customers and scale what's already working.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <a
          href="#quote"
          className="btn-hero w-full sm:w-auto"
          onClick={() => trackPixel("Lead", { step: "hero_cta_click" })}
        >
          Get a Free Quote
          <ArrowRight size={16} />
        </a>
        <WhatsAppButton placement="hero" className="w-full sm:w-auto" />
      </div>

      <p className="text-xs text-muted-foreground/60">
        Free consultation · No obligation · Reply within 24 hours
      </p>
    </div>
  </section>
);

export default LandingHero;