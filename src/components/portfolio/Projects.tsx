import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";
import { projectsData } from "@/data/projectsData";

interface ProjectsProps {
  isPreview?: boolean;
}

const Projects = ({ isPreview = false }: ProjectsProps) => {
  const displayProjects = isPreview ? projectsData.slice(0, 2) : projectsData;

  return (
    <section id="projects" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-12 bg-blue-600" />
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600">
                  Engineering Excellence
                </span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tight text-black leading-[0.9] mb-8">
                SELECTED <span className="text-blue-600 italic">SYSTEMS</span>
              </h2>
            </div>
            {isPreview && (
              <Link
                to="/projects"
                className="group flex items-center gap-3 text-black font-black text-lg tracking-tight hover:text-blue-600 transition-colors"
              >
                View Full Portfolio
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {displayProjects.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 0.15}>
              <Link to={`/project/${p.id}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="group relative bg-[#fdfdfd] border border-black/5 rounded-[3rem] p-12 h-full flex flex-col hover:border-blue-600/20 hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] transition-all duration-700"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-blue-600 font-bold text-xs tracking-[0.3em] uppercase">{p.year}</span>
                      <h3 className="text-3xl md:text-4xl font-black text-black tracking-tight group-hover:text-blue-600 transition-colors">{p.title}</h3>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Zap size={14} fill="currentColor" /> {p.role}
                  </p>

                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 flex-1">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-white border border-black/5 text-gray-400 group-hover:border-blue-600/20 group-hover:text-blue-600 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                    <h1 className="text-9xl font-black text-blue-600 select-none">{i + 1}</h1>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
