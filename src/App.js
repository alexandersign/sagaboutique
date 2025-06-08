import React, { useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import BrandGallery from './components/BrandGallery';
import Stores from './components/Stores';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Saga Boutique | Luxury Fashion in Cyprus';
    
    // Add meta tags for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Saga Boutique is Cyprus\' leading fashion group, offering mono-brand and multi-brand luxury stores featuring high-end European fashion labels.';
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Saga Boutique, luxury fashion, Cyprus, Limassol, designer brands, Bogner, Peserico, Baldinini, Marc Cain, Moschino';
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up meta tags when component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);
  
  return (
    <div className="App bg-saga-black text-saga-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Brands />
        <BrandGallery />
        <Stores />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
