import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  const whatsappNumber = "5543998420048";
  const message = encodeURIComponent("Olá! Preciso de um projeto de estande ou cenografia para um evento. Poderiam me ajudar?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Generate floating particles for CTA section
  const ctaParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * -15
  }));

  return (
    <section 
      style={{
        position: 'relative',
        padding: '10rem 0',
        background: 'var(--navy-dark)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background with parallax static overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(to bottom, rgba(6, 16, 34, 0.85) 0%, rgba(3, 8, 17, 0.95) 100%), url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 1,
        }}
      />

      {/* Floating particles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
        {ctaParticles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: 'rgba(232, 200, 106, 0.25)',
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{ y: ['0vh', '-100vh'], opacity: [0, 0.7, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div 
          className="glass-panel-gold cta-content-box"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '5rem 3.5rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(232, 200, 106, 0.15), 0 15px 50px rgba(0, 0, 0, 0.4)',
            borderRadius: '20px'
          }}
        >
          <motion.span 
            className="badge" 
            style={{ marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fale Conosco
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', 
              fontWeight: 800, 
              color: 'var(--white)',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}
          >
            Planejando sua próxima feira ou evento?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem auto',
              lineHeight: 1.7
            }}
          >
            Nossa equipe de arquitetos e cenógrafos está pronta para transformar sua participação em feiras e eventos em uma experiência memorável de marca.
          </motion.p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-cta-large"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(232, 200, 106, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: ["0 0 0 rgba(232, 200, 106, 0)", "0 0 25px rgba(232, 200, 106, 0.3)", "0 0 0 rgba(232, 200, 106, 0)"]
            }}
            transition={{
              boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ 
              fontSize: '1.15rem', 
              padding: '1.2rem 2.5rem',
              borderRadius: '10px'
            }}
          >
            <MessageSquare size={20} /> Falar com um Arquiteto Agora <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {styleTag}
    </section>
  );
};

const styleTag = (
  <style>{`
    .cta-content-box {
      border-color: rgba(232, 200, 106, 0.2) !important;
    }
    .btn-cta-large {
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `}</style>
);

export default CTA;
