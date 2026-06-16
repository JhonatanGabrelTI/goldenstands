import React from 'react';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  logo: React.ReactNode;
}

export const Marcas: React.FC = () => {
  const brands: Brand[] = [
    {
      name: "Google",
      logo: (
        <span className="brand-logo-text bold-font">
          Google
        </span>
      )
    },
    {
      name: "Samsung",
      logo: (
        <span className="brand-logo-text bold-font">
          SAMSUNG
        </span>
      )
    },
    {
      name: "Audi",
      logo: (
        <span className="brand-logo-text bold-font" style={{ letterSpacing: '3px' }}>
          AUDI
        </span>
      )
    },
    {
      name: "L'Oréal",
      logo: (
        <span className="brand-logo-text" style={{ fontStyle: 'italic', fontWeight: 800 }}>
          L'OR<span style={{ color: 'var(--gold)' }}>ÉAL</span>
        </span>
      )
    },
    {
      name: "Coca-Cola",
      logo: (
        <span className="brand-logo-text" style={{ fontStyle: 'italic', fontWeight: 900 }}>
          Coca-<span style={{ color: 'var(--gold)' }}>Cola</span>
        </span>
      )
    },
    {
      name: "Nike",
      logo: (
        <span className="brand-logo-text bold-font" style={{ letterSpacing: '2px' }}>
          NIKE
        </span>
      )
    },
    {
      name: "BMW",
      logo: (
        <span className="brand-logo-text bold-font">
          BMW
        </span>
      )
    },
    {
      name: "Microsoft",
      logo: (
        <span className="brand-logo-text">
          Microsoft
        </span>
      )
    }
  ];

  // Triple the brands array to ensure continuous scrolling width
  const tickerItems = [...brands, ...brands, ...brands];

  return (
    <section className="brands-section" style={{ background: 'linear-gradient(90deg, var(--navy-dark) 0%, var(--navy-light) 50%, var(--navy-dark) 100%)', padding: '3.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        
        {/* Subtle Section Title */}
        <p className="brands-title text-center" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 600 }}>
          Marcas que Confiam em Nossos Projetos
        </p>

        {/* Ticker Container with faded edge effects */}
        <div className="ticker-wrapper">
          <motion.div 
            className="ticker-track"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {tickerItems.map((brand, idx) => (
              <div key={idx} className="ticker-item">
                <div className="brand-card">
                  {brand.logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Faded edge overlay masks */
        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--navy-dark) 20%, transparent 100%);
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--navy-dark) 20%, transparent 100%);
        }

        .ticker-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 2rem;
        }

        .ticker-item {
          padding: 0 1rem;
        }

        .brand-card {
          width: 180px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          transition: all 0.3s ease;
          user-select: none;
        }

        .brand-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--gold);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.15);
        }

        .brand-logo-text {
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 1px;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .brand-card:hover .brand-logo-text {
          color: var(--white);
        }

        .brand-logo-text.bold-font {
          font-weight: 900;
        }

        .brand-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .brand-card {
            width: 140px;
            height: 60px;
          }
          .brand-logo-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Marcas;
