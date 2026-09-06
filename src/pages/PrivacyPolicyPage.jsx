import React from 'react';
import { ShieldCheck, MessageCircle, Bot, Database, Lock, Clock3, Mail } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';

const policySections = [
  {
    icon: MessageCircle,
    title: 'Information We Collect',
    points: [
      'Name, email address, phone number, and business details shared through forms, calls, and WhatsApp conversations.',
      'Project requirements, service preferences, and support messages you submit to us.',
      'Basic website usage data such as pages visited, device type, browser type, and approximate location.'
    ]
  },
  {
    icon: Bot,
    title: 'How We Use AI And WhatsApp CRM',
    points: [
      'We may use AI tools to help respond faster, qualify leads, summarize chats, and route inquiries to the right team member.',
      'WhatsApp CRM workflows may be used to manage follow-ups, customer support, reminders, and service updates.',
      'Automated suggestions are reviewed by our team before important business decisions are made.'
    ]
  },
  {
    icon: Database,
    title: 'How We Use Your Data',
    points: [
      'To respond to inquiries, provide quotations, deliver services, and maintain customer records.',
      'To improve our website, support operations, and measure the performance of marketing and sales efforts.',
      'To send service-related messages and updates where you have given consent or where permitted by law.'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Sharing Of Information',
    points: [
      'We do not sell personal data.',
      'We may share information with trusted service providers who help us host, communicate, secure, or operate our business.',
      'We may disclose information if required by law, regulation, or to protect our rights and users.'
    ]
  },
  {
    icon: Lock,
    title: 'Data Security',
    points: [
      'We use reasonable technical and organizational safeguards to protect your information.',
      'No internet-based system is fully secure, so we cannot guarantee absolute security.',
      'Access to customer data is limited to authorized personnel only.'
    ]
  },
  {
    icon: Clock3,
    title: 'Data Retention',
    points: [
      'We keep personal data only as long as necessary for business, legal, or compliance purposes.',
      'If you request deletion, we will review the request and act where we are legally allowed to do so.'
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#100317] min-h-screen">
      <PageBanner
        title="Privacy Policy"
        subtitle="Your Data, Our Responsibility"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto mb-10 text-center space-y-4">
            <p className="text-sm text-tb-textMuted leading-relaxed">
              Last updated: September 6, 2026
            </p>
            <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed">
              This Privacy Policy explains how Trusting Brains collects, uses, stores, and protects your information when you visit our website, contact us, or use our WhatsApp CRM and AI-enabled communication tools.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policySections.map((section, index) => {
            const Icon = section.icon;

            return (
              <AnimatedSection key={section.title} direction="up" delay={index * 0.06}>
                <div className="h-full bg-[#160E22]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-tb-purple/15 text-tb-purple flex items-center justify-center mb-5 border border-tb-purple/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                  <ul className="space-y-3 text-sm text-tb-textMuted leading-relaxed">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-tb-orange shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#160E22]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
              <div className="space-y-3 text-sm text-tb-textMuted leading-relaxed">
                <p>You can request access, correction, or deletion of your personal information, subject to applicable law.</p>
                <p>You can also ask us to stop marketing messages or update your contact preferences.</p>
                <p>If you contact us on WhatsApp, we may keep the conversation history for support and audit purposes.</p>
              </div>
            </div>

            <div className="bg-[#160E22]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Cookies And Analytics</h2>
              <div className="space-y-3 text-sm text-tb-textMuted leading-relaxed">
                <p>We may use cookies and similar technologies to understand how visitors use our site and to improve performance.</p>
                <p>Analytics data helps us measure traffic, identify popular pages, and optimize user experience.</p>
                <p>You can control cookies through your browser settings.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.25}>
          <div className="mt-8 bg-gradient-to-br from-tb-purple/10 to-tb-orange/10 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            <h2 className="text-xl font-bold text-white mb-3">Contact For Privacy Requests</h2>
            <p className="text-sm text-tb-textMuted mb-5">
              If you have any questions about this policy or want to exercise your rights, contact us anytime.
            </p>
            <a
              href="mailto:info@trustingbrains.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-6 py-3 rounded-full font-semibold text-sm shadow-glow-purple hover:scale-[1.02] transition-transform"
            >
              <Mail className="w-4 h-4" />
              info@trustingbrains.com
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
