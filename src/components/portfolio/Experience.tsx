import SectionReveal from "./SectionReveal";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => (
  <section id="experience" className="section-padding bg-background relative scroll-mt-32">
    <div className="container-narrow">
      <SectionReveal>
        <div className="max-w-3xl mb-10">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-none mb-6">
            Professional <br />
            <span className="text-gradient">Journey.</span>
          </h2>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <motion.div
          whileHover={{ y: -8, scale: 1.005 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="premium-card p-10 md:p-12 relative overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-colors" />

          <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
              <Briefcase size={28} />
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-foreground">
                    UI/UX Designer & Frontend Developer
                  </h3>
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                    Present
                  </span>
                </div>
                <p className="text-lg text-primary font-medium tracking-tight">Solution Squares</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-4xl">
                Spearheading the UI/UX design process in Figma, from conceptual wireframes to high-fidelity prototypes. I collaborate closely with engineering teams to bridge the gap between design vision and technical implementation across multiple enterprise-scale projects.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Garage Management", "Water Management", "Well Academy", "Holy Grail Portal"].map((item) => (
                  <span key={item} className="text-xs font-bold text-foreground/40 uppercase tracking-widest px-3 py-1 bg-secondary rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </SectionReveal>
    </div>
  </section>
);

export default Experience;
