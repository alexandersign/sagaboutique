import React, { useState, useEffect } from 'react';

const heroImages = [
  {
    url: '/assets/brand-images/marccain/marccain-cyprus04.webp',
    alt: 'Marc Cain luxury fashion collection - elegant women\'s designer clothing at Saga Boutique Cyprus',
    title: 'Marc Cain Collection',
    subtitle: 'German precision meets feminine elegance'
  },
  {
    url: '/assets/brand-images/mc2/mc2-cyprus1.jpg',
    alt: 'MC2 Saint Barth luxury beachwear and casual resort fashion collection at Saga Boutique',
    title: 'MC2 Saint Barth',
    subtitle: 'Casual luxury inspired by St. Barth'
  },
  {
    url: '/assets/brand-images/peserico/peserico-cyprus3.jpg',
    alt: 'Peserico Italian luxury fashion - refined tailoring and timeless womenswear at Saga Boutique',
    title: 'Peserico Craftsmanship',
    subtitle: 'Italian refinement and timeless style'
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds

    // Set loaded state after a brief delay
    setTimeout(() => setIsLoaded(true), 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        </div>
      ))}

      {/* Luxury overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container text-center text-white transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-5xl mx-auto">
          {/* Luxury badge */}
          <div className="inline-flex items-center px-6 py-2 mb-8 glass-effect rounded-full">
            <span className="luxury-subheading text-luxury-gold">Est. Cyprus • Premium Fashion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-light">
            <span className="block">Discover</span>
            <span className="block luxury-text-gradient">Luxury Fashion</span>
            <span className="block">in Cyprus</span>
          </h1>
          
          <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            {heroImages[currentImageIndex].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#stores" 
              className="btn btn-primary group"
            >
              <span className="relative z-10">Explore Our Boutiques</span>
            </a>
            <a 
              href="#brands" 
              className="btn bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500"
            >
              <span className="relative z-10">View Collections</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {heroImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`group relative transition-all duration-500 ${
              index === currentImageIndex ? 'scale-110' : 'hover:scale-105'
            }`}
            aria-label={`Go to slide ${index + 1}: ${image.title}`}
          >
            <div className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === currentImageIndex 
                ? 'bg-luxury-gold' 
                : 'bg-white/30 group-hover:bg-white/50'
            }`}></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                {image.title}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="luxury-subheading text-white/60 text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          <svg 
            className="w-4 h-4 text-white/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
