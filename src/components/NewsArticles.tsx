
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Bookmark } from 'lucide-react';

const NewsArticles = () => {
  const articles = [
    {
      title: "The Future of Interactive Entertainment: Nobody Productions Leading the Way",
      excerpt: "Exploring how innovative storytelling formats are reshaping viewer engagement and creating immersive experiences that blur the line between content and participation.",
      date: "December 15, 2024",
      category: "Industry Insight",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      title: "Behind the Scenes: Creating 'The Last Kingdom' Season Finale",
      excerpt: "An exclusive look at the production challenges and creative decisions that went into crafting one of television's most talked-about season finales.",
      date: "December 12, 2024",
      category: "Production",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop"
    },
    {
      title: "Global Expansion: Nobody Productions Announces International Partnerships",
      excerpt: "Strategic partnerships with leading international broadcasters and streaming platforms will bring Nobody Productions content to audiences worldwide.",
      date: "December 10, 2024",
      category: "Business",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=250&fit=crop"
    },
    {
      title: "Technology Meets Storytelling: The AI Revolution in Content Creation",
      excerpt: "How artificial intelligence and machine learning are being integrated into the creative process while maintaining the human touch that makes great storytelling.",
      date: "December 8, 2024",
      category: "Technology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop"
    },
    {
      title: "Sustainability in Production: Our Green Initiative Success Story",
      excerpt: "A comprehensive report on how Nobody Productions has reduced its environmental impact by 40% while maintaining production quality and efficiency.",
      date: "December 5, 2024",
      category: "Sustainability",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      title: "Audience Analytics: Understanding Modern Viewer Preferences",
      excerpt: "Deep dive into viewer behavior data revealing trends that are shaping the future of entertainment content and distribution strategies.",
      date: "December 3, 2024",
      category: "Analytics",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-nobody-darker">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
            News & <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, behind-the-scenes content, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-nobody-primary/50 transition-all duration-300">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-nobody-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 text-white hover:text-nobody-primary"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                  <span className="mx-2">•</span>
                  {article.readTime}
                </div>
                
                <h3 className="text-xl font-cinematic font-semibold text-white mb-3 group-hover:text-nobody-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <Button
                  variant="ghost"
                  className="text-nobody-primary hover:text-nobody-secondary p-0 h-auto font-semibold group"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-nobody-primary text-nobody-primary hover:bg-nobody-primary hover:text-white px-8 py-3"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
