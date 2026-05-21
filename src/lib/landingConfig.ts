// Single source of truth for the landing page.
// Swap placeholders before going live.

export const landingConfig = {
  // WhatsApp number in international format, digits only (no +).
  whatsappNumber: "2348000000000",

  // Default WhatsApp opener.
  whatsappMessage:
    "Hi Dave, I came from your website and I'd like to discuss a project. ",

  // Meta Pixel ID — empty string disables pixel events.
  metaPixelId: "",

  email: "ebukadave2009@gmail.com",
  portfolioUrl: "/",
  bookingUrl: "",
};

export const buildWhatsAppUrl = (extra?: string) => {
  const base = `https://wa.me/${landingConfig.whatsappNumber}`;
  const text = encodeURIComponent(
    (landingConfig.whatsappMessage + (extra ?? "")).slice(0, 900)
  );
  return `${base}?text=${text}`;
};

// Minimal Meta Pixel event helper. No-ops if pixel not loaded.
export const trackPixel = (
  event: string,
  params?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === "function") fbq("track", event, params);
};
