import SectionReveal from "./SectionReveal";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "UI/UX & Frontend Developer Intern",
    company: "Solution Square",
    period: "Aug 2025 — Mar 2026",
    description: "Orchestrated end-to-end design systems and high-performance frontend architectures. Specialized in bridging the critical gap between conceptual UI/UX and scalable technical implementation for enterprise-grade applications.",
    tags: ["Product Design", "React Architecture", "System Design", "Figma Prototyping"],
    isLatest: true,
  },
  {
    title: "Technology Intern in Sales",
    company: "Sales & Designing",
    period: "Jul 2024 — Dec 2024",
    description: "Synthesized sales intelligence with design-led strategy to optimize technical workflows. Focused on creating customer-centric digital solutions that drove engagement and streamlined commercial operations.",
    tags: ["Design Strategy", "Sales Force Tech", "CRM Architecture"],
    isLatest: false,
  },
  {
    title: "Sales Person",
    company: "Shoe Gallery Retailer",
    period: "Mar 2024 — May 2024",
    description: "Mastered high-frequency client management and operational efficiency in a dynamic retail environment. Developed a deep understanding of user psychology and effective communication strategies.",
    tags: ["User Psychology", "Relationship Management", "Operational Excellence"],
    isLatest: false,
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-background relative scroll-mt-32 overflow-hidden border-t border-border/50">
    {/* Decorative background elements adapted for light theme */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/2 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/2 blur-[100px] rounded-full pointer-events-none" />

    <div className="container-narrow relative z-10">
      <SectionReveal>
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-primary/40" />
            <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">
              The Professional Arc
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-8 text-foreground">
            Career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary italic font-light">Evolution.</span>
          </h2>
        </div>
      </SectionReveal>

      <div className="relative space-y-6">
        {experiences.map((exp, index) => (
          <SectionReveal key={index} delay={0.1 * index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Refined Card for Light Background */}
              <div className="relative bg-white border border-border/60 rounded-[2.5rem] p-8 md:p-14 overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-primary/[0.02]">
                
                {/* Subtle Accent Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-primary/[0.05] transition-all duration-700" />

                <div className="flex flex-col lg:flex-row lg:items-start gap-10 relative z-10">
                  {/* Icon Column */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-secondary border border-border/50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                      <Briefcase size={32} strokeWidth={1.5} />
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-border/60 to-transparent" />
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl md:text-4xl font-display font-black tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <p className="text-xl text-foreground/70 font-bold tracking-tight">
                            {exp.company}
                          </p>
                          <div className="w-1.5 h-1.5 rounded-full bg-border" />
                          <div className="flex items-center gap-2 text-primary font-black text-[11px] uppercase tracking-[0.2em] bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                            <Calendar size={13} className="shrink-0" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:text-primary group-hover:border-primary group-hover:bg-primary/5 transition-all cursor-pointer"
                      >
                        <ChevronRight size={20} />
                      </motion.div>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mb-10 group-hover:text-foreground/80 transition-colors">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] px-5 py-2.5 bg-secondary border border-border/50 rounded-full group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
