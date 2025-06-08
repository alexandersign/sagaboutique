import React, { useState } from 'react';

const brandGalleryData = {
  'Marc Cain': {
    images: [
      {
        url: '/assets/brand-images/marccain/marccain-cyprus01.webp',
        alt: 'Marc Cain elegant women\'s blazer and sophisticated business wear collection at Saga Boutique Cyprus',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/marccain/marccain-cyprus02.webp',
        alt: 'Marc Cain luxury knitwear and contemporary women\'s fashion pieces',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/marccain/marccain-cyprus03.webp',
        alt: 'Marc Cain designer dresses and premium women\'s clothing collection',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/marccain/marccain-cyprus04.webp',
        alt: 'Marc Cain casual luxury wear and modern women\'s fashion at Saga Boutique',
        orientation: 'landscape'
      }
    ]
  },
  'Peserico': {
    images: [
      {
        url: '/assets/brand-images/peserico/peserico-cyprus1.jpg',
        alt: 'Peserico Italian luxury fashion - refined tailoring and elegant women\'s wear',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/peserico/peserico-cyprus2.jpg',
        alt: 'Peserico sophisticated blazers and premium Italian women\'s clothing',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/peserico/peserico-cyprus3.jpg',
        alt: 'Peserico timeless elegance and contemporary Italian fashion design',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/peserico/peserico-cyprus4.jpg',
        alt: 'Peserico luxury knitwear and refined Italian women\'s fashion collection',
        orientation: 'portrait'
      }
    ]
  },
  'Casadei': {
    images: [
      {
        url: '/assets/brand-images/casadei/casadei-cyprus01.avif',
        alt: 'Casadei luxury Italian footwear - designer heels and fashion-forward shoes',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/casadei/casadei-cyprus03.avif',
        alt: 'Casadei blade heel collection and luxury Italian shoe craftsmanship',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/casadei/casadei-cyprus05.avif',
        alt: 'Casadei elegant pumps and sophisticated Italian designer footwear',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/casadei/casadei-cyprus07.avif',
        alt: 'Casadei luxury boots and premium Italian leather shoes collection',
        orientation: 'landscape'
      }
    ]
  },
  'MC2 Saint Barth': {
    images: [
      {
        url: '/assets/brand-images/mc2/mc2-cyprus1.jpg',
        alt: 'MC2 Saint Barth luxury beachwear and casual resort fashion collection',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/mc2/mc2-cyprus2.jpg',
        alt: 'MC2 Saint Barth premium swimwear and St. Barth inspired casual luxury',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/mc2/mc2-cyprus3.jpg',
        alt: 'MC2 Saint Barth designer beachwear and sophisticated resort wear',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/mc2/mc2-cyprus4.jpg',
        alt: 'MC2 Saint Barth luxury casual wear and premium beach fashion',
        orientation: 'portrait'
      }
    ]
  },
  'Maurizio Baldassari': {
    images: [
      {
        url: '/assets/brand-images/MAURIZIO-BALDASSARI/MAURIZIO-BALDASSARI-CYPRUS01.jpg',
        alt: 'Maurizio Baldassari luxury menswear and Italian knitwear collection',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/MAURIZIO-BALDASSARI/MAURIZIO-BALDASSARI-CYPRUS02.jpg',
        alt: 'Maurizio Baldassari sophisticated men\'s outerwear and Milanese fashion',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/MAURIZIO-BALDASSARI/MAURIZIO-BALDASSARI-CYPRUS05.jpg',
        alt: 'Maurizio Baldassari premium men\'s blazers and Italian tailoring excellence',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/MAURIZIO-BALDASSARI/MAURIZIO-BALDASSARI-CYPRUS10.jpg',
        alt: 'Maurizio Baldassari luxury men\'s knitwear and contemporary Italian fashion',
        orientation: 'landscape'
      }
    ]
  },
  'Paolo Pecora Milano': {
    images: [
      {
        url: '/assets/brand-images/paulopecora/paulopecora-cyprus1.jpg',
        alt: 'Paolo Pecora Milano contemporary menswear and clean metropolitan tailoring',
        orientation: 'portrait'
      },
      {
        url: '/assets/brand-images/paulopecora/paulopecora-cyprus2.jpg',
        alt: 'Paolo Pecora Milano modern men\'s fashion and sophisticated Italian design',
        orientation: 'landscape'
      },
      {
        url: '/assets/brand-images/paulopecora/paulopecora-cyprus3.jpg',
        alt: 'Paolo Pecora Milano luxury menswear and premium Italian clothing collection',
        orientation: 'portrait'
      }
    ]
  }
};

const BrandGallery = () => {
  const [selectedBrand, setSelectedBrand] = useState('Marc Cain');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const brands = Object.keys(brandGalleryData);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const images = brandGalleryData[selectedBrand]?.images || [];
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const images = brandGalleryData[selectedBrand]?.images || [];
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 mb-6 glass-effect rounded-full">
            <span className="luxury-subheading text-luxury-gold">Brand Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-light">
            Brand <span className="luxury-text-gradient">Lookbooks</span>
          </h2>
          <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Explore our curated collections from the world's most prestigious fashion houses, 
            showcasing the artistry and craftsmanship that defines luxury fashion.
          </p>
        </div>

        {/* Brand selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 border ${
                selectedBrand === brand
                  ? 'bg-luxury-gold text-black border-luxury-gold'
                  : 'bg-transparent text-white border-white/30 hover:border-luxury-gold hover:text-luxury-gold'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Image gallery - Uniform portrait thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brandGalleryData[selectedBrand]?.images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
              onClick={() => openModal(image, index)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-luxury-gray rounded-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h4 className="font-medium mb-1 text-sm">{selectedBrand}</h4>
                    <p className="text-xs text-gray-300">View Collection</p>
                  </div>
                </div>

                {/* Image counter */}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {index + 1}/{brandGalleryData[selectedBrand]?.images.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal Gallery */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            onClick={closeModal}
          >
            <div className="relative w-full h-full max-w-7xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Main image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ maxHeight: '90vh', maxWidth: '90vw' }}
                />
              </div>

              {/* Navigation arrows */}
              {brandGalleryData[selectedBrand]?.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-luxury-gold transition-colors duration-300 bg-black/70 hover:bg-black/90 rounded-full p-4 z-10"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-luxury-gold transition-colors duration-300 bg-black/70 hover:bg-black/90 rounded-full p-4 z-10"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-luxury-gold transition-colors duration-300 bg-black/70 hover:bg-black/90 rounded-full p-3 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-center">
                  <h3 className="font-medium mb-1 text-lg">{selectedBrand}</h3>
                  <p className="text-xs text-luxury-gold">
                    {currentImageIndex + 1} of {brandGalleryData[selectedBrand]?.images.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandGallery;
