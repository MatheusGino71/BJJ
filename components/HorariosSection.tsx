'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { useState } from 'react';

interface Schedule {
  day: string;
  time: string;
  program: string;
  instructor: string;
  level: string;
}

const schedules: Schedule[] = [
  { day: 'Segunda', time: '06:00 - 07:30', program: 'Fundamentos', instructor: 'Prof. Rafael', level: 'Todos' },
  { day: 'Segunda', time: '12:00 - 13:30', program: 'Avançado', instructor: 'Prof. Marcus', level: 'Faixa Roxa+' },
  { day: 'Segunda', time: '18:00 - 19:00', program: 'Kids', instructor: 'Prof. Rafael', level: 'Infantil' },
  { day: 'Segunda', time: '19:30 - 21:00', program: 'Competição', instructor: 'Mestre Alexandre', level: 'Atletas' },
  
  { day: 'Terça', time: '06:00 - 07:30', program: 'Fundamentos', instructor: 'Profa. Isabella', level: 'Todos' },
  { day: 'Terça', time: '12:00 - 13:30', program: 'Avançado', instructor: 'Prof. Marcus', level: 'Faixa Roxa+' },
  { day: 'Terça', time: '18:00 - 19:00', program: 'Kids', instructor: 'Prof. Rafael', level: 'Infantil' },
  { day: 'Terça', time: '19:30 - 21:00', program: 'Fundamentos', instructor: 'Mestre Alexandre', level: 'Todos' },
  
  { day: 'Quarta', time: '06:00 - 07:30', program: 'Fundamentos', instructor: 'Prof. Rafael', level: 'Todos' },
  { day: 'Quarta', time: '12:00 - 13:30', program: 'Avançado', instructor: 'Prof. Marcus', level: 'Faixa Roxa+' },
  { day: 'Quarta', time: '18:00 - 19:00', program: 'Kids', instructor: 'Prof. Rafael', level: 'Infantil' },
  { day: 'Quarta', time: '19:30 - 21:00', program: 'Competição', instructor: 'Mestre Alexandre', level: 'Atletas' },
  
  { day: 'Quinta', time: '06:00 - 07:30', program: 'Fundamentos', instructor: 'Profa. Isabella', level: 'Todos' },
  { day: 'Quinta', time: '12:00 - 13:30', program: 'Avançado', instructor: 'Prof. Marcus', level: 'Faixa Roxa+' },
  { day: 'Quinta', time: '18:00 - 19:00', program: 'Kids', instructor: 'Prof. Rafael', level: 'Infantil' },
  { day: 'Quinta', time: '19:30 - 21:00', program: 'Fundamentos', instructor: 'Mestre Alexandre', level: 'Todos' },
  
  { day: 'Sexta', time: '06:00 - 07:30', program: 'Fundamentos', instructor: 'Prof. Rafael', level: 'Todos' },
  { day: 'Sexta', time: '12:00 - 13:30', program: 'Avançado', instructor: 'Prof. Marcus', level: 'Faixa Roxa+' },
  { day: 'Sexta', time: '18:00 - 19:00', program: 'Kids', instructor: 'Prof. Rafael', level: 'Infantil' },
  { day: 'Sexta', time: '19:30 - 21:00', program: 'Fundamentos', instructor: 'Profa. Isabella', level: 'Todos' },
  
  { day: 'Sábado', time: '09:00 - 10:30', program: 'Fundamentos', instructor: 'Mestre Alexandre', level: 'Todos' },
  { day: 'Sábado', time: '10:30 - 12:00', program: 'Kids', instructor: 'Prof. Rafael', level: 'Infantil' },
  { day: 'Sábado', time: '14:00 - 16:00', program: 'Competição', instructor: 'Prof. Marcus', level: 'Atletas' },
];

const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const programs = ['Todos', 'Fundamentos', 'Avançado', 'Kids', 'Competição'];

export default function HorariosSection() {
  const [selectedProgram, setSelectedProgram] = useState('Todos');

  const filteredSchedules = selectedProgram === 'Todos'
    ? schedules
    : schedules.filter(s => s.program === selectedProgram);

  return (
    <Section id="horarios" className="bg-luxury-royal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-luxury-gold">
            Horários
          </h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Planeje seu treino de excelência
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {programs.map((program) => (
            <button
              key={program}
              onClick={() => setSelectedProgram(program)}
              className={`px-6 py-2 border luxury-transition uppercase tracking-widest text-sm ${
                selectedProgram === program
                  ? 'bg-luxury-gold text-luxury-black border-luxury-gold'
                  : 'bg-transparent text-luxury-white border-luxury-gold/30 hover:border-luxury-gold'
              }`}
            >
              {program}
            </button>
          ))}
        </motion.div>

        {/* Grid de Horários */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {daysOfWeek.map((day) => {
            const daySchedules = filteredSchedules.filter(s => s.day === day);
            
            if (daySchedules.length === 0) return null;

            return (
              <motion.div
                key={day}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-luxury-black border border-luxury-gold/20 p-6"
              >
                <h3 className="text-2xl font-serif text-luxury-gold mb-4 border-b border-luxury-gold/30 pb-2">
                  {day}
                </h3>
                
                <div className="space-y-4">
                  {daySchedules.map((schedule, index) => (
                    <motion.div
                      key={`${day}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="text-luxury-gold text-sm font-medium mb-1">
                        {schedule.time}
                      </div>
                      <div className="text-luxury-white font-serif text-lg group-hover:text-luxury-gold luxury-transition">
                        {schedule.program}
                      </div>
                      <div className="text-luxury-white/60 text-sm">
                        {schedule.instructor}
                      </div>
                      <div className="text-luxury-white/40 text-xs uppercase tracking-wider mt-1">
                        {schedule.level}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
