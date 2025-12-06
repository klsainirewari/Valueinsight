
import React from 'react';
import { UserCheck, Smartphone, XCircle, CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">The Human Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              Why choose a <span className="text-brand-600">Personal Distributor</span> over an App?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Investing apps provide tools, but they don't provide <strong>guidance</strong>. During market crashes, an app won't pick up your call to reassure you. We do.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-lg mr-4">
                  <UserCheck className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Emotional Discipline</h4>
                  <p className="text-slate-500 text-sm">We prevent panic selling during market lows, which is the #1 reason investors lose money.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-lg mr-4">
                  <UserCheck className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Family-Centric Planning</h4>
                  <p className="text-slate-500 text-sm">Algorithms don't understand your family dynamics. We plan for your specific life situations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl">
             <div className="grid grid-cols-2 gap-0">
                {/* Header */}
                <div className="pb-4 border-b border-slate-200 text-center">
                   <Smartphone className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                   <h4 className="font-bold text-slate-500">DIY Apps</h4>
                </div>
                <div className="pb-4 border-b border-slate-200 text-center bg-brand-50 rounded-t-xl">
                   <UserCheck className="h-8 w-8 text-brand-600 mx-auto mb-2" />
                   <h4 className="font-bold text-brand-700">Kanaram Saini</h4>
                </div>

                {/* Row 1 */}
                <div className="p-4 text-center border-b border-slate-200 border-r text-sm text-slate-500">
                  <XCircle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                  No Personal Guidance
                </div>
                <div className="p-4 text-center border-b border-slate-200 bg-brand-50/30 text-sm font-semibold text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
                  Dedicated Support
                </div>

                {/* Row 2 */}
                <div className="p-4 text-center border-b border-slate-200 border-r text-sm text-slate-500">
                   <XCircle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                   Generic Algorithms
                </div>
                <div className="p-4 text-center border-b border-slate-200 bg-brand-50/30 text-sm font-semibold text-slate-700">
                   <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
                   Goal-Based Strategy
                </div>

                {/* Row 3 */}
                <div className="p-4 text-center border-r text-sm text-slate-500">
                   <XCircle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                   Confusing Options
                </div>
                <div className="p-4 text-center bg-brand-50/30 text-sm font-semibold text-slate-700 rounded-b-xl">
                   <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
                   Curated Funds
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
