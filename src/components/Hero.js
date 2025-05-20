import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-saga-black text-saga-white">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Luxury Fashion in Cyprus</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Saga Boutique offers an in-store experience featuring world-class designer brands.
        </p>
        <a 
          href="#stores" 
          className="btn btn-primary inline-block"
        >
          Visit Us in Limassol
        </a>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <svg 
          className="w-8 h-8 text-white animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
