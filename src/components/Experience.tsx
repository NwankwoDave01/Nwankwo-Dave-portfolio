import { Briefcase, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    company: "Teamsource",
    role: "Web Performance & Paid Media Specialist",
    period: "Recent",
    highlights: [
      "Improved website traffic by 35% through SEO and website optimization",
      "Generated 50+ qualified leads through targeted Google & Meta ad campaigns",
      "Enhanced website speed, usability, and search visibility across all pages",
      "Implemented marketing automation workflows using n8n for lead nurturing",
    ],
    tools: ["WordPress", "Google Ads", "Meta Ads", "GA4", "Google Search Console", "n8n"],
  },
  {
    company: "Kavara Digital",
    role: "AI Content Systems & Digital Marketing",
    period: "Recent",
    highlights: [
      "Built AI-assisted content systems for Instagram and digital campaigns",
      "Created prompt workflows for captions, hooks, content angles, and campaign ideas",
      "Improved speed and consistency of content production across channels",
      "Supported scalable AI-powered content operations for agency clients",
    ],
    tools: ["AI/ML", "Meta Business Suite", "Canva", "Buffer", "Content Strategy"],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="relative" ref={ref}>
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label">
            <span className="w-8 h-px bg-accent inline-block" />
            Experience
          </p>
          <h2 className="section-title">Where I've Made Impact</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Real results from real projects — optimizing performance, driving leads, and building systems that scale.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-1.5">
                      {exp.company}
                      <ArrowUpRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-accent font-medium">{exp.role}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{exp.period}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-5">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
