import { TrendingUp, Search, Megaphone, Workflow } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Improving website speed, Core Web Vitals, and user experience for better conversions.",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    description: "Technical SEO, on-page optimization, and search console management for organic growth.",
  },
  {
    icon: Megaphone,
    title: "Paid Media",
    description: "Google Ads & Meta Ads campaigns that drive qualified leads and measurable ROI.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "Building scalable workflows with n8n, CRMs, and AI-powered content systems.",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label">
            <span className="w-8 h-px bg-accent inline-block" />
            About
          </p>
          <h2 className="section-title">Driving Growth Through<br />Technical Excellence</h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Text content */}
          <div>
            <p className="text-base text-muted-foreground mb-5 leading-relaxed">
              I'm a web performance and marketing specialist who helps businesses 
              improve their online presence, attract more customers, and automate 
              their growth processes. With a strong foundation in front-end development
              and digital marketing, I bridge the gap between technical implementation 
              and business outcomes.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              My approach combines website optimization, paid media management, 
              SEO strategy, and intelligent automation — delivering systems that 
              don't just look good but actively drive revenue and efficiency.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "35%", label: "Traffic Increase" },
                { value: "50+", label: "Leads Generated" },
                { value: "75%", label: "Faster Response" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-2xl font-bold font-display gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
