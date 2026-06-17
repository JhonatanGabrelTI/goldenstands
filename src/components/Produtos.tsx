import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export const Produtos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Soluções' },
    { id: 'estandes', label: 'Estandes' },
    { id: 'cenografia', label: 'Cenografia' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'custom', label: 'Sob Medida' }
  ];

  const productsList: ProductItem[] = [
    {
      id: 'p1',
      name: 'Estandes Construídos',
      category: 'estandes',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
      description: 'Estruturas exclusivas em madeira, metal e vidro. Projetos autorais com acabamento de altíssimo padrão.',
      tags: ['Premium', 'Exclusivo']
    },
    {
      id: 'p2',
      name: 'Estandes Mistos',
      category: 'estandes',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=600&auto=format&fit=crop',
      description: 'Inteligência modular combinada a elementos personalizados. Otimização sem perder a identidade.',
      tags: ['Inteligente', 'Híbrido']
    },
    {
      id: 'p3',
      name: 'Cenografia de Eventos',
      category: 'cenografia',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
      description: 'Ambientações imersivas para convenções e lançamentos. A arte de transformar espaços.',
      tags: ['Imersão', 'Arte']
    },
    {
      id: 'p4',
      name: 'Showrooms Corporativos',
      category: 'corporativo',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      description: 'Espaços permanentes de exposição. Arquitetura desenhada para impressionar e converter.',
      tags: ['Permanente', 'Branding']
    },
    {
      id: 'p5',
      name: 'Quiosques & Displays',
      category: 'corporativo',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      description: 'Alto impacto em formatos compactos para PDVs e shoppings. Design que captura a atenção.',
      tags: ['PDV', 'Compacto']
    },
    {
      id: 'p6',
      name: 'Mobiliário Customizado',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
      description: 'Peças exclusivas desenhadas e produzidas sob medida, com acabamento impecável em cada detalhe.',
      tags: ['Sob Medida', 'Detalhe']
    }
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? productsList 
    : productsList.filter(p => p.category === activeFilter);

  const whatsappNumber = "5543998420048";

  const getWhatsappLink = (productName: string) => {
    const message = encodeURIComponent(`Olá! Estou interessado na solução de alto padrão: ${productName}.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="solucoes" className="section" style={{ background: 'var(--onyx-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
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
            Portfólio de Soluções
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{ fontFamily: 'var(--font-headings)', fontWeight: 400 }}
          >
            A Arte da <span className="text-gold" style={{ fontStyle: 'italic' }}>Arquitetura</span>
          </motion.h2>
        </div>

        {/* Filter Navigation */}
        <div className="filters-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-btn-luxury ${activeFilter === cat.id ? 'active' : ''}`}
            >
              {cat.label}
              {activeFilter === cat.id && (
                <motion.div 
                  layoutId="activeFilterUnderline"
                  className="filter-underline"
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
                className="product-card-luxury"
              >
                {/* Image Container with Reveal Mask */}
                <div className="product-image-wrapper img-reveal-wrapper">
                  <motion.div 
                    className="img-reveal-overlay"
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    style={{ transformOrigin: "top" }}
                  />
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay-gradient"></div>
                </div>

                {/* Content */}
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-footer">
                    <div className="product-tags">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="product-tag">{tag}</span>
                      ))}
                    </div>

                    <a
                      href={getWhatsappLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-cta-btn"
                      aria-label={`Solicitar projeto para ${product.name}`}
                    >
                      <ArrowUpRight size={20} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .filters-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-bottom: 5rem;
        }

        .filter-btn-luxury {
          position: relative;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: color 0.4s ease;
        }

        .filter-btn-luxury:hover {
          color: var(--white);
        }

        .filter-btn-luxury.active {
          color: var(--gold);
        }

        .filter-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: var(--gold);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem 2rem;
        }

        .product-card-luxury {
          display: flex;
          flex-direction: column;
          background: transparent;
        }

        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
          filter: grayscale(20%);
        }

        .product-card-luxury:hover .product-image {
          transform: scale(1.05);
          filter: grayscale(0%);
        }

        .product-overlay-gradient {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .product-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-title {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--white);
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }

        .product-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 300;
          flex-grow: 1;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }

        .product-tags {
          display: flex;
          gap: 0.75rem;
        }

        .product-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold-dark);
        }

        .product-cta-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card-luxury:hover .product-cta-btn {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--onyx-dark);
          transform: rotate(45deg);
        }

        @media (max-width: 992px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.5rem;
          }
          .product-image-wrapper {
            height: 280px;
          }
        }

        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .filters-container {
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Produtos;
