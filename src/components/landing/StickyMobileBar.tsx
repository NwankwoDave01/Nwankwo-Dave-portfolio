import WhatsAppButton from "./WhatsAppButton";

const StickyMobileBar = () => (
  <div
    className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-foreground/10"
    style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
  >
    <div className="flex items-center gap-2 p-3">
      <a href="#quote" className="btn-hero flex-1 !py-3 text-xs">Start a project</a>
      <WhatsAppButton label="WhatsApp" variant="solid" className="!py-3 !px-4 text-xs" placement="sticky_mobile" />
    </div>
  </div>
);

export default StickyMobileBar;