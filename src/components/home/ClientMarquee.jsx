import React from 'react';
import { siteData } from '../../data/siteData';

export default function ClientMarquee() {
  const marqueeItems = [...siteData.clients, ...siteData.clients, ...siteData.clients];

  return (
    <div className="py-12 bg-[#0C0212] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-tb-textSubtle font-semibold">
          Registered Excellence • Trusted by visionary startups & global brands
        </p>
      </div>

      {/* Infinite marquee track */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee-track flex items-center gap-12 sm:gap-20 py-2">
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 sm:h-12 w-auto max-w-[160px] object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="text-white font-bold text-base px-3 py-1 bg-white/5 rounded-lg border border-white/10">${client.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
