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
      description: 'Estandes com estrutura exclusiva em madeira, metal e vidro. Projetos autorais com acabamento premium para máximo impacto visual.',
      tags: ['Feiras', 'Eventos', 'Premium']
    },
    {
      id: 'p2',
      name: 'Estandes Mistos',
      category: 'estandes',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=600&auto=format&fit=crop',
      description: 'Combinação inteligente de estrutura modular com elementos personalizados, otimizando custo sem perder identidade.',
      tags: ['Custo-benefício', 'Modular', 'Funcional']
    },
    {
      id: 'p3',
      name: 'Cenografia de Eventos',
      category: 'cenografia',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
      description: 'Ambientações cenográficas imersivas para convenções, lançamentos de produto, premiações e ativações de marca.',
      tags: ['Imersão', 'Experiência', 'Ativação']
    },
    {
      id: 'p4',
      name: 'Showrooms Corporativos',
      category: 'corporativo',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      description: 'Espaços permanentes de exposição de produtos e marca, projetados para impressionar clientes e parceiros.',
      tags: ['Permanente', 'Branding', 'Institucional']
    },
    {
      id: 'p5',
      name: 'Quiosques & Displays',
      category: 'corporativo',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      description: 'Estruturas compactas de alto impacto para PDVs, shoppings e ações promocionais com design diferenciado.',
      tags: ['PDV', 'Ação Promo', 'Compacto']
    },
    {
      id: 'p6',
      name: 'Mobiliário Customizado',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
      description: 'Mesas, balcões, totens, painéis e mobiliário exclusivo produzido sob medida para cada projeto.',
      tags: ['Exclusivo', 'Sob Medida', 'Acabamento']
    }
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? productsList 
    : productsList.filter(p => p.category === activeFilter);

  const whatsappNumber = "5543998420048";

  const getWhatsappLink = (productName: string) => {
    const message = encodeURIComponent(`Olá! Estou interessado na solução: ${productName}. Gostaria de solicitar um projeto/orçamento.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="solucoes" className="section" style={{ background: 'var(--navy-dark)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge">Soluções</span>
          <h2>Nossas <span className="text-gold">Soluções</span></h2>
          <p>Projetos completos de arquitetura promocional e cenografia, do conceito à desmontagem, com excelência em cada detalhe.</p>
        </div>

        {/* Filter Navigation */}
        <div className="filters-container">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
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
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="glass-panel product-card"
              >
                {/* Image Container */}
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay-gold"></div>
                </div>

                {/* Content */}
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  {/* Tags */}
                  <div className="product-tags">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="product-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={getWhatsappLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-cta-btn"
                  >
                    Solicitar Projeto <ArrowUpRight size={16} />
                  </a>
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
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          color: var(--white);
          border-color: rgba(232, 200, 106, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--navy-dark);
          border-color: transparent;
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(232, 200, 106, 0.4);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .product-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          border-color: rgba(255, 255, 255, 0.04);
        }

        .product-card:hover {
          border-color: var(--gold);
          box-shadow: 0 15px 40px rgba(232, 200, 106, 0.15);
        }

        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .product-card:hover .product-image {
          transform: scale(1.15) rotate(1deg);
        }

        .product-overlay-gold {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent 20%, rgba(6, 16, 34, 0.95) 100%);
          z-index: 1;
        }

        .product-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .product-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--white);
          transition: color 0.3s ease;
        }

        .product-card:hover .product-title {
          color: var(--gold);
        }

        .product-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.6;
          flex-grow: 1;
        }

        .product-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .product-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.6rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .product-card:hover .product-tag {
          border-color: rgba(232, 200, 106, 0.3);
          color: var(--white);
        }

        .product-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          border: 1px solid rgba(232, 200, 106, 0.3);
          background: transparent;
          color: var(--gold);
          font-weight: 700;
          font-size: 0.9rem;
          font-family: var(--font-headings);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .product-card:hover .product-cta-btn {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--navy-dark);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(232, 200, 106, 0.4);
        }

        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default Produtos;
