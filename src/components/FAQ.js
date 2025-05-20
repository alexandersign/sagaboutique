import React, { useState } from 'react';

const faqData = [
  {
    question: "Does Saga Boutique offer online shopping?",
    answer: "Not yet — but our online experience is in development. Follow us on Instagram for updates and shop with us in-store for now."
  },
  {
    question: "Can I order via Instagram?",
    answer: "Yes! DM us at @saga.boutique and we'll help arrange shipping."
  },
  {
    question: "Which brands does Saga Boutique carry?",
    answer: "From Moschino to Bogner, we offer a premium collection of European fashion labels in-store."
  },
  {
    question: "Where are your stores located?",
    answer: "All Saga stores are based in Limassol and Paphos. Scroll to our store section to find the nearest one."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="mb-6 border-b border-gray-800 pb-6">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-xl font-semibold">{faq.question}</h3>
        <span className="ml-4">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-4 text-gray-300">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-saga-black text-saga-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
