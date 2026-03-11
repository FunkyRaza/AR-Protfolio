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

                        {/* Vertical Line Indicator (Inspired by user reference) */}
                        <div className="relative w-[1.5px] h-24 bg-foreground/10 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-primary origin-top"
                                initial={{ scaleY: 0 }}
                                whileHover={{ scaleY: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            />
                            {/* Static subtle line for contrast */}
                            <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </Link>
                </div>

                {/* Mobile/Small Screen Back Button (Keep it accessible) */}
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

                {/* Case Study Content */}
                <section className="container-narrow px-6 mb-20">
                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-8">
                            <SectionReveal>
                                <div className="space-y-16">
                                    <div>
                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">The Problem</span>
                                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-foreground">
                                            Addressing critical gaps in {project.title.toLowerCase()} user workflows.
                                        </h2>
                                        <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">The Narrative</span>
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
                                            { title: "Efficiency", desc: "Reducing task completion time by 40%." },
                                            { title: "Scalability", desc: "Building a foundation for global growth." },
                                            { title: "Precision", desc: "Eliminating manual data entry errors." }
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

                                    <div className="mt-12 pt-12 border-t border-border/30">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6 block">Technologies</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map(tool => (
                                                <span key={tool} className="px-3 py-1.5 rounded-full bg-background border border-border/50 text-[10px] font-bold text-foreground/60">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        </div>
                    </div>
                </section>

                {/* Visual Showcase / Process */}
                <section className="bg-secondary/20 py-20">
                    <div className="container-narrow px-6">
                        <SectionReveal>
                            <div className="max-w-3xl mb-16">
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">Visual Process</span>
                                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-none text-foreground">
                                    Iterations & <br /> <span className="text-gradient">Deep Dives.</span>
                                </h2>
                            </div>
                        </SectionReveal>

                        <div className="space-y-20">
                            {project.gallery.map((img, idx) => (
                                <SectionReveal key={idx} delay={idx * 0.1}>
                                    <div className={cn(
                                        "grid items-center gap-12 lg:gap-20",
                                        idx % 2 === 0 ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]"
                                    )}>
                                        <div className={cn(
                                            "group relative w-full",
                                            idx % 2 === 0 ? "order-1" : "lg:order-2"
                                        )}>
                                            <DeviceMockup
                                                type={project.type === 'mobile' ? 'phone' : 'laptop'}
                                                className="shadow-2xl shadow-primary/5"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Process phase ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </DeviceMockup>
                                        </div>
                                        <div className={idx % 2 === 0 ? "order-2" : "lg:order-1"}>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Phase 0{idx + 1}</span>
                                            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                                                {idx === 0 ? "Exploration & Strategy" : idx === 1 ? "Visual Language" : "Refinement & Polish"}
                                            </h3>
                                            <p className="text-lg font-light text-muted-foreground leading-relaxed mb-10 max-w-md">
                                                Applying user-centric design principles to solve complex data visualization challenges while maintaining a premium aesthetic.
                                            </p>
                                            <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                                                Explore Methodology <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </SectionReveal>
                            ))}
                        </div>
                    </div>
                </section>

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
