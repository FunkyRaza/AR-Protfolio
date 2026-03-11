import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, ExternalLink, PenTool, Layout, Code2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";
import { projectsData } from "@/data/projectsData";
import { cn } from "@/lib/utils";
import DeviceMockup from "../ui/DeviceMockup";

interface ProjectsProps {
  isPreview?: boolean;
}

const categories = ["All", "Fullstack", "Frontend", "Mobile App", "UI/UX Design"];

const Projects = ({ isPreview = false }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .slice(0, isPreview ? 4 : undefined);

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden scroll-mt-24">
      {/* Background ambient light */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-narrow px-6">
        <SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                  Portfolio
                </span>
                <div className="h-[1px] w-16 bg-primary/40" />
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] text-foreground mb-8">
                Selected <br />
                <span className="text-gradient">Case Studies.</span>
              </h2>
              <p className="text-muted-foreground text-xl font-light max-w-xl leading-relaxed">
                A collection of projects where design meets functionality to solve complex problems.
              </p>
            </div>

            {!isPreview && (
              <div className="flex flex-wrap gap-3 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] transition-all border duration-300",
                      activeCategory === cat
                        ? "bg-foreground text-background border-foreground shadow-xl shadow-foreground/10 translate-y-[-2px]"
                        : "bg-secondary/40 text-muted-foreground border-transparent hover:border-primary/20 hover:text-foreground hover:bg-secondary/60"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </SectionReveal>

        <div className="flex flex-col gap-20 md:gap-24">
          {filteredProjects.map((p, i) => (
            <SectionReveal key={p.id} delay={0.1}>
              <div className={cn(
                "flex flex-col gap-12 lg:gap-20 items-center",
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              )}>

                {/* Visual Content - Mockup */}
                <div className="w-full lg:w-1/2 group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative"
                  >
                    <DeviceMockup
                      type={p.type === 'mobile' ? 'phone' : 'laptop'}
                      className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]"
                    >
                      <img
                        src={p.mainImage}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    </DeviceMockup>

                    {/* Floating Tech Stack Bubbles - Mobile Apps */}
                    {p.type === 'mobile' && (
                      <div className="absolute -right-8 top-1/4 flex flex-col gap-4">
                        {p.techStack.slice(0, 3).map((tech, idx) => (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.1) }}
                            key={tech}
                            className="bg-background/80 backdrop-blur-md border border-border/50 p-3 rounded-2xl shadow-lg"
                          >
                            <span className="text-[10px] font-bold uppercase tracking-wider">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-10">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                        {p.category}
                      </span>
                      <span className="text-muted-foreground/30 text-[10px] font-bold tracking-widest uppercase">
                        {p.year}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
                      {p.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-border/50">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">My Role</h4>
                      <p className="text-sm text-foreground/80 font-medium">{p.role}</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Key Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {p.tools.map(tool => (
                          <span key={tool} className="text-sm text-foreground/80 font-medium">{tool}{p.tools.indexOf(tool) !== p.tools.length - 1 ? " • " : ""}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Design Process</h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                      {p.designProcess.map((step, idx) => (
                        <div key={step} className="flex items-center gap-2 group/step">
                          <span className="text-[10px] font-black text-primary/30 group-hover/step:text-primary transition-colors">0{idx + 1}</span>
                          <span className="text-sm font-semibold text-foreground/70 uppercase tracking-tight">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-6">
                    <Link
                      to={`/project/${p.id}`}
                      className="group inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full hover:bg-primary transition-all duration-500 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl shadow-foreground/10"
                    >
                      View Case Study
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Link>

                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-[10px] font-bold uppercase tracking-widest">
                      Live Preview <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>

        {isPreview && (
          <div className="mt-24 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">View All Projects</span>
                <div className="w-12 h-[1px] bg-border group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
              </div>
            </Link>
          </div>
        )}

        {!isPreview && filteredProjects.length === 0 && (
          <div className="text-center py-40">
            <p className="text-muted-foreground font-light text-xl">Developing more masterpieces...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
