import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="bg-[#100317] min-h-screen">
      {/* Banner with Water Ripple */}
      <PageBanner
        title="Contact Us"
        subtitle="Ready to Get Started"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* Contact Cards Section with 3D Tilt */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Location */}
          <AnimatedSection direction="up" delay={0.1}>
            <TiltCard maxTilt={14} scale={1.04} className="h-full">
              <div className="bg-[#160E22]/90 border border-white/10 hover:border-tb-purple/50 rounded-3xl p-8 backdrop-blur-xl transition-all text-center shadow-2xl h-full flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-tb-purple/20 text-tb-purple flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-sm text-tb-textMuted leading-relaxed">
                  {siteData.brand.address}
                </p>
                <p className="text-xs text-tb-textSubtle mt-2">Open for client consultations</p>
              </div>
            </TiltCard>
          </AnimatedSection>

          {/* Card 2: Email */}
          <AnimatedSection direction="up" delay={0.2}>
            <TiltCard maxTilt={14} scale={1.04} className="h-full">
              <div className="bg-[#160E22]/90 border border-white/10 hover:border-tb-orange/50 rounded-3xl p-8 backdrop-blur-xl transition-all text-center shadow-2xl h-full flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-tb-orange/20 text-tb-orange flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
                <a
                  href={`mailto:${siteData.brand.email}`}
                  className="text-sm text-tb-textMuted hover:text-white transition-colors block"
                >
                  {siteData.brand.email}
                </a>
                <p className="text-xs text-tb-textSubtle mt-2">Typical reply within 2 hours</p>
              </div>
            </TiltCard>
          </AnimatedSection>

          {/* Card 3: Phone */}
          <AnimatedSection direction="up" delay={0.3}>
            <TiltCard maxTilt={14} scale={1.04} className="h-full">
              <div className="bg-[#160E22]/90 border border-white/10 hover:border-tb-purpleLight/50 rounded-3xl p-8 backdrop-blur-xl transition-all text-center shadow-2xl h-full flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-tb-purpleLight/20 text-tb-purpleLight flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone No</h3>
                <a
                  href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                  className="text-sm text-tb-textMuted hover:text-white transition-colors block font-semibold"
                >
                  {siteData.brand.phoneDisplay}
                </a>
                <p className="text-xs text-tb-textSubtle mt-2">{siteData.brand.workingHours}</p>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right">
              <div className="bg-[#160E22]/90 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="mb-8 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-tb-orange font-semibold">
                    Direct Inquiry
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Get in Touch for any Information!
                  </h2>
                  <p className="text-sm text-tb-textMuted">
                    Fill out the form below and one of our client directors will contact you with a tailored roadmap.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-white/5 border border-emerald-500/30 text-center flex flex-col items-center justify-center gap-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                    <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
                    <p className="text-sm text-tb-textMuted">
                      We have received your message. Our technical team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-medium">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-[#100317] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tb-purple"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-medium">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@domain.com"
                          className="w-full bg-[#100317] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tb-purple"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 00000 00000"
                          className="w-full bg-[#100317] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tb-purple"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-medium">Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Website / App / ERP Inquiry"
                          className="w-full bg-[#100317] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tb-purple"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-medium">Your Message *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details about your project, timeline, and goals..."
                        className="w-full bg-[#100317] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tb-purple resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual / Location Box with 3D Tilt */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left">
              <TiltCard maxTilt={10} scale={1.02}>
                <div className="bg-[#160E22]/90 border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
                  <h3 className="text-xl font-bold text-white">Headquarters</h3>
                  <p className="text-xs sm:text-sm text-tb-textMuted leading-relaxed">
                    Based in Delhi NCR, our engineering teams operate globally across North America, Europe, the Middle East, and Asia-Pacific.
                  </p>

                  {/* Visual Location Graphic */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 bg-[#100317] flex items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/assets/bg-hero.webp)' }} />
                    <div className="relative z-10 space-y-2">
                      <div className="w-12 h-12 rounded-full bg-tb-purple/30 text-tb-purple flex items-center justify-center mx-auto animate-bounce">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-white">Delhi NCR, India</h4>
                      <p className="text-xs text-tb-textSubtle">Serving Clients Worldwide</p>
                      <div className="pt-2">
                        <a
                          href={siteData.brand.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-[#20ba59] transition-colors"
                        >
                          <span>Chat on WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
