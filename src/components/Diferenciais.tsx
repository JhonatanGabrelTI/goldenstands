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
      icon: <Lightbulb className="diferencial-icon" size={32} />,
      title: "Design Inovador",
      description: "Projetos autorais com modelagem 3D fotorrealista. Criamos estandes que traduzem a identidade da sua marca em experiências visuais memoráveis."
    },
    {
      icon: <Factory className="diferencial-icon" size={32} />,
      title: "Produção Própria",
      description: "Serralheria, marcenaria, impressão digital e acabamento interno. Controle total da qualidade de cada detalhe do seu projeto."
    },
    {
      icon: <Hammer className="diferencial-icon" size={32} />,
      title: "Montagem Turnkey",
      description: "Gerenciamento completo de ponta a ponta: do projeto à desmontagem, cuidamos de toda a logística e execução."
    },
    {
      icon: <Clock className="diferencial-icon" size={32} />,
      title: "Plantão 24h em Feira",
      description: "Equipe técnica de plantão durante toda a montagem e nos dias do evento para resolver qualquer necessidade em tempo real."
    },
    {
      icon: <Ruler className="diferencial-icon" size={32} />,
      title: "Detalhamento Técnico",
      description: "Projetos executivos em conformidade com normas de cada pavilhão e centro de convenções, evitando retrabalho e atrasos."
    },
    {
      icon: <Globe className="diferencial-icon" size={32} />,
      title: "Atendimento Nacional",
      description: "Montamos em todos os principais centros de convenções e pavilhões de feiras do Brasil com a mesma excelência."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

  return (
    <section id="diferenciais" className="section" style={{ background: 'linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <motion.span 
            className="badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Diferenciais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Por que a <span className="text-gold">Gold</span> é líder no setor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Entregamos criatividade, engenharia e execução impecável para transformar seu espaço em uma experiência de marca inesquecível.
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
              className="glass-panel card-diferencial"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                borderColor: 'rgba(212, 175, 55, 0.4)', 
                boxShadow: 'var(--shadow-gold), var(--shadow-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
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
          gap: 2rem;
        }

        .card-diferencial {
          padding: 2.5rem 2rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .icon-container-dif {
          padding: 1rem;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.1);
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .card-diferencial:hover .icon-container-dif {
          background: var(--gold);
          color: var(--navy-dark);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }

        .card-title-dif {
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.25rem;
        }

        .card-desc-dif {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .diferenciais-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .diferenciais-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default Diferenciais;
