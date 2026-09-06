import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AnimatedSection from '../common/AnimatedSection';
import TiltCard from '../common/TiltCard';

export default function LatestBlogs() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0C0212] overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 right-10 w-96 h-96 orb-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Row */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="inline-block text-xs uppercase tracking-widest text-tb-orange font-semibold bg-tb-orange/10 px-3.5 py-1.5 rounded-full border border-tb-orange/20">
                Tech Insights
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Latest Blog
              </h2>
              <p className="text-tb-textMuted text-base sm:text-lg max-w-xl">
                Fresh perspectives, engineering breakdowns, and digital strategy guides from our senior architects.
              </p>
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-tb-purple px-6 py-3 rounded-full transition-all duration-300 self-start md:self-auto group shadow-lg"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Blog Posts Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.blogs.map((blog, idx) => (
            <AnimatedSection key={blog.slug} delay={idx * 0.15} direction="up">
              <TiltCard maxTilt={14} scale={1.03} className="h-full">
                <article className="group bg-[#160E22]/80 border border-white/10 hover:border-tb-purple/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-glow-purple flex flex-col justify-between h-full shadow-2xl">
                  <div>
                    {/* Blog Image */}
                    <div className="relative h-48 overflow-hidden bg-black/50">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/service-web.webp';
                        }}
                      />
                      <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-tb-purple border border-tb-purple/30">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-tb-textSubtle">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-tb-orange" />
                          <span>{blog.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-tb-purpleLight" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-tb-purple transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-tb-textMuted leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="p-6 sm:p-8 pt-0">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-tb-orange transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
