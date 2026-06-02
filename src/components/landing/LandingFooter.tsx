import { Linkedin, Mail } from "lucide-react";
import { landingConfig } from "@/lib/landingConfig";

const LandingFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10 mt-16 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-14 pb-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-7">
            <p className="font-serif text-3xl md:text-4xl text-foreground leading-tight max-w-xl">
              Let's build something <em className="italic text-accent">worth shipping</em>.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:justify-end items-end">
            <a href="#quote" className="btn-hero">Start a project →</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-foreground/10 text-xs text-muted-foreground">
          <p>© {year} Nwankwo Ebuka Dave · Lagos, NG · Working worldwide</p>
          <div className="flex items-center gap-5">
            <a href={landingConfig.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Portfolio</a>
            <a href="https://www.linkedin.com/in/nwankwo-dave-e6" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <Linkedin size={13} /> LinkedIn
            </a>
            <a href={`mailto:${landingConfig.email}`} className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;