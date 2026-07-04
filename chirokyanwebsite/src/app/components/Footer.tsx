import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Instagram, Facebook, Music, Heart } from 'lucide-react';
import logo from 'figma:asset/7fc9c1905014b2b3d0522772c0d5c965aaf19405.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';
  
  return (
    <footer className="bg-[#5a4a3a] text-white py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <img src={logo} alt="Podcast Logo" className="h-10 w-10 object-contain" />
              <span className="text-[#d4c5a9] text-xl">چیرۆکیان</span>
            </div>
            <p className="text-white/70">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-[#d4c5a9] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t('nav.videos')}
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[#d4c5a9] mb-4">{t('social.title')}</h3>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <motion.a 
                href="https://youtube.com/@chirokyan?si=oew1jpOkdDxYJad0" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/chirokiyan" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E4405F] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61574421084981" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@chirokyann" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#000000] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-white/70 text-center">
            {t('footer.rights')}
          </p>
          <p className={`text-white/50 text-sm mt-2 text-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            made by{' '}
            <a 
              href="https://www.instagram.com/chyabarzanni?igsh=bW84enFtMW1rbmJ3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4c5a9] transition-colors underline"
            >
              dolamari
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}