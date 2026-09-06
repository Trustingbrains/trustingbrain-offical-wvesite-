import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, PhoneCall, Sparkles, Box, Layers, Shield } from 'lucide-react';
import { siteData } from '../../data/siteData';
import VideoModal from '../common/VideoModal';
import WaterRippleCanvas from '../common/WaterRippleCanvas';
import TiltCard from '../common/TiltCard';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[94vh] pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center bg-[#100317]">
      {/* Background Graphic Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-top pointer-events-none opacity-40 mix-blend-screen"
        style={{ backgroundImage: 'url(/assets/bg-hero.webp)' }}
      />
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none opacity-30"
        style={{ backgroundImage: 'url(/assets/bg-shape2.webp)' }}
      />

      {/* Interactive Water Ripple Canvas Background */}
      <WaterRippleCanvas dropRadius={24} perturbance={0.05} autoDrops={true} />

      {/* Dynamic Animated Ambient Orbs */}
      <div className="absolute top-[5%] left-[25%] w-[450px] h-[450px] rounded-full orb-glow-purple animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full orb-glow-orange animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full orb-glow-blue pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[550px] h-[250px] orb-glow-teal pointer-events-none opacity-40" />

      {/* Floating 3D Tech Ornaments */}
      <div className="hidden lg:block absolute top-40 left-12 animate-float pointer-events-none">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tb-purple/30 to-white/5 border border-white/20 backdrop-blur-xl p-3 shadow-glow-purple rotate-12 transform hover:rotate-45 transition-transform">
          <Box className="w-full h-full text-tb-purpleLight" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-36 right-16 animate-float pointer-events-none" style={{ animationDelay: '3s' }}>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tb-orange/30 to-white/5 border border-white/20 backdrop-blur-xl p-3 shadow-glow-orange -rotate-12">
          <Layers className="w-full h-full text-tb-orange" />
        </div>
      </div>

      {/* Foreground Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <a
            href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-tb-purpleLight transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-tb-orange" />
            <span>{siteData.hero.callBadge}</span>
          </a>

          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-tb-purple/20 to-tb-orange/20 border border-tb-purple/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white">
            <Sparkles className="w-3.5 h-3.5 text-tb-purple" />
            <span>{siteData.hero.subtitleBadge}</span>
          </div>
        </motion.div>

        {/* Main Massive Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-2 mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
            We Don't <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">just market</span>
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] flex items-center justify-center flex-wrap gap-x-4">
            <span className="text-white">we make your Brand</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tb-purple via-tb-pink to-tb-orange drop-shadow-2xl">
              {siteData.hero.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Subtitle / Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-tb-textMuted font-normal leading-relaxed mb-10"
        >
          {siteData.hero.description}
        </motion.p>

        {/* Actions & Interactive Elements with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          {/* Primary CTA with 3D hover */}
          <TiltCard maxTilt={8} scale={1.05}>
            <Link
              to="/our-services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tb-purple to-tb-purpleDark text-white px-8 py-4 rounded-full font-semibold text-base shadow-glow-purple active:scale-95 transition-all duration-300 group"
            >
              <span>{siteData.hero.ctaPrimary}</span>
              <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </TiltCard>

          {/* Video Preview Trigger with 3D Tilt */}
          <TiltCard maxTilt={10} scale={1.05}>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-3 text-white/90 hover:text-white bg-[#160E22]/80 hover:bg-[#201332] border border-white/15 px-6 py-3.5 rounded-full font-medium text-sm backdrop-blur-md shadow-xl transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tb-orange to-tb-pink flex items-center justify-center shadow-glow-orange group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
              </div>
              <span>Watch Intro Showcase</span>
            </button>
          </TiltCard>
        </motion.div>

        {/* Social Proof / Trusted Users Banner with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block"
        >
          <TiltCard maxTilt={10} scale={1.03}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#160E22]/90 backdrop-blur-2xl border border-white/15 px-7 py-4 rounded-2xl sm:rounded-full shadow-2xl">
              {/* Avatar stack */}
              <div className="flex -space-x-3 items-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#160E22] bg-gradient-to-tr from-tb-purple to-tb-pink flex items-center justify-center text-xs font-bold text-white shadow-md">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#160E22] bg-gradient-to-tr from-tb-orange to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  AS
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#160E22] bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  NV
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#160E22] bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  +3k
                </div>
              </div>

              <div className="text-left sm:border-l sm:border-white/15 sm:pl-4">
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-white text-xs font-bold ml-1">5.0</span>
                </div>
                <p className="text-xs text-tb-textMuted font-medium">
                  Trusted by: <strong className="text-white">3,000+ happy businesses & users</strong>
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={siteData.hero.videoUrl}
      />
    </section>
  );
}
