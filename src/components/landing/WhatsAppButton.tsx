import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, trackPixel } from "@/lib/landingConfig";

interface Props {
  label?: string;
  extra?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  placement?: string;
}

const WhatsAppButton = ({
  label = "Chat on WhatsApp",
  extra,
  variant = "outline",
  className = "",
  placement = "unknown",
}: Props) => {
  const url = buildWhatsAppUrl(extra);

  const handleClick = () => {
    trackPixel("Contact", { method: "whatsapp", placement });
  };

  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ease-out";

  const styles = {
    solid:
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_6px_20px_-6px_hsl(160_84%_30%/0.4)]",
    outline:
      "border border-foreground/20 bg-transparent text-foreground hover:border-emerald-600 hover:text-emerald-700",
    ghost: "text-foreground/70 hover:text-emerald-700",
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle size={16} />
      {label}
    </a>
  );
};

export default WhatsAppButton;