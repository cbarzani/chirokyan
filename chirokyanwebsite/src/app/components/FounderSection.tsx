import React from 'react';
import { motion } from 'motion/react';
import founderImage from 'figma:asset/ba66df8ce7a39936827bf79b83fb66a7ca5263ab.png';
import { useLanguage } from '../contexts/LanguageContext';

export function FounderSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('about.founder.title')}</h2>
            <p className="text-[#5a4a3a]/70 text-lg">
              {t('about.founder.bio')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#5a4a3a] to-[#d4c5a9] rounded-2xl transform"
                ></motion.div>
                <motion.img 
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                  src={founderImage} 
                  alt="Hazhar Salam - Founder of چیرۆکیان"
                  className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Founder Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl text-[#5a4a3a] mb-4">{t('about.founder.name')}</h3>
              <p className="text-2xl mb-1">{t('about.founder.role')}</p>
              
              <div className="mt-8 pt-8 border-t border-[#5a4a3a]/20">
                <p className="text-[#5a4a3a]/60 text-sm mb-2">{t('contact.email.label')}</p>
                <motion.a 
                  href="mailto:hazharsalam62@gmail.com" 
                  whileHover={{ x: 5 }}
                  className="text-[#5a4a3a] hover:text-[#6a5a4a] transition-colors inline-flex items-center gap-2"
                >
                  <span>hazharsalam62@gmail.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}