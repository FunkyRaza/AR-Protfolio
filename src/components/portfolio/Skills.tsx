import SectionReveal from "./SectionReveal";
import { Code2, Palette, PenTool, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface SkillGroupProps {
  title: string;
  skills: string[];
  delay: number;
  icon: any;
  highlight?: boolean;
}

const SkillGroup = ({ title, skills, delay, icon: Icon, highlight = false }: SkillGroupProps) => (
  <SectionReveal delay={delay}>
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-10 h-full rounded-[2.5rem] transition-all duration-700 ${highlight
        ? "bg-white dark:bg-card border-2 border-primary/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]"
        : "bg-white/40 dark:bg-card/40 backdrop-blur-xl border border-white/20 dark:border-white/5 hover:bg-white dark:hover:bg-card hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
        }`}>
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] ${highlight ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-secondary/80 text-primary group-hover:bg-primary group-hover:text-white"
          }`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="text-2xl font-display font-black tracking-tight text-foreground mb-8 flex items-center gap-3">
          {title}
          {highlight && <Sparkles size={18} className="text-primary animate-pulse" />}
        </h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + (i * 0.08), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 py-3 text-xs font-bold tracking-widest uppercase bg-secondary/50 text-foreground/80 rounded-full border border-transparent hover:border-primary/30 hover:bg-white dark:hover:bg-card hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  </SectionReveal>
);

const Skills = () => (
  <section id="skills" className="section-padding relative overflow-hidden bg-[#F9FAFB] dark:bg-background scroll-mt-32">
    {/* Background Decorative Elements */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] -z-10" />

    <div className="container-narrow">
      <SectionReveal>
        <div className="max-w-3xl mb-12">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Capabilities
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none mb-10">
            Design <span className="text-gradient">&</span> <br />
            Technology.
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            I craft high-fidelity digital products by weaving together strategic design thinking with advanced engineering principles.
          </p>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <SkillGroup
          title="Product Design"
          icon={PenTool}
          skills={["Figma", "Wireframing", "Prototyping", "Design Systems", "User Journeys"]}
          delay={0.1}
          highlight={true}
        />
        <SkillGroup
          title="Engineering"
          icon={Code2}
          skills={["React.js", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "App Design"]}
          delay={0.2}
        />
        <SkillGroup
          title="Strategy"
          icon={Palette}
          skills={["UX Research", "Typography", "Motion", "Brand Identity", "User Testing"]}
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

export default Skills;
