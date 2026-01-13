import { Code2, Palette, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that scales",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive interfaces with attention to detail",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and seamless user experiences",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="about" className="bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-accent font-medium mb-2">About Me</p>
          <h2 className="section-title">Passionate about building for the web</h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Text content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a front-end developer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. With expertise 
              in modern web technologies, I transform ideas into polished, 
              responsive websites.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in web development started with curiosity and has evolved 
              into a dedication for crafting pixel-perfect interfaces. I specialize 
              in React, TailwindCSS, and WordPress, with a growing interest in 
              web automation and AI integration.
            </p>

            {/* Quick skills preview */}
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "WordPress"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
