import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-lg font-bold text-foreground">
            Nwankwo<span className="gradient-text"> Dave</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link animated-underline">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-hero text-xs px-5 py-2.5">
              Let's Talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link py-2"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-hero text-xs text-center mt-2">
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
