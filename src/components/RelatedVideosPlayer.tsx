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
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Get the initial video and its related videos
  const initialVideo = videos.find(v => v.id === initialVideoId) || videos[0];
  const relatedVideos = initialVideo.related
    .map(id => videos.find(v => v.id === id))
    .filter(Boolean) as VideoReel[];
  
  // Add the initial video to the beginning of the related videos
  const allVideos = [initialVideo, ...relatedVideos];

  useEffect(() => {
    // Create an IntersectionObserver to detect when videos are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.7, // Video is considered "in view" when 70% is visible
      }
    );

    // Observe all video containers
    videoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Cleanup observer
      videoRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
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
            ref={(el) => (videoRefs.current[index] = el)}
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