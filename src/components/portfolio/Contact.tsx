import SectionReveal from "./SectionReveal";
import { Mail, Phone, Linkedin, Github, MessageSquare, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "razahmed1007@gmail.com",
    href: "mailto:razahmed1007@gmail.com",
    color: "bg-blue-500"
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "+91 9033786017",
    href: "tel:+919033786017",
    color: "bg-green-500"
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "Ahmed Raza",
    href: "https://linkedin.com/in/ahmedraza",
    color: "bg-blue-700"
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "G-AhmedRaza",
    href: "https://github.com/G-AhmedRaza",
    color: "bg-gray-900"
  }
];

const Contact = () => (
  <section id="contact" className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <SectionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-blue-600" />
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600">
                Let's Connect
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight text-black leading-[0.9] mb-8 uppercase italic">
              START A <span className="text-blue-600">CONVERSATION</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl">
              Ready to bring your digital vision to life? I'm currently available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactLinks.map((link, index) => (
          <SectionReveal key={link.label} delay={index * 0.1}>
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              className="group relative flex flex-col p-8 rounded-[2rem] bg-[#fafafa] border border-black/5 hover:border-blue-600/20 hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.1)] transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${link.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{link.label}</p>
              <p className="text-lg font-black text-black tracking-tight truncate group-hover:text-blue-600 transition-colors uppercase italic">
                {link.value}
              </p>

              <div className="absolute bottom-8 right-8 text-black/5 group-hover:text-blue-600/10 transition-colors">
                <MessageSquare size={48} />
              </div>
            </motion.a>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
