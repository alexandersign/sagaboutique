import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would subscribe the user to a newsletter
    setSubscribed(true);
    setEmail('');
  };
  
  return (
    <footer className="py-12 bg-black text-white border-t border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="/assets/logo/SAGA-logo.png" alt="Saga Boutique" className="h-12 mb-4" />
            <p className="text-gray-400 text-center md:text-left">
              Cyprus' leading luxury fashion retailer, bringing designer craftsmanship and curated elegance to your wardrobe.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#brands" className="text-gray-400 hover:text-white transition-colors">Brands</a>
              <a href="#stores" className="text-gray-400 hover:text-white transition-colors">Stores</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email address"
                    required
                    className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-black font-medium rounded-r-md hover:bg-gray-200 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-green-400">Thank you for subscribing!</p>
            )}
            <p className="mt-4 text-sm text-gray-400 text-center md:text-left">
              Subscribe to receive updates on new arrivals and special promotions.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://www.instagram.com/saga.boutique/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/SagaBoutiquesCyprus/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Saga Boutique – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
