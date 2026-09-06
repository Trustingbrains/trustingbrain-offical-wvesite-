import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function BlogDetailPage() {
  const { slug } = useParams();

  const blog = siteData.blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const otherBlogs = siteData.blogs.filter((b) => b.slug !== slug);

  return (
    <div className="bg-[#100317] min-h-screen">
      {/* Banner with Water Ripple */}
      <PageBanner
        title={blog.title}
        subtitle={blog.category}
        breadcrumbs={[
          { label: 'Blog', href: '/blogs' },
          { label: blog.title.slice(0, 30) + '...' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content (8 cols) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Meta bar */}
            <AnimatedSection direction="down">
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-tb-textSubtle pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-tb-purple" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-tb-orange" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-tb-purpleLight" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image with 3D Tilt */}
            <AnimatedSection direction="up">
              <TiltCard maxTilt={10} scale={1.02}>
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#160E22] shadow-2xl h-80 sm:h-96">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/service-web.webp';
                    }}
                  />
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Lead Excerpt */}
            <AnimatedSection direction="up" delay={0.1}>
              <p className="text-lg sm:text-xl font-medium text-white/90 leading-relaxed italic border-l-4 border-tb-purple pl-6 py-2">
                "{blog.excerpt}"
              </p>
            </AnimatedSection>

            {/* Body Content */}
            <AnimatedSection direction="up" delay={0.2}>
              <div
                className="prose prose-invert prose-purple max-w-none text-tb-textMuted leading-relaxed space-y-6 text-sm sm:text-base [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:pt-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </AnimatedSection>

            {/* Back & Navigation Footer */}
            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 text-tb-purple" />
                <span>Back to All Articles</span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-xs text-tb-textSubtle">Share:</span>
                <button
                  onClick={() => alert('Link copied to clipboard!')}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Author Profile */}
            <AnimatedSection direction="left">
              <div className="bg-[#160E22] border border-white/10 rounded-3xl p-6 text-center space-y-3 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-tb-purple to-tb-orange mx-auto flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  TB
                </div>
                <h4 className="text-base font-bold text-white">Trusting Brains Editorial</h4>
                <p className="text-xs text-tb-textSubtle leading-relaxed">
                  Authored by our senior software engineers and technology architects writing about real-world enterprise architectures, AI agents, and web technologies.
                </p>
              </div>
            </AnimatedSection>

            {/* Related Posts */}
            <AnimatedSection direction="left" delay={0.15}>
              <div className="bg-[#160E22] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
                <h3 className="text-base font-bold text-white pb-3 border-b border-white/10">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {otherBlogs.map((b) => (
                    <Link
                      key={b.slug}
                      to={`/blog/${b.slug}`}
                      className="group block space-y-1"
                    >
                      <span className="text-[11px] text-tb-orange font-medium">{b.date}</span>
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-tb-purple transition-colors line-clamp-2">
                        {b.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
