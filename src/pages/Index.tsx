import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/portfolio/Layout";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

import Design from "@/components/portfolio/Design";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Use requestAnimationFrame for smoother timing
      const scrollWithOffset = () => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      };

      // Slight delay to ensure DOM is ready
      const timer = setTimeout(scrollWithOffset, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <Layout>
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  );
};

export default Index;
