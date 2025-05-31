
import React, { useState } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ने' : 'EN');
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-cinematic font-bold gradient-text">
                Nobody Productions
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#shows" className="text-foreground hover:text-nobody-primary transition-colors">Shows</a>
              <a href="#formats" className="text-foreground hover:text-nobody-primary transition-colors">Formats</a>
              <a href="#fanverse" className="text-foreground hover:text-nobody-primary transition-colors">Fanverse</a>
              <a href="#news" className="text-foreground hover:text-nobody-primary transition-colors">News</a>
              <a href="#about" className="text-foreground hover:text-nobody-primary transition-colors">About</a>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex"
              >
                <Search className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hidden md:flex text-sm font-medium"
              >
                {language}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden md:flex"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#shows" className="block text-foreground hover:text-nobody-primary transition-colors">Shows</a>
              <a href="#formats" className="block text-foreground hover:text-nobody-primary transition-colors">Formats</a>
              <a href="#fanverse" className="block text-foreground hover:text-nobody-primary transition-colors">Fanverse</a>
              <a href="#news" className="block text-foreground hover:text-nobody-primary transition-colors">News</a>
              <a href="#about" className="block text-foreground hover:text-nobody-primary transition-colors">About</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                  {language}
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleTheme}>
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center">
          <div className="w-full max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <input
                type="text"
                placeholder="Search shows, news, jobs..."
                className="w-full bg-card border border-border rounded-lg pl-12 pr-12 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-nobody-primary"
                autoFocus
              />
              <Button
                variant="ghost"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
