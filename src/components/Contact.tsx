import { useState } from "react";
import { Mail, Send, Linkedin, ArrowRight, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="section-label">
              <span className="w-8 h-px bg-accent inline-block" />
              Contact
            </p>
            <h2 className="section-title">Let's Build Something Together</h2>
            <p className="section-subtitle max-w-xl mx-auto mt-4">
              Looking for a specialist to optimize your web presence, manage paid campaigns, or build automation systems? Let's talk.
            </p>
          </div>

          <div className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Contact form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none text-sm"
                  placeholder="Tell me about your project or goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-3">Email</h3>
                <a
                  href="mailto:ebukadave2009@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Mail size={16} />
                  ebukadave2009@gmail.com
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-3">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/nwankwo-dave-e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Linkedin size={16} />
                  nwankwo-dave-e6
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-3">Location</h3>
                <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  Lagos, Nigeria · Open to Remote
                </p>
              </div>

              {/* Availability */}
              <div className="p-5 rounded-xl glass-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-emerald-400">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open to remote roles, freelance projects, and consulting engagements worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
