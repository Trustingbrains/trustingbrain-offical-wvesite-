import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { X, Search, Phone, Mail, ArrowRight, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function MobileDrawer({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blogs?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#160E22] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          {/* Top Row: Logo & Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link to="/" onClick={onClose}>
              <img
                src="/assets/logo-header.png"
                alt="Trusting Brains"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/logo-brand.png';
                }}
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-tb-purple"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-tb-purple flex items-center justify-center text-white"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Nav Links */}
          <nav className="mt-8 flex flex-col gap-2">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-tb-purple/20 text-white border-l-4 border-tb-purple'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Contact Details */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <a
            href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 text-sm text-white/80 hover:text-white"
          >
            <div className="w-8 h-8 rounded-full bg-tb-purple/20 flex items-center justify-center text-tb-purple">
              <Phone className="w-4 h-4" />
            </div>
            <span>{siteData.brand.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${siteData.brand.email}`}
            className="flex items-center gap-3 text-sm text-white/80 hover:text-white"
          >
            <div className="w-8 h-8 rounded-full bg-tb-orange/20 flex items-center justify-center text-tb-orange">
              <Mail className="w-4 h-4" />
            </div>
            <span>{siteData.brand.email}</span>
          </a>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 pt-4 text-white/60">
            <a href="#" className="hover:text-tb-purple"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-tb-orange"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-tb-purpleLight"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-tb-pink"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
