import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';

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
        duration: 2,
        ease: "easeOut",
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
  const milestones = [
    {
      year: "2004",
      title: "Fundação da Gold Arquitetura",
      desc: "Nascemos com o propósito de elevar o padrão de estandes e cenografia promocional no mercado brasileiro de feiras e eventos."
    },
    {
      year: "2012",
      title: "Expansão Nacional & Produção Própria",
      desc: "Inauguração da fábrica própria com serralheria, marcenaria e impressão digital, além de atendimento em todos os estados."
    },
    {
      year: "2018",
      title: "Grandes Marcas & Cenografia Imersiva",
      desc: "Conquista de clientes como Google, Samsung e Audi, com projetos cenográficos premiados em feiras internacionais."
    },
    {
      year: "2026",
      title: "Referência em Arquitetura Promocional",
      desc: "Consolidação como a principal empresa de arquitetura promocional do país, com mais de 1.200 projetos entregues."
    }
  ];

  return (
    <section id="por-que-gold" className="section" style={{ background: 'linear-gradient(180deg, var(--navy) 0%, var(--navy-dark) 100%)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center">
          <span className="badge">Diferenciação</span>
          <h2>Por que Escolher a <span className="text-gold">Gold</span>?</h2>
          <p>Aliamos criatividade, engenharia e gestão para transformar cada projeto em uma experiência de marca inesquecível.</p>
        </div>

        <div className="split-layout">
          {/* Timeline Block */}
          <div className="timeline-column">
            <h3 className="column-title" style={{ marginBottom: '2.5rem', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}>
              Nossa Trajetória
            </h3>
            
            <div className="timeline-container">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot"></div>
                    {idx !== milestones.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year text-gold">{milestone.year}</span>
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <p className="timeline-desc">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dashboard Block */}
          <div className="dashboard-column">
            <h3 className="column-title" style={{ marginBottom: '2.5rem', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}>
              Gold em Números
            </h3>

            <div className="dashboard-grid">
              
              {/* Card 1 */}
              <motion.div 
                className="glass-panel dashboard-card"
                whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="dash-card-header">
                  <span className="glow-dot"></span>
                  <Award size={20} className="text-gold" />
                </div>
                <div className="dash-value">
                  <StatCounter from={0} to={20} suffix="+" />
                </div>
                <div className="dash-label">Anos de Mercado</div>
                <div className="dash-subtext">Experiência comprovada em feiras e eventos corporativos.</div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="glass-panel dashboard-card"
                whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="dash-card-header">
                  <span className="glow-dot"></span>
                  <Zap size={20} className="text-gold" />
                </div>
                <div className="dash-value">
                  <StatCounter from={0} to={1200} suffix="+" />
                </div>
                <div className="dash-label">Projetos Entregues</div>
                <div className="dash-subtext">Estandes, cenografias e showrooms em todo o Brasil.</div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="glass-panel dashboard-card"
                whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="dash-card-header">
                  <span className="glow-dot"></span>
                  <ShieldCheck size={20} className="text-gold" />
                </div>
                <div className="dash-value">
                  <StatCounter from={0} to={50} suffix="k m²" />
                </div>
                <div className="dash-label">Área Construída</div>
                <div className="dash-subtext">Metros quadrados de estandes e cenografia executados.</div>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                className="glass-panel dashboard-card"
                whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="dash-card-header">
                  <span className="glow-dot"></span>
                  <HeartHandshake size={20} className="text-gold" />
                </div>
                <div className="dash-value">
                  <span>24</span><span className="text-gold" style={{ fontSize: '1.5rem', fontWeight: 700 }}>/7</span>
                </div>
                <div className="dash-label">Plantão de Montagem</div>
                <div className="dash-subtext">Equipe técnica disponível durante toda a montagem e evento.</div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>

      <style>{`
        .split-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .column-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--white);
        }

        /* Timeline Styles */
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        .timeline-item {
          display: flex;
          gap: 1.5rem;
        }

        .timeline-dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--navy-dark);
          border: 3px solid var(--gold);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom, var(--gold) 0%, rgba(212, 175, 55, 0.1) 100%);
          margin-top: 4px;
          z-index: 1;
        }

        .timeline-content {
          padding-bottom: 2rem;
          text-align: left;
        }

        .timeline-year {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .timeline-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .timeline-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Dashboard Styles */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .dashboard-card {
          padding: 2rem 1.5rem;
          text-align: left;
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
        }

        .dash-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .glow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 8px var(--gold);
        }

        .dash-value {
          font-family: var(--font-headings);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          color: var(--white);
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }

        .dash-label {
          font-family: var(--font-headings);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .dash-subtext {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .split-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 576px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default PorQueEscolher;
