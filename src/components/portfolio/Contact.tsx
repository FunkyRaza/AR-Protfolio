import SectionReveal from "./SectionReveal";
import { Mail, Linkedin, Github, MessageSquare, ArrowUpRight, Dribbble, Twitter as XIcon, MapPin, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "razahmed1007@gmail.com",
    href: "mailto:razahmed1007@gmail.com",
    color: "bg-blue-500",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "Ahmed Raza",
    href: "https://www.linkedin.com/in/ahmedraza0007/",
    color: "bg-[#0A66C2]",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "FunkyRaza",
    href: "https://github.com/FunkyRaza",
    color: "bg-[#181717]",
  },
  {
    icon: <XIcon size={20} />,
    label: "X (Twitter)",
    value: "@raza_uxui",
    href: "https://x.com/raza_uxui",
    color: "bg-black",
  },
  {
    icon: <Dribbble size={20} />,
    label: "Dribbble",
    value: "ARaza07",
    href: "https://dribbble.com/ARaza07",
    color: "bg-[#EA4C89]",
  }
];

const Contact = () => (
  <section id="contact" className="section-padding bg-background relative overflow-hidden scroll-mt-32 border-t border-border/30">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[150px] -z-10" />

    <div className="container-narrow px-6">
      <SectionReveal>
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">
              Connection Hub
            </span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-12 text-foreground">
            Let's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary italic font-light">Collaborate.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Currently available for new opportunities and high-impact design collaborations. Reach out to start something great.
          </p>
        </div>
      </SectionReveal>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left: Contact List */}
        <div className="lg:col-span-3 space-y-6">
          <SectionReveal delay={0.2}>
            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? "_self" : "_blank"}
                  rel={link.href.startsWith('mailto:') ? "" : "noopener noreferrer"}
                  onClick={(e) => {
                    if (link.href.startsWith('mailto:')) {
                      e.preventDefault();
                      window.location.href = link.href;
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 12 }}
                  className="flex items-center justify-between p-6 rounded-[2rem] bg-secondary/30 hover:bg-white border border-transparent hover:border-primary/20 transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${link.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{link.label}</p>
                      <p className="text-lg font-bold text-foreground tracking-tight">{link.value}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.a>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Right: Resume & Location */}
        <div className="lg:col-span-2 space-y-8">
          {/* Resume Download Card */}
          <SectionReveal delay={0.3}>
            <div className="p-10 rounded-[2.5rem] bg-foreground text-background relative overflow-hidden group shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                  <Download size={28} className="text-primary" />
                </div>
                <h3 className="text-3xl font-display font-black tracking-tight mb-4">Professional <br />Portfolio.</h3>
                <p className="text-white/60 font-light mb-10 leading-relaxed">Download my latest resume for a detailed view of my professional journey.</p>
                <motion.a
                  href="/AhmedRza-Resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-primary text-white font-black tracking-widest text-[10px] uppercase hover:bg-white hover:text-foreground transition-all shadow-xl"
                >
                  DOWNLOAD CV <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </div>
          </SectionReveal>

          {/* Location Box - Interactive */}
          <SectionReveal delay={0.4}>
            <motion.a
              href="https://www.google.com/maps/place/Surat,+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="block p-10 rounded-[2.5rem] bg-white border border-border/60 hover:border-primary/30 transition-all duration-500 group shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} />
                </div>
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">Location</h4>
              <p className="text-2xl font-display font-black text-foreground">Based in Surat,</p>
              <p className="text-xl font-display font-bold text-foreground/60 italic">Gujarat, India</p>
            </motion.a>
          </SectionReveal>
        </div>
      </div>

    </div>
  </section>
);

export default Contact;
