import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Por que a Gold', href: '#por-que-gold' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <>
      <motion.nav
        className={`glass-header`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          padding: isScrolled ? '1rem 0' : '1.5rem 0',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ 
              fontFamily: 'var(--font-headings)', 
              fontWeight: 800, 
              fontSize: '1.75rem', 
              letterSpacing: '1px',
              color: 'var(--white)'
            }}>
              GOLD<span style={{ color: 'var(--gold)' }}> ARQUITETURA</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-only">
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 500, 
                      color: 'var(--text-secondary)',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = 'var(--gold)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="https://wa.me/5543998420048?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20arquitetura%20promocional%20da%20Gold." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary desktop-only"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
            >
              <Phone size={16} /> Solicitar Projeto
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--white)',
                cursor: 'pointer',
                display: 'none',
              }}
              className="mobile-toggle-btn"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              background: 'var(--navy-dark)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '6rem 2rem 2rem 2rem',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      display: 'block',
                      padding: '0.5rem 0',
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5543998420048?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20arquitetura%20promocional%20da%20Gold."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: 'auto', width: '100%' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={16} /> Solicitar Projeto
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-only {
          display: flex;
        }
        .mobile-toggle-btn {
          display: none;
        }
        @media (max-width: 992px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
export default Navbar;
