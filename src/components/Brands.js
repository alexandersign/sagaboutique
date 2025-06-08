import React, { useState } from 'react';

const brandData = {
  monoBrands: [
    {
      name: "Bogner",
      logo: '/assets/brands/bogner.png',
      description: "German luxury brand specializing in premium sportswear and ski fashion since 1932.",
      website: "https://www.bogner.com",
      storeLocation: "Bogner Limassol",
      storeAddress: "Natia House, Shop 6-7, Limassol"
    },
    {
      name: "Peserico",
      logo: '/assets/brands/peserico.png',
      description: "Italian label known for refined tailoring and timeless, elegant womenswear.",
      website: "https://www.peserico.it",
      storeLocation: "Peserico Limassol",
      storeAddress: "205 Arch. Makariou III Ave, Limassol"
    },
    {
      name: "Baldinini",
      logo: '/assets/brands/baldinini.jpeg',
      description: "Footwear house from Italy with a legacy of artisanal leather craftsmanship and luxury designs.",
      website: "https://www.baldinini.it",
      storeLocation: "Baldinini Limassol",
      storeAddress: "205 Arch. Makariou III Ave, Limassol"
    },
    {
      name: "Marc Cain",
      logo: '/assets/brands/marccain.png',
      description: "German designer brand that fuses innovation and femininity in stylish, comfortable collections.",
      website: "https://www.marc-cain.com",
      storeLocation: "Marc Cain Limassol & Paphos",
      storeAddress: "230 Arch. Makariou III Ave, Limassol • Kings Avenue Mall, Paphos"
    }
  ],
  multiBrands: [
    {
      name: "MC2 Saint Barth",
      logo: '/assets/brands/mc2.png',
      description: "Iconic beachwear brand from Italy inspired by St. Barth's casual-chic lifestyle.",
      website: "https://www.mc2saintbarth.com",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Le Tricot Perugia",
      logo: '/assets/brands/letricotperugia.png',
      description: "Italian knitwear company known for luxurious textures and contemporary silhouettes.",
      website: "https://www.letricotperugia.it",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Moschino",
      logo: '/assets/brands/moschino.png',
      description: "Bold, playful Italian fashion house known for creative prints and eccentric design.",
      website: "https://www.moschino.com",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Loriblu",
      logo: '/assets/brands/loriblu.png',
      description: "Italian shoemaker delivering glamorous, red-carpet-ready high heels and boots.",
      website: "https://www.loriblu.com",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Premiata",
      logo: '/assets/brands/premiata.png',
      description: "Modern sneakers and footwear label that blends Italian heritage with innovation.",
      website: "https://www.premiata.com",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Fratelli Rossetti",
      logo: '/assets/brands/fratellirosetti.png',
      description: "Timeless Italian craftsmanship in luxury shoes and leather accessories.",
      website: "https://www.fratellirossetti.com",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Casadei",
      logo: '/assets/brands/casadei.png',
      description: "Famous for its blade heel and luxurious, fashion-forward Italian footwear.",
      website: "https://www.casadei.com",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Paolo Pecora Milano",
      logo: '/assets/brands/paolopecora.png',
      description: "Contemporary menswear rooted in clean lines and metropolitan tailoring.",
      website: "https://paolopecora.com/",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Maurizio Baldassari",
      logo: '/assets/brands/maurizio.png',
      description: "Menswear brand from Milan specializing in classic Italian knitwear and outerwear.",
      website: "https://www.mauriziobaldassari.it",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    },
    {
      name: "Diego M",
      logo: '/assets/brands/diegom.png',
      description: "Outerwear label delivering bold, high-performance fashion with Italian flair.",
      website: "https://www.diegom.it",
      storeLocation: "Saga Boutique & Saga Outlet",
      storeAddress: "Georgiou A' Street, Limassol"
    }
  ]
};

const BrandCard = ({ brand, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div
      className="group relative transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Clean minimal card */}
      <div className="relative bg-luxury-black border border-white/5 hover:border-white/10 transition-all duration-300 p-8">
        {/* Large logo container - 500px design size */}
        <div className="relative h-40 flex items-center justify-center mb-8 overflow-hidden">
          <img
            src={brand.logo}
            alt={brand.name}
            className={`w-full h-full object-contain transition-all duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-105`}
            style={{ 
              filter: 'none',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        
        {/* Brand description */}
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            {brand.description}
          </p>
          
          {/* Store availability */}
          <div className="pt-4 border-t border-white/5">
            <p className="text-luxury-gold text-xs font-medium mb-1">Available at:</p>
            <p className="text-white text-sm font-medium">{brand.storeLocation}</p>
            <p className="text-gray-400 text-xs">{brand.storeAddress}</p>
          </div>
          
          {/* Website link */}
          <div className="pt-4">
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-luxury-gold transition-colors duration-300 text-sm font-medium"
            >
              Visit Website
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <section id="brands" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 mb-6 glass-effect rounded-full">
            <span className="luxury-subheading text-luxury-gold">Premium Collections</span>
          </div>
          <h2 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-6">
            Our <span className="luxury-text-gradient">Brands</span>
          </h2>
          <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Discover an exclusive selection of the world's most prestigious fashion houses, 
            curated for the discerning individual who appreciates exceptional craftsmanship.
          </p>
        </div>
        
        {/* Mono-Brand Stores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="luxury-heading text-3xl md:text-4xl mb-4">Mono-Brand Boutiques</h3>
            <p className="text-gray-400 luxury-subheading">Dedicated spaces for singular excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandData.monoBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} index={index} />
            ))}
          </div>
        </div>
        
        {/* Multi-Brand Stores */}
        <div>
          <div className="text-center mb-12">
            <h3 className="luxury-heading text-3xl md:text-4xl mb-4">Multi-Brand Collections</h3>
            <p className="text-gray-400 luxury-subheading">Curated selections from renowned designers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {brandData.multiBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} index={index + 4} />
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <a 
              href="#stores" 
              className="btn btn-primary"
            >
              Visit Our Boutiques
            </a>
            <a 
              href="#contact" 
              className="btn bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500"
            >
              Personal Shopping
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
