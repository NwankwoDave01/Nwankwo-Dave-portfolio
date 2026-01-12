import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Twin Villa Dine",
    description:
      "A modern hospitality website featuring elegant design, seamless navigation, and responsive layouts for an upscale dining experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Lead Qualification AI Response System",
    description:
      "An AI-powered automation demo that streamlines lead qualification processes with intelligent response generation and workflow optimization.",
    tech: ["JavaScript", "AI/ML", "API Integration", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "FAQs Accordion",
    description:
      "An interactive JavaScript component featuring smooth animations, accessibility support, and clean design patterns for FAQ sections.",
    tech: ["JavaScript", "CSS Animations", "HTML", "Accessibility"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Kingfisher Inn",
    description:
      "A custom WordPress website for a hospitality client, featuring booking integration, responsive design, and optimized performance.",
    tech: ["WordPress", "PHP", "CSS", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects that showcase my skills in front-end 
            development, from interactive components to full websites.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-hero"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
