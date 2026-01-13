import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Target, Lightbulb, Wrench, Trophy } from "lucide-react";

export interface ProjectDetail {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  problem: string;
  solution: string;
  result: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailModal = ({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Problem Statement */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Target size={18} />
              <h3 className="font-semibold text-foreground">Problem Statement</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed pl-6">
              {project.problem}
            </p>
          </div>

          {/* Solution Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Lightbulb size={18} />
              <h3 className="font-semibold text-foreground">Solution Approach</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed pl-6">
              {project.solution}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Wrench size={18} />
              <h3 className="font-semibold text-foreground">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Result/Outcome */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Trophy size={18} />
              <h3 className="font-semibold text-foreground">Result & Outcome</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed pl-6">
              {project.result}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                <ExternalLink size={16} />
                View Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
              >
                <Github size={16} />
                View Source Code
              </a>
            )}
            {(!project.liveUrl || project.liveUrl === "#") && (!project.githubUrl || project.githubUrl === "#") && (
              <p className="text-muted-foreground text-sm italic">
                Links coming soon...
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
