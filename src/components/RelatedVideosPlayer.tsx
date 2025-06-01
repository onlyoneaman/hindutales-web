import React, { useState, useRef, useEffect } from 'react';
import { VideoReel } from '../types';
import VideoPlayer from './VideoPlayer';
import { videos } from '../data/videos';
import { useNavigate } from 'react-router-dom';

interface RelatedVideosPlayerProps {
  initialVideoId: string;
}

const RelatedVideosPlayer: React.FC<RelatedVideosPlayerProps> = ({ initialVideoId }) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get the initial video and its related videos
  const initialVideo = videos.find(v => v.id === initialVideoId) || videos[0];
  const relatedVideos = initialVideo.related
    .map(id => videos.find(v => v.id === id))
    .filter(Boolean) as VideoReel[];
  
  // Add the initial video to the beginning of the related videos
  const allVideos = [initialVideo, ...relatedVideos];

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

  const handleBack = () => {
    navigate('/explore');
  };

  return (
    <div className="fixed inset-0 bg-katha-accent">
      <div 
        ref={containerRef}
        className="h-screen snap-y snap-mandatory overflow-y-scroll"
      >
        {allVideos.map((video, index) => (
          <div 
            key={video.id}
            className="h-screen w-full snap-start snap-always"
          >
            <VideoPlayer 
              video={video}
              isActive={currentIndex === index}
              isRelated={true}
              onBack={handleBack}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideosPlayer; 