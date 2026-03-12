import SectionReveal from "./SectionReveal";
import { GraduationCap, Award, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "C.B Patel Computer College",
    location: "Surat, Gujarat",
    period: "2021 — 2024",
    result: "6.73 / 10",
    label: "GPA",
    subjects: ["Data Structures", "Web Development", "Database Management", "UI Design"],
  },
  {
    degree: "HSC Board Maharashtra",
    institution: "R.S Dubey Computer College",
    location: "Mumbai, Maharashtra",
    period: "2019 — 2021",
    result: "67%",
    label: "Percentage",
    subjects: ["Computer Science", "Mathematics", "Physics", "English"],
  },
  {
    degree: "SSC Board Gujarat",
    institution: "St Marks Higher Secondary School",
    location: "Surat, Gujarat",
    period: "2018 — 2019",
    result: "50%",
    label: "Percentage",
    subjects: ["Science", "Mathematics", "Social Studies", "Drawing"],
  },
];

const Education = () => (
  <section id="education" className="section-padding bg-secondary/5 relative scroll-mt-32 overflow-hidden">
    <div className="container-narrow relative z-10">
      <SectionReveal>
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 border border-primary/20"
          >
            Academic Foundation
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter leading-none mb-6">
            Educational <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50 italic font-light">Background.</span>
          </h2>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <SectionReveal key={index} delay={0.1 * index} className={index === 0 ? "lg:col-span-2" : ""}>
            <motion.div
              whileHover={{ y: -8 }}
              className="relative h-full"
            >
              {/* Backglow for the main BCA card */}
              {index === 0 && (
                <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              <div className="relative h-full bg-background border border-border rounded-[2rem] p-8 md:p-12 overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-bl-[100%] transition-all duration-500 group-hover:bg-primary/[0.08]" />

                <div className="flex flex-col md:flex-row md:items-start gap-10 relative z-10">
                  {/* Icon & Label */}
                  <div className="shrink-0 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-3">
                      <GraduationCap size={32} />
                    </div>
                    <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest hidden md:block">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-8 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-col gap-1">
                          <p className="text-lg font-bold text-foreground/70 tracking-tight">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm italic">
                            <MapPin size={14} />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-6 py-4 rounded-2xl bg-secondary/50 border border-border group-hover:border-primary/20 transition-all duration-500 text-center min-w-[140px]">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block mb-1">
                          {edu.label}
                        </span>
                        <span className="text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors">
                          {edu.result}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((sub) => (
                        <span key={sub} className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider px-3 py-1 bg-secondary rounded-lg group-hover:bg-primary/5 group-hover:text-primary/70 transition-colors">
                          {sub}
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

export default Education;
