'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

export default function AcademiaSection() {
  return (
    <Section id="academia" className="bg-luxury-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-luxury-gold">
              Nossa História
            </h2>
            
            <div className="space-y-6 text-lg text-luxury-white/80 leading-relaxed">
              <p>
                A NGBJJ nasceu da visão de criar não apenas uma academia, mas um santuário
                dedicado à arte ancestral do Jiu-Jitsu brasileiro. Fundada por mestres de
                linhagem impecável, nossa missão transcende o ensino de técnicas.
              </p>
              
              <p>
                Cultivamos disciplina, respeito e excelência. Cada tatame é um espaço sagrado
                onde tradição e inovação se encontram, onde atletas são forjados não apenas
                fisicamente, mas mentalmente e espiritualmente.
              </p>
              
              <p className="text-luxury-gold font-serif italic">
                "O Jiu-Jitsu não é sobre ser melhor que os outros. É sobre ser melhor do que
                você era ontem."
              </p>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-luxury-gold/30 mt-12"
            />
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] group"
          >
            <div className="absolute inset-0 bg-luxury-gold/10 group-hover:bg-luxury-gold/20 luxury-transition" />
            <Image
              src="https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?w=1200&h=1600&fit=crop&q=80"
              alt="Academia NGBJJ"
              fill
              className="object-cover grayscale group-hover:grayscale-0 luxury-transition"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Galeria de Fotos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24"
        >
          {[
            'photo-1555597673-b21d5c935865',
            'photo-1583244685026-d8519b5e3d21',
            'photo-1594381898411-846e7d193883',
            'photo-1552072805-2a9039d00e57'
          ].map((photoId, index) => (
            <div key={index} className="relative h-64 group overflow-hidden">
              <Image
                src={`https://images.unsplash.com/${photoId}?w=800&h=1000&fit=crop&q=80`}
                alt={`Galeria ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 luxury-transition"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-luxury-black/50 group-hover:bg-luxury-black/0 luxury-transition" />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
