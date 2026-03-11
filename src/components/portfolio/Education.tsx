import SectionReveal from "./SectionReveal";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => (
  <section id="education" className="section-padding bg-secondary/10 relative scroll-mt-32">
    <div className="container-narrow">
      <SectionReveal>
        <div className="max-w-3xl mb-10">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Academic
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-none mb-6">
            Educational <br />
            <span className="text-gradient">Background.</span>
          </h2>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <motion.div
          whileHover={{ y: -8, scale: 1.005 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="premium-card p-10 md:p-12 group shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
              <GraduationCap size={28} />
            </div>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-foreground">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <span className="text-primary font-bold tracking-widest text-sm">2021 — 2024</span>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-medium text-foreground/80">C.B Patel Computer College</p>
                <p className="text-muted-foreground font-light text-base italic">Surat, Gujarat</p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-background border border-border shadow-sm">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">GPA</span>
                  <span className="text-lg font-display font-black text-foreground">6.73 / 10</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-background border border-border shadow-sm">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Status</span>
                  <span className="text-lg font-display font-black text-primary">Final Year</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionReveal>
    </div>
  </section>
);

export default Education;
