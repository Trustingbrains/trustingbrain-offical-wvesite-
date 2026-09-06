import React from 'react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function AchievementCounters() {
  return (
    <section className="relative py-20 bg-[#100317] border-y border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] orb-glow-purple pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20 mb-3">
              Milestones & Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              We are Happy for Our Achievement
            </h2>
          </div>
        </AnimatedSection>

        {/* 4 Counter Columns with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.achievements.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
              <TiltCard maxTilt={10} scale={1.04} className="h-full">
                <div className="py-10 px-6 text-center group bg-[#160E22]/60 border border-white/10 hover:border-tb-purple/40 rounded-3xl transition-all duration-300 shadow-xl h-full flex flex-col justify-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-tb-purple group-hover:to-tb-orange transition-all duration-300">
                    {item.value}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-tb-textSubtle">
                    {item.sub}
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
