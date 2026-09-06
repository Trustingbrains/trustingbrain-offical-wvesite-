import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

const serviceImages = {
  'game-development': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85',
  'app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
  'website-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
  'e-commerce-development': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
  'erp-solutions': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  'crm-solutions': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85'
};

export default function ServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#100317] overflow-hidden">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/assets/bg-solutions.webp)' }}
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 orb-glow-purple pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 orb-glow-teal pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Row */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
                Transformative Offerings
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Services we offer
              </h2>
              <p className="text-tb-textMuted text-base sm:text-lg max-w-xl">
                End-to-end engineering and design capabilities to accelerate your business across web, mobile, and enterprise environments.
              </p>
            </div>

            <Link
              to="/our-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-tb-purple px-6 py-3 rounded-full transition-all duration-300 self-start md:self-auto group shadow-lg"
            >
              <span>More Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Services Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.1} direction="up">
              <TiltCard maxTilt={14} scale={1.03} className="h-full">
                <div className="service-card-shell group relative rounded-3xl overflow-hidden flex flex-col justify-between h-full shadow-2xl">
                  <div className="relative z-10 bg-[#160E22]/95 rounded-[23px] overflow-hidden transition-all duration-300 hover:shadow-glow-purple flex flex-col justify-between h-full">
                  {/* Card Image Banner */}
                  <div className="relative h-52 overflow-hidden bg-black/40">
                    <img
                      src={serviceImages[service.slug] || service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/service-web.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160E22] via-[#160E22]/40 to-transparent" />
                    <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-tb-purple border border-tb-purple/30">
                      {service.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-tb-purple transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-tb-textMuted leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-tb-textSubtle">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tb-orange shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Action */}
                  <div className="pt-4">
                      <Link
                        to={`/service/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-tb-orange transition-colors"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <AnimatedSection delay={0.3} direction="up" className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
            {siteData.featureHighlights.map((item, idx) => (
              <div key={idx} className="text-center p-3">
                <Sparkles className="w-5 h-5 text-tb-purple mx-auto mb-2 animate-pulse" />
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-[11px] text-tb-textSubtle line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
