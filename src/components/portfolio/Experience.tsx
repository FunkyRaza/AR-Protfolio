import SectionReveal from "./SectionReveal";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="section-padding bg-card">
    <div className="container-narrow">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-4">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          Where I've worked<span className="text-highlight">.</span>
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="border border-border rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <Briefcase size={18} className="text-highlight" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                UI/UX Designer & Frontend Developer
              </h3>
              <p className="text-sm text-highlight font-medium mb-4">Solution Squares</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing UI in Figma, creating wireframes and prototypes, conducting user research, and contributing to frontend development. Worked on Garage Management System, Water Management System, Well Academy App design, and Holy Grail Portal wireframes.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Experience;
