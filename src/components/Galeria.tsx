import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  size: 'small' | 'medium' | 'large'; 
}

export const Galeria: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Samsung Expo Tech",
      category: "Estandes Construídos",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      description: "Estrutura imponente de 200m² combinando aço escovado e vidro translúcido. A iluminação cenográfica LED direcionada cria pontos focais para as áreas de interação com os produtos da marca.",
      size: "large"
    },
    {
      id: 2,
      title: "L'Oréal Experience",
      category: "Cenografia",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      description: "Uma verdadeira obra de arte floral combinada com projeção mapeada de alta definição. Criamos uma jornada sensorial para o lançamento da nova linha premium.",
      size: "medium"
    },
    {
      id: 3,
      title: "Audi Exclusive",
      category: "Showroom",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      description: "Minimalismo elevado à máxima potência. O showroom permanente utiliza painéis acústicos pretos e backlights para dar absoluto destaque às linhas dos veículos.",
      size: "small"
    },
    {
      id: 4,
      title: "Nike Lab",
      category: "PDV & Ativação",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      description: "Quiosque de alto impacto visual utilizando malha metálica e telas curvas. O design industrial contrasta com o piso polido negro, criando uma atmosfera urbana.",
      size: "medium"
    },
    {
      id: 5,
      title: "Google Summit",
      category: "Estandes Mistos",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop",
      description: "Projeto inteligente que une estrutura técnica oculta com marcenaria personalizada de precisão, mantendo a linguagem visual limpa e fluida da gigante tech.",
      size: "small"
    },
    {
      id: 6,
      title: "Boticário Essence",
      category: "Cenografia",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
      description: "Cenografia de luxo para convenção de diretores, transformando um galpão frio em uma experiência intimista através de tecidos nobres e iluminação dramática.",
      size: "large"
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="portfolio" className="section" style={{ background: 'var(--onyx-dark)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center" style={{ maxWidth: '900px', margin: '0 auto 6rem auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              display: 'inline-block', 
              borderBottom: '1px solid var(--gold)', 
              paddingBottom: '0.5rem',
              marginBottom: '2rem',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.85rem'
            }}
          >
            Nossa Galeria
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{ fontFamily: 'var(--font-headings)', fontWeight: 400 }}
          >
            Projetos <span className="text-gold" style={{ fontStyle: 'italic' }}>Notáveis</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '1.5rem auto 0 auto' }}
          >
            Explore uma seleção restrita de nossas execuções de altíssimo padrão em feiras, shows e ambientes corporativos.
          </motion.p>
        </div>

        {/* Pinterest Style Grid */}
        <motion.div 
          className="gallery-masonry-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`gallery-item-luxury size-${item.size}`}
              onClick={() => setSelectedItem(item)}
              variants={itemVariants}
            >
              <div className="gallery-img-wrapper img-reveal-wrapper">
                <motion.div 
                  className="img-reveal-overlay"
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  style={{ transformOrigin: "bottom", background: "var(--onyx-dark)" }}
                />
                <img src={item.image} alt={item.title} className="gallery-card-img" />
                
                {/* Overlay details */}
                <div className="gallery-card-overlay-luxury">
                  <div className="gallery-card-info-luxury">
                    <span className="gallery-card-cat-luxury">{item.category}</span>
                    <h4 className="gallery-card-title-luxury">{item.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.5 }}
              className="gallery-modal-overlay"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="gallery-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button className="modal-close-btn" onClick={() => setSelectedItem(null)} aria-label="Fechar">
                  <X size={28} strokeWidth={1} />
                </button>

                {/* Modal Layout */}
                <div className="modal-inner-grid">
                  <div className="modal-img-container">
                    <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
                  </div>
                  <div className="modal-details">
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ 
                        color: 'var(--gold-dark)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.15em', 
                        fontSize: '0.75rem',
                        display: 'block',
                        marginBottom: '1rem'
                      }}>
                        {selectedItem.category}
                      </span>
                      <h3 style={{ 
                        fontFamily: 'var(--font-headings)', 
                        fontSize: '2.5rem', 
                        fontWeight: 400,
                        color: 'var(--white)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                      }}>
                        {selectedItem.title}
                      </h3>
                      <div style={{ width: '40px', height: '1px', background: 'var(--gold)', marginBottom: '2rem' }} />
                      <p style={{ 
                        fontSize: '1rem', 
                        color: 'var(--text-secondary)', 
                        lineHeight: 1.8, 
                        fontWeight: 300 
                      }}>
                        {selectedItem.description}
                      </p>
                    </div>
                    
                    <a
                      href={`https://wa.me/5543998420048?text=${encodeURIComponent(`Olá! Achei fascinante o projeto "${selectedItem.title}" e gostaria de discutir uma execução com esse nível de excelência.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ width: 'fit-content' }}
                    >
                      Discutir Projeto <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        /* Masonry Grid Layout */
        .gallery-masonry-grid {
          column-count: 3;
          column-gap: 2rem;
          width: 100%;
        }

        .gallery-item-luxury {
          break-inside: avoid;
          margin-bottom: 2rem;
          position: relative;
          cursor: pointer;
          display: block;
        }

        .gallery-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Set heights depending on size prop */
        .size-small .gallery-img-wrapper { height: 300px; }
        .size-medium .gallery-img-wrapper { height: 420px; }
        .size-large .gallery-img-wrapper { height: 550px; }

        .gallery-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
          filter: brightness(0.85) grayscale(20%);
        }

        .gallery-item-luxury:hover .gallery-card-img {
          transform: scale(1.05);
          filter: brightness(1) grayscale(0%);
        }

        /* Overlay */
        .gallery-card-overlay-luxury {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
          padding: 3rem 2rem 2rem 2rem;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .gallery-item-luxury:hover .gallery-card-overlay-luxury {
          transform: translateY(0);
          opacity: 1;
        }

        .gallery-card-info-luxury {
          text-align: left;
        }

        .gallery-card-cat-luxury {
          font-size: 0.7rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .gallery-card-title-luxury {
          font-size: 1.35rem;
          font-family: var(--font-headings);
          font-weight: 400;
          color: var(--white);
          letter-spacing: 0.02em;
        }

        /* Lightbox Modal */
        .gallery-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 2rem;
        }

        .gallery-modal-content {
          max-width: 1100px;
          width: 100%;
          position: relative;
          background: var(--onyx);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          padding: 0;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.4s ease;
        }

        .modal-close-btn:hover {
          color: var(--white);
          transform: rotate(90deg);
        }

        .modal-inner-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
        }

        .modal-img-container {
          height: 600px;
          width: 100%;
          overflow: hidden;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-details {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .gallery-masonry-grid {
            column-count: 2;
          }
          .modal-inner-grid {
            grid-template-columns: 1fr;
          }
          .modal-img-container {
            height: 400px;
          }
          .modal-details {
            padding: 3rem;
          }
        }

        @media (max-width: 576px) {
          .gallery-masonry-grid {
            column-count: 1;
          }
          .gallery-modal-overlay {
            padding: 1rem;
          }
          .modal-details {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Galeria;
