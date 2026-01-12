import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold">
              Dave<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Building digital experiences that matter
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Dave Nwankwo. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
