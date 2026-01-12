import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  image,
}: ProjectCardProps) => {
  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden card-hover">
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
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card text-foreground hover:scale-110 transition-transform"
              aria-label={`View ${title} source code`}
            >
              <Github size={20} />
            </a>
          )}
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
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
