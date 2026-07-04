import React from 'react';
import { motion } from 'framer-motion';
import heroBanner from 'figma:asset/ca0b9fce96cb586f916dc273e65c11d48120fcec.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-end justify-center pb-16">
      </div>
    </section>
  );
}