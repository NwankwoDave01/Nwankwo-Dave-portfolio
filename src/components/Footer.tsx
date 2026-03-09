import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-lg font-bold text-foreground">
              Nwankwo<span className="gradient-text"> Dave</span>
            </a>
            <p className="text-muted-foreground text-xs mt-1">
              Web Performance · Paid Media · Marketing Automation
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/nwankwo-dave-e6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg glass-card text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:ebukadave2009@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-lg glass-card text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} Nwankwo Ebuka Dave. All rights reserved.</p>
            <p>Designed for impact. Built for growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
