import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Compass, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const location = useLocation();
  
  // Don't show navbar on explore page for full immersion
  if (location.pathname === '/explore') {
    return null;
  }

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-katha-bg border-t border-katha-secondary/30 py-2 px-4 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-md mx-auto flex justify-around items-center">
        <NavItem to="/" icon={<Home />} label="Home" />
        <NavItem to="/explore" icon={<Compass />} label="Explore" />
        <NavItem to="/create" icon={<PlusCircle />} label="Create" />
      </div>
    </motion.nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex flex-col items-center p-2 ${isActive ? 'text-katha-primary' : 'text-katha-secondary'}`
      }
    >
      <div className="text-xl mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};

export default NavBar;