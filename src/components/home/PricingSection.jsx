import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-24 sm:py-32 bg-[#100317] overflow-hidden">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/assets/bg-pricing.webp)' }}
      />
      <div className="absolute top-1/4 left-10 w-96 h-96 orb-glow-purple pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 orb-glow-orange pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
              Our Latest Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Choose Our Best Services
            </h2>
            <p className="text-base sm:text-lg text-tb-textMuted">
              Transparent, predictable pricing built for high reliability, performance, and dedicated 24/7 technical oversight.
            </p>

            {/* Billing Interval Switch */}
            <div className="inline-flex items-center gap-3 bg-[#160E22] p-1.5 rounded-full border border-white/10 mt-6 shadow-xl">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  !isAnnual
                    ? 'bg-gradient-to-r from-tb-purple to-tb-orange text-white shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isAnnual
                    ? 'bg-gradient-to-r from-tb-purple to-tb-orange text-white shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span>Annually</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Save 30%
                </span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteData.pricingPlans.map((plan, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15} direction="up" className="h-full">
              <TiltCard maxTilt={12} scale={1.03} className="h-full">
                <div
                  className={`relative bg-[#160E22]/90 border rounded-3xl p-8 sm:p-10 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 h-full shadow-2xl ${
                    plan.popular
                      ? 'border-tb-purple shadow-glow-purple ring-1 ring-tb-purple/40 bg-gradient-to-b from-[#1E112E] to-[#160E22]'
                      : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-tb-purple to-tb-orange text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      Most Popular Choice
                    </span>
                  )}

                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{plan.title}</h3>
                      <p className="text-xs text-tb-textSubtle">{plan.tagline}</p>
                    </div>

                    {/* Price Display */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                          {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-xs sm:text-sm text-tb-textSubtle font-medium">
                          {isAnnual ? plan.yearlyPeriod : plan.monthlyPeriod}
                        </span>
                      </div>
                      <p className="text-xs text-tb-orange mt-2 font-medium">
                        {plan.saveText}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-tb-textMuted">
                          <Check className="w-4 h-4 text-tb-purple shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/contact-us"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 group shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-tb-purple to-tb-orange text-white shadow-glow-purple hover:scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
