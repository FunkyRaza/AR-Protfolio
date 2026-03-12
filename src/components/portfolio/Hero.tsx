import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Dribbble, Twitter as XIcon, ArrowRight, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/FunkyRaza", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmedraza0007/", label: "Linkedin" },
  { icon: Dribbble, href: "https://dribbble.com/ARaza07", label: "Dribbble" },
  { icon: XIcon, href: "https://x.com/raza_uxui", label: "X (Twitter)" },
];

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Product Thinker",
  "Creative Coder"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full animate-float-slow" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/70">
              Available for new projects
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="relative mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-display font-black tracking-tighter leading-[0.8] text-foreground"
            >
              Ahmed <br />
              <span className="text-gradient">Raza.</span>
            </motion.h1>
            
            {/* Abstract Shape Decor */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -top-10 -right-20 w-32 h-32 border border-primary/20 rounded-[2rem] hidden lg:block"
            />
          </div>

          {/* Role Carousel */}
          <div className="h-12 mb-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl md:text-4xl font-display font-bold text-muted-foreground"
              >
                {roles[roleIndex]}<span className="text-primary">.</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Professional Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-16"
          >
            I architect <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-8">seamless digital ecosystems</span> where human-centric design meets robust engineering. Elevating brands through strategic visual storytelling.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-20"
          >
            <Link
              to="/projects"
              className="group relative flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-black tracking-widest text-xs overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 active:scale-95"
            >
              <span className="relative z-10">EXPLORE ARCHIVE</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            <a
              href="#contact"
              onClick={(e) => {
                const element = document.querySelector("#contact");
                if (element) {
                  e.preventDefault();
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className="group flex items-center gap-3 text-[10px] font-black tracking-widest text-foreground hover:text-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail size={18} />
              </div>
              STAY IN TOUCH
            </a>
          </motion.div>

          {/* Social Social */}
          <div className="flex gap-10">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">Scroll</span>
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

      {/* Side Metadata */}
      <div className="absolute left-12 bottom-12 hidden xl:block">
        <div className="flex items-center gap-4 rotate-[-90deg] origin-left translate-y-full">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-50">Portfolio Ref. 2026.03</span>
          <div className="w-8 h-[1px] bg-border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
