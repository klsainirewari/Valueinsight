
import React from 'react';
import { PhoneCall, FileCheck, PieChart, TrendingUp, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Connect",
      description: "Book a free consultation call. We discuss your financial status and life goals.",
      icon: PhoneCall,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "KYC & Onboarding",
      description: "100% Digital process. We help you complete your KYC with simple documents (PAN/Aadhaar).",
      icon: FileCheck,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      title: "Portfolio Design",
      description: "We design a diversified portfolio based on your risk profile and time horizon.",
      icon: PieChart,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      title: "Invest & Track",
      description: "Start investing via SIP or Lumpsum. Track your wealth growth 24/7 on our app.",
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">How to Start Investing?</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Your journey to financial freedom takes just 4 simple steps. We handle the complexities, you enjoy the growth.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 text-center group">
                <div className={`w-16 h-16 mx-auto ${step.color} rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform relative`}>
                   <step.icon className="h-8 w-8" />
                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-2 border-white">
                     {step.id}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <a href="#contact-form" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800">
               Start your journey today <ArrowRight className="ml-2 h-4 w-4" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
