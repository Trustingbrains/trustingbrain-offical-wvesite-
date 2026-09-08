import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Bell, 
  Send, 
  Cpu, 
  CheckCheck, 
  Server,
  ShieldCheck 
} from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';
import { siteData } from '../../data/siteData';

export default function HomeWhatsAppSection() {
  const highlights = [
    {
      title: "Customer Conversations",
      desc: "Connect directly with customers and promptly address inquiries on WhatsApp."
    },
    {
      title: "Business Notifications",
      desc: "Send automated alerts, order updates, and important business messages."
    },
    {
      title: "Streamlined Communication",
      desc: "Manage customer messaging efficiently with structured workflows."
    },
    {
      title: "Workflow Integration",
      desc: "Integrate WhatsApp Business Platform with internal software and CRM systems."
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#0D0315] border-y border-white/10 overflow-hidden">
      {/* Glowing Ambient Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 orb-glow-purple pointer-events-none opacity-40" />
      <div className="absolute top-1/3 right-0 w-96 h-96 orb-glow-orange pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <AnimatedSection direction="up">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#25D366] font-semibold bg-[#25D366]/10 px-4 py-1.5 rounded-full border border-[#25D366]/20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Communication Solutions
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                WhatsApp Business API Solutions
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connect with customers, manage business conversations, send notifications and streamline customer communication through WhatsApp Business Platform.
              </p>
            </AnimatedSection>

            {/* Feature Highlights Grid */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {highlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-2xl bg-[#160E22]/90 border border-white/10 flex items-start gap-3 hover:border-tb-purple/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-tb-textMuted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection direction="up" delay={0.25}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  to="/whatsapp-business-api"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group shadow-lg"
                >
                  <span>Explore WhatsApp Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:border-white/30"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Talk to Our Team</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Technology Visual Simulation */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="up" delay={0.2}>
              <TiltCard maxTilt={8} scale={1.02}>
                <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#160E22]/95 via-[#1a0f2b]/95 to-[#12061f]/95 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden">
                  {/* Decorative background glows */}
                  <div className="absolute top-0 right-0 w-44 h-44 orb-glow-purple opacity-40 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 orb-glow-orange opacity-30 pointer-events-none" />

                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-xs font-mono text-white/50 ml-2">WhatsApp Business API</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      Live Platform
                    </div>
                  </div>

                  {/* Chat message simulation */}
                  <div className="space-y-4">
                    <div className="bg-[#12071d] rounded-2xl p-3.5 border border-white/10 shadow-md flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 text-xs font-bold">
                        CU
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs text-tb-textSubtle mb-1">
                          <span className="font-semibold text-white">Client Conversation</span>
                          <span>Just now</span>
                        </div>
                        <p className="text-xs text-tb-textMuted leading-relaxed">
                          "Can we send automated order confirmations and appointment updates via WhatsApp?"
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-tb-purple/20 to-tb-orange/15 rounded-2xl p-3.5 border border-tb-purple/30 shadow-md flex items-start gap-3 ml-4">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-tb-purple to-tb-orange flex items-center justify-center text-white shrink-0">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-white">Automated Delivery</span>
                          <span className="text-[11px] text-[#25D366] flex items-center gap-1">
                            <CheckCheck className="w-3.5 h-3.5" />
                            Sent
                          </span>
                        </div>
                        <p className="text-xs text-white/90 leading-relaxed">
                          "Yes, WhatsApp Business Platform enables fast, structured customer messaging and notifications."
                        </p>
                      </div>
                    </div>

                    {/* Highlights Row */}
                    <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-tb-textSubtle">Channel</div>
                        <div className="text-xs font-bold text-[#25D366] mt-0.5">WhatsApp API</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-tb-textSubtle">Response</div>
                        <div className="text-xs font-bold text-white mt-0.5">Instant</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-tb-textSubtle">Integration</div>
                        <div className="text-xs font-bold text-tb-orange mt-0.5">Custom CRM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
