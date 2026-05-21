import WhatsAppButton from "./WhatsAppButton";

const LandingNav = () => (
  <header className="fixed top-0 inset-x-0 z-40 glass-card border-b border-border/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      <a href="/work-with-dave" className="font-display text-base font-bold text-foreground">
        Nwankwo<span className="gradient-text"> Dave</span>
      </a>
      <div className="hidden sm:block">
        <WhatsAppButton
          label="WhatsApp"
          variant="ghost"
          className="!py-2 !px-3 text-xs"
          placement="nav"
        />
      </div>
      <a href="#quote" className="btn-hero text-xs !py-2 !px-4">
        Get a Free Quote
      </a>
    </div>
  </header>
);

export default LandingNav;