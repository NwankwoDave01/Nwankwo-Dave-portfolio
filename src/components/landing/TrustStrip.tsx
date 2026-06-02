import { MapPin, Clock, ShieldCheck, Zap } from "lucide-react";

const items = [
  { icon: MapPin, label: "Lagos, NG · Remote Worldwide" },
  { icon: Clock, label: "24h Average Response" },
  { icon: ShieldCheck, label: "Transparent Pricing" },
  { icon: Zap, label: "2–4 Week Typical Delivery" },
];

const TrustStrip = () => (
  <section className="border-b border-border/60">
    <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 justify-start">
            <Icon size={12} className="text-accent flex-shrink-0" />
            <span className="truncate">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;