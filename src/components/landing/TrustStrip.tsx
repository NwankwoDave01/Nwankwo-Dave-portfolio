import { MapPin, Clock, ShieldCheck, Zap } from "lucide-react";

const items = [
  { icon: MapPin, label: "Lagos, NG · Remote Worldwide" },
  { icon: Clock, label: "24h Average Response" },
  { icon: ShieldCheck, label: "Transparent Pricing" },
  { icon: Zap, label: "2–4 Week Typical Delivery" },
];

const TrustStrip = () => (
  <section className="border-y border-border/50 bg-card/40">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 justify-center md:justify-start">
            <Icon size={14} className="text-accent flex-shrink-0" />
            <span className="truncate">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;