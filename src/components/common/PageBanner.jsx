import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import WaterRippleCanvas from './WaterRippleCanvas';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-[#100317] border-b border-white/10">
      {/* Background with texture & glows */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/assets/bg-hero.webp)' }}
      />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] orb-glow-purple pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 orb-glow-orange pointer-events-none" />

      {/* Interactive Water Ripple Effect on Page Header */}
      <WaterRippleCanvas dropRadius={20} perturbance={0.04} autoDrops={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs uppercase tracking-widest text-tb-purple font-semibold bg-tb-purple/10 px-4 py-1.5 rounded-full border border-tb-purple/20 mb-4 shadow-md"
          >
            {subtitle}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          {title}
        </motion.h1>

        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#160E22]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs sm:text-sm text-tb-textSubtle shadow-xl"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-tb-purple font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </div>
    </div>
  );
}
