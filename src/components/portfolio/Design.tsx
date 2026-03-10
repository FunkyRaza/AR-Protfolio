import { ArrowRight, Palette, Layout, Smartphone, Globe, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const designWork = [
    {
        title: "Eco-Friendly Dashboard",
        category: "UI/UX Design",
        description: "A digital platform designed to streamline garage operations including technician management.",
        icon: <Layout className="text-white" size={20} />,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Nexus Mobile App",
        category: "Mobile Design",
        description: "Modern networking app interface with seamless transitions and glassmorphism.",
        icon: <Smartphone className="text-white" size={20} />,
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Aura Branding",
        category: "Branding",
        description: "Minimalist brand identity for a premium wellness and skincare line.",
        icon: <Palette className="text-white" size={20} />,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
        year: "2023"
    },
    {
        title: "Zenith Webb Portal",
        category: "Web Design",
        description: "High-performance web portal for financial analytics and data visualization.",
        icon: <Globe className="text-white" size={20} />,
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
        <section id="design" className="py-32 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                {/* Superior Header Design */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <div className="h-[1px] w-12 bg-blue-600" />
                            <span className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600">
                                Aesthetic Vision
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black tracking-tight text-black leading-[0.9] mb-8"
                        >
                            CRAFTING <span className="text-blue-600">DIGITAL</span> LUXURY
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl"
                        >
                            Transforming complex ideas into ethereal digital experiences. I specialize in high-concept UI/UX that blends absolute precision with visual soul.
                        </motion.p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl hover:bg-gray-900 transition-all group pointer-events-none"
                        >
                            <Sparkles className="text-blue-400 group-hover:rotate-12 transition-transform" size={20} />
                            <span className="text-sm font-black tracking-widest uppercase">Open for Design</span>
                        </motion.div>

                        {isPreview && (
                            <Link
                                to="/design"
                                className="group flex items-center gap-3 text-black font-black text-lg tracking-tight hover:text-blue-600 transition-colors"
                            >
                                Explore Full Archive
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Sophisticated Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {displayItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={cn(
                                "group relative flex flex-col gap-8",
                                index % 2 !== 0 && "md:mt-32" // Staggered Effect
                            )}
                        >
                            {/* Image Container with Luxury Frame */}
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.3)] group-hover:-translate-y-2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale-[20%] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                />

                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Floating Badge */}
                                <div className="absolute top-8 left-8 flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                        {item.category}
                                    </span>
                                </div>

                                {/* View Detail Trigger */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 font-black text-xs uppercase tracking-widest shadow-2xl">
                                        View Case
                                    </div>
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex justify-between items-start px-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-blue-600 font-bold text-xs tracking-[0.3em] uppercase">{item.year}</span>
                                        <div className="h-4 w-[1px] bg-gray-200" />
                                        <span className="text-gray-400 font-bold text-xs tracking-[0.3em] uppercase">{item.category}</span>
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tight text-black group-hover:text-blue-600 transition-colors uppercase italic">{item.title}</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-gray-300 group-hover:text-black group-hover:bg-white group-hover:shadow-xl transition-all">
                                    <ExternalLink size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Design;
