import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  size: 'small' | 'medium' | 'large'; // Denotes block dimensions for Pinterest-style layout
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
      title: "Estande Samsung - Expo Tech 2025",
      category: "Estandes Construídos",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      description: "Estande de 200m² com estrutura em aço e vidro, iluminação cenográfica LED e áreas interativas para demonstração de produtos.",
      size: "large"
    },
    {
      id: 2,
      title: "Cenografia Lançamento L'Oréal",
      category: "Cenografia",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      description: "Ambientação cenográfica imersiva para lançamento de linha de cosméticos, com projeção mapeada e elementos florais em escala.",
      size: "medium"
    },
    {
      id: 3,
      title: "Showroom Corporativo Audi",
      category: "Showroom",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      description: "Showroom permanente com design minimalista, painéis retroiluminados e mobiliário exclusivo para exposição de veículos.",
      size: "small"
    },
    {
      id: 4,
      title: "Quiosque Promocional Nike",
      category: "PDV & Ativação",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      description: "Quiosque de ativação de marca em shopping com estrutura modular, telas interativas e acabamento em aço escovado.",
      size: "medium"
    },
    {
      id: 5,
      title: "Estande Misto Google - Web Summit",
      category: "Estandes Mistos",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop",
      description: "Projeto misto combinando estrutura octanorm com elementos personalizados em MDF e impressão digital de alta resolução.",
      size: "small"
    },
    {
      id: 6,
      title: "Convenção Anual Grupo Boticário",
      category: "Cenografia",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
      description: "Cenografia completa para convenção de 3.000 pessoas, incluindo palco principal, backdrop e ambientação temática de todos os espaços.",
      size: "large"
    }
  ];

  return (
    <section id="portfolio" className="section" style={{ background: 'linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center">
          <span className="badge">Portfólio</span>
          <h2>Projetos e <span className="text-gold">Realizações</span></h2>
          <p>Veja nossos estandes, cenografias e showrooms em ação nos maiores eventos e feiras do Brasil.</p>
        </div>

        {/* Pinterest Style Grid */}
        <div className="gallery-masonry-grid">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`gallery-item-card size-${item.size}`}
              onClick={() => setSelectedItem(item)}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={item.image} alt={item.title} className="gallery-card-img" />
              
              {/* Overlay elements */}
              <div className="gallery-card-overlay">
                <div className="zoom-icon-wrapper">
                  <ZoomIn size={24} className="text-gold" />
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-cat">{item.category}</span>
                  <h4 className="gallery-card-title">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-modal-overlay"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="gallery-modal-content glass-panel"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button className="modal-close-btn" onClick={() => setSelectedItem(null)} aria-label="Fechar modal">
                  <X size={24} />
                </button>

                {/* Modal Grid */}
                <div className="modal-inner-grid">
                  <div className="modal-img-container">
                    <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
                  </div>
                  <div className="modal-details">
                    <span className="badge" style={{ marginBottom: '1rem' }}>{selectedItem.category}</span>
                    <h3 className="modal-title" style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--white)' }}>
                      {selectedItem.title}
                    </h3>
                    <p className="modal-desc" style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {selectedItem.description}
                    </p>
                    
                    <a
                      href={`https://wa.me/5543998420048?text=${encodeURIComponent(`Olá! Vi o projeto "${selectedItem.title}" no portfólio da Gold Arquitetura e gostaria de solicitar um projeto similar.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      Solicitar Projeto Similar
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
          column-gap: 1.5rem;
          width: 100%;
        }

        .gallery-item-card {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background-color: var(--navy-light);
          display: block;
        }

        /* Set heights depending on size prop */
        .size-small {
          height: 200px;
        }
        .size-medium {
          height: 300px;
        }
        .size-large {
          height: 420px;
        }

        .gallery-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gallery-item-card:hover .gallery-card-img {
          transform: scale(1.08);
        }

        /* Overlay */
        .gallery-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(10, 31, 68, 0.9) 0%, rgba(10, 31, 68, 0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .gallery-item-card:hover .gallery-card-overlay {
          opacity: 1;
        }

        .zoom-icon-wrapper {
          align-self: flex-end;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-card-info {
          text-align: left;
        }

        .gallery-card-cat {
          font-size: 0.75rem;
          color: var(--gold);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 0.25rem;
        }

        .gallery-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--white);
        }

        /* Lightbox Modal */
        .gallery-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(5, 18, 41, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 2rem;
        }

        .gallery-modal-content {
          max-width: 960px;
          width: 100%;
          position: relative;
          background: var(--navy-dark);
          border-color: rgba(212, 175, 55, 0.2);
          overflow: hidden;
          padding: 0;
        }

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: var(--gold);
          color: var(--navy-dark);
        }

        .modal-inner-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
        }

        .modal-img-container {
          height: 450px;
          width: 100%;
          overflow: hidden;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-details {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        @media (max-width: 992px) {
          .gallery-masonry-grid {
            column-count: 2;
          }
          .modal-inner-grid {
            grid-template-columns: 1fr;
          }
          .modal-img-container {
            height: 300px;
          }
          .modal-details {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .gallery-masonry-grid {
            column-count: 1;
          }
          .gallery-modal-overlay {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Galeria;
