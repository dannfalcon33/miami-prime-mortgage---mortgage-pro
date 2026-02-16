import React, { useState } from 'react';
import { CheckCircle, Calendar, MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import Modal from './ui/Modal';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    downPayment: '',
    creditScore: '',
    amount: '',
    propertyType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose(); // Close the form modal
    // Simulate API call delay
    setTimeout(() => {
      setIsSuccessOpen(true);
      setFormData({ // Reset form
        name: '', email: '', phone: '', downPayment: '', creditScore: '', amount: '', propertyType: ''
      });
    }, 500);
  };

  const inputClasses = "w-full p-3 bg-navy-800 border border-navy-700 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 outline-none transition";
  const labelClasses = "text-sm font-medium text-gray-300";

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Start Your Application">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className={labelClasses}>Full Name</label>
              <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className={inputClasses} placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className={labelClasses}>Email Address</label>
              <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClasses} placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className={labelClasses}>Phone Number</label>>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClasses} placeholder="+1 (305) 555-0000" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className={labelClasses}>Loan Amount</label>
              <input required type="number" name="amount" value={formData.amount} onChange={handleInputChange} className={inputClasses} placeholder="500,000" />
            </div>
            <div className="space-y-2">
              <label className={labelClasses}>Credit Score</label>
              <select name="creditScore" value={formData.creditScore} onChange={handleInputChange} className={inputClasses}>
                <option value="">Select range</option>
                <option value="excellent">Excellent (720+)</option>
                <option value="good">Good (690-719)</option>
                <option value="fair">Fair (630-689)</option>
                <option value="poor">Needs Improvement (&lt;630)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
              <label className={labelClasses}>Downpayment</label>
              <select name="downPayment" value={formData.downPayment} onChange={handleInputChange} className={inputClasses}>
                <option value="">Select percentage</option>
                <option value="3.5">3.5% (FHA)</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="20+">More than 20%</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className={labelClasses}>Property Type</label>
              <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} className={inputClasses}>
                <option value="">Select usage</option>
                <option value="primary">Primary Residence</option>
                <option value="secondary">Secondary Home (Vacation)</option>
                <option value="investment">Investment Property</option>
              </select>
            </div>
          </div>

          <Button type="submit" className="w-full mt-4">
            SUBMIT APPLICATION
          </Button>
          <p className="text-xs text-gray-500 text-center">Your data is safe and secure with us.</p>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} maxWidth="max-w-md">
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Application Received!</h3>
          <p className="text-gray-400 mb-8">Thank you for contacting us. An advisor will review your profile and contact you shortly.</p>
          
          <div className="space-y-3">
            <a 
              href="https://wa.me/13050000000" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            >
              <MessageCircle size={20} />
              Contact via WhatsApp
            </a>
            
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <Calendar size={20} />
              Schedule Meeting (Calendly)
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;