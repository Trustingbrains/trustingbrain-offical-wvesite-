import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import AnimatedSection from '../components/common/AnimatedSection';
import TiltCard from '../components/common/TiltCard';
import { siteData } from '../data/siteData';

export default function BlogsPage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Digital Transformation', 'IT Strategy', 'Artificial Intelligence'];

  const filteredBlogs = useMemo(() => {
    return siteData.blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCategory]);

  return (
    <div className="bg-[#100317] min-h-screen">
      {/* Banner with Water Ripple */}
      <PageBanner
        title="Blogs"
        subtitle="Explore Our Blog for Creative Perspectives"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Blog Grid (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Category Filter Pills */}
            <AnimatedSection direction="down">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-md ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-tb-purple to-tb-orange text-white shadow-glow-purple'
                        : 'bg-[#160E22] text-white/70 hover:text-white border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Articles List with 3D Tilt */}
            {filteredBlogs.length === 0 ? (
              <div className="p-12 text-center bg-[#160E22] border border-white/10 rounded-3xl">
                <p className="text-white/60">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredBlogs.map((blog, idx) => (
                  <AnimatedSection key={blog.slug} delay={idx * 0.1} direction="up">
                    <TiltCard maxTilt={12} scale={1.03} className="h-full">
                      <article className="group bg-[#160E22]/90 border border-white/10 hover:border-tb-purple/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-glow-purple flex flex-col justify-between h-full shadow-2xl">
                        <div>
                          <div className="relative h-48 overflow-hidden bg-black/40">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/assets/service-web.webp';
                              }}
                            />
                            <span className="absolute top-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-tb-purple border border-tb-purple/30">
                              {blog.category}
                            </span>
                          </div>

                          <div className="p-6 space-y-3">
                            <div className="flex items-center gap-3 text-xs text-tb-textSubtle">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-tb-orange" /> {blog.date}</span>
                              <span>•</span>
                              <span>{blog.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white group-hover:text-tb-purple transition-colors line-clamp-2">
                              {blog.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-tb-textMuted leading-relaxed line-clamp-3">
                              {blog.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0">
                          <Link
                            to={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-tb-orange transition-colors"
                          >
                            <span>Read Full Article</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </article>
                    </TiltCard>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search Input Box */}
            <AnimatedSection direction="left">
              <div className="bg-[#160E22] border border-white/10 rounded-3xl p-6 shadow-xl">
                <h3 className="text-base font-bold text-white mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Keywords..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tb-purple"
                  />
                  <Search className="w-4 h-4 text-white/40 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </AnimatedSection>

            {/* Recent Posts */}
            <AnimatedSection direction="left" delay={0.15}>
              <div className="bg-[#160E22] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white pb-3 border-b border-white/10">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {siteData.blogs.slice(0, 3).map((b) => (
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
