import React from 'react';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-katha-cream">
      <motion.main 
        className="flex-1 overflow-y-auto pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <NavBar />
    </div>
  );
};

export default Layout;