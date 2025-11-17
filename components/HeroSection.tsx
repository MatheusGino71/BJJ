'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Design sem nome.png"
          alt="NGBJJ Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wider mb-6">
            NGBJJ
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px bg-luxury-gold mx-auto max-w-xs mb-8"
          />
          
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-luxury-gold tracking-widest">
            A Arte da Excelência
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-xs uppercase tracking-widest text-luxury-gold">Descubra</span>
            <div className="w-px h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
