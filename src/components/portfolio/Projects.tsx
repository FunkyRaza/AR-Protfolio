import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Garage Management System",
    role: "UI/UX Designer & Frontend Developer",
    tools: ["Figma", "React Native", "Tailwind CSS", "Node.js", "Supabase"],
    description:
      "A digital platform designed to streamline garage operations including technician management, task tracking, and service workflow.",
  },
  {
    title: "Water Management System",
    role: "UI/UX Designer & Frontend Developer",
    tools: ["Figma", "React.js", "Tailwind CSS", "Node.js", "Supabase"],
    description:
      "A platform designed to manage water jar distribution and supply operations efficiently.",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container-narrow">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-4">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          Selected work<span className="text-highlight">.</span>
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:border-highlight/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-highlight transition-colors duration-200 mt-1 shrink-0"
                />
              </div>
              <p className="text-xs font-medium text-highlight mb-3">{p.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
