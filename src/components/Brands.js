import React, { useState } from 'react';

const brandData = {
  monoBrands: [
    {
      name: "Bogner",
      logo: '/assets/brands/bogner.png',
      description: "German luxury brand specializing in premium sportswear and ski fashion since 1932."
    },
    {
      name: "Peserico",
      logo: '/assets/brands/peserico.png',
      description: "Italian label known for refined tailoring and timeless, elegant womenswear."
    },
    {
      name: "Baldinini",
      logo: '/assets/brands/baldinini.jpeg',
      description: "Footwear house from Italy with a legacy of artisanal leather craftsmanship and luxury designs."
    },
    {
      name: "Marc Cain",
      logo: '/assets/brands/marccain.png',
      description: "German designer brand that fuses innovation and femininity in stylish, comfortable collections."
    }
  ],
  multiBrands: [
    {
      name: "MC2 Saint Barth",
      logo: '/assets/brands/mc2.png',
      description: "Iconic beachwear brand from Italy inspired by St. Barth's casual-chic lifestyle."
    },
    {
      name: "Le Tricot Perugia",
      logo: '/assets/brands/letricotperugia.png',
      description: "Italian knitwear company known for luxurious textures and contemporary silhouettes."
    },
    {
      name: "Moschino",
      logo: '/assets/brands/moschino.png',
      description: "Bold, playful Italian fashion house known for creative prints and eccentric design."
    },
    {
      name: "Loriblu",
      logo: '/assets/brands/loriblu.png',
      description: "Italian shoemaker delivering glamorous, red-carpet-ready high heels and boots."
    },
    {
      name: "Premiata",
      logo: '/assets/brands/premiata.png',
      description: "Modern sneakers and footwear label that blends Italian heritage with innovation."
    },
    {
      name: "Fratelli Rossetti",
      logo: '/assets/brands/fratellirosetti.png',
      description: "Timeless Italian craftsmanship in luxury shoes and leather accessories."
    },
    {
      name: "Casadei",
      logo: '/assets/brands/casadei.png',
      description: "Famous for its blade heel and luxurious, fashion-forward Italian footwear."
    },
    {
      name: "Paolo Pecora Milano",
      logo: '/assets/brands/paolopecora.png',
      description: "Contemporary menswear rooted in clean lines and metropolitan tailoring."
    },
    {
      name: "Maurizio Baldassari",
      logo: '/assets/brands/maurizio.png',
      description: "Menswear brand from Milan specializing in classic Italian knitwear and outerwear."
    },
    {
      name: "Diego M",
      logo: '/assets/brands/diegom.png',
      description: "Outerwear label delivering bold, high-performance fashion with Italian flair."
    }
  ]
};

const BrandCard = ({ brand }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-24 flex items-center justify-center mb-4">
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="max-h-full max-w-full object-contain filter brightness-0 invert"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{brand.name}</h3>
      
      {/* Description overlay on hover */}
      <div 
        className={`absolute inset-0 bg-black bg-opacity-90 p-4 flex items-center justify-center rounded-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-sm text-center">{brand.description}</p>
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <section id="brands" className="py-20 bg-saga-black text-saga-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Brands</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Mono-Brand Stores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandData.monoBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Multi-Brand Stores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandData.multiBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
