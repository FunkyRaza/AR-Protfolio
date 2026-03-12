import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, MoveRight } from "lucide-react";
import { useRef } from "react";
import Layout from "@/components/portfolio/Layout";
import { projectsData } from "@/data/projectsData";
import DeviceMockup from "@/components/ui/DeviceMockup";

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const containerRef = useRef(null);

    if (!project) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
                    <h1 className="text-4xl font-display font-black mb-4 text-foreground">Project Not Found</h1>
                    <Link to="/projects" className="px-8 py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all">
                        Back to Archive
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div ref={containerRef} className="bg-background min-h-screen selection:bg-primary/20 selection:text-primary pb-20">
                {/* Architectural Vertical Back Button */}
                <div className="fixed left-12 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
                    <Link
                        to="/projects"
                        className="group flex flex-col items-center gap-8 text-foreground/30 hover:text-primary transition-colors duration-500"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
                            Back to Projects
                        </span>
                        <div className="relative w-[1.5px] h-24 bg-foreground/10 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-primary origin-top"
                                initial={{ scaleY: 0 }}
                                whileHover={{ scaleY: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </Link>
                </div>

                {/* Mobile/Small Screen Back Button */}
                <div className="fixed top-8 left-8 z-50 xl:hidden">
                    <Link
                        to="/projects"
                        className="p-4 bg-background/80 backdrop-blur-md border border-border rounded-full text-foreground hover:bg-secondary transition-all shadow-xl"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                </div>

                {/* Hero Header */}
                <section className="pt-32 pb-20">
                    <div className="container-narrow px-6">
                        <div className="max-w-[90rem]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-3 mb-10"
                            >
                                <div className="h-[1px] w-12 bg-primary/30" />
                                <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                                    {project.category} — {project.year}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-6xl md:text-8xl lg:text-[9.5rem] font-display font-black tracking-tighter leading-[0.82] lg:leading-[0.8] mb-12 text-foreground"
                            >
                                {project.title.split(' ').map((word, i) => (
                                    <span key={i} className="inline-block mr-4">{word}</span>
                                ))}
                                <span className="text-primary">.</span>
                            </motion.h1>

                            {/* Float Metadata */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 border-y border-border/30"
                            >
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground block mb-4">Role</span>
                                    <span className="text-lg font-display font-bold text-foreground">{project.role}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground block mb-4">Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.slice(0, 3).map(t => (
                                            <span key={t} className="text-xs font-medium text-foreground/70">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground block mb-4">Sector</span>
                                    <span className="text-lg font-display font-bold text-foreground">Tech Ecosystem</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground block mb-4">Timeline</span>
                                    <span className="text-lg font-display font-bold text-foreground">1 Months</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Main Immersive Visual */}
                <section className="px-6 mb-20">
                    <SectionReveal>
                        <div className="max-w-6xl mx-auto">
                            <DeviceMockup
                                type={project.type === 'mobile' ? 'phone' : 'laptop'}
                                className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]"
                            >
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </DeviceMockup>
                        </div>
                    </SectionReveal>
                </section>

                {!project.caseStudy ? (
                    /* Default View for project without detailed case study */
                    <>
                        <section className="container-narrow px-6 mb-20">
                            <div className="grid lg:grid-cols-12 gap-20 items-start">
                                <div className="lg:col-span-8">
                                    <SectionReveal>
                                        <div className="space-y-16">
                                            <div>
                                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">Project Brief</span>
                                                <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div>
                                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">Deep Dive</span>
                                                <div className="prose prose-lg dark:prose-invert max-w-none font-light text-muted-foreground leading-relaxed space-y-8">
                                                    {project.fullOverview.split('\n\n').map((para, i) => (
                                                        <p key={i} className={i === 0 ? "text-2xl text-foreground font-normal leading-snug" : ""}>
                                                            {para}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </SectionReveal>
                                </div>

                                <div className="lg:col-span-4 sticky top-40">
                                    <SectionReveal delay={0.2}>
                                        <div className="p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50 backdrop-blur-sm">
                                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8 block">Project Goals</span>
                                            <ul className="space-y-6">
                                                {[
                                                    { title: "Efficiency", desc: "Optimizing user flows for maximum speed." },
                                                    { title: "Aesthetics", desc: "Creating a visually stunning experience." },
                                                    { title: "Impact", desc: "Solving real-world problems effectively." }
                                                ].map((goal, i) => (
                                                    <li key={i} className="group">
                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                                                            <div>
                                                                <span className="text-sm font-bold text-foreground block mb-1 group-hover:text-primary transition-colors">{goal.title}</span>
                                                                <span className="text-xs text-muted-foreground leading-relaxed">{goal.desc}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </SectionReveal>
                                </div>
                            </div>
                        </section>

                        <section className="bg-secondary/20 py-20">
                            <div className="container-narrow px-6">
                                <SectionReveal>
                                    <div className="max-w-3xl mb-16">
                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">Visual Journey</span>
                                        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-none text-foreground">
                                            Product <br /> <span className="text-gradient">Showcase.</span>
                                        </h2>
                                    </div>
                                </SectionReveal>

                                <div className="space-y-20">
                                    {project.gallery.map((img, idx) => (
                                        <SectionReveal key={idx} delay={idx * 0.1}>
                                            <DeviceMockup
                                                type={project.type === 'mobile' ? 'phone' : 'laptop'}
                                                className="shadow-2xl shadow-primary/5 mb-20"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Gallery image ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </DeviceMockup>
                                        </SectionReveal>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    /* Detailed Case Study View (10 Sections) */
                    <div className="space-y-32">
                        {/* 1. Introduction & 2. Problem Statement */}
                        <section className="container-narrow px-6">
                            <div className="grid lg:grid-cols-2 gap-20">
                                <SectionReveal>
                                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">01. Introduction</span>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-foreground">Setting the Stage.</h2>
                                    <p className="text-xl font-light text-muted-foreground leading-relaxed">
                                        {project.caseStudy.introduction}
                                    </p>
                                </SectionReveal>
                                <SectionReveal delay={0.2}>
                                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">02. Problem Statement</span>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-foreground">The Challenge.</h2>
                                    <p className="text-xl font-light text-muted-foreground leading-relaxed">
                                        {project.caseStudy.problemStatement}
                                    </p>
                                </SectionReveal>
                            </div>
                        </section>

                        {/* 3. Research & 4. User Personas */}
                        <section className="bg-secondary/20 py-32">
                            <div className="container-narrow px-6">
                                <div className="grid lg:grid-cols-12 gap-20 items-center">
                                    <div className="lg:col-span-5">
                                        <SectionReveal>
                                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">03. Research</span>
                                            <h2 className="text-5xl font-display font-black mb-8 text-foreground">Discovery Phase.</h2>
                                            <p className="text-xl font-light text-muted-foreground leading-relaxed mb-12">
                                                {project.caseStudy.research}
                                            </p>
                                        </SectionReveal>
                                    </div>
                                    <div className="lg:col-span-7">
                                        <SectionReveal delay={0.2}>
                                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-10 block">04. User Personas</span>
                                            <div className="grid sm:grid-cols-2 gap-8">
                                                {project.caseStudy.userPersonas.map((persona, i) => (
                                                    <div key={i} className="p-8 rounded-[2rem] bg-background border border-border shadow-sm group hover:border-primary/30 transition-colors">
                                                        <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 bg-secondary">
                                                            <img src={persona.image} alt={persona.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <h4 className="text-xl font-bold text-foreground mb-1">{persona.name}</h4>
                                                        <span className="text-xs text-primary font-bold uppercase tracking-wider mb-6 block">{persona.role}</span>
                                                        <ul className="space-y-3">
                                                            {persona.needs.map((need, j) => (
                                                                <li key={j} className="text-sm font-light text-muted-foreground flex gap-3">
                                                                    <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                                                                    {need}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </SectionReveal>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 5. User Flow */}
                        <section className="container-narrow px-6">
                            <div className="grid lg:grid-cols-12 gap-20 items-center">
                                <div className="lg:col-span-7 order-2 lg:order-1">
                                    <SectionReveal>
                                        <img src={project.caseStudy.userFlow.image} alt="User Flow" className="w-full rounded-[2.5rem] border border-border shadow-2xl" />
                                    </SectionReveal>
                                </div>
                                <div className="lg:col-span-5 order-1 lg:order-2">
                                    <SectionReveal delay={0.2}>
                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">05. User Flow</span>
                                        <h2 className="text-5xl font-display font-black mb-8 text-foreground">The Logic.</h2>
                                        <p className="text-xl font-light text-muted-foreground leading-relaxed">
                                            {project.caseStudy.userFlow.description}
                                        </p>
                                    </SectionReveal>
                                </div>
                            </div>
                        </section>

                        {/* 6. Wireframes */}
                        <section className="bg-foreground text-background py-32 rounded-[4rem] mx-6">
                            <div className="container-narrow px-6">
                                <div className="grid lg:grid-cols-2 gap-20 items-center">
                                    <div>
                                        <SectionReveal>
                                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">06. Wireframes</span>
                                            <h2 className="text-5xl md:text-6xl font-display font-black mb-8">Architectural Foundation.</h2>
                                            <p className="text-xl font-light text-background/70 leading-relaxed">
                                                {project.caseStudy.wireframes.description}
                                            </p>
                                        </SectionReveal>
                                    </div>
                                    <SectionReveal delay={0.2}>
                                        <img src={project.caseStudy.wireframes.image} alt="Wireframes" className="w-full rounded-[2rem] shadow-2xl invert dark:invert-0 brightness-110" />
                                    </SectionReveal>
                                </div>
                            </div>
                        </section>

                        {/* 7. UI Design */}
                        <section className="container-narrow px-6 py-20">
                            <SectionReveal>
                                <div className="text-center max-w-3xl mx-auto mb-20">
                                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">07. UI Design</span>
                                    <h2 className="text-5xl md:text-7xl font-display font-black mb-10 text-foreground">Visual Sovereignty.</h2>
                                    <p className="text-xl font-light text-muted-foreground">
                                        {project.caseStudy.uiDesign.description}
                                    </p>
                                </div>
                            </SectionReveal>

                            <div className="grid md:grid-cols-2 gap-12">
                                {project.caseStudy.uiDesign.images.map((img, i) => (
                                    <SectionReveal key={i} delay={i * 0.2}>
                                        <DeviceMockup type={project.type === 'mobile' ? 'phone' : 'laptop'} className="shadow-2xl shadow-primary/10">
                                            <img src={img} alt={`UI Screen ${i + 1}`} className="w-full h-full object-cover" />
                                        </DeviceMockup>
                                    </SectionReveal>
                                ))}
                            </div>
                        </section>

                        {/* 8. Prototype & 9. Development */}
                        <section className="bg-secondary/20 py-32">
                            <div className="container-narrow px-6">
                                <div className="grid lg:grid-cols-2 gap-20">
                                    <SectionReveal>
                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">08. Prototype</span>
                                        <h3 className="text-4xl font-display font-bold mb-8 text-foreground">Interactivity.</h3>
                                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                                            {project.caseStudy.prototype}
                                        </p>
                                    </SectionReveal>
                                    <SectionReveal delay={0.2}>
                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">09. Development</span>
                                        <h3 className="text-4xl font-display font-bold mb-8 text-foreground">Engineering.</h3>
                                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                                            {project.caseStudy.development}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-8">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="px-4 py-2 rounded-full border border-border text-[10px] font-black uppercase tracking-widest text-foreground/60">{tech}</span>
                                            ))}
                                        </div>
                                    </SectionReveal>
                                </div>
                            </div>
                        </section>

                        {/* 10. Final Outcome */}
                        <section className="container-narrow px-6 bg-primary text-white py-32 rounded-[4rem]">
                            <SectionReveal>
                                <div className="max-w-4xl mx-auto text-center">
                                    <span className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs mb-10 block">10. Final Outcome</span>
                                    <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-12">Redefining Excellence.</h2>
                                    <p className="text-2xl md:text-3xl font-light leading-relaxed mb-16">
                                        "{project.caseStudy.finalOutcome}"
                                    </p>
                                    <div className="flex justify-center gap-12 border-t border-white/20 pt-16">
                                        <div className="text-left">
                                            <span className="text-4xl md:text-6xl font-display font-black block mb-2">90%</span>
                                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Digital Adoption</span>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-4xl md:text-6xl font-display font-black block mb-2">25%</span>
                                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Revenue Increase</span>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-4xl md:text-6xl font-display font-black block mb-2">0%</span>
                                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Manual Errors</span>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        </section>
                    </div>
                )}

                {/* Closing / Next Project */}
                <section className="pt-20 pb-16 text-center">
                    <div className="container-narrow px-6">
                        <SectionReveal>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-none mb-10 text-foreground">
                                Let's Build the <br /> <span className="text-gradient">Next Big Thing.</span>
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    to="/#contact"
                                    className="px-10 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-primary/10"
                                >
                                    GET IN TOUCH
                                </Link>
                                <Link
                                    to="/projects"
                                    className="group px-10 py-5 border border-border rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all inline-flex items-center gap-2"
                                >
                                    BACK TO WORK <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                                </Link>
                            </div>
                        </SectionReveal>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

const SectionReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

export default ProjectDetailPage;
