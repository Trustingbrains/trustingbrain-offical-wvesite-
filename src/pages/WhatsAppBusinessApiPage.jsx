import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Send, 
  Bell, 
  Headphones, 
  Users, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Building2, 
  Rocket, 
  Briefcase, 
  ShoppingBag, 
  Globe, 
  GraduationCap, 
  PhoneCall, 
  TrendingUp, 
  HelpCircle, 
  ShieldCheck, 
  Server,
  Sparkles,
  CheckCheck
} from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function WhatsAppBusinessApiPage() {
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic SEO Page Title and Meta Description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "WhatsApp Business API Solutions | Trusting Brains";

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Trusting Brains provides WhatsApp Business Platform solutions to help businesses manage customer communication, business messaging, notifications and customer support.'
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  // What We Help Businesses Do (6 Cards)
  const helpItems = [
    {
      icon: MessageSquare,
      title: "Customer Communication",
      desc: "Communicate with customers through WhatsApp and respond to business inquiries."
    },
    {
      icon: Bell,
      title: "Business Notifications",
      desc: "Send relevant customer updates and notifications through WhatsApp."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      desc: "Manage customer conversations and provide timely support."
    },
    {
      icon: Users,
      title: "Lead & Inquiry Management",
      desc: "Organize customer inquiries and improve follow-up communication."
    },
    {
      icon: Cpu,
      title: "WhatsApp Integration",
      desc: "Connect WhatsApp Business Platform with business applications and workflows where required."
    },
    {
      icon: Send,
      title: "Business Messaging",
      desc: "Use WhatsApp as a communication channel for customer interactions and business updates."
    }
  ];

  // How It Works (4 Steps)
  const steps = [
    {
      num: "01",
      stepTitle: "Step 1 — Business Setup",
      title: "Business Setup",
      desc: "Understand the client's communication requirements and business use case."
    },
    {
      num: "02",
      stepTitle: "Step 2 — WhatsApp Business Platform Setup",
      title: "WhatsApp Business Platform Setup",
      desc: "Help the business configure the required WhatsApp Business Platform services."
    },
    {
      num: "03",
      stepTitle: "Step 3 — Integration",
      title: "Integration",
      desc: "Connect the messaging service with the client's business workflow or software where required."
    },
    {
      num: "04",
      stepTitle: "Step 4 — Customer Communication",
      title: "Customer Communication",
      desc: "The client uses WhatsApp to communicate with customers, respond to inquiries and send relevant business updates."
    }
  ];

  // Who Can Use Our Solutions (8 Target Audiences)
  const audiences = [
    { name: "Small Businesses", icon: Building2, tag: "Local & Retail" },
    { name: "Startups", icon: Rocket, tag: "Tech & Innovation" },
    { name: "Service Businesses", icon: Briefcase, tag: "Consulting & Services" },
    { name: "E-commerce Businesses", icon: ShoppingBag, tag: "Online Retail" },
    { name: "Agencies", icon: Globe, tag: "Creative & Digital" },
    { name: "Education Businesses", icon: GraduationCap, tag: "Institutes & EdTech" },
    { name: "Customer Support Teams", icon: PhoneCall, tag: "Support Ops" },
    { name: "Growing Enterprises", icon: TrendingUp, tag: "Scalable Growth" }
  ];

  // Features (8 Verified Factual Features)
  const features = [
    { title: "WhatsApp Business messaging", desc: "Send structured and timely communication to customers via WhatsApp." },
    { title: "Customer conversations", desc: "Facilitate two-way dialogues and answer customer queries promptly." },
    { title: "Business notifications", desc: "Deliver order, appointment, and critical status updates directly." },
    { title: "Customer support communication", desc: "Equip support agents with streamlined messaging workflows." },
    { title: "Lead follow-ups", desc: "Keep prospective clients engaged with structured follow-up messages." },
    { title: "Business workflow integration", desc: "Integrate WhatsApp with CRMs, websites, and internal software stacks." },
    { title: "Message management", desc: "Organize incoming and outgoing messages systematically." },
    { title: "Communication reporting where applicable", desc: "Gain visibility into messaging metrics and delivery statistics." }
  ];

  // FAQs (Exact 5 Questions)
  const faqs = [
    {
      q: "What is WhatsApp Business Platform?",
      a: "WhatsApp Business Platform is a solution that enables businesses to communicate with customers through WhatsApp at scale."
    },
    {
      q: "What does Trusting Brains provide?",
      a: "Trusting Brains provides technology services and helps businesses implement WhatsApp Business Platform solutions according to their communication requirements."
    },
    {
      q: "Can WhatsApp be integrated with our existing software?",
      a: "Depending on the business requirements and available platform capabilities, WhatsApp Business Platform can be integrated with business applications and workflows."
    },
    {
      q: "Can businesses use WhatsApp for customer support?",
      a: "Yes. Businesses can use WhatsApp Business Platform to communicate with customers and manage customer support conversations."
    },
    {
      q: "Does Trusting Brains access customer data?",
      a: "Trusting Brains only uses information required to provide and support the services requested by its clients and handles information according to applicable policies and agreements."
    }
  ];

  // Existing Company Services
  const companyServices = [
    "Website Development",
    "Application Development",
    "Software Development",
    "Digital Solutions",
    "WhatsApp Business Platform Solutions",
    "Business Automation"
  ];

  return (
    <div className="bg-[#100317] min-h-screen text-white selection:bg-[#A234FD] selection:text-white font-sans antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-white/10">
        {/* Background glow effects */}
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: 'url(/assets/bg-hero.webp)' }}
        />
        <div className="absolute -top-24 left-1/4 w-[500px] h-[350px] orb-glow-purple pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-80 h-80 orb-glow-orange pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#25D366] font-semibold bg-[#25D366]/10 px-4 py-1.5 rounded-full border border-[#25D366]/20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Business Communication Solutions
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight">
                WhatsApp Business API Solutions for Your Business
              </h1>

              <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connect with customers, manage business conversations and streamline customer communication through WhatsApp Business Platform.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group shadow-lg"
                >
                  <span>Get Started</span>
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

              {/* Verified factual badge notice */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-tb-textSubtle">
                <ShieldCheck className="w-4 h-4 text-tb-purple" />
                <span>Enterprise technology implementation by Trusting Brains IT Services Pvt. Ltd.</span>
              </div>
            </div>

            {/* Right: Professional Technology-Related Visual */}
            <div className="lg:col-span-5">
              <TiltCard maxTilt={8} scale={1.02}>
                <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#160E22]/95 via-[#1a0f2b]/95 to-[#12061f]/95 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden">
                  {/* Visual ambient backdrops */}
                  <div className="absolute top-0 right-0 w-44 h-44 orb-glow-purple opacity-40 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 orb-glow-orange opacity-30 pointer-events-none" />

                  {/* Window Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-xs font-mono text-white/50 ml-2">WhatsApp Business API Hub</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      API Connected
                    </div>
                  </div>

                  {/* Visual Simulation: Business Messaging Pipeline */}
                  <div className="space-y-4">
                    {/* Simulated Incoming Customer Chat */}
                    <div className="bg-[#12071d] rounded-2xl p-3.5 border border-white/10 shadow-md flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 text-xs font-bold">
                        CU
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs text-tb-textSubtle mb-1">
                          <span className="font-semibold text-white">Customer Inquiry</span>
                          <span>10:42 AM</span>
                        </div>
                        <p className="text-xs text-tb-textMuted leading-relaxed">
                          "Hello, could you share more details about your software development and API integration services?"
                        </p>
                      </div>
                    </div>

                    {/* Simulated Automated Business Notification / Reply */}
                    <div className="bg-gradient-to-r from-tb-purple/20 to-tb-orange/15 rounded-2xl p-3.5 border border-tb-purple/30 shadow-md flex items-start gap-3 ml-4">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-tb-purple to-tb-orange flex items-center justify-center text-white shrink-0">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-white">Trusting Brains System</span>
                          <span className="text-[11px] text-[#25D366] flex items-center gap-1">
                            <CheckCheck className="w-3.5 h-3.5" />
                            Delivered
                          </span>
                        </div>
                        <p className="text-xs text-white/90 leading-relaxed">
                          "Thank you for contacting Trusting Brains! Your inquiry has been routed to our technical team."
                        </p>
                      </div>
                    </div>

                    {/* Simulated Workflow & API Metrics Card */}
                    <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-tb-textSubtle">Status</div>
                        <div className="text-xs font-bold text-[#25D366] mt-0.5">Active 24/7</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-tb-textSubtle">Workflow</div>
                        <div className="text-xs font-bold text-white mt-0.5">Automated</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-tb-textSubtle">Channel</div>
                        <div className="text-xs font-bold text-tb-orange mt-0.5">WhatsApp API</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 bg-[#0C0212] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20 mb-4">
              Overview & Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
              WhatsApp Business Platform Solutions
            </h2>
            <div className="bg-[#160E22]/80 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              <p className="text-base sm:text-lg text-tb-textMuted leading-relaxed">
                Trusting Brains helps businesses set up and use WhatsApp Business Platform solutions for customer communication. Our solutions enable businesses to communicate with customers, respond to inquiries, send important updates and manage business conversations more efficiently.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. WHAT WE HELP BUSINESSES DO */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
              Business Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What We Help Businesses Do
            </h2>
            <p className="text-base text-tb-textMuted">
              Practical technology solutions tailored to strengthen customer relationships and operational efficiency.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={idx * 0.08} direction="up">
                <TiltCard maxTilt={10} scale={1.02} className="h-full">
                  <div className="h-full bg-[#160E22]/90 border border-white/10 hover:border-tb-purple/50 rounded-3xl p-7 flex flex-col justify-between shadow-2xl backdrop-blur-xl transition-all duration-300 group hover:shadow-glow-purple">
                    <div>
                      <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-tb-orange group-hover:text-tb-purple transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-tb-textMuted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-tb-textSubtle group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-tb-purple" />
                      <span>WhatsApp Business Messaging</span>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 bg-[#0B0212] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
                Simple 4-Step Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                How It Works
              </h2>
              <p className="text-base text-tb-textMuted">
                A transparent, step-by-step approach to onboarding and implementing WhatsApp Business Platform for your operations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <AnimatedSection key={step.num} delay={idx * 0.1} direction="up">
                <TiltCard maxTilt={8} scale={1.02} className="h-full">
                  <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#160E22]/80 border border-white/10 hover:border-tb-orange/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-white/20 group-hover:text-tb-orange transition-colors">
                          {step.num}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-tb-purple bg-tb-purple/10 px-2.5 py-1 rounded-full border border-tb-purple/20">
                          Step {idx + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-tb-textMuted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-2 text-xs text-tb-textSubtle">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{step.stepTitle}</span>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO CAN USE OUR SOLUTIONS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-[#25D366] font-semibold bg-[#25D366]/10 px-3.5 py-1.5 rounded-full border border-[#25D366]/20">
              Industry Adaptability
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Who Can Use Our Solutions
            </h2>
            <p className="text-base text-tb-textMuted">
              Our WhatsApp Business API solutions are adaptable across diverse sectors and organizational sizes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <AnimatedSection key={aud.name} delay={idx * 0.05} direction="up">
                <TiltCard maxTilt={8} scale={1.02} className="h-full">
                  <div className="h-full p-5 sm:p-6 rounded-2xl bg-[#160E22]/90 border border-white/10 hover:border-tb-purple/40 transition-all duration-300 shadow-xl flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-tb-purple group-hover:text-tb-orange group-hover:bg-white/10 transition-colors mb-3.5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                      {aud.name}
                    </h3>
                    <span className="text-[11px] text-tb-textSubtle">
                      {aud.tag}
                    </span>
                  </div>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 6. FEATURES */}
      <section className="py-24 bg-[#0C0212] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
                Core Functionality
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Features
              </h2>
              <p className="text-base text-tb-textMuted">
                Factual, dependable capabilities engineered to streamline your business communication.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <AnimatedSection key={feat.title} delay={idx * 0.06} direction="up">
                <div className="h-full p-6 rounded-2xl bg-[#160E22]/80 border border-white/10 hover:border-tb-purple/40 transition-colors shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 text-tb-orange mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                      <h3 className="text-base font-bold text-white leading-snug">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-tb-textMuted leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY TRUSTING BRAINS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="bg-gradient-to-br from-[#160E22]/95 to-[#1F1130]/95 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
                  Why Trusting Brains
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Technology Solutions Built Around Your Business
                </h2>
                <p className="text-base text-tb-textMuted leading-relaxed">
                  Trusting Brains IT Services Pvt. Ltd. provides software and technology solutions to businesses. We help businesses adopt digital tools and communication solutions that improve customer engagement and operational efficiency.
                </p>

                <div className="pt-2">
                  <h3 className="text-sm uppercase tracking-wider text-white font-semibold mb-3">
                    Our Core Technology Services:
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {companyServices.map((srv) => (
                      <span
                        key={srv}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-tb-purple" />
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary Card */}
              <div className="lg:col-span-5">
                <TiltCard maxTilt={6} scale={1.02}>
                  <div className="p-7 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-tb-purple" />
                      Our Technical Commitment
                    </h4>
                    <p className="text-xs sm:text-sm text-tb-textMuted leading-relaxed">
                      We focus on reliable software architectures, clean integrations, and ethical technology practices without inflated claims or artificial lock-ins.
                    </p>
                    <div className="pt-2 space-y-2 text-xs text-tb-textSubtle">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Client-first requirement analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Dedicated technical configuration & support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Transparent workflows and communication</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 bg-[#0B0212] border-y border-white/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-tb-purple/15 via-[#160E22] to-tb-orange/15 border border-white/15 shadow-2xl overflow-hidden">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Ready to Improve Your Customer Communication?
              </h2>
              <p className="text-base sm:text-lg text-tb-textMuted max-w-2xl mx-auto mb-8 leading-relaxed">
                Talk to our team about implementing WhatsApp Business Platform solutions for your business.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-9 py-4 rounded-full font-bold text-base hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-3.5 py-1.5 rounded-full border border-tb-purple/20">
              <HelpCircle className="w-3.5 h-3.5" />
              Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-tb-textMuted">
              Factual information regarding WhatsApp Business Platform and our technology services.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <AnimatedSection key={idx} delay={idx * 0.05} direction="up">
                <div className="bg-[#160E22]/90 border border-white/10 rounded-2xl overflow-hidden transition-all shadow-lg">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-semibold text-base sm:text-lg text-white hover:text-tb-purple transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/60 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-tb-purple' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-tb-textMuted leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 10. COMPANY INFORMATION */}
      <section className="py-16 bg-[#0E0415] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="bg-[#160E22]/95 border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-tb-purple font-semibold">
                    Official Corporate Information
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Trusting Brains IT Services Pvt. Ltd.
                  </h3>
                  <p className="text-sm text-tb-orange font-medium mt-1">
                    Business Type: Technology & Software Services
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-tb-purple to-tb-orange text-white px-5 py-2.5 rounded-xl font-medium text-xs shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Contact Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <h4 className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                    Services Provided:
                  </h4>
                  <p className="text-sm text-tb-textMuted leading-relaxed">
                    Software Development, Web Development, Application Development, Digital Solutions and WhatsApp Business Platform Solutions.
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-tb-textSubtle">
                  <Link to="/about-us" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    About Us
                  </Link>
                  <span>•</span>
                  <Link to="/contact-us" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    Contact Us
                  </Link>
                  <span>•</span>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link to="/terms-of-service" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    Terms & Conditions
                  </Link>
                  <span>•</span>
                  <Link to="/data-deletion" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    Data Deletion
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
