import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreVertical, Languages } from 'lucide-react';
import logo from 'figma:asset/7fc9c1905014b2b3d0522772c0d5c965aaf19405.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'home', translateKey: 'nav.home' },
    { label: 'Episodes', id: 'videos', translateKey: 'nav.videos' },
    { label: 'About', id: 'about', translateKey: 'nav.about' },
    { label: 'Contact', id: 'contact', translateKey: 'nav.contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#5a4a3a]/95 backdrop-blur-sm border-b border-[#d4c5a9]/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Podcast Logo" className="h-12 w-12 object-cover rounded-full" />
            <span className="text-[#d4c5a9] text-xl">چیرۆکیان</span>
          </motion.div>

          {/* Language Toggle & Menu Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown Button */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-[#d4c5a9]/20 hover:bg-[#d4c5a9]/30 transition-colors text-[#d4c5a9] text-sm flex items-center gap-2"
                aria-label="Select Language"
              >
                <Languages className="w-4 h-4" />
                <span>{t('nav.language')}</span>
              </motion.button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsLanguageMenuOpen(false)}
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                      style={{ top: '73px' }}
                    />

                    {/* Menu */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-[#5a4a3a] rounded-xl shadow-2xl overflow-hidden border border-[#d4c5a9]/20"
                    >
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0 }}
                        whileHover={{ 
                          backgroundColor: 'rgba(212, 197, 169, 0.1)',
                          x: 5
                        }}
                        onClick={() => {
                          if (language !== 'en') setLanguage('en');
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 text-[#d4c5a9] hover:text-white transition-colors border-b border-[#d4c5a9]/10"
                      >
                        {t('nav.language.english')}
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                        whileHover={{ 
                          backgroundColor: 'rgba(212, 197, 169, 0.1)',
                          x: 5
                        }}
                        onClick={() => {
                          if (language !== 'ku') setLanguage('ku');
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 text-[#d4c5a9] hover:text-white transition-colors border-b border-[#d4c5a9]/10"
                      >
                        {t('nav.language.kurdish')}
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ 
                          backgroundColor: 'rgba(212, 197, 169, 0.1)',
                          x: 5
                        }}
                        onClick={() => {
                          if (language !== 'ar') setLanguage('ar');
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 text-[#d4c5a9] hover:text-white transition-colors"
                      >
                        {t('nav.language.arabic')}
                      </motion.button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* 3-Dot Menu Button */}
            <div className="relative">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#d4c5a9]/20 flex items-center justify-center hover:bg-[#d4c5a9]/30 transition-colors"
                aria-label="Menu"
              >
                <MoreVertical className="w-6 h-6 text-[#d4c5a9]" />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                      style={{ top: '73px' }}
                    />

                    {/* Menu */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-[#5a4a3a] rounded-xl shadow-2xl overflow-hidden border border-[#d4c5a9]/20"
                    >
                      {menuItems.map((item, index) => (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ 
                            backgroundColor: 'rgba(212, 197, 169, 0.1)',
                            x: 5
                          }}
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left px-6 py-3 text-[#d4c5a9] hover:text-white transition-colors border-b border-[#d4c5a9]/10 last:border-b-0"
                        >
                          {item.translateKey ? t(item.translateKey) : item.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}