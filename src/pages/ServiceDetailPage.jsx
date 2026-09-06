import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ChevronDown, Phone, Mail, ArrowRight, HelpCircle } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const service = siteData.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/our-services" replace />;
  }

  return (
    <div className="bg-[#100317] min-h-screen">
      {/* Banner with Water Ripple */}
      <PageBanner
        title={service.title}
        subtitle={service.tag}
        breadcrumbs={[
          { label: 'Our Services', href: '/our-services' },
          { label: service.title }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Service Banner Image with 3D Tilt */}
            <AnimatedSection direction="up">
              <TiltCard maxTilt={10} scale={1.02}>
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#160E22] shadow-2xl h-72 sm:h-96">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/service-web.webp';
                    }}
                  />
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Overview */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Service Overview
                </h2>
                <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed">
                  {service.detailedDesc}
                </p>
              </div>
            </AnimatedSection>

            {/* Core Benefits with 3D Tilt */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Key Strategic Advantages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, idx) => (
                    <TiltCard key={idx} maxTilt={8} scale={1.02}>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 shadow-lg">
                        <CheckCircle2 className="w-5 h-5 text-tb-orange shrink-0 mt-0.5" />
                        <span className="text-sm text-tb-textMuted">{b}</span>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* FAQs Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <AnimatedSection direction="up" delay={0.3}>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-tb-purple" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={idx}
                          className="bg-[#160E22] border border-white/10 rounded-2xl overflow-hidden transition-colors shadow-lg"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                            className="w-full p-5 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-white hover:text-tb-purple transition-colors"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-white/60 transition-transform duration-300 ${
                                isOpen ? 'rotate-180 text-tb-purple' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 text-xs sm:text-sm text-tb-textMuted leading-relaxed border-t border-white/5 pt-3">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Services Navigation List */}
            <AnimatedSection direction="left">
              <div className="bg-[#160E22] border border-white/10 rounded-3xl p-6 shadow-xl space-y-3">
                <h3 className="text-lg font-bold text-white pb-3 border-b border-white/10">
                  All Services
                </h3>
                <div className="flex flex-col gap-2">
                  {siteData.services.map((s) => {
                    const isActive = s.slug === slug;
                    return (
                      <Link
                        key={s.slug}
                        to={`/service/${s.slug}`}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-tb-purple to-tb-orange text-white shadow-md'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{s.title}</span>
                        <ArrowRight className="w-4 h-4 opacity-70" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Contact Help Box with 3D Tilt */}
            <AnimatedSection direction="left" delay={0.15}>
              <TiltCard maxTilt={10} scale={1.03}>
                <div className="bg-gradient-to-br from-tb-purpleDark to-[#1D0C30] border border-tb-purple/40 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 orb-glow-orange opacity-40 pointer-events-none" />
                  <h4 className="text-xl font-black mb-3">Need Custom Guidance?</h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                    Our principal software architects can assess your tech stack and provide a comprehensive proposal within 24 hours.
                  </p>

                  <div className="space-y-3 text-xs mb-6">
                    <a
                      href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 text-white/90 hover:text-white"
                    >
                      <Phone className="w-4 h-4 text-tb-orange" />
                      <span>{siteData.brand.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${siteData.brand.email}`}
                      className="flex items-center gap-2 text-white/90 hover:text-white"
                    >
                      <Mail className="w-4 h-4 text-tb-purpleLight" />
                      <span>{siteData.brand.email}</span>
                    </a>
                  </div>

                  <Link
                    to="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 py-3 rounded-full text-xs font-bold transition-all shadow-lg"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
