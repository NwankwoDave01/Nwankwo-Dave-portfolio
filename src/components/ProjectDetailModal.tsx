import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Target, Lightbulb, Wrench, Trophy, User } from "lucide-react";

export interface ProjectDetail {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  role?: string;
  problem: string;
  solution: string;
  result: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailModal = ({ project, open, onOpenChange }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground tracking-tight">
            {project.title}
          </DialogTitle>
          {project.role && (
            <div className="flex items-center gap-2 text-accent text-sm font-medium">
              <User size={14} />
              {project.role}
            </div>
          )}
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {[
            { icon: Target, label: "Challenge", content: project.problem },
            { icon: Lightbulb, label: "Approach", content: project.solution },
            { icon: Trophy, label: "Outcome", content: project.result },
          ].map(({ icon: Icon, label, content }) => (
            <div key={label} className="space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Icon size={16} />
                <h3 className="font-semibold text-foreground text-sm">{label}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                {content}
              </p>
            </div>
          ))}

          {/* Technologies Used */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Wrench size={16} />
              <h3 className="font-semibold text-foreground text-sm">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              {project.tech.map((item) => (
                <span key={item} className="skill-badge text-xs">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
