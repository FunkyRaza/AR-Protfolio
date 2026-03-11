import { ArrowRight, Palette, Layout, Smartphone, Globe, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionReveal from "./SectionReveal";

const designWork = [
    {
        title: "Eco-Friendly Dashboard",
        category: "UI/UX Design",
        description: "A digital platform designed to streamline garage operations including technician management.",
        icon: <Layout size={20} />,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Nexus Mobile App",
        category: "Mobile Design",
        description: "Modern networking app interface with seamless transitions and glassmorphism.",
        icon: <Smartphone size={20} />,
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Aura Branding",
        category: "Branding",
        description: "Minimalist brand identity for a premium wellness and skincare line.",
        icon: <Palette size={20} />,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
        year: "2023"
    },
    {
        title: "Zenith Webb Portal",
        category: "Web Design",
        description: "High-performance web portal for financial analytics and data visualization.",
        icon: <Globe size={20} />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        year: "2023"
    }
];

interface DesignProps {
    isPreview?: boolean;
}

const Design = ({ isPreview = false }: DesignProps) => {
    const displayItems = isPreview ? designWork.slice(0, 2) : designWork;

    return (
        <section id="design" className="section-padding bg-background overflow-hidden">
            <div className="container-narrow">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <SectionReveal>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                                Visual Artistry
                            </span>
                            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter leading-[0.85] mb-8">
                                CRAFTING <span className="text-gradient">DIGITAL</span> LUXURY.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                                Transforming complex ideas into ethereal digital experiences. I specialize in high-concept UI/UX that blends absolute precision with visual soul.
                            </p>
                        </SectionReveal>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        <SectionReveal delay={0.2}>
                            <div className="bg-foreground text-background px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl transition-all group pointer-events-none">
                                <Sparkles className="text-primary" size={20} />
                                <span className="text-xs font-bold tracking-widest uppercase">Open for Design</span>
                            </div>
                        </SectionReveal>

                        {isPreview && (
                            <SectionReveal delay={0.3}>
                                <Link
                                    to="/design"
                                    className="group flex items-center gap-3 text-foreground font-bold text-lg tracking-tight hover:text-primary transition-colors"
                                >
                                    Explore Full Archive
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </SectionReveal>
                        )}
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {displayItems.map((item, index) => (
                        <SectionReveal
                            key={item.title}
                            delay={index * 0.1}
                        >
                            <div className={cn(
                                "group relative flex flex-col gap-8",
                                index % 2 !== 0 && "md:mt-32" // Staggered Effect
                            )}>
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-secondary border border-border/50 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(var(--primary-rgb),0.15)] group-hover:-translate-y-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Floating Badges */}
                                    <div className="absolute top-8 left-8 flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-background/40 backdrop-blur-xl border border-white/20 flex items-center justify-center text-foreground">
                                            {item.icon}
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Interaction Trigger */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-24 h-24 rounded-full bg-foreground text-background flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 font-bold text-[10px] uppercase tracking-widest shadow-2xl">
                                            View Case
                                        </div>
                                    </div>
                                </div>

                                {/* Item Description */}
                                <div className="flex justify-between items-start px-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">{item.year}</span>
                                            <div className="h-4 w-[1px] bg-border" />
                                            <span className="text-muted-foreground font-bold text-xs tracking-[0.3em] uppercase">{item.category}</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold tracking-tight text-foreground group-hover:text-primary transition-colors uppercase">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all">
                                        <ExternalLink size={18} />
                                    </div>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Design;
