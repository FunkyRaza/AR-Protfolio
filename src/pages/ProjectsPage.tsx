import Layout from "@/components/portfolio/Layout";
import Projects from "@/components/portfolio/Projects";
import { motion } from "framer-motion";

const ProjectsPage = () => {
    return (
        <Layout>
            <div className="pt-32 pb-12 bg-background">
                <div className="container-narrow px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none mb-6">
                            Full <span className="text-gradient">Portfolio.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl">
                            Exploring the intersection of engineering and human-centered design through functional digital products.
                        </p>
                    </motion.div>
                </div>
                <Projects isPreview={false} />
            </div>
        </Layout>
    );
};

export default ProjectsPage;
