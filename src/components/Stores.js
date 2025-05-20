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
    name: "Marc Cain – Limassol",
    address: "230 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 029400",
    image: '/assets/stores/marc-cain-limassol-300x225.jpg'
  },
  {
    name: "Marc Cain – Paphos",
    address: "Kings Avenue Mall, Paphos",
    phone: "+357 26 020069",
    image: '/assets/stores/marc-cain-limassol-300x225.jpg'
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
    image: '/assets/stores/BOGNER-store-picture-1-300x183.jpg'
  }
];

const StoreCard = ({ store }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={store.image} 
          alt={store.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
        <p className="text-gray-300 mb-2">{store.address}</p>
        <p className="text-gray-300">{store.phone}</p>
      </div>
    </div>
  );
};

const Stores = () => {
  return (
    <section id="stores" className="py-20 bg-saga-black text-saga-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Store Locations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeLocations.map((store, index) => (
            <StoreCard key={index} store={store} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
          <p className="text-lg mb-8">
            Experience luxury fashion in person at any of our locations in Limassol and Paphos.
          </p>
          
          {/* Google Maps embed placeholder */}
          <div className="bg-gray-800 rounded-lg p-4 h-96 flex items-center justify-center">
            <p className="text-gray-400">
              Google Maps embed would be placed here in production.
              <br />
              For implementation, use: 
              <br />
              &lt;iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"&gt;&lt;/iframe&gt;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
