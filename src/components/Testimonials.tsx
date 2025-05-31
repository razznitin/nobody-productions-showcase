
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nobody Productions consistently delivers groundbreaking content that pushes the boundaries of storytelling. Their commitment to quality is unmatched in the industry.",
      name: "Sarah Chen",
      role: "Entertainment Critic",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "Working with Nobody Productions has been transformative for our platform. Their content drives incredible engagement and viewer loyalty.",
      name: "Michael Rodriguez",
      role: "Streaming Executive",
      avatar: "MR",
      rating: 5
    },
    {
      quote: "The creative vision and production quality at Nobody Productions sets the gold standard. Every project exceeds expectations.",
      name: "Emma Thompson",
      role: "Industry Analyst",
      avatar: "ET",
      rating: 5
    },
    {
      quote: "Their innovative approach to format development has revolutionized how we think about audience engagement and interactive content.",
      name: "David Kim",
      role: "Media Producer",
      avatar: "DK",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
            What They <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders and critics about our impact on entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-nobody-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-nobody-primary mr-4" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-white text-lg leading-relaxed mb-6 group-hover:text-nobody-primary/90 transition-colors">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-nobody-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
