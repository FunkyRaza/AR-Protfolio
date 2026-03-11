import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Academic", href: "#education" },
  { label: "Design", href: "/design" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const sectionIds = ["#home", "#skills", "#about", "#experience", "#education", "#contact"];
  const spyActiveId = useScrollSpy(sectionIds);

  const getIsActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && spyActiveId === href;
    }
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#") && pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="container-narrow px-6">
        <nav className={cn(
          "flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500",
          scrolled ? "glass-morphism shadow-lg" : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick("#home")}
            className="group flex items-center gap-2 pl-4"
          >
            <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-display font-black text-xl transition-transform group-hover:scale-110">
              AR
            </div>
            <span className="font-display font-bold tracking-tight text-xl hidden sm:inline-block">
              Ahmed<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = getIsActive(link.href);
              const toUrl = link.href.startsWith("#") ? `/${link.href}` : link.href;

              return (
                <Link
                  key={link.href}
                  to={toUrl}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:scale-105"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-secondary/80 rounded-full -z-0 border border-white/50 dark:border-white/5 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/40 group-hover:w-1/2 transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              onClick={() => handleLinkClick("#contact")}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-foreground text-background hover:bg-primary hover:text-white rounded-full text-xs font-bold transition-all duration-300 group"
            >
              HIRE ME
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden container-narrow px-6 mt-4"
          >
            <div className="glass-morphism rounded-[2rem] p-6 overflow-hidden">
              <ul className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive = getIsActive(link.href);
                  const toUrl = link.href.startsWith("#") ? `/${link.href}` : link.href;

                  return (
                    <li key={link.href}>
                      <Link
                        to={toUrl}
                        onClick={() => handleLinkClick(link.href)}
                        className={cn(
                          "block py-3 px-6 rounded-2xl text-lg font-semibold transition-all",
                          isActive ? "bg-primary text-white" : "text-foreground hover:bg-secondary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  to="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-foreground text-background font-bold"
                >
                  GET IN TOUCH <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
