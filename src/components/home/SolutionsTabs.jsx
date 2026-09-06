import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CreditCard, MapPin, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [Bot, CreditCard, MapPin, Factory];
  const activeSolution = siteData.smartPlatforms[activeTab];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0C0212] overflow-hidden border-t border-white/10">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/assets/bg-solutions.webp)' }}
      />
      <div className="absolute top-1/3 left-10 w-96 h-96 orb-glow-purple pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 orb-glow-orange pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
              Proprietary Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Latest Platforms & Smart Business Solutions
            </h2>
            <p className="text-base sm:text-lg text-tb-textMuted">
              Our AI-powered platforms are already helping businesses automate workflows, eliminate human errors, and scale operations effortlessly.
            </p>
          </div>
        </AnimatedSection>

        {/* Tab Buttons Navigation */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {siteData.smartPlatforms.map((platform, idx) => {
              const IconComp = tabIcons[idx % tabIcons.length];
              const isActive = activeTab === idx;
              return (
                <button
                  key={platform.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-tb-purple to-tb-orange text-white shadow-glow-purple scale-105'
                      : 'bg-[#160E22] text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-tb-purple'}`} />
                  <span>{platform.title}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Active Tab Showcase Box with 3D Tilt */}
        <AnimatedSection direction="up" delay={0.25}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#160E22]/90 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Content */}
                <div className="lg:col-span-6 space-y-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-tb-purple bg-tb-purple/10 px-3 py-1 rounded-md border border-tb-purple/20">
                    {activeSolution.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {activeSolution.heading}
                  </h3>

                  <p className="text-sm sm:text-base text-tb-textMuted leading-relaxed">
                    {activeSolution.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2">
                    {activeSolution.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-tb-textSubtle">
                        <CheckCircle className="w-4 h-4 text-tb-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-3 bg-white/10 hover:bg-tb-purple text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 group shadow-lg"
                    >
                      <span>Request Live Demonstration</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Media Preview with 3D Tilt */}
                <div className="lg:col-span-6">
                  <TiltCard maxTilt={12} scale={1.03}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#1D112B] p-3 shadow-2xl group">
                      <img
                        src={activeSolution.image}
                        alt={activeSolution.title}
                        className="w-full h-auto max-h-[380px] object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/service-web.webp';
                        }}
                      />
                    </div>
                  </TiltCard>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
