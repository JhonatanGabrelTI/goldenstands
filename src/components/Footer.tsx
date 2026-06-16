import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      {/* Top Grid */}
      <div className="container footer-top-grid">
        {/* Info Column */}
        <div className="footer-col info-col">
          <span className="footer-logo">
            GOLD<span> ARQUITETURA</span>
          </span>
          <p className="footer-desc">
            Referência nacional em arquitetura promocional, cenografia corporativa e montagem de estandes para feiras e eventos.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/gold.stands" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="footer-col">
          <h4 className="footer-title">Soluções</h4>
          <ul className="footer-links-list">
            <li><a href="#solucoes">Estandes Construídos</a></li>
            <li><a href="#solucoes">Estandes Mistos</a></li>
            <li><a href="#solucoes">Cenografia</a></li>
            <li><a href="#solucoes">Showrooms</a></li>
            <li><a href="#solucoes">Mobiliário</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-col">
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#solucoes">Soluções</a></li>
            <li><a href="#por-que-gold">Por que a Gold</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
          </ul>
        </div>

        {/* Contacts Column */}
        <div className="footer-col contacts-col">
          <h4 className="footer-title">Contatos</h4>
          <ul className="contacts-list">
            <li>
              <Phone size={16} className="text-gold" />
              <span>(43) 9.9842-0048 / (43) 9.9990-5209</span>
            </li>
            <li>
              <Mail size={16} className="text-gold" />
              <span>vendas@goldap.com.br</span>
            </li>
            <li>
              <MapPin size={16} className="text-gold" />
              <span>Av. Gov. Paulo Cruz Pímentel, 129 - Ibaiti PR</span>
            </li>
            <li>
              <Clock size={16} className="text-gold" />
              <span>Seg. a Sex. — 24h Emergencial</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Segment */}
      <div className="container map-segment">
        <div className="map-wrapper glass-panel">
          <iframe 
            title="Localização Gold"
            src="https://maps.google.com/maps?q=Av.%20Gov.%20Paulo%20Cruz%20P%C3%ADmentel,%20129%20-%20Ibaiti%20PR&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="320" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="styled-map-iframe"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p>© {currentYear} Gold Arquitetura Promocional & Cenografia. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com <span className="text-gold">✦</span> para máxima performance.
          </p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: var(--navy-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 6rem;
          color: var(--text-secondary);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-col {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.8rem;
          color: var(--white);
          letter-spacing: 1px;
        }

        .footer-logo span {
          color: var(--gold);
        }

        .footer-desc {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .social-icon-btn:hover {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--navy-dark);
          border-color: transparent;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 20px rgba(232, 200, 106, 0.4);
        }

        .footer-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--white);
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--gold);
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links-list a {
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--gold);
          padding-left: 8px;
        }

        .contacts-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contacts-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
        }

        .contacts-list li span {
          line-height: 1.4;
        }

        /* Map styling */
        .map-segment {
          margin-bottom: 4rem;
        }

        .map-wrapper {
          padding: 0.5rem;
          overflow: hidden;
          border-radius: 16px;
          border-color: rgba(255, 255, 255, 0.05);
        }

        .styled-map-iframe {
          border-radius: 12px;
          /* Premium dark styling filter */
          filter: invert(90%) hue-rotate(180deg) grayscale(70%) contrast(110%);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          background-color: var(--graphite-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding: 2rem 0;
          font-size: 0.85rem;
        }

        .footer-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3.5rem;
          }
        }

        @media (max-width: 576px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom-flex {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
