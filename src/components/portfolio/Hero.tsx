import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Dribbble, Twitter as XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/FunkyRaza", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmedraza0007/", label: "Linkedin" },
  { icon: Dribbble, href: "https://dribbble.com/ARaza07", label: "Dribbble" },
  { icon: XIcon, href: "https://x.com/raza_uxui", label: "X (Twitter)" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-400/10 blur-[100px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.4]" />
      </div>

      <div className="container-narrow w-full section-padding relative">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Available for projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-[0.85] mb-8">
              <span className="inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default">
                Ahmed
              </span>
              <br />
              <span className="text-gradient">
                Raza.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid md:grid-cols-[1fr_auto] gap-12 items-end w-full"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
              Crafting <span className="text-foreground font-medium">high-performance digital experiences</span> at the intersection of design and code. Based in India, working globally.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 border border-border"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-bold rounded-full overflow-hidden transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">SELECTED WORK</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 p-4 text-sm font-bold bg-transparent border-b-2 border-foreground/20 hover:border-primary transition-all duration-300 group"
            >
              GET IN TOUCH
              <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4"
        >
          <span className="[writing-mode:vertical-lr] text-xs font-bold tracking-widest text-muted-foreground uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-0.5 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
