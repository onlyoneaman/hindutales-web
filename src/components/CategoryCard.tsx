import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate('/explore', { state: { category: category.id } });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error('Error playing video:', err));
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      className="relative min-w-[240px] h-[320px] rounded-xl overflow-hidden shadow-md mx-2 flex-shrink-0 bg-katha-bg"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-katha-accent z-10"></div>
      
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={category.videoPreview}
        loop
        muted
        playsInline
      />
      
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          >
            <Play size={48} className="text-katha-secondary opacity-80" />
          </motion.div>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-katha-bg text-xl font-bold">{category.title}</h3>
        <p className="text-katha-secondary text-sm opacity-80">{category.description}</p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;