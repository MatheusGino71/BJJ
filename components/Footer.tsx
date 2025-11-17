'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Slogan */}
          <div>
            <h3 className="text-3xl font-serif mb-3 text-luxury-gold">NGBJJ</h3>
            <p className="text-luxury-white/60 italic">A Arte da Excelência</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {['Home', 'A Academia', 'Programas', 'Instrutores', 'Horários', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-luxury-white/60 hover:text-luxury-gold luxury-transition text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-4">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-luxury-gold/30 flex items-center justify-center hover:border-luxury-gold hover:bg-luxury-gold/10 luxury-transition"
                  aria-label={social}
                >
                  <span className="text-luxury-white/60 hover:text-luxury-gold text-xs">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-luxury-gold/20 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-luxury-white/40 text-sm"
        >
          <p>© {currentYear} NGBJJ. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com excelência e disciplina.</p>
        </motion.div>
      </div>
    </footer>
  );
}
