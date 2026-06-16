import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marcas from './components/Marcas';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import PorQueEscolher from './components/PorQueEscolher';
import Depoimentos from './components/Depoimentos';
import Galeria from './components/Galeria';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export const App: React.FC = () => {
  return (
    <>
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main style={{ paddingTop: 'var(--header-height)' }}>
        {/* Hero Banner with Parallax Background */}
        <Hero />

        {/* Partner Brands Auto Ticker */}
        <Marcas />

        {/* Value Proposition Cards */}
        <Diferenciais />

        {/* Interactive Products Showcase */}
        <Produtos />

        {/* Trajectory Timeline & Number Dashboard */}
        <PorQueEscolher />

        {/* Auto-sliding Testimonials Slider */}
        <Depoimentos />

        {/* Pinterest Projects Lightbox Gallery */}
        <Galeria />

        {/* Direct WhatsApp Call-to-action Section */}
        <CTA />
      </main>

      {/* Full Map & Contacts Footer */}
      <Footer />

      {/* Floating Interactive Sticky WhatsApp shortcut */}
      <FloatingWhatsapp />
    </>
  );
};

export default App;
