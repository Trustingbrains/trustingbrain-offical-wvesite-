import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Mail, ShieldCheck, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function DataDeletionPage() {
  useEffect(() => {
    document.title = "User Data Deletion Instructions | Trusting Brains";
  }, []);

  const deletionSteps = [
    {
      num: "01",
      title: "Submit a Deletion Request",
      desc: "Send an email to info@trustingbrains.com with the subject line 'User Data Deletion Request'."
    },
    {
      num: "02",
      title: "Provide Account & Contact Identifiers",
      desc: "Include the registered email address, phone number, and any associated business or Facebook/Meta account identifiers."
    },
    {
      num: "03",
      title: "Verification & Processing",
      desc: "Our technical security team will verify the authenticity of the request to prevent unauthorized deletion."
    },
    {
      num: "04",
      title: "Permanent Removal & Confirmation",
      desc: "Eligible data is permanently purged or anonymized from our active databases, and a written confirmation is dispatched."
    }
  ];

  return (
    <div className="bg-[#100317] min-h-screen text-white font-sans antialiased">
      <PageBanner
        title="User Data Deletion Instructions"
        subtitle="Data Privacy & User Control"
        breadcrumbs={[{ label: 'Data Deletion' }]}
      />

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
              User Privacy Rights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How to Request Data Deletion
            </h2>
            <p className="text-base text-tb-textMuted leading-relaxed">
              At Trusting Brains IT Services Pvt. Ltd., we respect your right to control your personal and business data. Follow the instructions below to request permanent deletion of your data from our systems.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {deletionSteps.map((step, idx) => (
            <AnimatedSection key={step.num} delay={idx * 0.08} direction="up">
              <TiltCard maxTilt={8} scale={1.02} className="h-full">
                <div className="h-full p-7 rounded-3xl bg-[#160E22]/90 border border-white/10 hover:border-tb-purple/50 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-white/20">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-tb-purple/15 text-tb-purple flex items-center justify-center">
                        <Trash2 className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-tb-textMuted leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs text-tb-textSubtle">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Compliant with privacy policies</span>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Email Direct Action Card */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="bg-gradient-to-br from-[#160E22] via-[#1a0f2b] to-[#12061f] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-tb-orange/20 text-tb-orange mx-auto flex items-center justify-center">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Send Your Request Directly</h3>
            <p className="text-sm text-tb-textMuted max-w-xl mx-auto leading-relaxed">
              You can contact our privacy officer directly with your data deletion inquiries. We aim to process all verified requests within standard statutory timelines.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteData.brand.email}?subject=User%20Data%20Deletion%20Request`}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:shadow-glow-purple hover:scale-105 transition-all shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>{siteData.brand.email}</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
