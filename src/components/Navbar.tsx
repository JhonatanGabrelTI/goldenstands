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
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          padding: isScrolled ? '0.8rem 0' : '1.5rem 0',
          boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.3)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(232, 200, 106, 0.1)' : '1px solid transparent',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a 
            href="#inicio" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ 
              fontFamily: 'var(--font-headings)', 
              fontWeight: 800, 
              fontSize: '1.75rem', 
              letterSpacing: '1px',
              color: 'var(--white)'
            }}>
              GOLD<span style={{ color: 'var(--gold)' }}> ARQUITETURA</span>
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-only">
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                >
                  <a 
                    href={link.href} 
                    className="nav-link-item"
                    style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 500, 
                      color: 'var(--text-secondary)',
                      position: 'relative'
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <motion.a 
              href="https://wa.me/5543998420048?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20arquitetura%20promocional%20da%20Gold." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary desktop-only"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(232, 200, 106, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} /> Solicitar Projeto
            </motion.a>

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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(3, 8, 17, 0.7)',
                backdropFilter: 'blur(4px)',
                zIndex: 98,
              }}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '300px',
                background: 'var(--navy-dark)',
                borderLeft: '1px solid rgba(232, 200, 106, 0.15)',
                padding: '6rem 2rem 2rem 2rem',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.4)',
              }}
            >
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {navLinks.map((link, idx) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                  >
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
                  </motion.li>
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
          </>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-only {
          display: flex;
        }
        .mobile-toggle-btn {
          display: none;
        }
        .nav-link-item {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link-item:hover {
          color: var(--gold) !important;
        }
        .nav-link-item:hover::after {
          width: 100%;
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
