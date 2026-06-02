import { ArrowRight, ArrowDown } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { trackPixel } from "@/lib/landingConfig";

const LandingHero = () => (
  <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
    {/* Subtle horizon line */}
    <div className="absolute inset-x-0 top-20 h-px bg-white/5" />

    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-10 text-[11px] tracking-[0.22em] uppercase text-white/55">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        <span>Available for new engagements · Q2 2026</span>
      </div>

      {/* Asymmetric editorial headline */}
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <h1 className="lg:col-span-9 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-white">
          Helping businesses grow with{" "}
          <em className="text-emerald-300 not-italic font-serif italic">
            modern websites, ads
          </em>{" "}
          &amp;{" "}
          <em className="text-amber-200 not-italic font-serif italic">
            AI&nbsp;content
          </em>
          <span className="text-emerald-300">.</span>
        </h1>

        <div className="lg:col-span-3 lg:pb-3">
          <p className="text-base text-white/65 leading-relaxed border-l border-white/15 pl-4">
            A boutique digital partner for founders who care about craft, speed, and measurable growth.
          </p>
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="#quote"
          className="btn-hero"
          onClick={() => trackPixel("Lead", { step: "hero_cta_click" })}
        >
          Start a project
          <ArrowRight size={16} />
        </a>
        <WhatsAppButton label="Or message on WhatsApp" placement="hero" />
        <span className="hidden sm:flex items-center gap-2 text-xs text-white/45 ml-2">
          <ArrowDown size={12} /> See how it works
        </span>
      </div>

      {/* Footnote / proof line */}
      <div className="mt-20 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-xs text-white/55">
        <p><span className="text-white/85 font-medium">50+ leads</span> generated for paid-media clients</p>
        <p><span className="text-white/85 font-medium">+35% traffic</span> via SEO & performance work</p>
        <p><span className="text-white/85 font-medium">2–4 weeks</span> typical delivery, fixed scope</p>
      </div>
    </div>
  </section>
);

export default LandingHero;