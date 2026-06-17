import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Factory, Hammer, Clock, Ruler, Globe } from 'lucide-react';

interface DiferencialItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Diferenciais: React.FC = () => {
  const diferenciaisList: DiferencialItem[] = [
    {
      icon: <Lightbulb strokeWidth={1} size={36} />,
      title: "Design Inovador",
      description: "Projetos autorais com modelagem 3D fotorrealista. Criamos estandes que traduzem a identidade da sua marca em experiências visuais memoráveis."
    },
    {
      icon: <Factory strokeWidth={1} size={36} />,
      title: "Produção Própria",
      description: "Serralheria, marcenaria, impressão digital e acabamento interno. Controle total da qualidade de cada detalhe do seu projeto."
    },
    {
      icon: <Hammer strokeWidth={1} size={36} />,
      title: "Montagem Turnkey",
      description: "Gerenciamento completo de ponta a ponta: do projeto à desmontagem, cuidamos de toda a logística e execução."
    },
    {
      icon: <Clock strokeWidth={1} size={36} />,
      title: "Plantão 24h",
      description: "Equipe técnica de plantão durante toda a montagem e nos dias do evento para resolver qualquer necessidade em tempo real."
    },
    {
      icon: <Ruler strokeWidth={1} size={36} />,
      title: "Rigor Técnico",
      description: "Projetos executivos em conformidade com normas de cada pavilhão e centro de convenções, evitando retrabalho."
    },
    {
      icon: <Globe strokeWidth={1} size={36} />,
      title: "Atendimento Nacional",
      description: "Montamos em todos os principais centros de convenções e pavilhões de feiras do Brasil com a mesma excelência."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="diferenciais" className="section" style={{ background: 'var(--onyx-dark)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '900px', margin: '0 auto 7rem auto' }}>
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
            A Diferença
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{ fontFamily: 'var(--font-headings)', fontWeight: 400 }}
          >
            Por que a <span className="text-gold" style={{ fontStyle: 'italic' }}>Gold</span> é a Escolha Definitiva
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '1.5rem auto 0 auto' }}
          >
            Não entregamos apenas estruturas. Entregamos criatividade, engenharia de precisão e execução impecável.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="diferenciais-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {diferenciaisList.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="card-diferencial"
              variants={cardVariants}
            >
              <div className="icon-container-dif">
                {item.icon}
              </div>
              <h3 className="card-title-dif">{item.title}</h3>
              <p className="card-desc-dif">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .diferenciais-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 5rem;
        }

        .card-diferencial {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          position: relative;
          padding-left: 1.5rem;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.5s ease;
        }

        .card-diferencial:hover {
          border-left-color: var(--gold);
        }

        .icon-container-dif {
          color: var(--gold);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-diferencial:hover .icon-container-dif {
          transform: scale(1.1);
        }

        .card-title-dif {
          margin-bottom: 1rem;
          font-family: var(--font-headings);
          font-weight: 500;
          font-size: 1.5rem;
          color: var(--white);
          letter-spacing: 0.02em;
        }

        .card-desc-dif {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
        }

        @media (max-width: 992px) {
          .diferenciais-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 2rem;
          }
        }

        @media (max-width: 576px) {
          .diferenciais-grid {
            grid-template-columns: 1fr;
            padding-top: 3rem;
          }
          .card-diferencial {
            padding-left: 0;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 2rem;
          }
          .card-diferencial:hover {
            border-top-color: var(--gold);
          }
        }
      `}</style>
    </section>
  );
};
export default Diferenciais;
