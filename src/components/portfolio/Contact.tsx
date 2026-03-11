import SectionReveal from "./SectionReveal";
import { Mail, Linkedin, Github, MessageSquare, ArrowUpRight, Dribbble, Twitter as XIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "razahmed1007@gmail.com",
    href: "mailto:razahmed1007@gmail.com",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "Ahmed Raza",
    href: "https://linkedin.com/in/ahmedraza",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "G-AhmedRaza",
    href: "https://github.com/G-AhmedRaza",
  },
  {
    icon: <XIcon size={20} />,
    label: "X (Twitter)",
    value: "@raza_uxui",
    href: "https://x.com/raza_uxui",
  },
  {
    icon: <Dribbble size={20} />,
    label: "Dribbble",
    value: "ARaza07",
    href: "https://dribbble.com/ARaza07",
  }
];

const Contact = () => (
  <section id="contact" className="section-padding bg-background relative overflow-hidden scroll-mt-32">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] -z-10" />

    <div className="container-narrow px-6">
      <SectionReveal>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
              Contact
            </span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none mb-10 text-foreground">
            Let's build <br />
            <span className="text-gradient">something great.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Currently available for new opportunities and design collaborations. I'm always open to discussing high-impact projects.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <motion.div
          whileHover={{ y: -8, scale: 1.005 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          {/* Main Unified Contact Card */}
          <div className="p-8 md:p-12 rounded-[3.5rem] bg-white/40 dark:bg-card/40 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground mb-4">
                  Connection Hub
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-10">
                  Choose your preferred way to reach out. I'm active across these platforms and usually respond within 24 hours.
                </p>

                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 hover:bg-white dark:hover:bg-card/60 transition-all border border-transparent hover:border-primary/20 group/link"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-background flex items-center justify-center text-primary shadow-sm group-hover/link:bg-primary group-hover/link:text-white transition-all">
                          {link.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{link.label}</p>
                          <p className="text-sm font-bold text-foreground">{link.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight size={18} className="text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="aspect-square rounded-[3rem] bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-4 border-dashed border-primary/20 rounded-full flex items-center justify-center font-display font-black text-6xl text-primary/10 select-none"
                  >
                    AR
                  </motion.div>
                  <div className="absolute flex flex-col items-center text-center p-12">
                    <MapPin size={40} className="text-primary mb-6" />
                    <p className="text-2xl font-display font-bold text-foreground mb-2">Based in Surat</p>
                    <p className="text-muted-foreground font-light text-sm italic">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionReveal>

      <SectionReveal delay={0.4}>
        <motion.div
          whileHover={{ y: -8, scale: 1.005 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 p-10 md:p-14 rounded-[3.5rem] bg-foreground text-background relative overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-500"
        >
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12 text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-4">
                Have a project idea?
              </h3>
              <p className="text-background/70 font-light text-lg">
                Let's grab a digital coffee and talk about it.
              </p>
            </div>
            <motion.a
              href="mailto:razahmed1007@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-background text-foreground rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-xl"
            >
              GET IN TOUCH <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </SectionReveal>
    </div>
  </section>
);

export default Contact;
