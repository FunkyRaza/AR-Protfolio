import Layout from "@/components/portfolio/Layout";
import Design from "@/components/portfolio/Design";
import { motion } from "framer-motion";

const DesignPage = () => {
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
                            Visual <span className="text-gradient">Design.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl">
                            A curated selection of UI/UX explorations, brand identities, and digital art pieces focused on aesthetic excellence.
                        </p>
                    </motion.div>
                </div>
                <Design isPreview={false} />
            </div>
        </Layout>
    );
};

export default DesignPage;
