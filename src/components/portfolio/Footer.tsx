import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6 md:px-12 lg:px-24">
    <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ahmed Raza. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/ahmedraza0007/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/FunkyRaza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
