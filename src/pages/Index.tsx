
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LiveTicker from '@/components/LiveTicker';
import LatestReleases from '@/components/LatestReleases';
import QuickAccess from '@/components/QuickAccess';
import PartnerLogos from '@/components/PartnerLogos';
import Testimonials from '@/components/Testimonials';
import NewsArticles from '@/components/NewsArticles';
import VotingWidget from '@/components/VotingWidget';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LiveTicker />
      <LatestReleases />
      <QuickAccess />
      <PartnerLogos />
      <VotingWidget />
      <Testimonials />
      <NewsArticles />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
