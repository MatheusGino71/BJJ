'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-luxury-black z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-serif text-luxury-gold mb-8"
        >
          NGBJJ
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-luxury-gold mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-luxury-white/70 mt-6 tracking-widest text-sm uppercase"
        >
          Carregando Excelência...
        </motion.p>
      </motion.div>
    </div>
  );
}
