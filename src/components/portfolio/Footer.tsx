import { Github, Linkedin, ArrowUp, Mail, MapPin, Dribbble, Twitter as XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-background border-t border-border/50 pt-16 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container-narrow px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-8">
            <Link to="/" className="group inline-flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-display font-black text-xl transition-transform group-hover:scale-110">
                AR
              </div>
              <span className="font-display font-bold tracking-tight text-xl text-foreground">
                Ahmed<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Crafting high-end digital experiences where aesthetics meet absolute precision. Specialized in UI/UX Design & Frontend Development.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-10">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { label: "About", href: "/#about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/#experience" },
                { label: "Academic", href: "/#education" },
                { label: "Skills", href: "/#skills" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs text-muted-foreground font-medium tracking-wide">
            © {currentYear} AHMED RAZA. BUILT WITH PRECISION & VISION.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
