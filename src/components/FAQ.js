import React, { useState } from 'react';

const faqData = [
  {
    question: "Does Saga Boutique offer online shopping?",
    answer: "Not yet — but our online experience is in development. Follow us on Instagram for updates and shop with us in-store for now. We're working on creating a seamless digital experience that matches our in-store luxury service."
  },
  {
    question: "Can I order via Instagram?",
    answer: "Yes! DM us at @saga_boutique_cyprus_ and we'll help arrange shipping. Our team can provide detailed photos, sizing information, and styling advice through Instagram. We offer secure payment options and reliable shipping across Cyprus."
  },
  {
    question: "Which brands does Saga Boutique carry?",
    answer: "We offer an exclusive selection of premium European fashion labels including Moschino, Bogner, Marc Cain, Peserico, Baldinini, MC2 Saint Barth, Le Tricot Perugia, Loriblu, Premiata, Fratelli Rossetti, Casadei, Paolo Pecora Milano, Maurizio Baldassari, and Diego M. Each brand is carefully curated for quality and style."
  },
  {
    question: "Where are your stores located?",
    answer: "We have multiple locations across Cyprus: Saga Boutique and Saga Outlet on Georgiou A' Street in Limassol, plus dedicated mono-brand stores for Bogner, Peserico, Baldinini, and Marc Cain in both Limassol and Paphos (Kings Avenue Mall)."
  },
  {
    question: "Do you offer personal styling services?",
    answer: "Absolutely! Our expert stylists provide personalized consultations to help you create the perfect wardrobe. Book an appointment at any of our locations for one-on-one styling advice, outfit coordination, and exclusive access to new collections."
  },
  {
    question: "What are your store hours?",
    answer: "Our stores are generally open Monday to Saturday from 10:00 AM to 8:00 PM, and Sunday from 11:00 AM to 6:00 PM. Hours may vary by location and season. Please call your preferred store directly for specific opening times."
  },
  {
    question: "Do you offer alterations and tailoring?",
    answer: "Yes, we provide professional alteration services to ensure the perfect fit for your luxury garments. Our skilled tailors can adjust sizing, hemming, and make custom modifications while maintaining the integrity of the original design."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), cash, and bank transfers. For Instagram orders, we offer secure payment links and can arrange bank transfers for your convenience."
  },
  {
    question: "Do you have a loyalty program?",
    answer: "We offer exclusive benefits for our valued customers including early access to new collections, private shopping events, special discounts, and personalized styling sessions. Ask our staff about joining our VIP customer program."
  },
  {
    question: "Can I return or exchange items?",
    answer: "Yes, we have a flexible return and exchange policy. Items can be returned within 14 days of purchase in original condition with tags attached. For Instagram purchases, please contact us to arrange returns or exchanges."
  },
  {
    question: "Do you offer gift cards?",
    answer: "Yes, we offer luxury gift cards perfect for any occasion. Available in various denominations, they can be purchased at any of our stores or arranged through Instagram. Gift cards are valid for one year from purchase date."
  },
  {
    question: "How can I stay updated on new arrivals?",
    answer: "Follow us on Instagram @saga_boutique_cyprus_ for the latest collections, styling tips, and exclusive previews. You can also visit our stores regularly or ask our staff to notify you when specific items or brands arrive."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="mb-6 glass-effect rounded-none p-8 border border-white/10 hover:border-luxury-gold/30 transition-all duration-500">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-opacity-20 rounded-md p-2 -m-2"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="luxury-heading text-xl pr-4 text-white">{faq.question}</h3>
        <span className="flex-shrink-0">
          <svg 
            className={`w-6 h-6 transition-all duration-500 text-luxury-gold ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-6 pt-6 border-t border-luxury-gold/20">
          <div className="w-12 h-px bg-luxury-gold mb-4"></div>
          <p className="text-gray-300 leading-relaxed font-light">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section id="faq" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 mb-6 glass-effect rounded-full">
            <span className="luxury-subheading text-luxury-gold">Customer Support</span>
          </div>
          <h2 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-6">
            Frequently Asked <span className="luxury-text-gradient">Questions</span>
          </h2>
          <div className="w-24 h-px bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Find answers to common questions about our luxury boutiques, services, 
            and exclusive collections. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <a 
              href="tel:+35725313126" 
              className="btn btn-primary"
            >
              Call Us Directly
            </a>
            <a 
              href="https://www.instagram.com/saga_boutique_cyprus_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500"
            >
              Message on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
