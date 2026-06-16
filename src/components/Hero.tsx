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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Generate floating particle elements
  const particles = Array.from({ length: 25 }, (_, i) => ({
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

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
          height: '120%', 
          backgroundImage: 'linear-gradient(to bottom, rgba(6, 16, 34, 0.6) 0%, rgba(3, 8, 17, 0.95) 100%), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop")',
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
              backgroundColor: 'rgba(232, 200, 106, 0.3)',
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="badge"
            variants={itemVariants}
          >
            ✦ Design & Cenografia de Alto Impacto
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            style={{ 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              maxWidth: '900px',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)',
              letterSpacing: '-1px'
            }}
          >
            Referência Nacional em Arquitetura Promocional e <span className="text-gold" style={{ display: 'inline-block' }}>Cenografia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            style={{ 
              fontSize: '1.25rem', 
              maxWidth: '650px', 
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              lineHeight: 1.6,
              textShadow: '0 4px 15px rgba(0,0,0,0.4)'
            }}
          >
            Criamos experiências memoráveis para feiras e eventos corporativos. Estandes sob medida, cenografia impactante e montagem turnkey em todo o Brasil.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div 
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}
          >
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${quoteMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(232, 200, 106, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: ["0 0 0 rgba(232, 200, 106, 0)", "0 0 20px rgba(232, 200, 106, 0.3)", "0 0 0 rgba(232, 200, 106, 0)"]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Solicitar Projeto <ArrowRight size={18} />
            </motion.a>

            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${chatMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} /> Falar no WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient mask at the bottom */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'linear-gradient(to top, var(--navy-dark) 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};
export default Hero;
