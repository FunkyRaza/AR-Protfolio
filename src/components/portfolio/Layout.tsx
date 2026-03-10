import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative min-h-screen bg-background">
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
