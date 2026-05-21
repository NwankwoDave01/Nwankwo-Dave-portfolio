import { Linkedin, Mail } from "lucide-react";
import { landingConfig } from "@/lib/landingConfig";

const LandingFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-8 pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {year} Nwankwo Ebuka Dave. Building modern digital growth.</p>
        <div className="flex items-center gap-3">
          <a href={landingConfig.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Portfolio</a>
          <a href="https://www.linkedin.com/in/nwankwo-dave-e6" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={14} />
          </a>
          <a href={`mailto:${landingConfig.email}`} className="hover:text-accent transition-colors" aria-label="Email">
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;