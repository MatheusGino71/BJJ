'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#academia', label: 'A Academia' },
  { href: '#programas', label: 'Programas' },
  { href: '#instrutores', label: 'Instrutores' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-sm border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#home" className="text-2xl font-serif tracking-wider luxury-transition hover:text-luxury-gold">
            NGBJJ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest luxury-transition hover:text-luxury-gold relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-gold group-hover:w-full luxury-transition" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-luxury-white luxury-transition"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-luxury-white luxury-transition"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-luxury-white luxury-transition"
            />
          </button>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-luxury-black z-40 flex items-center justify-center"
          >
            <nav className="flex flex-col space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-serif luxury-transition hover:text-luxury-gold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
