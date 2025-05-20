import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send data to Formspree
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // In production, you would use:
    // const form = e.target;
    // const formData = new FormData(form);
    // fetch('https://formspree.io/f/mxyzabc', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // }).then(response => {
    //   if (response.ok) {
    //     setFormStatus({
    //       submitted: true,
    //       error: false,
    //       message: 'Thank you for your message! We will get back to you soon.'
    //     });
    //     form.reset();
    //   } else {
    //     response.json().then(data => {
    //       setFormStatus({
    //         submitted: true,
    //         error: true,
    //         message: data.error || 'Something went wrong. Please try again.'
    //       });
    //     });
    //   }
    // }).catch(error => {
    //   setFormStatus({
    //     submitted: true,
    //     error: true,
    //     message: 'There was a problem submitting your form. Please try again.'
    //   });
    // });
  };
  
  return (
    <section id="contact" className="py-20 bg-saga-black text-saga-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-lg mb-6">
              We'd love to hear from you. Reach out for inquiries, collaborations, or press.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </div>
          </form>
          
          {formStatus.submitted && (
            <div className={`mt-6 p-4 rounded-md ${formStatus.error ? 'bg-red-900' : 'bg-green-900'}`}>
              <p className="text-center">{formStatus.message}</p>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/saga.boutique/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/SagaBoutiquesCyprus/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
