import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function TickerPills() {
  const pills = [...siteData.tickerPills, ...siteData.tickerPills];

  return (
    <div className="py-8 bg-gradient-to-r from-[#160E22] via-[#211233] to-[#160E22] border-y border-white/10 overflow-hidden relative">
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex items-center gap-4 py-1">
          {pills.map((pill, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-tb-orange" />
              <span>{pill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
