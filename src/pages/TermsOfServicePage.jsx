import React from 'react';
import { FileText, Scale, MessageSquareText, Shield, Mail } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';

const terms = [
  {
    icon: FileText,
    title: 'Use Of Our Website',
    text: 'You agree to use our website only for lawful purposes and in a way that does not damage, disable, or interfere with the site or other users.'
  },
  {
    icon: MessageSquareText,
    title: 'Communication And WhatsApp CRM',
    text: 'When you message us on WhatsApp or submit forms, you agree that we may contact you about your inquiry, project, or support request.'
  },
  {
    icon: Scale,
    title: 'Project And Service Terms',
    text: 'Any project scope, pricing, timeline, and deliverables will be confirmed separately in a proposal, invoice, or written agreement.'
  },
  {
    icon: Shield,
    title: 'Intellectual Property',
    text: 'Unless otherwise agreed in writing, our website content, branding, and deliverables remain subject to applicable intellectual property rights.'
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#100317] min-h-screen">
      <PageBanner
        title="Terms of Service"
        subtitle="Simple Terms For Clear Collaboration"
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto mb-10 text-center space-y-4">
            <p className="text-sm text-tb-textMuted leading-relaxed">
              Last updated: September 6, 2026
            </p>
            <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed">
              These terms outline the basic rules for using the Trusting Brains website and for contacting us through our online and WhatsApp channels.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terms.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection key={item.title} direction="up" delay={index * 0.06}>
                <div className="h-full bg-[#160E22]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-tb-orange/15 text-tb-orange flex items-center justify-center mb-5 border border-tb-orange/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
                  <p className="text-sm text-tb-textMuted leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="mt-8 bg-gradient-to-br from-tb-purple/10 to-tb-orange/10 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            <h2 className="text-xl font-bold text-white mb-3">Questions About These Terms?</h2>
            <p className="text-sm text-tb-textMuted mb-5">
              Reach out and we will help clarify anything before you start working with us.
            </p>
            <a
              href="mailto:info@trustingbrains.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-6 py-3 rounded-full font-semibold text-sm shadow-glow-purple hover:scale-[1.02] transition-transform"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
