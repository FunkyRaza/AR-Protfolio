import SectionReveal from "./SectionReveal";

interface SkillGroupProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillGroup = ({ title, skills, delay }: SkillGroupProps) => (
  <SectionReveal delay={delay}>
    <div>
      <h3 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-accent transition-colors duration-200 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </SectionReveal>
);

const Skills = () => (
  <section id="skills" className="section-padding bg-card">
    <div className="container-narrow">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          What I work with<span className="text-highlight">.</span>
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-10">
        <SkillGroup
          title="Design"
          skills={["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"]}
          delay={0.1}
        />
        <SkillGroup
          title="Frontend"
          skills={["HTML", "CSS", "JavaScript", "React.js", "React Native", "Tailwind CSS"]}
          delay={0.2}
        />
        <SkillGroup
          title="Tools"
          skills={["Figma", "FigJam", "VS Code", "Git", "GitHub", "Canva"]}
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

export default Skills;
