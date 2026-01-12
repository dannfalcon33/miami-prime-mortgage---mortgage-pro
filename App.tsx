import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LoanTypes from './components/LoanTypes';
import Testimonials from './components/Testimonials';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <div className="font-sans text-navy-900 bg-white antialiased overflow-x-hidden">
      <Navbar onOpenForm={openForm} />
      <main>
        <Hero onOpenForm={openForm} />
        <About onOpenForm={openForm} />
        <LoanTypes onOpenForm={openForm} />
        <Testimonials onOpenForm={openForm} />
        <Calculator onOpenForm={openForm} />
      </main>
      <Footer />
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default App;