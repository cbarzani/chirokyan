import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Mic2, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('about.title')}</h2>
            <p className="text-[#5a4a3a]/70 text-lg">
              {t('about.description')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, numberKey: 'about.stat1.number', labelKey: 'about.stat1.label', delay: 0.1 },
              { icon: Mic2, numberKey: 'about.stat2.number', labelKey: 'about.stat2.label', delay: 0.2 },
              { icon: Calendar, numberKey: 'about.stat3.number', labelKey: 'about.stat3.label', delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#f5f1e8] p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-[#5a4a3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#d4c5a9]" />
                </div>
                <h3 className="text-3xl text-[#5a4a3a] mb-2">{t(stat.numberKey)}</h3>
                <p className="text-[#5a4a3a]/70">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}