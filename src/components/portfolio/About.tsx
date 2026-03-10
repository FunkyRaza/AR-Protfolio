import SectionReveal from "./SectionReveal";
import { MapPin } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding">
    <div className="container-narrow">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          A little about me<span className="text-highlight">.</span>
        </h2>
      </SectionReveal>
      <SectionReveal delay={0.15}>
        <div className="max-w-2xl space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            I'm Ahmed Raza — a BCA final year student passionate about crafting beautiful, user-centered digital experiences. I blend UI/UX design thinking with frontend engineering to build products that are both delightful and functional.
          </p>
          <p>
            From wireframes in Figma to production-ready code in React, I enjoy the full spectrum of product creation. I believe great design is invisible — it simply works.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
            <MapPin size={14} className="text-highlight" />
            Surat, Gujarat, India
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default About;
