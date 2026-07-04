import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Facebook, Music } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SocialMediaSection() {
  const { t } = useLanguage();
  
  // Custom TikTok Icon Component
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
  
  const socialLinks = [
    {
      name: 'YouTube',
      nameKey: 'social.youtube',
      icon: Youtube,
      url: 'https://youtube.com/@chirokyan?si=oew1jpOkdDxYJad0',
      color: 'hover:bg-[#FF0000]',
      handleKey: 'social.youtube.handle',
      followersKey: 'social.youtube.followers'
    },
    {
      name: 'Instagram',
      nameKey: 'social.instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/chirokiyan',
      color: 'hover:bg-[#E4405F]',
      handleKey: 'social.instagram.handle',
      followersKey: 'social.instagram.followers'
    },
    {
      name: 'Facebook',
      nameKey: 'social.facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61574421084981',
      color: 'hover:bg-[#1877F2]',
      handleKey: 'social.facebook.handle',
      followersKey: 'social.facebook.followers'
    },
    {
      name: 'TikTok',
      nameKey: 'social.tiktok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@chirokyann',
      color: 'hover:bg-[#000000]',
      handleKey: 'social.tiktok.handle',
      followersKey: 'social.tiktok.followers'
    }
  ];

  return (
    <section className="py-20 bg-[#5a4a3a]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#d4c5a9] mb-4">{t('social.title')}</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('social.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex flex-col items-center p-8 bg-white/10 rounded-xl hover:scale-105 transition-all duration-300 ${social.color}`}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-[#d4c5a9] rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors"
                >
                  <Icon className="w-8 h-8 text-[#5a4a3a]" />
                </motion.div>
                <h3 className="text-xl text-white mb-2">{t(social.nameKey)}</h3>
                <p className="text-white/70 text-center text-sm mb-1">{t(social.handleKey)}</p>
                <p className="text-white/60 text-center text-xs">{t(social.followersKey)}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}