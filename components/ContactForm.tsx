import React, { useState } from 'react';
import { Send, Phone, User, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp URL with pre-filled message
    const text = `Hello Kanaram Ji, I am interested in Mutual Fund investment.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const url = `https://wa.me/917206770673?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-white to-slate-50 reveal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Text Side */}
          <div className="md:w-5/12 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-8.3C81.5,3.8,70.2,13.6,60.6,22.8C51,31.9,43.1,40.4,34.5,47.3C25.9,54.2,16.6,59.5,6.5,61.4C-3.6,63.3,-14.5,61.9,-25.9,58.3C-37.3,54.7,-49.2,48.9,-59.1,39.8C-69,30.6,-76.9,18.1,-79.3,4.3C-81.7,-9.5,-78.6,-24.6,-69.8,-35.8C-61,-47,-46.5,-54.3,-32.8,-61.8C-19.1,-69.4,-6.2,-77.2,4.8,-85.5L15.8,-93.8Z" transform="translate(100 100)" />
                </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Request a Callback</h3>
              <p className="text-brand-100 leading-relaxed mb-6">
                Ready to start your wealth creation journey? Fill out the form, and I will personally get in touch with you to discuss the best investment strategies for your goals.
              </p>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 text-brand-200 mb-2">
                <Phone className="h-5 w-5" />
                <span>+91 72067 70673</span>
              </div>
              <div className="text-xs text-brand-300 mt-8">
                * Your details are kept strictly confidential.
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 bg-white p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">How can I help you?</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea
                    required
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="E.g. I want to start a SIP for my child's education..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:scale-[1.02]"
              >
                Send Request via WhatsApp <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
