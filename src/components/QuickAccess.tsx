
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tv, Vote, Send, Mic } from 'lucide-react';

const QuickAccess = () => {
  const actions = [
    {
      icon: Tv,
      title: "Shows",
      description: "Browse all series",
      href: "#shows",
      color: "bg-gradient-to-br from-nobody-primary to-nobody-secondary"
    },
    {
      icon: Vote,
      title: "Vote Now",
      description: "Your choice matters",
      href: "#vote",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Send,
      title: "Submit Format",
      description: "Share your ideas",
      href: "#submit",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: Mic,
      title: "Auditions",
      description: "Find opportunities",
      href: "#auditions",
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-center text-white mb-16">
          Quick <span className="gradient-text">Access</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-border bg-card hover:border-nobody-primary/50 transition-all duration-300 hover:scale-105"
            >
              <a href={action.href} className="block p-8 text-center">
                <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
