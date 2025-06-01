import React, { useRef, useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Pause, Play, Volume2, VolumeX, ChevronLeft } from 'lucide-react';
import { VideoReel } from '../types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { videos } from '../data/videos';

interface VideoPlayerProps {
  video: VideoReel;
  isActive: boolean;
  onVideoEnd?: () => void;
  isRelated?: boolean;
  onBack?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isActive, onVideoEnd, isRelated = false, onBack }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentRelatedIndex, setCurrentRelatedIndex] = useState(0);

  const relatedVideos = video.related.map(id => videos.find(v => v.id === id)).filter(Boolean) as VideoReel[];

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(err => {
          console.error('Error playing video:', err);
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.error('Error playing video:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleVideoEnd = () => {
    if (isRelated && relatedVideos.length > 0) {
      // Play next related video
      const nextIndex = (currentRelatedIndex + 1) % relatedVideos.length;
      setCurrentRelatedIndex(nextIndex);
      const nextVideo = relatedVideos[nextIndex];
      if (videoRef.current) {
        videoRef.current.src = nextVideo.videoUrl;
        videoRef.current.play().catch(err => {
          console.error('Error playing video:', err);
        });
      }
    } else if (onVideoEnd) {
      onVideoEnd();
    }
  };

  const handleBackToExplore = () => {
    window.location.href = '/explore';
  };

  const handleWatchRelated = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `/explore?related=${video.id}`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#fefce6] overflow-hidden">
      {/* Phone-like container with fixed width for desktop */}
      <div 
        className="relative h-full mx-auto overflow-hidden shadow-2xl border-x-8 border-[#fefce6]" 
        style={{ 
          width: '100%',
          maxWidth: '390px', /* iPhone 12 Pro width */
          maxHeight: '100vh',
        }}
      >
        {/* Video element */}
        <div className="absolute inset-0 bg-black" onClick={handleVideoClick}>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={video.videoUrl}
            loop={!isRelated}
            muted={isMuted}
            playsInline
            onTimeUpdate={handleProgress}
            onEnded={handleVideoEnd}
          />
        </div>
        
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-katha-accent/20 via-transparent to-katha-accent/50 pointer-events-none"></div>
        
        {/* All UI elements constrained within the fixed-width container */}
        <div className="absolute inset-0 flex flex-col">
          {/* Back button */}
          {isRelated && (
            <motion.button
              className="absolute top-4 left-4 z-50 text-katha-bg bg-katha-primary/30 rounded-full p-2"
              onClick={handleBackToExplore}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}
          
          {/* Bottom container for controls, info and buttons */}
          <div className="mt-auto w-full">
            {/* Video info */}
            <div className="px-4 pb-6 z-10">
              <h3 className="text-katha-bg text-lg font-bold">{video.title}</h3>
              <p className="text-katha-secondary text-sm">{video.description}</p>
            </div>
            
            {/* Watch Related Stories button */}
            {!isRelated && (
              <div className="px-4 pb-24 z-20">
                <motion.button
                  onClick={handleWatchRelated}
                  className="w-full py-2 px-4 bg-katha-primary/80 text-katha-bg rounded-lg font-medium hover:bg-katha-primary transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Related Stories
                </motion.button>
              </div>
            )}
            
            {/* Video controls */}
            <div className="p-4 z-10">
              <div className="bg-katha-secondary/20 h-1 w-full rounded-full overflow-hidden">
                <div 
                  className="bg-katha-primary h-full rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Play/Pause button (shows only when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Play size={64} className="text-katha-bg opacity-80" />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;