import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export const Depoimentos: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marina Costa",
      role: "Diretora de Marketing",
      company: "Samsung Brasil",
      text: "A Gold superou todas as expectativas na Expo Tech 2025. O estande de 200m² ficou impecável, com acabamento de altíssimo nível e iluminação cenográfica que destacou nossos produtos de forma única. Entrega impecável no prazo.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Rafael Andrade",
      role: "Gerente de Eventos",
      company: "Grupo Boticário",
      text: "Trabalhamos com a Gold em 5 feiras consecutivas e a qualidade só aumenta. A equipe de plantão durante a montagem resolve tudo com agilidade. O projeto 3D que recebemos era idêntico ao resultado final. Profissionalismo raro.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Patrícia Oliveira",
      role: "Coordenadora de Trade Marketing",
      company: "L'Oréal Brasil",
      text: "A cenografia do nosso lançamento de linha foi simplesmente cinematográfica. A Gold criou uma experiência imersiva que encantou convidados e gerou enorme repercussão nas redes sociais. Parceria que vale ouro.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<any>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as any }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" as any }
    })
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startAutoPlay();
  };

  return (
    <section id="depoimentos" className="section" style={{ background: 'var(--navy-dark)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center">
          <span className="badge">Depoimentos</span>
          <h2>A Opinião de Quem <span className="text-gold">Confia</span></h2>
          <p>O sucesso dos maiores eventos e feiras do Brasil é impulsionado pela criatividade e excelência da Gold Arquitetura.</p>
        </div>

        {/* Carousel Window */}
        <div 
          className="testimonial-carousel-container"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="testimonial-slider-track">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-panel testimonial-card"
              >
                <Quote size={80} className="quote-bg-icon" />
                
                <p className="testimonial-text">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">
                      {testimonials[currentIndex].role} — <span className="text-gold">{testimonials[currentIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button onClick={handlePrev} className="carousel-control-btn prev-btn" aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="carousel-control-btn next-btn" aria-label="Próximo">
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`indicator-dot ${currentIndex === idx ? 'active' : ''}`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .testimonial-carousel-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          padding: 0 4rem;
        }

        .testimonial-slider-track {
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-card {
          width: 100%;
          padding: 3.5rem;
          border-color: rgba(255, 255, 255, 0.05);
          position: relative;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          overflow: hidden;
        }

        .quote-bg-icon {
          position: absolute;
          top: -10px;
          right: 20px;
          color: rgba(212, 175, 55, 0.05);
          pointer-events: none;
          z-index: 0;
        }

        .testimonial-text {
          font-size: 1.25rem;
          color: var(--white);
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 1rem;
          position: relative;
          z-index: 1;
        }

        .author-avatar {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--gold);
          box-shadow: var(--shadow-gold);
        }

        .author-name {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.2rem;
        }

        .author-role {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Controls */
        .carousel-control-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .carousel-control-btn:hover {
          background: var(--gold);
          color: var(--navy-dark);
          border-color: var(--gold);
          box-shadow: var(--shadow-gold);
        }

        .prev-btn {
          left: 0;
        }

        .next-btn {
          right: 0;
        }

        /* Indicators */
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .indicator-dot.active {
          width: 30px;
          border-radius: 10px;
          background: var(--gold);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .testimonial-carousel-container {
            padding: 0;
          }
          .carousel-control-btn {
            display: none;
          }
          .testimonial-card {
            padding: 2rem;
          }
          .testimonial-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Depoimentos;
