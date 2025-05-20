import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-saga-black bg-opacity-90 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/logo/SAGA-logo.png" alt="Saga Boutique" className="h-12" />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#brands" className="text-white hover:text-gray-300 transition-colors">Brands</a>
          <a href="#stores" className="text-white hover:text-gray-300 transition-colors">Stores</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
          <a href="#faq" className="text-white hover:text-gray-300 transition-colors">FAQ</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <div className="container flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
            <a href="#brands" className="text-white hover:text-gray-300 transition-colors">Brands</a>
            <a href="#stores" className="text-white hover:text-gray-300 transition-colors">Stores</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            <a href="#faq" className="text-white hover:text-gray-300 transition-colors">FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
