
import React from 'react';

const Partners: React.FC = () => {
  // List of major AMCs with Optimized Logo URLs
  const partners = [
    { name: "SBI Mutual Fund", logo: "https://logo.clearbit.com/sbimf.com" },
    { name: "HDFC Mutual Fund", logo: "https://logo.clearbit.com/hdfcfund.com" },
    { name: "ICICI Prudential", logo: "https://logo.clearbit.com/icicipruamc.com" },
    { name: "Nippon India", logo: "https://logo.clearbit.com/nipponindiamf.com" },
    { name: "Axis Mutual Fund", logo: "https://logo.clearbit.com/axismf.com" },
    { name: "Kotak Mutual Fund", logo: "https://logo.clearbit.com/kotak.com" },
    { name: "Aditya Birla", logo: "https://logo.clearbit.com/adityabirlacapital.com" },
    { name: "UTI Mutual Fund", logo: "https://logo.clearbit.com/utimf.com" },
    { name: "Tata Mutual Fund", logo: "https://logo.clearbit.com/tata.com" },
    { name: "Mirae Asset", logo: "https://logo.clearbit.com/miraeasset.co.in" },
    { name: "Franklin Templeton", logo: "https://logo.clearbit.com/franklintempletonindia.com" }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Distributing Schemes From India's Top Fund Houses
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {/* First Loop */}
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center w-[150px] h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  // Hide image
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  
                  // Show text fallback if not already shown
                  const parent = img.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = "fallback-text text-sm font-extrabold text-slate-400 border border-slate-200 px-3 py-2 rounded-lg bg-slate-50";
                    span.innerText = partner.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
          {/* Duplicate Loop for Infinite Scroll */}
          {partners.map((partner, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 flex items-center justify-center w-[150px] h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  const parent = img.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = "fallback-text text-sm font-extrabold text-slate-400 border border-slate-200 px-3 py-2 rounded-lg bg-slate-50";
                    span.innerText = partner.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Fade edges for smooth look */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Partners;
