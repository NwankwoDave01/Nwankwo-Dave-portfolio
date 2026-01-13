import { Code, Palette, Globe, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Code,
    title: "Front-End Website Development",
    description: "Building responsive, performant websites using modern technologies like React, TypeScript, and TailwindCSS.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect, accessible interfaces with smooth animations and intuitive interactions.",
  },
  {
    icon: Globe,
    title: "WordPress Customization",
    description: "Custom themes, plugins, and tailored solutions to extend WordPress functionality for your specific needs.",
  },
  {
    icon: Cpu,
    title: "Front-End Interfaces for Automation Systems",
    description: "Creating user-friendly dashboards and control panels for AI and automation workflows.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="services" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            What I Can Help You With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
