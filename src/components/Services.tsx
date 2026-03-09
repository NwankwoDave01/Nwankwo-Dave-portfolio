import { Globe, TrendingUp, Megaphone, Workflow, BarChart3, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: TrendingUp,
    title: "Web Performance Optimization",
    description: "Speed optimization, Core Web Vitals improvement, and technical audits for better rankings and conversions.",
  },
  {
    icon: Megaphone,
    title: "Paid Media Management",
    description: "Google Ads & Meta Ads campaigns with data-driven targeting, A/B testing, and ROI optimization.",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description: "Technical SEO, GA4 setup, Search Console optimization, and data-informed growth strategies.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "n8n workflows, CRM integrations, and automated lead nurturing systems that scale.",
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Modern websites built with React, WordPress, and Shopify — responsive, fast, and conversion-optimized.",
  },
  {
    icon: Globe,
    title: "AI Content Systems",
    description: "AI-powered content workflows for social media, email campaigns, and scalable content operations.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label">
            <span className="w-8 h-px bg-accent inline-block" />
            Services
          </p>
          <h2 className="section-title">What I Can Help You With</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            End-to-end solutions for businesses looking to grow their digital presence and optimize their operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-accent/30 card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mb-4">
                <service.icon size={20} />
              </div>
              <h3 className="text-base font-semibold font-display text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
