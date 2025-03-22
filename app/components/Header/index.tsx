import { FC } from "react";
import { motion } from "framer-motion";

export const Header: FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-x-8"
          >
            {/* Logo */}
            ss
            <a href="/" className="w-32">
              <img src="/logo.png" alt="Logo" className="w-full h-auto" />
            </a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
