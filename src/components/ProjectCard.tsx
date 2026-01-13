import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  image,
  onClick,
}: ProjectCardProps) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <article
      className="group bg-card rounded-xl border border-border overflow-hidden card-hover cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`View details for ${title} project`}
    >
      {/* Project image/placeholder */}
      <div className="aspect-video bg-secondary relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-accent/20">
            <Folder size={64} />
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <span className="text-primary-foreground font-medium text-sm bg-accent px-4 py-2 rounded-full">
            Click for details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground"
            >
              {item}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground">
              +{tech.length - 3}
            </span>
          )}
        </div>

        {/* Quick links */}
        <div className="flex gap-3">
          {liveUrl && liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`View ${title} source code`}
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
