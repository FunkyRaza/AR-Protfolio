import SectionReveal from "./SectionReveal";
import { Mail, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="container-narrow">
      <SectionReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Let's work together<span className="text-highlight">.</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10">
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          <a
            href="mailto:razahmed1007@gmail.com"
            className="flex items-center gap-3 p-5 border border-border rounded-xl hover:border-highlight/30 transition-colors duration-200 group"
          >
            <Mail size={18} className="text-highlight" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground group-hover:text-highlight transition-colors">
                razahmed1007@gmail.com
              </p>
            </div>
          </a>
          <a
            href="tel:+919033786017"
            className="flex items-center gap-3 p-5 border border-border rounded-xl hover:border-highlight/30 transition-colors duration-200 group"
          >
            <Phone size={18} className="text-highlight" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground group-hover:text-highlight transition-colors">
                +91 9033786017
              </p>
            </div>
          </a>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Contact;
