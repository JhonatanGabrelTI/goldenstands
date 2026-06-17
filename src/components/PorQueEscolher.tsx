import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface StatCounterProps {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ from, to, suffix = "", prefix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(from, to, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1] as const,
        onUpdate(value) {
          node.textContent = prefix + Math.floor(value).toLocaleString('pt-BR') + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, suffix, prefix]);

  return <span ref={ref}>{prefix}{from.toLocaleString('pt-BR')}{suffix}</span>;
};

export const PorQueEscolher: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="por-que-gold" className="section" style={{ background: 'var(--onyx-light)' }}>
      <div className="container">
        
        <div className="luxury-split-layout">
          
          {/* Left Column: Statement */}
          <div className="luxury-statement">
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
              Nossa Essência
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ 
                fontFamily: 'var(--font-headings)', 
                fontWeight: 400,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                marginBottom: '2rem'
              }}
            >
              Excelência não é um ato, <br/>
              <span className="text-gold" style={{ fontStyle: 'italic' }}>é um hábito.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '600px',
                marginBottom: '3rem'
              }}
            >
              A Gold preza pela perfeição em cada milímetro quadrado. Nosso rigor técnico, aliado a um design autoral de classe mundial, nos transformou na escolha definitiva para marcas que não aceitam menos que o extraordinário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ 
                width: '60px', 
                height: '1px', 
                background: 'var(--gold-dark)',
              }}
            />
          </div>

          {/* Right Column: Luxury Numbers Grid */}
          <motion.div 
            className="luxury-numbers-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Number 1 */}
            <motion.div className="luxury-number-block" variants={itemVariants}>
              <div className="number-value">
                <StatCounter from={0} to={20} suffix="+" />
              </div>
              <div className="number-label">Anos de Maestria</div>
              <div className="number-desc">Experiência comprovada liderando o mercado de alto padrão.</div>
            </motion.div>

            {/* Number 2 */}
            <motion.div className="luxury-number-block" variants={itemVariants}>
              <div className="number-value">
                <StatCounter from={0} to={1200} suffix="+" />
              </div>
              <div className="number-label">Projetos Exclusivos</div>
              <div className="number-desc">Entregues com pontualidade britânica em todo o Brasil.</div>
            </motion.div>

            {/* Number 3 */}
            <motion.div className="luxury-number-block" variants={itemVariants}>
              <div className="number-value">
                <StatCounter from={0} to={50} suffix="k" />
                <span style={{ fontSize: '1.5rem', marginLeft: '0.25rem', fontFamily: 'var(--font-body)', fontWeight: 300 }}>m²</span>
              </div>
              <div className="number-label">Área Construída</div>
              <div className="number-desc">O equivalente a 7 campos de futebol de arquitetura premium.</div>
            </motion.div>

            {/* Number 4 */}
            <motion.div className="luxury-number-block" variants={itemVariants}>
              <div className="number-value">
                <span>24</span><span className="text-gold" style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 400 }}>/7</span>
              </div>
              <div className="number-label">Suporte Dedicado</div>
              <div className="number-desc">Equipe técnica à disposição durante todo o seu evento.</div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      <style>{`
        .luxury-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .luxury-statement {
          text-align: left;
        }

        .luxury-numbers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .luxury-number-block {
          position: relative;
          padding-top: 1.5rem;
        }

        .luxury-number-block::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 1px;
          background: var(--gold-dark);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .luxury-number-block:hover::before {
          width: 100%;
        }

        .number-value {
          font-family: var(--font-headings);
          font-size: 4rem;
          font-weight: 400;
          color: var(--white);
          line-height: 1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .number-label {
          font-family: var(--font-body);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .number-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .luxury-split-layout {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
          .luxury-statement {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }
          .luxury-statement > div {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 576px) {
          .luxury-numbers-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .number-value {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};
export default PorQueEscolher;
