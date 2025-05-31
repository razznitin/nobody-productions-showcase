
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nobody-darker border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-cinematic font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-nobody-primary mr-3 mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>123 Entertainment Blvd</p>
                  <p>Los Angeles, CA 90028</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-nobody-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-nobody-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">hello@nobodyproductions.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-cinematic font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="justify-start border-border hover:border-nobody-primary hover:text-nobody-primary">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="justify-start border-border hover:border-nobody-primary hover:text-nobody-primary">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="justify-start border-border hover:border-nobody-primary hover:text-nobody-primary">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="justify-start border-border hover:border-nobody-primary hover:text-nobody-primary">
                  <Youtube className="h-4 w-4 mr-2" />
                  YouTube
                </Button>
                <Button variant="outline" size="sm" className="justify-start border-border hover:border-nobody-primary hover:text-nobody-primary">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-cinematic font-semibold text-white mb-4">
              Newsletter
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Subscribe for exclusive content and industry updates
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background border-border focus:border-nobody-primary"
                />
                <Button className="w-full bg-nobody-primary hover:bg-nobody-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-cinematic font-semibold text-white mb-4">
              Legal
            </h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-nobody-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block text-muted-foreground hover:text-nobody-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-nobody-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-nobody-primary transition-colors">
                DMCA
              </a>
              <a href="#" className="block text-muted-foreground hover:text-nobody-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-2xl font-cinematic font-bold gradient-text mr-6">
              Nobody Productions
            </h2>
            <p className="text-muted-foreground text-sm">
              © 2024 Nobody Productions. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with ❤️ in Los Angeles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
