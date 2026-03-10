import SectionReveal from "./SectionReveal";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-4">Education</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          Academic background<span className="text-highlight">.</span>
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="border border-border rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-highlight" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-sm text-highlight font-medium mb-1">C.B Patel Computer College</p>
              <p className="text-sm text-muted-foreground">
                Final Year (Semester 6) · CGPA: 6.73
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Education;
