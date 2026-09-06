import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 4000);
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#0B0212] pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 orb-glow-purple -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 orb-glow-orange translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA & Contact Form Section with 3D Tilt */}
        <AnimatedSection direction="up">
          <TiltCard maxTilt={5} scale={1.01} className="mb-20">
            <div className="bg-gradient-to-br from-[#160E22]/95 to-[#1F1130]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3 py-1 rounded-full border border-tb-purple/20">
                    Get In Touch
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Let's start project together!
                  </h2>
                  <p className="text-tb-textMuted text-base sm:text-lg leading-relaxed">
                    To lead the market, you need ambition and possibilities to grow. We assist our clients in achieving real business results through next-generation web, mobile, and AI solutions.
                  </p>
                  <div className="pt-4 flex flex-col gap-3 text-sm text-tb-textSubtle">
                    <a href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-tb-purple" />
                      <span>{siteData.brand.phoneDisplay}</span>
                    </a>
                    <a href={`mailto:${siteData.brand.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-tb-orange" />
                      <span>{siteData.brand.email}</span>
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-tb-pink" />
                      <span>{siteData.brand.address}</span>
                    </div>
                  </div>
                </div>

                {/* Right Contact Form */}
                <div className="lg:col-span-7">
                  {isSubmitted ? (
                    <div className="p-8 rounded-2xl bg-white/5 border border-emerald-500/30 text-center flex flex-col items-center justify-center gap-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                      <h3 className="text-xl font-bold text-white">Thank you for reaching out!</h3>
                      <p className="text-sm text-tb-textMuted">Our technical team will review your inquiry and connect with you within 2 business hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full bg-[#100317]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-tb-purple transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full bg-[#100317]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-tb-purple transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">Phone No</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 00000 00000"
                          className="w-full bg-[#100317]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-tb-purple transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">Message</label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project requirements..."
                          className="w-full bg-[#100317]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-tb-purple transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-glow-purple hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group shadow-lg"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        </AnimatedSection>

        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <img
                src="/assets/logo-brand.png"
                alt="Trusting Brains"
                className="h-10 sm:h-11 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/logo-brand.png';
                }}
              />
            </Link>
            <p className="text-tb-purple font-semibold text-xs tracking-wider uppercase">
              {siteData.brand.tagline}
            </p>
            <p className="text-sm text-tb-textMuted max-w-sm leading-relaxed">
              Leading the IT industry with transformative web development, enterprise ERP systems, mobile applications, and artificial intelligence solutions designed for scale.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-tb-textSubtle">
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/our-services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-tb-textSubtle">
              <li><Link to="/service/website-development" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/service/app-development" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/service/game-development" className="hover:text-white transition-colors">Game Development</Link></li>
              <li><Link to="/service/erp-solutions" className="hover:text-white transition-colors">ERP Solutions</Link></li>
              <li><Link to="/service/crm-solutions" className="hover:text-white transition-colors">CRM Solutions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Sign Up for Our Newsletter</h4>
            <p className="text-xs text-tb-textMuted mb-3">Get the latest technology insights and updates directly in your inbox.</p>
            {newsletterSubmitted ? (
              <p className="text-xs text-emerald-400 font-medium">✓ Subscribed successfully!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-l-xl px-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-tb-purple"
                />
                <button
                  type="submit"
                  className="bg-tb-purple hover:bg-tb-purpleLight px-3 py-2.5 rounded-r-xl text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-tb-textSubtle">
          <p>{siteData.brand.copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/facebook-app-privacy" className="hover:text-white transition-colors">Facebook App Privacy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
