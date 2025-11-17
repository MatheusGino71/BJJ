'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';
import { useState } from 'react';

interface Instructor {
  id: string;
  name: string;
  belt: string;
  specialty: string;
  bio: string;
  achievements: string[];
  image: string;
}

const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Mestre Alexandre Silva',
    belt: 'Faixa Coral',
    specialty: 'Jiu-Jitsu Tradicional',
    bio: 'Com mais de 35 anos dedicados à arte suave, Mestre Alexandre é uma lenda viva do Jiu-Jitsu brasileiro. Discípulo direto de mestres históricos, ele traz consigo não apenas técnica impecável, mas também a filosofia e tradição que definem o verdadeiro espírito do BJJ.',
    achievements: [
      'Campeão Mundial IBJJF (1995, 1997)',
      '7x Campeão Pan-Americano',
      'Formou mais de 50 faixas pretas',
      'Membro do Hall da Fama do BJJ',
    ],
    image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?w=600&h=800&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Professor Marcus Vinícius',
    belt: 'Faixa Preta 3º Grau',
    specialty: 'Competição & No-Gi',
    bio: 'Competidor ativo e técnico renomado, Professor Marcus combina a tradição do Jiu-Jitsu com métodos modernos de treinamento. Especialista em preparação de atletas de alto rendimento.',
    achievements: [
      'Medalhista Mundial IBJJF',
      '5x Campeão Brasileiro',
      'Especialista em No-Gi Grappling',
      'Coach de atletas profissionais',
    ],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Professora Isabella Costa',
    belt: 'Faixa Preta 2º Grau',
    specialty: 'Jiu-Jitsu Feminino',
    bio: 'Pioneira no Jiu-Jitsu feminino de alto nível, Professora Isabella é referência em técnica e empoderamento. Sua abordagem única inspira mulheres de todas as idades a descobrirem sua força através do BJJ.',
    achievements: [
      'Campeã Mundial IBJJF (2018)',
      '3x Campeã Pan-Americano',
      'Embaixadora do Jiu-Jitsu Feminino',
      'Mentora de atletas femininas',
    ],
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Professor Rafael Monteiro',
    belt: 'Faixa Preta 1º Grau',
    specialty: 'Kids & Juvenil',
    bio: 'Especialista em pedagogia do Jiu-Jitsu infantil, Professor Rafael tem o dom de transformar treinos em experiências educativas e divertidas. Seu trabalho com jovens atletas é reconhecido nacionalmente.',
    achievements: [
      'Formação em Pedagogia do Esporte',
      'Coach de Campeões Juvenis',
      '10+ anos ensinando crianças',
      'Desenvolvedor de metodologia própria',
    ],
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=800&fit=crop&q=80',
  },
];

export default function InstrutoresSection() {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  return (
    <Section id="instrutores" className="bg-luxury-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-luxury-gold">
            Nossos Mestres
          </h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Artesãos da técnica, guardiões da tradição
          </p>
        </motion.div>

        {/* Grid de Instrutores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedInstructor(instructor)}
              className="relative group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 luxury-transition"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif mb-1 text-luxury-white">
                    {instructor.name}
                  </h3>
                  <p className="text-luxury-gold text-sm mb-2">{instructor.belt}</p>
                  <p className="text-luxury-white/70 text-xs uppercase tracking-widest">
                    {instructor.specialty}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-luxury-gold opacity-0 group-hover:opacity-100 luxury-transition pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Biografia */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInstructor(null)}
            className="fixed inset-0 bg-luxury-black/95 z-50 flex items-center justify-center p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-luxury-royal border border-luxury-gold/30 max-w-4xl w-full p-8 md:p-12 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-4 right-4 text-luxury-white hover:text-luxury-gold luxury-transition text-3xl"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Foto */}
                <div className="relative h-96 md:h-full">
                  <Image
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Bio */}
                <div>
                  <h3 className="text-4xl font-serif mb-2 text-luxury-white">
                    {selectedInstructor.name}
                  </h3>
                  <p className="text-luxury-gold text-lg mb-1">{selectedInstructor.belt}</p>
                  <p className="text-luxury-white/70 text-sm uppercase tracking-widest mb-6">
                    {selectedInstructor.specialty}
                  </p>

                  <div className="h-px bg-luxury-gold/30 mb-6" />

                  <p className="text-luxury-white/80 leading-relaxed mb-8">
                    {selectedInstructor.bio}
                  </p>

                  <h4 className="text-xl font-serif text-luxury-gold mb-4">
                    Conquistas
                  </h4>
                  <ul className="space-y-2">
                    {selectedInstructor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-luxury-gold mt-1">•</span>
                        <span className="text-luxury-white/70">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
