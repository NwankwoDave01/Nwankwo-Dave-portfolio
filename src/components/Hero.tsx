import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="glow-orb w-[500px] h-[500px] top-[-100px] right-[-100px]" style={{ background: 'hsl(195 100% 55%)' }} />
        <div className="glow-orb w-[400px] h-[400px] bottom-[-50px] left-[-100px]" style={{ background: 'hsl(270 80% 65%)' }} />
        <div className="glow-orb w-[300px] h-[300px] top-[40%] left-[50%] animate-pulse-glow" style={{ background: 'hsl(195 100% 55%)' }} />
      </div>

      <div className="section-container text-center max-w-5xl">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8 opacity-0 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-muted-foreground">Available for Remote Opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-foreground mb-6 opacity-0 animate-fade-in animate-delay-100">
          Nwankwo Ebuka{" "}
          <span className="gradient-text">Dave</span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-3 opacity-0 animate-fade-in animate-delay-200">
          Web Performance · Paid Media · Marketing Automation
        </p>

        {/* Subtitle */}
        <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed opacity-0 animate-fade-in animate-delay-300">
          I optimize websites, improve search visibility, manage paid campaigns, 
          and build automation systems that help businesses grow faster.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground/60 mb-10 opacity-0 animate-fade-in animate-delay-300">
          <MapPin size={14} />
          <span>Lagos, Nigeria · Open to Remote</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in animate-delay-400">
          <a href="#projects" className="btn-hero">
            View Case Studies
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn-outline-hero">
            Let's Work Together
          </a>
        </div>

        {/* Trust microcopy */}
        <p className="text-xs text-muted-foreground/50 mb-12 opacity-0 animate-fade-in animate-delay-400">
          Trusted by startups and agencies · Results-driven approach
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-500">
          <a
            href="https://www.linkedin.com/in/nwankwo-dave-e6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl glass-card text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ebukadave2009@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-xl glass-card text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border border-muted-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-accent rounded-full mt-1.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
