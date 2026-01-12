import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Layers,
  Zap 
} from "lucide-react";

const skills = [
  {
    category: "Core Technologies",
    icon: Code,
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    items: ["React", "TailwindCSS", "Bootstrap", "jQuery"],
  },
  {
    category: "CMS & Platforms",
    icon: Globe,
    items: ["WordPress", "Elementor", "Shopify", "Webflow"],
  },
  {
    category: "Design & UI",
    icon: Palette,
    items: ["Figma", "Responsive Design", "CSS Animations", "UI/UX"],
  },
  {
    category: "Tools & Workflow",
    icon: Database,
    items: ["Git & GitHub", "VS Code", "npm/yarn", "REST APIs"],
  },
  {
    category: "Automation",
    icon: Zap,
    items: ["n8n", "Make (Integromat)", "API Automation", "Web Scraping"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">What I Do</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience 
            in front-end development and web automation.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-card p-6 rounded-xl border border-border card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <skill.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {skill.category}
                </h3>
              </div>

              {/* Skill items */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="skill-badge text-xs">
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
