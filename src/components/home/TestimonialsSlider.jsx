import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteData.testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === siteData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = siteData.testimonials[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0E0315] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/assets/bg-testimonials.webp)' }}
      />
      <div className="absolute top-1/2 left-10 w-96 h-96 orb-glow-purple pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 orb-glow-orange pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Heading */}
        <AnimatedSection direction="up">
          <div className="mb-14 space-y-3">
            <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
              Client Experiences
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              See What Our Clients Say About Us
            </h2>
          </div>
        </AnimatedSection>

        {/* Big Testimonial Card with 3D Tilt */}
        <AnimatedSection direction="up" delay={0.2}>
          <TiltCard maxTilt={8} scale={1.02}>
            <div className="relative bg-[#160E22]/90 border border-white/15 rounded-3xl p-8 sm:p-14 backdrop-blur-2xl shadow-2xl text-left overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Top Quote & Rating */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tb-purple to-tb-orange flex items-center justify-center text-white shadow-md">
                      <Quote className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote Text */}
                  <blockquote className="text-lg sm:text-2xl font-medium text-white/90 leading-relaxed mb-10 min-h-[90px]">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author Details & Slider Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-tb-purple to-tb-orange flex items-center justify-center font-bold text-white shadow-md">
                        {currentTestimonial.avatar}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-tb-textSubtle">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Slider Navigation Buttons */}
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={next}
                        className="w-10 h-10 rounded-full bg-tb-purple hover:bg-tb-purpleLight text-white flex items-center justify-center transition-colors shadow-glow-purple"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </TiltCard>
        </AnimatedSection>

        {/* Testimonials Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {siteData.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-gradient-to-r from-tb-purple to-tb-orange'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
