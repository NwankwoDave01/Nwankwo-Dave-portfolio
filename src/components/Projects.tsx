import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal, { ProjectDetail } from "./ProjectDetailModal";

const projects: ProjectDetail[] = [
  {
    title: "Twin Villa Dine",
    description:
      "A modern hospitality website featuring elegant design, seamless navigation, and responsive layouts for an upscale dining experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    problem:
      "The client needed a sophisticated online presence that would reflect the upscale nature of their dining establishment while providing an intuitive user experience for reservations and menu browsing.",
    solution:
      "Developed a visually stunning, mobile-first website with smooth animations, an interactive menu section, and a streamlined reservation system. Focused on fast load times and accessibility.",
    result:
      "Delivered a fully responsive website that increased online reservations by 40% and received positive feedback from customers for its ease of use and elegant design.",
  },
  {
    title: "Lead Qualification AI Response System",
    description:
      "An AI-powered automation demo that streamlines lead qualification processes with intelligent response generation and workflow optimization.",
    tech: ["JavaScript", "AI/ML", "API Integration", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
    problem:
      "Sales teams were spending excessive time manually qualifying leads and crafting personalized responses, leading to slower response times and missed opportunities.",
    solution:
      "Built an intelligent automation system that analyzes incoming leads, scores them based on predefined criteria, and generates personalized responses using AI. Integrated with existing CRM workflows.",
    result:
      "Reduced lead response time by 75% and improved lead-to-customer conversion rates. The system now handles initial qualification for hundreds of leads daily.",
  },
  {
    title: "FAQs Accordion",
    description:
      "An interactive JavaScript component featuring smooth animations, accessibility support, and clean design patterns for FAQ sections.",
    tech: ["JavaScript", "CSS Animations", "HTML", "Accessibility"],
    liveUrl: "#",
    githubUrl: "#",
    problem:
      "Many websites have cluttered FAQ sections that are difficult to navigate, especially on mobile devices, and often lack proper accessibility features.",
    solution:
      "Created a reusable, lightweight accordion component with smooth expand/collapse animations, keyboard navigation support, and ARIA attributes for screen reader compatibility.",
    result:
      "The component is now used across multiple projects, improving user engagement with FAQ content and receiving excellent accessibility audit scores.",
  },
  {
    title: "Kingfisher Inn",
    description:
      "A custom WordPress website for a hospitality client, featuring booking integration, responsive design, and optimized performance.",
    tech: ["WordPress", "PHP", "CSS", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
    problem:
      "The inn's previous website was outdated, slow, and lacked mobile responsiveness. Guests couldn't easily book rooms or find essential information.",
    solution:
      "Designed and developed a custom WordPress theme with integrated booking functionality, optimized images, and a clean content structure focused on driving conversions.",
    result:
      "Achieved a 60% improvement in page load speed, significantly boosted mobile traffic engagement, and increased direct bookings through the website.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

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
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProjectCard
                {...project}
                onClick={() => handleProjectClick(project)}
              />
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default Projects;
