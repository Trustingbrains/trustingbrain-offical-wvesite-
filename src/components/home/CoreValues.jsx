import React from 'react';
import { Lightbulb, Eye, HeartHandshake, Award, Shield } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function CoreValues() {
  const icons = [Lightbulb, Eye, HeartHandshake, Award, Shield];

  return (
    <section className="relative py-24 bg-[#100317] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 orb-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
              Principles We Uphold
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Core Values that Shape Our Success
            </h2>
            <p className="text-sm sm:text-base text-tb-textMuted leading-relaxed">
              Trusting Brains IT Services Pvt. Ltd. aims to lead the IT industry, empowering businesses, individuals, and students through innovative digital solutions, high-grade development, and ethical integrity.
            </p>
          </div>
        </AnimatedSection>

        {/* 5 Core Values Horizontal / Grid Layout with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteData.coreValues.map((val, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <TiltCard maxTilt={15} scale={1.04} className="h-full">
                  <div className="group relative bg-[#160E22] border border-white/10 hover:border-tb-purple/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-glow-purple flex flex-col justify-between h-full shadow-xl">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-tb-purple group-hover:bg-tb-purple group-hover:text-white transition-all duration-300 mb-5 shadow-lg">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tb-purple transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs text-tb-textSubtle leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-mono">
                      <span>0{idx + 1}</span>
                      <span className="w-4 h-[1px] bg-white/20 group-hover:w-8 group-hover:bg-tb-purple transition-all" />
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
