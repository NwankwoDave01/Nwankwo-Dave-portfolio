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
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ease-out";

  const styles = {
    solid:
      "bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_4px_20px_0_hsl(160_84%_45%/0.3)]",
    outline:
      "border border-border bg-transparent text-foreground hover:border-emerald-400 hover:text-emerald-400",
    ghost: "text-emerald-400 hover:text-emerald-300",
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