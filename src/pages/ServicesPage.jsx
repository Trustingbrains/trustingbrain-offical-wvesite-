import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SolutionsTabs from '../components/home/SolutionsTabs';
import PricingSection from '../components/home/PricingSection';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function ServicesPage() {
  const processSteps = [
    { num: '01', title: 'Discovery & Strategic Planning', desc: 'Understanding your business targets, target demographics, tech requirements, and project scope.' },
    { num: '02', title: 'UI/UX Interactive Design', desc: 'Crafting user journeys, modern dark/light wireframes, interactive prototypes, and aesthetic design systems.' },
    { num: '03', title: 'Agile Engineering & Build', desc: 'Writing clean, scalable code across front-end, microservices, and databases with continuous test-driven iterations.' },
    { num: '04', title: 'QA, Security & Deployment', desc: 'Automated performance benchmarks, vulnerability scanning, and seamless cloud launch with 24/7 monitoring.' }
  ];

  return (
    <div className="bg-[#100317] min-h-screen">
      {/* Banner with Water Ripple */}
      <PageBanner
        title="Our Services"
        subtitle="Your All-in-One Partner for IT, Web, and Marketing Success"
        breadcrumbs={[{ label: 'Our Services' }]}
      />

      {/* Services Grid with 3D Tilt */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              We Provide Professional & Dedicated Services
            </h2>
            <p className="text-base text-tb-textMuted">
              Explore our specialized development branches built to solve intricate technical challenges and propel business scalability.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((srv, idx) => (
            <AnimatedSection key={srv.slug} delay={idx * 0.1} direction="up">
              <TiltCard maxTilt={14} scale={1.03} className="h-full">
                <div className="group bg-[#160E22]/90 border border-white/10 hover:border-tb-purple/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-glow-purple flex flex-col justify-between h-full shadow-2xl">
                  <div className="relative h-52 overflow-hidden bg-black/40">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/service-web.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160E22] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-tb-orange border border-tb-orange/30">
                      {srv.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-tb-purple transition-colors mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-tb-textMuted leading-relaxed mb-4">
                        {srv.shortDesc}
                      </p>
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        {srv.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-tb-textSubtle">
                            <CheckCircle2 className="w-3.5 h-3.5 text-tb-purple shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/service/${srv.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-tb-orange transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Engineering Workflow / Methodology with 3D Tilt */}
      <section className="py-24 bg-[#0C0212] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
                Our Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                How We Deliver High-Impact Results
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <TiltCard maxTilt={10} scale={1.03} className="h-full">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative group hover:border-tb-purple/50 transition-colors h-full shadow-xl">
                    <span className="text-4xl font-black text-white/10 group-hover:text-tb-purple/40 transition-colors block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-tb-textSubtle leading-relaxed">{step.desc}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <SolutionsTabs />

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
}
