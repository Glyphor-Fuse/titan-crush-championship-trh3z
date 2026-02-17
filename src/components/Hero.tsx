
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play the video with error handling
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Video autoplay failed:', error);
        // Fallback: video will still show poster image
      }
    };

    // Play video when it's ready
    const handleCanPlay = () => {
      playVideo();
    };

    // Ensure video keeps playing if it pauses unexpectedly
    const handlePause = () => {
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
        playVideo();
      }
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('pause', handlePause);

    // Initial play attempt
    if (video.readyState >= 3) {
      playVideo();
    }

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          ref={videoRef}
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          poster="/images/hero-bg.png"
        >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-primary/40 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            The World Championship Series
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase italic tracking-tighter text-white mb-6 drop-shadow-2xl">
            Titan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Crush</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto font-body mb-10 leading-relaxed">
            Experience the earth-shaking power of 12,000-pound behemoths defying gravity in a metallic gladiator arena.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-xl bg-primary text-black hover:bg-white hover:text-black font-display uppercase skew-x-[-10deg] transition-transform hover:scale-105 border-0 rounded-none clip-path-slant">
              <span className="skew-x-[10deg]">Get Tickets</span>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-xl border-white text-white hover:bg-white/10 hover:text-white font-display uppercase skew-x-[-10deg] rounded-none">
               <span className="skew-x-[10deg]">View Schedule</span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

export default Hero;
