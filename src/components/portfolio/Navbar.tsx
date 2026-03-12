import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Academic", href: "#education" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

const MagneticLink = ({ children, href, isActive, onClick, className }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        ref={ref}
        to={href.startsWith("#") ? `/${href}` : href}
        onClick={() => onClick(href)}
        className={cn(
          "relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300",
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-0 border border-primary/20"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 50], ["100%", "90%"]);
  const navY = useTransform(scrollY, [0, 50], [0, 20]);

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
      style={{ y: navY }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.div
        style={{ width: navWidth }}
        className="pointer-events-auto container-narrow px-6"
      >
        <nav className={cn(
          "flex items-center justify-between px-2 py-2 rounded-full transition-all duration-700",
          scrolled
            ? "glass-morphism shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 dark:border-white/5"
            : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick("#home")}
            className="group flex items-center gap-3 pl-4"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              className="w-10 h-10 text-black rounded-full flex items-center justify-center font-display font-black text-xl"
            >
              AR.
            </motion.div>
            <span className="font-display font-bold tracking-tighter text-2xl hidden sm:inline-block text-foreground">
              {/* Ahmed<span className="text-primary">.</span> */}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <MagneticLink
                key={link.href}
                href={link.href}
                isActive={getIsActive(link.href)}
                onClick={handleLinkClick}
              >
                {link.label}
              </MagneticLink>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/#contact"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }
                }}
                className="hidden lg:flex items-center gap-2 px-8 py-3 bg-foreground text-background hover:bg-primary hover:text-white rounded-full text-[10px] font-black tracking-widest transition-all duration-500 shadow-xl shadow-foreground/5 group"
              >
                HIRE ME
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 md:hidden pointer-events-auto"
          >
            <div className="glass-morphism rounded-[2.5rem] p-8 shadow-2xl border border-white/20 dark:border-white/10">
              <ul className="flex flex-col gap-4">
                {links.map((link, i) => {
                  const isActive = getIsActive(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.href.startsWith("#") ? `/${link.href}` : link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={cn(
                          "flex items-center justify-between py-4 px-8 rounded-2xl text-lg font-bold transition-all",
                          isActive ? "bg-primary text-white" : "text-foreground hover:bg-secondary"
                        )}
                      >
                        {link.label}
                        <ArrowRight size={18} className={cn("opacity-0 transition-all", isActive && "opacity-100 translate-x-2")} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-border/50"
              >
                <Link
                  to="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-[2rem] bg-foreground text-background font-black tracking-widest text-xs uppercase hover:bg-primary transition-colors"
                >
                  GET IN TOUCH <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
