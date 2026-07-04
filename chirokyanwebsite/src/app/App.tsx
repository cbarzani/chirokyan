import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideosSection } from './components/VideosSection';
import { PopularEpisodesSection } from './components/PopularEpisodesSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function AppContent() {
  const { language } = useLanguage();
  
  // Use Doran Bold font for all languages
  const fontFamily = "'Doran', 'Doran Bold', sans-serif";
  
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily }}>
      <SEO />
      <Header />
      <main>
        <HeroSection />
        <VideosSection />
        <PopularEpisodesSection />
        <SocialMediaSection />
        <AboutSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}