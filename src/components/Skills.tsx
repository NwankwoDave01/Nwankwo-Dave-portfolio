import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Web & Development",
    items: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Shopify"],
  },
  {
    category: "Paid Media",
    items: ["Google Ads", "Meta Ads", "ClickFunnels", "Systeme.io"],
  },
  {
    category: "Analytics & SEO",
    items: ["GA4", "Google Search Console", "Google Tag Manager"],
  },
  {
    category: "CRM & Automation",
    items: ["HubSpot", "Zoho CRM", "Salesforce", "n8n"],
  },
  {
    category: "Content & Social",
    items: ["Meta Business Suite", "Buffer", "Hootsuite", "Canva"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label">
            <span className="w-8 h-px bg-accent inline-block" />
            Toolkit
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            A comprehensive stack spanning web development, paid media, analytics, and automation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {skillCategories.map((group, index) => (
            <div
              key={group.category}
              className={`p-6 rounded-xl bg-card border border-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <h3 className="font-display font-semibold text-sm text-accent mb-4 tracking-wide uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
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

export default Skills;
