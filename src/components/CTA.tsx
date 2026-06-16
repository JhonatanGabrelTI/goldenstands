import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const CTA: React.FC = () => {
  const whatsappNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Preciso de um projeto de estande ou cenografia para um evento. Poderiam me ajudar?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

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
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 31, 68, 0.85) 0%, rgba(5, 18, 41, 0.95) 100%), url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="glass-panel-gold cta-content-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '4rem 3rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-gold), var(--shadow-lg)'
          }}
        >
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Fale Conosco</span>
          <h2 
            style={{ 
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', 
              fontWeight: 800, 
              color: 'var(--white)',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}
          >
            Planejando sua próxima feira ou evento?
          </h2>
          <p 
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem auto'
            }}
          >
            Nossa equipe de arquitetos e cenógrafos está pronta para transformar sua participação em feiras e eventos em uma experiência memorável de marca.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-cta-large"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(212, 175, 55, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              fontSize: '1.15rem', 
              padding: '1.2rem 2.5rem',
              borderRadius: '10px'
            }}
          >
            <MessageSquare size={20} /> Falar com um Arquiteto Agora
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
      border-color: rgba(212, 175, 55, 0.15) !important;
    }
    .btn-cta-large {
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `}</style>
);

export default CTA;
