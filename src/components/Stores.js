import React from 'react';

const storeLocations = [
  {
    name: "Saga Boutique",
    address: "36 Georgiou A' Street, Limassol",
    phone: "+357 25 313126",
    image: '/assets/stores/marc-cain-limassol-300x225.jpg'
  },
  {
    name: "Saga Outlet",
    address: "83 Georgiou A' Street, Limassol",
    phone: "+357 25 321839",
    image: '/assets/stores/marc-cain-limassol-300x225.jpg'
  },
  {
    name: "Baldinini",
    address: "205 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 025577",
    image: '/assets/stores/BOGNER-store-picture-1-300x183.jpg'
  },
  {
    name: "Marc Cain Limassol",
    address: "230 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 029400",
    image: '/assets/stores/marc-cain-limassol-300x225.jpg'
  },
  {
    name: "Marc Cain Paphos",
    address: "Kings Avenue Mall, Paphos",
    phone: "+357 26 020069",
    image: '/assets/stores/marc-cain-paphos.jpg'
  },
  {
    name: "Bogner",
    address: "Natia House, Shop 6-7, Limassol",
    phone: "+357 25 028788",
    image: '/assets/stores/BOGNER-store-picture-1-300x183.jpg'
  },
  {
    name: "Peserico",
    address: "205 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 020082",
    image: '/assets/stores/peserico.png'
  }
];

const StoreCard = ({ store, index }) => {
  const handleCallStore = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleGetDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleVisitWebsite = (storeName) => {
    const storeWebsites = {
      'Marc Cain': 'https://www.marc-cain.com/en/store-locator',
      'Bogner': 'https://www.bogner.com/en/stores',
      'Baldinini': 'https://www.baldinini.it/en/stores',
      'Peserico': 'https://www.peserico.it/en/stores'
    };
    
    const website = storeWebsites[storeName];
    if (website) {
      window.open(website, '_blank');
    }
  };

  return (
    <div 
      className="group relative overflow-hidden transition-all duration-700 hover:scale-105"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative glass-effect rounded-none border border-white/10 hover:border-luxury-gold/30 transition-all duration-500 overflow-hidden">
        {/* Store image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={store.image} 
            alt={store.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Luxury overlay */}
          <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Store content */}
        <div className="p-8">
          <h3 className="luxury-heading text-2xl mb-4 text-white group-hover:text-luxury-gold transition-colors duration-300">
            {store.name}
          </h3>
          
          <div className="w-12 h-px bg-luxury-gold mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          {store.locations ? (
            // Multiple locations (Marc Cain)
            <div className="space-y-6">
              {store.locations.map((location, idx) => (
                <div key={idx} className={idx > 0 ? "pt-6 border-t border-white/10" : ""}>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-2 font-light">{location.address}</p>
                    <p className="text-luxury-gold luxury-subheading">{location.phone}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleCallStore(location.phone)}
                      className="px-4 py-2 bg-luxury-gold/20 hover:bg-luxury-gold hover:text-black text-luxury-gold text-sm transition-all duration-300 border border-luxury-gold/30 hover:border-luxury-gold"
                    >
                      Call Store
                    </button>
                    <button
                      onClick={() => handleGetDirections(location.address)}
                      className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white text-sm transition-all duration-300 border border-white/30 hover:border-white"
                    >
                      Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Single location
            <div>
              <div className="mb-6">
                <p className="text-gray-300 mb-2 font-light leading-relaxed">{store.address}</p>
                <p className="text-luxury-gold luxury-subheading">{store.phone}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleCallStore(store.phone)}
                  className="px-4 py-2 bg-luxury-gold/20 hover:bg-luxury-gold hover:text-black text-luxury-gold text-sm transition-all duration-300 border border-luxury-gold/30 hover:border-luxury-gold"
                >
                  Call Store
                </button>
                <button
                  onClick={() => handleGetDirections(store.address)}
                  className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white text-sm transition-all duration-300 border border-white/30 hover:border-white"
                >
                  Directions
                </button>
                {['Marc Cain', 'Bogner', 'Baldinini', 'Peserico'].includes(store.name) && (
                  <button
                    onClick={() => handleVisitWebsite(store.name)}
                    className="px-4 py-2 bg-luxury-gray/50 hover:bg-luxury-gray text-white text-sm transition-all duration-300 border border-gray-600 hover:border-gray-400"
                  >
                    Website
                  </button>
                )}
              </div>
            </div>
          )}
          
          {/* Special handling for Marc Cain website button */}
          {store.name === 'Marc Cain' && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <button
                onClick={() => handleVisitWebsite(store.name)}
                className="w-full px-6 py-3 bg-gradient-to-r from-luxury-gold/20 to-luxury-gold/10 hover:from-luxury-gold hover:to-luxury-gold hover:text-black text-luxury-gold transition-all duration-500 border border-luxury-gold/30 hover:border-luxury-gold"
              >
                Visit Marc Cain Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Stores = () => {
  return (
    <section id="stores" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 mb-6 glass-effect rounded-full">
            <span className="luxury-subheading text-luxury-gold">Boutique Locations</span>
          </div>
          <h2 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-6">
            Our <span className="luxury-text-gradient">Boutiques</span>
          </h2>
          <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Visit our carefully curated spaces across Cyprus, where luxury fashion 
            meets personalized service in an atmosphere of refined elegance.
          </p>
        </div>
        
        {/* Store grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {storeLocations.map((store, index) => (
            <StoreCard key={index} store={store} index={index} />
          ))}
        </div>
        
        {/* Visit us section */}
        <div className="text-center mb-16">
          <h3 className="luxury-heading text-3xl md:text-4xl mb-6">Experience Luxury</h3>
          <div className="w-16 h-px bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Step into our world of haute couture and discover collections that embody 
            the pinnacle of European craftsmanship. Our expert stylists are ready to 
            provide personalized consultations in our elegant showrooms across Cyprus.
          </p>
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <a 
              href="tel:+35725313126" 
              className="btn btn-primary"
            >
              Book Appointment
            </a>
            <a 
              href="#contact" 
              className="btn bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500"
            >
              Personal Styling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
