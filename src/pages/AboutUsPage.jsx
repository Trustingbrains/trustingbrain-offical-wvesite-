import React from 'react';
import { Target, Compass, Users, CheckCircle2, Award, Sparkles } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import CoreValues from '../components/home/CoreValues';
import AchievementCounters from '../components/home/AchievementCounters';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function AboutUsPage() {
  return (
    <div className="bg-[#100317] min-h-screen">
      {/* Page Hero Banner with Water Ripple Effect */}
      <PageBanner
        title="About Us"
        subtitle="Where Innovation Meets Excellence"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Intro Story Section with 3D Tilt */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection direction="right">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-3">
                Building the Future of Your Business with Expert IT, Marketing, and Development
              </h2>
              <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed mt-4">
                From responsive websites to enterprise cloud infrastructure and predictive artificial intelligence, Trusting Brains is dedicated to turning bold ideas into scalable digital realities.
              </p>
              <p className="text-sm text-tb-textSubtle leading-relaxed">
                Founded on the pillars of client trust, engineering rigor, and uncompromised quality, our multidisciplinary team collaborates closely with ambitious founders and established corporations across the globe.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <TiltCard maxTilt={8} scale={1.03}>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-lg">
                    <h4 className="text-2xl font-black text-tb-purple mb-1">5+ Years</h4>
                    <p className="text-xs text-tb-textSubtle">Delivering high-performance IT solutions</p>
                  </div>
                </TiltCard>
                <TiltCard maxTilt={8} scale={1.03}>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-lg">
                    <h4 className="text-2xl font-black text-tb-orange mb-1">150+</h4>
                    <p className="text-xs text-tb-textSubtle">Successful project deployments globally</p>
                  </div>
                </TiltCard>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6 relative">
            <AnimatedSection direction="left">
              <TiltCard maxTilt={12} scale={1.03}>
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#160E22] p-3">
                  <img
                    src="/assets/bg-abstract.webp"
                    alt="About Trusting Brains"
                    className="w-full h-auto rounded-2xl object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/service-marketing.webp';
                    }}
                  />
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards with 3D Tilt */}
      <section className="py-16 bg-[#0C0212] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <AnimatedSection direction="up" delay={0.1}>
              <TiltCard maxTilt={10} scale={1.02} className="h-full">
                <div className="bg-[#160E22]/90 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl hover:border-tb-purple/50 transition-colors h-full shadow-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-tb-purple/20 text-tb-purple flex items-center justify-center mb-6 shadow-md">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-sm sm:text-base text-tb-textMuted leading-relaxed">
                    To empower companies with custom, forward-thinking digital tools—from frictionless web platforms and mobile apps to smart ERP systems and generative AI voice agents—that directly fuel revenue acceleration and long-term market dominance.
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection direction="up" delay={0.2}>
              <TiltCard maxTilt={10} scale={1.02} className="h-full">
                <div className="bg-[#160E22]/90 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl hover:border-tb-orange/50 transition-colors h-full shadow-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-tb-orange/20 text-tb-orange flex items-center justify-center mb-6 shadow-md">
                    <Compass className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-sm sm:text-base text-tb-textMuted leading-relaxed">
                    To stand as the most trusted global technology partner, distinguished for architectural excellence, absolute transparency, and relentless innovation that unlocks untapped potential for modern enterprises.
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Showcase with 3D Tilt */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
              Meet Our Experts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              A Great Team is Key to a Successful Company
            </h2>
            <p className="text-base text-tb-textMuted">
              Meet the passionate engineers, creative designers, and strategic thinkers who drive innovation at Trusting Brains.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.teamMembers.map((member, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
              <TiltCard maxTilt={14} scale={1.04} className="h-full">
                <div className="group bg-[#160E22] border border-white/10 hover:border-tb-purple/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-glow-purple text-center shadow-xl h-full flex flex-col justify-center">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-tr from-[#25133B] to-[#170E28] border-2 border-tb-purple/40 flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 transition-transform shadow-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-tb-purple transition-colors mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-tb-orange">
                    {member.role}
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Core Values Component */}
      <CoreValues />

      {/* Achievements */}
      <AchievementCounters />
    </div>
  );
}
