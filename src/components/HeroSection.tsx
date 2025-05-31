
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Send, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop&crop=center" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-video-overlay" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-8 animate-fade-in">
            Where Stories Come to{' '}
            <span className="gradient-text">Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Creating extraordinary entertainment experiences that captivate, inspire, and connect audiences worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-nobody-primary hover:bg-nobody-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Send className="mr-2 h-5 w-5" />
              Pitch a Format
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-nobody-secondary text-nobody-secondary hover:bg-nobody-secondary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Fanverse
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
