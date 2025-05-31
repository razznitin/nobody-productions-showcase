
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LatestReleases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const shows = [
    {
      id: 1,
      title: "The Last Kingdom",
      poster: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
      description: "An epic tale of warriors, kingdoms, and destiny in medieval England. Follow the journey of Uhtred as he navigates loyalty, betrayal, and the fight for his homeland.",
      rating: 4.8,
      year: "2024"
    },
    {
      id: 2,
      title: "Future Visions",
      poster: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
      description: "A sci-fi anthology exploring humanity's relationship with technology. Each episode presents a unique vision of what tomorrow might hold for civilization.",
      rating: 4.6,
      year: "2024"
    },
    {
      id: 3,
      title: "Ocean Depths",
      poster: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
      description: "Dive into the mysterious world beneath the waves. A stunning documentary series revealing the hidden secrets of our planet's vast oceans.",
      rating: 4.9,
      year: "2024"
    },
    {
      id: 4,
      title: "Digital Revolution",
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
      description: "The untold story of how technology transformed our world. From code to culture, explore the digital age's most pivotal moments.",
      rating: 4.7,
      year: "2024"
    },
    {
      id: 5,
      title: "Urban Chronicles",
      poster: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
      description: "Life in the modern metropolis through the eyes of its diverse inhabitants. Stories of ambition, struggle, and triumph in the urban jungle.",
      rating: 4.5,
      year: "2024"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, shows.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, shows.length - 2)) % Math.max(1, shows.length - 2));
  };

  return (
    <section className="py-20 bg-nobody-darker">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white">
            Latest <span className="gradient-text">Releases</span>
          </h2>
          
          <div className="hidden md:flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-nobody-primary text-nobody-primary hover:bg-nobody-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-nobody-primary text-nobody-primary hover:bg-nobody-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {shows.map((show) => (
              <div key={show.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <Card className="bg-card border-border overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <img
                      src={show.poster}
                      alt={show.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-nobody-primary text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {show.year}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-white font-semibold">{show.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-cinematic font-semibold text-white mb-3">
                      {show.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {show.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile swipe indicators */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.max(1, shows.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-nobody-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;
