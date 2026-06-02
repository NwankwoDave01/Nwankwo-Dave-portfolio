import WhatsAppButton from "./WhatsAppButton";

const LandingNav = () => (
  <header className="fixed top-0 inset-x-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
      <a href="/work-with-dave" className="flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-white/90">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Nwankwo Dave
        <span className="hidden sm:inline text-white/35 ml-2 font-serif italic text-base normal-case tracking-normal">
          — Digital Studio
        </span>
      </a>
      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <WhatsAppButton
            label="WhatsApp"
            variant="ghost"
            className="!py-2 !px-3 text-xs !text-white/70 hover:!text-white"
            placement="nav"
          />
        </div>
        <a
          href="#quote"
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-emerald-300 transition-colors"
        >
          Start a project
        </a>
      </div>
    </div>
  </header>
);

export default LandingNav;