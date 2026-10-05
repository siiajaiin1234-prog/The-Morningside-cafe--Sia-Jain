import React from 'react';
import { ArrowRight, Compass, Sparkles, Clock } from 'lucide-react';
import heroImg from '../assets/images/cafe_hero_interior_1791168328586.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreJournal: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onExploreJournal,
  onOpenReservation,
}) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Warm sunlit interior of Morningside Coffee Roasters with oak tables and coffee bar"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15100E]/95 via-[#15100E]/70 to-[#15100E]/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Unboxed editorial status metadata with typographic separators */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-wide text-[#E8D7C8] mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
          <span>Open Today 7:00 AM – 6:00 PM</span>
          <span aria-hidden="true" className="opacity-50">·</span>
          <span>East Quarter Heritage District</span>
          <span aria-hidden="true" className="opacity-50">·</span>
          <span>In-House Micro-Roastery</span>
        </div>

        {/* Display headline with balance */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto [text-wrap:balance]">
          Slow mornings, meticulous coffee, and sourdough straight from our deck oven.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#D8C9BB] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          We source high-altitude heirloom varietals directly from smallholder farms, roast each lot in 12kg micro-batches, and fold 72-hour cultured butter croissants at dawn.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={onExploreMenu}
            className="px-6 py-3.5 text-sm font-semibold text-[#1F1916] bg-[#FAF7F2] hover:bg-white rounded-md transition-colors shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>Explore Seasonal Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreJournal}
            className="px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] bg-[#3B2C24]/80 hover:bg-[#3B2C24] border border-[#7D6453]/60 rounded-md backdrop-blur-sm transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Read Brew Journal (12 Guides)</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="px-5 py-3.5 text-sm font-medium text-[#D8C9BB] hover:text-white transition-colors cursor-pointer"
          >
            Reserve Table &rarr;
          </button>
        </div>

        {/* Adjacent Proof Rigor with clear context */}
        <div className="pt-8 border-t border-[#FAF7F2]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F2] tabular-nums">
              180%
            </div>
            <div className="text-xs text-[#C5B5A5] mt-0.5 leading-snug">
              Paid over Fairtrade minimum directly to Gedeo & Huila cooperatives
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F2] tabular-nums">
              48 Hours
            </div>
            <div className="text-xs text-[#C5B5A5] mt-0.5 leading-snug">
              Maximum roast-to-hopper rest window for optimal aromatic clarity
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F2] tabular-nums">
              4.2 Tonnes
            </div>
            <div className="text-xs text-[#C5B5A5] mt-0.5 leading-snug">
              Spent grounds diverted to neighborhood community gardens annually
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
