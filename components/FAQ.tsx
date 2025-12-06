import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the minimum amount to start an investment?",
      answer: "You can start a SIP (Systematic Investment Plan) with as little as ₹500 per month. There is no upper limit. This makes mutual funds accessible to everyone."
    },
    {
      question: "Is my money safe in Mutual Funds?",
      answer: "Mutual Funds are regulated by SEBI (Securities and Exchange Board of India). While all market-linked investments carry some risk, SEBI regulations ensure transparency and protect investor interests."
    },
    {
      question: "What documents do I need to start?",
      answer: "To start investing (KYC), you simply need your PAN Card, Aadhar Card, and a Bank Proof (Cancelled Cheque or Passbook). The process is completely digital and paperless."
    },
    {
      question: "Can I withdraw my money anytime?",
      answer: "Yes, most open-ended mutual funds offer high liquidity. You can withdraw your money anytime, and it usually gets credited to your bank account within 1-3 working days. (Note: ELSS funds have a 3-year lock-in)."
    }
  ];

  return (
    <section className="py-20 bg-white reveal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-full mb-3">
             <HelpCircle className="h-6 w-6 text-brand-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-200 hover:shadow-md bg-slate-50">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 text-slate-600 border-t border-slate-100 bg-slate-50 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
