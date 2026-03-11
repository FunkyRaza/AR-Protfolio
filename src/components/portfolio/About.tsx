import SectionReveal from "./SectionReveal";
import { MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section-padding bg-background relative overflow-hidden scroll-mt-32">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
        <SectionReveal>
          <div className="sticky top-32">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Story
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-none mb-6">
              Design <br />
              <span className="text-gradient">Philosophy.</span>
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              Surat, Gujarat, India
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-secondary/50 border border-border/50">
              <Sparkles className="text-primary mb-6" size={24} />
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground mb-6">
                I'm Ahmed Raza — a designer & developer passionate about crafting <span className="font-medium">intuitive human interfaces</span>.
              </p>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                <p>
                  Currently in my BCA final year, I blend aesthetic sensibility with technical rigor to build digital products that feel as good as they look.
                </p>
                <p>
                  I believe that great design isn't just about how it looks, but about how it <span className="text-foreground font-medium italic">solves problems</span> and creates emotional resonance with the user.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                className="p-6 rounded-2xl border border-border bg-card transition-colors duration-300 group/card"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 group-hover/card:scale-105 transition-transform origin-left">Design</h4>
                <p className="text-xs text-muted-foreground">Figma, UX Research, Motion Design, Prototyping</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                className="p-6 rounded-2xl border border-border bg-card transition-colors duration-300 group/card"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 group-hover/card:scale-105 transition-transform origin-left">Code</h4>
                <p className="text-xs text-muted-foreground">React, TypeScript, Tailwind, Framer Motion</p>
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default About;
