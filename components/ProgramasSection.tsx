'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { useState } from 'react';

interface Program {
  id: string;
  title: string;
  description: string;
  details: string;
  level: string;
}

const programs: Program[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    description: 'A base sólida para sua jornada',
    details: 'Aprenda os princípios essenciais do Jiu-Jitsu com foco em postura, controle e técnicas fundamentais. Ideal para iniciantes que buscam construir uma base sólida.',
    level: 'Iniciante',
  },
  {
    id: 'avancado',
    title: 'Avançado',
    description: 'Refinamento técnico de elite',
    details: 'Técnicas avançadas, estratégias de competição e desenvolvimento de seu próprio estilo. Para atletas experientes que buscam excelência.',
    level: 'Faixa Roxa+',
  },
  {
    id: 'kids',
    title: 'Kids',
    description: 'Formando campeões desde cedo',
    details: 'Programa especializado para crianças de 4 a 12 anos, focando em disciplina, respeito, coordenação motora e autoconfiança através do Jiu-Jitsu.',
    level: '4-12 anos',
  },
  {
    id: 'competicao',
    title: 'Competição',
    description: 'Preparação para o mais alto nível',
    details: 'Treinos específicos para competidores, com foco em condicionamento, estratégia de luta e preparação mental. Apenas por convite.',
    level: 'Atletas',
  },
];

export default function ProgramasSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section id="programas" className="bg-luxury-royal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-luxury-gold">
            Nossos Programas
          </h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Caminhos cuidadosamente elaborados para cada fase da sua evolução no Jiu-Jitsu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative bg-luxury-black p-8 border border-luxury-gold/20 hover:border-luxury-gold luxury-transition cursor-pointer overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl group-hover:bg-luxury-gold/10 luxury-transition" />

              {/* Content */}
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-luxury-gold/70">
                  {program.level}
                </span>
                
                <h3 className="text-3xl font-serif mt-4 mb-3 text-luxury-white group-hover:text-luxury-gold luxury-transition">
                  {program.title}
                </h3>
                
                <p className="text-luxury-white/60 mb-6">
                  {program.description}
                </p>

                {/* Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredId === program.id ? 'auto' : 0,
                    opacity: hoveredId === program.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-luxury-gold/20">
                    <p className="text-sm text-luxury-white/70 leading-relaxed">
                      {program.details}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow Indicator */}
                <motion.div
                  animate={{
                    x: hoveredId === program.id ? 5 : 0,
                  }}
                  className="mt-6 flex items-center space-x-2 text-luxury-gold text-sm"
                >
                  <span className="uppercase tracking-widest">Saiba Mais</span>
                  <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
