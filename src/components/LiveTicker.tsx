
import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';

const LiveTicker = () => {
  const updates = [
    "🎬 'The Last Kingdom' wins Best Drama at International TV Awards",
    "🚀 Nobody Productions announces 5 new original series for 2024",
    "⭐ 'Future Visions' renewed for second season after record viewership",
    "🎭 Open auditions for 'Urban Chronicles' Season 2 now live",
    "📺 'Ocean Depths' documentary breaks streaming records worldwide",
    "🏆 CEO Sarah Johnson named Producer of the Year by Entertainment Weekly",
    "🎪 Nobody Productions partners with leading streaming platforms globally",
    "🎨 New interactive format 'Choose Your Story' launches next month"
  ];

  return (
    <div className="bg-nobody-primary py-4 overflow-hidden relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-6 flex items-center">
          <Zap className="h-5 w-5 text-white mr-2 animate-pulse" />
          <span className="text-white font-semibold text-sm whitespace-nowrap">LIVE UPDATES</span>
          <TrendingUp className="h-5 w-5 text-white ml-2" />
        </div>
        
        <div className="flex-1 relative">
          <div className="flex animate-slide-left">
            {[...updates, ...updates].map((update, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-white text-sm font-medium px-8 whitespace-nowrap"
              >
                {update}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;
