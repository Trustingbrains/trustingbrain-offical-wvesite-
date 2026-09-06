import React from 'react';
import { ShieldCheck, Zap, Layers, Headphones } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function WhyChooseUs() {
  const icons = [ShieldCheck, Zap, Layers, Headphones];

  return (
    <section className="relative py-24 bg-[#0C0212] overflow-hidden border-t border-white/10">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 orb-glow-purple -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 orb-glow-orange pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Graphic Showcase with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection direction="right">
              <TiltCard maxTilt={12} scale={1.03}>
                <div className="relative mx-auto max-w-md">
                  <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-[#160E22]">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
                      alt="Trusting Brains Innovation"
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/bg-abstract.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100317] via-transparent to-transparent" />
                  </div>

                  {/* Floating Stat Box with 3D Pop */}
                  <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-[-20px] bg-[#1D112B] border border-white/15 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[220px] transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs uppercase font-bold text-white tracking-wider">Live Metrics</span>
                    </div>
                    <h4 className="text-2xl font-black text-white">99%</h4>
                    <p className="text-xs text-tb-textMuted">Client Satisfaction & Proven Retention Record</p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
                Why should you choose Us?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-3">
                {siteData.whyChooseUs.heading}
              </h2>

              <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed mt-4">
                {siteData.whyChooseUs.leadText}
              </p>
            </AnimatedSection>

            {/* 4 Feature Points Grid with 3D Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {siteData.whyChooseUs.points.map((pt, i) => {
                const IconComponent = icons[i % icons.length];
                return (
                  <AnimatedSection key={i} delay={i * 0.1} direction="up">
                    <TiltCard maxTilt={10} scale={1.03}>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-tb-purple/50 transition-all duration-300 shadow-xl">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tb-purple to-tb-orange flex items-center justify-center text-white mb-3 shadow-md">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white mb-1.5">{pt.title}</h3>
                        <p className="text-xs text-tb-textSubtle leading-relaxed">{pt.desc}</p>
                      </div>
                    </TiltCard>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
