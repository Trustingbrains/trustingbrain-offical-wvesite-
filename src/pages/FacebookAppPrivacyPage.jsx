import React from 'react';
import { CheckCircle2, Facebook, Lock, Mail, ShieldCheck, Trash2 } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';

const sections = [
  {
    icon: Facebook,
    title: 'How Facebook Login Works',
    points: [
      'Our application may let you sign in with your Facebook account. We do not ask for or store your Facebook password.',
      'When you choose Facebook Login, Meta may provide the basic profile information and other permissions that you approve in the login dialog.',
      'You can review or remove permissions from your Facebook account settings at any time.'
    ]
  },
  {
    icon: CheckCircle2,
    title: 'Permissions And Data We May Process',
    points: [
      'Depending on the features you use and the permissions approved by Meta, we may process your name, Facebook user ID, email address, profile or Page information, and access tokens.',
      'If you connect a Facebook Page, Instagram account, Business account, Ad account, or related asset, we may process the identifiers and content needed to provide the connected feature.',
      'We request only the permissions needed for the feature you choose. We do not collect information that is not made available through an approved permission.'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'What Our Application Does With The Data',
    points: [
      'At your direction, the application may help you create, schedule, publish, edit, or manage posts, images, videos, captions, comments, and other approved social content.',
      'If you connect advertising features, the application may help you create, manage, monitor, or report on campaigns, ads, audiences, and performance metrics that you are authorized to access.',
      'We use this data only to provide the connected application features, customer support, security, troubleshooting, and service reporting. We do not sell Meta user data or use it for unrelated advertising.'
    ]
  },
  {
    icon: Lock,
    title: 'Security And Sharing',
    points: [
      'Access tokens and connected account data are limited to authorized systems and team members who need them to operate the requested feature.',
      'We may use hosting, storage, analytics, security, and support providers acting on our behalf. These providers may process data only to deliver our services and must protect it.',
      'We do not share your connected account data with unrelated third parties unless you direct us to do so, you authorize a feature that requires it, or disclosure is required by law.'
    ]
  },
  {
    icon: Trash2,
    title: 'Data Retention And Deletion',
    points: [
      'We keep connected account data only for as long as needed to provide the application, meet legal obligations, resolve disputes, maintain security, or complete an authorized business request.',
      'You can disconnect Facebook or request deletion of data collected through our application by emailing info@trustingbrains.com with the subject “Facebook App Data Deletion”.',
      'In your request, include the email address used in the application and, if available, your Facebook user ID or connected Page/Business name. We will verify the request and delete or anonymize eligible data without undue delay, subject to lawful retention requirements.',
      'Disconnecting the application from Facebook also stops future access, but it may not delete content already published to Facebook. Content published on Meta platforms remains subject to Meta’s own policies and controls.'
    ]
  }
];

export default function FacebookAppPrivacyPage() {
  return (
    <div className="bg-[#100317] min-h-screen">
      <PageBanner
        title="Facebook App Privacy Policy"
        subtitle="Clear Data Practices For Connected Accounts"
        breadcrumbs={[{ label: 'Facebook App Privacy' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto mb-10 text-center space-y-4">
            <p className="text-sm text-tb-textMuted leading-relaxed">Last updated: September 7, 2026</p>
            <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed">
              This policy explains how Trusting Brains processes information when you use our application with Facebook, Instagram, Meta Business, Pages, or advertising features. You control which accounts and permissions you connect.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
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

        <AnimatedSection direction="up" delay={0.25}>
          <div className="mt-8 bg-gradient-to-br from-tb-purple/10 to-tb-orange/10 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            <h2 className="text-xl font-bold text-white mb-3">Request Access, Correction, Or Deletion</h2>
            <p className="text-sm text-tb-textMuted mb-5">
              Contact us if you want to disconnect your account, review the information we hold, correct it, or request deletion of eligible data.
            </p>
            <a
              href="mailto:info@trustingbrains.com?subject=Facebook%20App%20Data%20Deletion"
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
