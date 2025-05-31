
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-nobody-primary via-nobody-secondary to-nobody-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl md:text-4xl font-cinematic font-bold text-white">
              Stay in the Loop
            </h2>
          </div>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive behind-the-scenes content, early access to new releases, 
            and insider updates delivered straight to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-nobody-primary hover:bg-white/90 font-semibold px-8"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center text-white">
              <CheckCircle className="h-6 w-6 mr-3" />
              <span className="text-lg font-semibold">
                Thank you for subscribing! Check your email for confirmation.
              </span>
            </div>
          )}

          <p className="text-sm text-white/70 mt-4">
            Join over 50,000 entertainment enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
