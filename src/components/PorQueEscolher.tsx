import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ShieldCheck, Award, Zap, HeartHandshake, Users, Target } from 'lucide-react';

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
        duration: 2.5,
        ease: "easeOut" as const,
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
  const pilares = [
    {
      icon: <Target size={28} className="text-gold" />,
      title: "Foco no Cliente",
      desc: "Nossos clientes são a razão da nossa existência. Nos comprometemos a atender suas demandas no local e prazo necessários."
    },
    {
      icon: <ShieldCheck size={28} className="text-gold" />,
      title: "Segurança",
      desc: "Somos rigorosos no cumprimento dos nossos padrões, prezando pela segurança dos nossos clientes e colaboradores."
    },
    {
      icon: <Award size={28} className="text-gold" />,
      title: "Resultados com Qualidade",
      desc: "Buscamos maximizar os resultados, valorizando a qualidade em cada detalhe de nossa operação."
    },
    {
      icon: <Users size={28} className="text-gold" />,
      title: "Trabalho em Equipe",
      desc: "Juntos alcançamos nossos objetivos, confiamos uns nos outros, compartilhando conquistas e resultados."
    }
  ];

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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const pilarVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="por-que-gold" className="section" style={{ background: 'linear-gradient(180deg, var(--navy-light) 0%, var(--navy-dark) 100%)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <motion.span 
            className="badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Diferenciação
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Por que Escolher a <span className="text-gold">Gold</span>?
          </motion.h2>
        </div>

        {/* Intro Banner */}
        <motion.div 
          className="intro-banner glass-panel-gold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="intro-content">
            <h3 className="intro-title">Nossa <span className="text-gold">Filosofia</span></h3>
            <p className="intro-lead">
              Somos uma empresa voltada a levar a marca do cliente com qualidade, segurança e cada vez mais moderna.
            </p>
            <p className="intro-text">
              A GOLD preza pela qualidade de seus processos e materiais. Reconhecida por este aspecto, tem trazido para seu atendimento diversos clientes que estiveram por muitos anos com outras empresas de Arquitetura Promocional do país e agora são clientes permanentes da nossa empresa.
            </p>
            <p className="intro-text" style={{ marginBottom: 0 }}>
              Além dos melhores produtos, trabalhamos de forma objetiva e eficiente, com integridade e senso de urgência para gerar os melhores serviços. Confira alguns dos pilares de nossa empresa:
            </p>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pilares.map((pilar, idx) => (
            <motion.div 
              key={idx}
              className="pillar-card glass-panel"
              variants={pilarVariants}
              whileHover={{ 
                y: -12,
                borderColor: 'rgba(232, 200, 106, 0.5)',
                boxShadow: '0 15px 35px rgba(232, 200, 106, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="pillar-icon-wrapper">
                {pilar.icon}
              </div>
              <h4 className="pillar-title">{pilar.title}</h4>
              <p className="pillar-desc">{pilar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="split-layout">
          {/* Timeline Block */}
          <div className="timeline-column">
            <motion.h3 
              className="column-title" 
              style={{ marginBottom: '2.5rem', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nossa Trajetória
            </motion.h3>
            
            <div className="timeline-container">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
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
            <motion.h3 
              className="column-title" 
              style={{ marginBottom: '2.5rem', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Gold em Números
            </motion.h3>

            <motion.div 
              className="dashboard-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              
              {/* Card 1 */}
              <motion.div 
                className="glass-panel dashboard-card"
                variants={pilarVariants}
                whileHover={{ y: -8, borderColor: 'rgba(232, 200, 106, 0.4)', boxShadow: '0 12px 30px rgba(232, 200, 106, 0.15)' }}
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
                variants={pilarVariants}
                whileHover={{ y: -8, borderColor: 'rgba(232, 200, 106, 0.4)', boxShadow: '0 12px 30px rgba(232, 200, 106, 0.15)' }}
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
                variants={pilarVariants}
                whileHover={{ y: -8, borderColor: 'rgba(232, 200, 106, 0.4)', boxShadow: '0 12px 30px rgba(232, 200, 106, 0.15)' }}
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
                variants={pilarVariants}
                whileHover={{ y: -8, borderColor: 'rgba(232, 200, 106, 0.4)', boxShadow: '0 12px 30px rgba(232, 200, 106, 0.15)' }}
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

            </motion.div>
          </div>
        </div>

      </div>

      <style>{`
        /* Intro Banner & Pillars Layout */
        .intro-banner {
          padding: 3.5rem;
          margin-bottom: 3rem;
          border-left: 4px solid var(--gold);
          text-align: left;
        }

        .intro-title {
          font-family: var(--font-headings);
          font-size: 2rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 1.5rem;
        }

        .intro-lead {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .intro-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .pillar-card {
          padding: 2.5rem 2rem;
          text-align: center;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          border-color: rgba(255, 255, 255, 0.04);
        }

        .pillar-icon-wrapper {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem auto;
          background: rgba(232, 200, 106, 0.08);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(232, 200, 106, 0.2);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .pillar-card:hover .pillar-icon-wrapper {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          box-shadow: 0 10px 25px rgba(232, 200, 106, 0.4);
          transform: scale(1.1) rotate(5deg);
        }

        .pillar-card:hover .pillar-icon-wrapper svg {
          color: var(--navy-dark) !important;
        }

        .pillar-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .pillar-title {
          color: var(--gold);
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Split Layout Styles */
        .split-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .column-title {
          font-size: 1.75rem;
          font-weight: 700;
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
          box-shadow: 0 0 15px rgba(232, 200, 106, 0.5);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          background: var(--gold);
          box-shadow: 0 0 20px rgba(232, 200, 106, 0.7);
          transform: scale(1.3);
        }

        .timeline-line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom, var(--gold) 0%, rgba(232, 200, 106, 0.1) 100%);
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
          font-size: 1.15rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .timeline-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .timeline-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
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
          transition: all 0.4s ease;
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
          box-shadow: 0 0 12px var(--gold);
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 8px var(--gold); opacity: 1; }
          50% { box-shadow: 0 0 20px var(--gold); opacity: 0.6; }
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
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .dash-subtext {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 1200px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .intro-banner {
            padding: 2.5rem;
          }
          .split-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 576px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default PorQueEscolher;
