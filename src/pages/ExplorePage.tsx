import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { videos } from '../data/videos';
import VideoPlayer from '../components/VideoPlayer';
import RelatedVideosPlayer from '../components/RelatedVideosPlayer';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ExplorePage: React.FC = () => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get query parameters
  const searchParams = new URLSearchParams(location.search);
  const relatedVideoId = searchParams.get('related');
  
  // If we have a related video ID, show the RelatedVideosPlayer
  if (relatedVideoId) {
    return <RelatedVideosPlayer initialVideoId={relatedVideoId} />;
  }
  
  // Filter videos by category if provided in location state
  const categoryFilter = location.state?.category;
  const filteredVideos = categoryFilter 
    ? videos.filter(video => video.category === categoryFilter)
    : videos;
  
  // Handle swiping to next/previous video
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = window.innerHeight;
    const index = Math.round(scrollTop / itemHeight);
    
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="fixed inset-0 bg-katha-accent">
      <motion.button
        className="absolute top-4 left-4 z-50 text-katha-bg bg-katha-primary/30 rounded-full p-2"
        onClick={goBack}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <div 
        ref={containerRef}
        className="h-screen snap-y snap-mandatory overflow-y-scroll"
      >
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <div 
              key={video.id}
              className="h-screen w-full snap-start snap-always"
            >
              <VideoPlayer 
                video={video} 
                isActive={currentIndex === index}
                onVideoEnd={() => {
                  if (index < filteredVideos.length - 1) {
                    containerRef.current?.scrollTo({
                      top: (index + 1) * window.innerHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            </div>
          ))
        ) : (
          <div className="h-screen flex items-center justify-center text-katha-bg">
            <p>No videos available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;