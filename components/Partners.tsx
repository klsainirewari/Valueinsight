
import React from 'react';

const Partners: React.FC = () => {
  // List of major AMCs with Logo URLs
  const partners = [
    { name: "SBI Mutual Fund", logo: "https://logo.clearbit.com/sbimf.com" },
    { name: "HDFC Mutual Fund", logo: "https://logo.clearbit.com/hdfcfund.com" },
    { name: "ICICI Prudential", logo: "https://logo.clearbit.com/icicipruamc.com" },
    { name: "Nippon India", logo: "https://logo.clearbit.com/nipponindiamf.com" },
    { name: "Axis Mutual Fund", logo: "https://logo.clearbit.com/axismf.com" },
    { name: "Kotak Mutual Fund", logo: "https://logo.clearbit.com/kotakmf.com" },
    { name: "Aditya Birla Sun Life", logo: "https://logo.clearbit.com/mutualfund.adityabirlacapital.com" },
    { name: "UTI Mutual Fund", logo: "https://logo.clearbit.com/utimf.com" },
    { name: "Tata Mutual Fund", logo: "https://logo.clearbit.com/tatamutualfund.com" },
    { name: "Mirae Asset", logo: "https://logo.clearbit.com/miraeassetmf.co.in" },
    { name: "DSP Mutual Fund", logo: "https://logo.clearbit.com/dspim.com" },
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
            <div key={index} className="flex items-center justify-center min-w-[120px] h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto object-contain max-w-[150px]"
                onError={(e) => {
                  // Fallback if image fails
                  (e.target as HTMLImageElement).style.display = 'none';
                  const span = document.createElement('span');
                  span.innerText = partner.name;
                  span.className = "text-lg font-bold text-slate-400";
                  (e.target as HTMLElement).parentElement?.appendChild(span);
                }}
              />
            </div>
          ))}
          {/* Duplicate Loop for Infinite Scroll */}
          {partners.map((partner, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center min-w-[120px] h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto object-contain max-w-[150px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const span = document.createElement('span');
                  span.innerText = partner.name;
                  span.className = "text-lg font-bold text-slate-400";
                  (e.target as HTMLElement).parentElement?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Fade edges for smooth look */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Partners;
