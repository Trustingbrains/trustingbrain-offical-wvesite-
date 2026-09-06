import React from 'react';
import { Phone, Mail, Clock, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-[#0B0212] border-b border-white/10 text-xs py-2 text-tb-textSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-tb-purple" />
            <span>Call us: <strong className="text-white">{siteData.brand.phoneDisplay}</strong></span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href={`mailto:${siteData.brand.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-tb-orange" />
            <span>{siteData.brand.email}</span>
          </a>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-tb-purpleLight" />
            <span>{siteData.brand.workingHours}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white/40">Follow Us:</span>
          <div className="flex items-center gap-3 text-white/60">
            <a href="#" className="hover:text-tb-purple transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-tb-orange transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-tb-purpleLight transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-tb-pink transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
