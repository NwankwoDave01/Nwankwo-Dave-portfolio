import { useState } from "react";
import ProjectDetailModal, { ProjectDetail } from "./ProjectDetailModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Lightbulb, Trophy, ArrowRight } from "lucide-react";

const projects: ProjectDetail[] = [
  {
    title: "Teamsource Website Optimization",
    description: "Full-scope website performance optimization including SEO, speed improvements, and paid media integration for a growing team.",
    tech: ["WordPress", "Google Ads", "Meta Ads", "GA4", "Google Search Console", "GTM", "n8n"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Web Performance & Paid Media Specialist",
    problem: "The company's website had slow load times, poor search visibility, and no structured lead generation system — resulting in missed growth opportunities.",
    solution: "Conducted a full technical audit, optimized site speed and on-page SEO, set up Google Analytics & Search Console, launched targeted Google and Meta ad campaigns, and built automated lead nurturing workflows with n8n.",
    result: "Improved website traffic by 35%, generated 50+ qualified leads through paid campaigns, and established a repeatable system for ongoing lead acquisition and nurturing.",
  },
  {
    title: "Paid Ads Lead Generation",
    description: "Strategic paid media campaigns across Google and Meta platforms designed to drive qualified leads and maximize ROAS.",
    tech: ["Google Ads", "Meta Ads", "GA4", "Google Tag Manager", "ClickFunnels", "HubSpot"],
    liveUrl: "#",
    githubUrl: "#",
    role: "Paid Media Specialist",
    problem: "The client was spending on ads without proper tracking, optimization, or landing page strategy — leading to high cost-per-lead and low conversion rates.",
    solution: "Rebuilt campaign structure with proper audience segmentation, conversion tracking via GTM, optimized landing pages, A/B tested ad creatives, and implemented CRM integration for lead follow-up.",
    result: "Reduced cost-per-lead by 40%, increased conversion rate on landing pages, and built a scalable paid acquisition funnel with clear attribution and ROI tracking.",
  },
  {
    title: "AI-Powered Instagram Content System",
    description: "An AI-driven content production system for Kavara Digital, streamlining Instagram content creation from ideation to publishing.",
    tech: ["AI/ML", "Meta Business Suite", "Canva", "Buffer", "Content Strategy", "Prompt Engineering"],
    liveUrl: "#",
    githubUrl: "#",
    role: "AI Content Systems Architect",
    problem: "Content production was manual, inconsistent, and slow — the team couldn't keep up with the volume and quality needed for multiple client accounts.",
    solution: "Designed AI-powered prompt workflows for generating captions, hooks, content angles, and campaign ideas. Built a systematized content pipeline from ideation to scheduling.",
    result: "Dramatically improved content production speed and consistency. The system now powers scalable content operations across multiple agency client accounts.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label">
            <span className="w-8 h-px bg-accent inline-block" />
            Case Studies
          </p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Real projects with measurable outcomes — from website optimization to AI-powered content systems.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => handleProjectClick(project)}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 card-hover cursor-pointer transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") handleProjectClick(project); }}
              aria-label={`View case study: ${project.title}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-accent font-medium mb-1">{project.role}</p>
                  <h3 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowRight size={20} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-1" />
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Quick preview of challenge/result */}
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="flex items-start gap-2.5">
                  <Target size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.problem}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Trophy size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.result}</p>
                </div>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((item) => (
                  <span key={item} className="skill-badge text-xs">{item}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="skill-badge text-xs">+{project.tech.length - 5}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default Projects;
