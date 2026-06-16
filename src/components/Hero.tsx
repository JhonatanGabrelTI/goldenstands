import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Generate floating particle elements
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20
  }));

  const whatsappNumber = "5543998420048";
  const quoteMessage = encodeURIComponent("Olá! Estou no site da Gold Arquitetura e gostaria de solicitar um projeto para estande ou cenografia.");
  const chatMessage = encodeURIComponent("Olá! Gostaria de conversar com um arquiteto da Gold sobre um projeto de estande ou cenografia.");

  return (
    <section 
      id="inicio"
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--navy-dark)',
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%', // Make it taller for scroll room
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 31, 68, 0.7) 0%, rgba(5, 18, 41, 0.95) 100%), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
          zIndex: 1,
        }}
      />

      {/* Floating Particles Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
          overflow: 'hidden'
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              backgroundColor: 'rgba(212, 175, 55, 0.3)',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 3,
          color: 'var(--white)',
          textAlign: 'left'
        }}
      >
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✦ Design & Cenografia de Alto Impacto
          </motion.div>

          {/* Heading */}
          <h1 
            style={{ 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              maxWidth: '850px',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}
          >
            Referência Nacional em Arquitetura Promocional e <span className="text-gold" style={{ display: 'inline-block' }}>Cenografia</span>
          </h1>

          {/* Subtitle */}
          <p 
            style={{ 
              fontSize: '1.25rem', 
              maxWidth: '650px', 
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            Criamos experiências memoráveis para feiras e eventos corporativos. Estandes sob medida, cenografia impactante e montagem turnkey em todo o Brasil.
          </p>

          {/* Call-to-actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${quoteMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Projeto <ArrowRight size={18} />
            </motion.a>

            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${chatMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} /> Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient mask at the bottom */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, var(--navy-dark) 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};
export default Hero;
