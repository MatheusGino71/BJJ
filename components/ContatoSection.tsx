'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { useState } from 'react';

export default function ContatoSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contato" className="bg-luxury-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-luxury-gold">
            Entre em Contato
          </h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Inicie sua jornada de excelência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-luxury-gold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-luxury-royal border border-luxury-gold/30 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none luxury-transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest text-luxury-gold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-luxury-royal border border-luxury-gold/30 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none luxury-transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-luxury-gold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-luxury-royal border border-luxury-gold/30 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none luxury-transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest text-luxury-gold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-luxury-royal border border-luxury-gold/30 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none luxury-transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-luxury-gold text-luxury-black py-4 uppercase tracking-widest font-medium hover:bg-luxury-gold/90 luxury-transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </motion.button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Endereço */}
            <div>
              <h3 className="text-2xl font-serif text-luxury-gold mb-4">Localização</h3>
              <p className="text-luxury-white/70 leading-relaxed">
                Av. Exemplo Premium, 1234<br />
                Bairro Elite - Cidade, Estado<br />
                CEP: 00000-000
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-2xl font-serif text-luxury-gold mb-4">Contato Direto</h3>
              <p className="text-luxury-white/70 leading-relaxed">
                <span className="block mb-2">Telefone: (00) 0000-0000</span>
                <span className="block mb-2">WhatsApp: (00) 00000-0000</span>
                <span className="block">Email: contato@ngbjj.com.br</span>
              </p>
            </div>

            {/* Horário de Atendimento */}
            <div>
              <h3 className="text-2xl font-serif text-luxury-gold mb-4">Horário de Atendimento</h3>
              <p className="text-luxury-white/70 leading-relaxed">
                Segunda a Sexta: 06:00 - 21:00<br />
                Sábado: 09:00 - 16:00<br />
                Domingo: Fechado
              </p>
            </div>

            {/* Mapa */}
            <div className="relative h-64 bg-luxury-royal border border-luxury-gold/20">
              <div className="absolute inset-0 flex items-center justify-center text-luxury-white/50">
                [Integração com Google Maps]
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
