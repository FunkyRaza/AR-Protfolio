import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Design", href: "/design" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Sections to spy on when on home page
  const sectionIds = ["#about", "#skills", "#experience", "#contact"];
  const spyActiveId = useScrollSpy(sectionIds);

  // Determine if a link is active based on scroll or route
  const getIsActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && spyActiveId === href;
    }
    return pathname === href;
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicking a link
  const handleLinkClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#") && pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out",
        scrolled
          ? "top-6 px-4"
          : "top-0 px-0"
      )}
    >
      <div className={cn(
        "relative mx-auto flex items-center transition-all duration-700 ease-in-out",
        scrolled
          ? "max-w-5xl h-16 px-10 rounded-full bg-white/90 backdrop-blur-3xl border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          : "max-w-7xl h-24 px-12 bg-transparent border-transparent shadow-none"
      )}>
        {/* Logo - Left Side */}
        <div className="flex-1 flex justify-start">
          <Link
            to="/"
            onClick={() => handleLinkClick("#home")}
            className={cn(
              "font-bold tracking-tighter text-foreground group transition-all duration-500",
              scrolled ? "text-2xl" : "text-4xl"
            )}
          >
            AR<span className="text-highlight group-hover:animate-pulse">.</span>
          </Link>
        </div>

        {/* Desktop Links - Always Centered */}
        <div className="hidden md:flex flex-[3] justify-center items-center">
          <ul className={cn(
            "flex items-center gap-2 p-1.5 rounded-full transition-all duration-500",
            scrolled ? "bg-black/5 border border-black/5" : "bg-transparent border-transparent"
          )}>
            {links.map((link) => {
              const isActive = getIsActive(link.href);
              const toUrl = link.href.startsWith("#") ? `/${link.href}` : link.href;

              return (
                <li key={link.href}>
                  <Link
                    to={toUrl}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      "relative px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-full flex items-center justify-center",
                      isActive
                        ? (scrolled ? "text-white" : "text-highlight underline underline-offset-8 decoration-2")
                        : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && scrolled && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-black rounded-full shadow-md"
                        transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Action Button - Right Side */}
        <div className="flex-1 flex justify-end items-center">
          <div className="flex items-center gap-5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden lg:flex items-center gap-2 px-8 py-3 text-sm font-black rounded-full transition-all duration-500 transform active:scale-95 shadow-lg",
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                  : "bg-primary text-primary-foreground hover:scale-110"
              )}
            >
              Resume <Download size={18} />
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "md:hidden p-3 text-foreground active:scale-90 transition-all rounded-full",
                scrolled ? "bg-black/10" : "bg-white/10 backdrop-blur-sm"
              )}
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar (Subtle indicator) */}
        {scrolled && (
          <motion.div
            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[1.5px] bg-black/10 rounded-full overflow-hidden"
            style={{ width: "20%" }}
          >
            <motion.div
              className="h-full bg-blue-600"
              style={{ scaleX, transformOrigin: "left" }}
            />
          </motion.div>
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[90vw] max-w-xs p-4 rounded-[2.5rem] bg-background/90 backdrop-blur-3xl border border-white/20 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = getIsActive(link.href);
                const toUrl = link.href.startsWith("#") ? `/${link.href}` : link.href;

                return (
                  <li key={link.href}>
                    <Link
                      to={toUrl}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "flex items-center justify-center py-4 rounded-full text-lg font-bold transition-all",
                        isActive
                          ? "bg-black text-white shadow-lg"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2">
                <a
                  href="/resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-5 rounded-full bg-blue-600 text-white font-black shadow-lg uppercase tracking-widest text-xs"
                >
                  Get Resume <Download size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
