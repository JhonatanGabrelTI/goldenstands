import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth, heavy parallax effects for luxury feel
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const whatsappNumber = "5543998420048";
  const quoteMessage = encodeURIComponent("Olá! Estou no site da Gold Arquitetura e gostaria de solicitar um projeto de alto padrão.");
  const chatMessage = encodeURIComponent("Olá! Gostaria de conversar com um arquiteto da Gold sobre um projeto exclusivo.");

  // Slower, elegant animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] as const // Elegant ease out
      } 
    }
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
        background: 'var(--onyx-dark)',
      }}
    >
      {/* Background Image with Deep Parallax and Scale */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%', 
          backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
          scale: scale,
          zIndex: 1,
        }}
      >
        {/* Luxury Vignette/Overlay - Deep Onyx Gradient */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(5,5,5,0.95) 100%)',
        }} />
      </motion.div>

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
          {/* Badge - Minimalist */}
          <motion.div 
            className="badge"
            variants={textRevealVariants}
            style={{ 
              borderColor: 'rgba(212, 175, 55, 0.3)',
              color: 'var(--gold-light)',
              letterSpacing: '0.25em',
              padding: '0.5rem 1.5rem',
              background: 'transparent'
            }}
          >
            Design & Cenografia de Alto Impacto
          </motion.div>

          {/* Heading - Serif Luxury Typography */}
          <div style={{ overflow: 'hidden', paddingBottom: '10px' }}>
            <motion.h1 
              variants={textRevealVariants}
              style={{ 
                fontFamily: 'var(--font-headings)',
                fontWeight: 400, 
                textTransform: 'none', 
                maxWidth: '900px',
                lineHeight: 1.1,
                marginBottom: '2rem',
                color: 'var(--white)',
                letterSpacing: '-0.02em'
              }}
            >
              Exclusividade em <br/>
              <span className="text-gold" style={{ fontStyle: 'italic', display: 'inline-block', fontWeight: 500 }}>Arquitetura Promocional</span>
            </motion.h1>
          </div>

          {/* Subtitle - Thin, wide, elegant */}
          <div style={{ overflow: 'hidden' }}>
            <motion.p 
              variants={textRevealVariants}
              style={{ 
                fontSize: '1.15rem', 
                maxWidth: '550px', 
                color: 'var(--text-secondary)',
                marginBottom: '4rem',
                lineHeight: 1.8,
                fontWeight: 300,
                letterSpacing: '0.02em'
              }}
            >
              Projetos autorais e execução impecável para marcas que exigem o extraordinário em feiras, convenções e ambientes corporativos.
            </motion.p>
          </div>

          {/* Call-to-actions */}
          <motion.div 
            variants={textRevealVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}
          >
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${quoteMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Solicitar Projeto <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </motion.a>

            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=${chatMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Phone size={18} style={{ marginRight: '0.5rem' }} /> Atendimento VIP
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Fade to next section */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '250px',
          background: 'linear-gradient(to top, var(--onyx-dark) 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};
export default Hero;
