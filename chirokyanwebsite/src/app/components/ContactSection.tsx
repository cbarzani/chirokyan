import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-[#f5f1e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('contact.title')}</h2>
            <p className="text-[#5a4a3a]/70 text-lg">
              {t('contact.description')}
            </p>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#5a4a3a] to-[#6a5a4a] p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl text-[#d4c5a9] mb-4">{t('contact.title')}</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a 
                href="mailto:hazharsalam62@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#d4c5a9] text-[#5a4a3a] rounded-lg hover:bg-[#e5d6ba] transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                {t('contact.email.label')}
              </motion.a>
              <motion.a 
                href="tel:+9647511633873"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#d4c5a9] text-[#5a4a3a] rounded-lg hover:bg-[#e5d6ba] transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {t('contact.phone.label')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}