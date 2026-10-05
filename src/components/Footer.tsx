import React, { useState } from 'react';
import { ArrowRight, Check, Coffee } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenJournal: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenJournal,
  onOpenReservation,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#1C1613] text-[#D8C9BB] pt-16 pb-12 border-t border-[#382C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Newsletter + Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#2F241E]">
          
          {/* Brand & Ethos */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#FAF7F2]">
              Morningside Coffee Roasters
            </h3>
            <p className="text-xs sm:text-sm text-[#A8988B] max-w-md leading-relaxed">
              An independent specialty coffeehouse, micro-roastery, and wild sourdough bakery nestled in the East Quarter. Dedicated to transparent direct trade, honest craft, and morning human warmth.
            </p>
            <div className="text-xs text-[#8C7A70] flex items-center gap-2">
              <Coffee className="w-3.5 h-3.5 text-[#C87D43]" />
              <span>412 Heritage Way, East Quarter · Open 7 Days</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#C87D43] font-semibold">
              The Morning Dispatch
            </div>
            <h4 className="text-lg font-serif font-bold text-[#FAF7F2]">
              Weekly Single-Origin Drops & Brew Guides
            </h4>
            <p className="text-xs text-[#A8988B]">
              Every Tuesday, we share small-lot roast release notes, barista extraction tips, and seasonal kitchen recipes. No spam, ever.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3.5 py-2.5 text-xs bg-[#29201B] border border-[#43342B] rounded-md text-[#FAF7F2] placeholder-[#806E62] focus:outline-none focus:ring-1 focus:ring-[#C87D43] flex-1"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-xs font-semibold text-[#1C1613] bg-[#FAF7F2] hover:bg-white rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Join Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <div className="font-semibold text-[#FAF7F2] uppercase tracking-wider text-[11px] mb-3">
              Cafe & Kitchen
            </div>
            <ul className="space-y-2 text-[#A8988B]">
              <li>
                <button onClick={() => onNavigateSection('menu')} className="hover:text-white transition-colors cursor-pointer">
                  Espresso & Classic Coffee
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('menu')} className="hover:text-white transition-colors cursor-pointer">
                  Single-Origin Pour Overs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('menu')} className="hover:text-white transition-colors cursor-pointer">
                  72-Hour Sourdough Bakery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('menu')} className="hover:text-white transition-colors cursor-pointer">
                  Farmhouse Kitchen Toast
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[#FAF7F2] uppercase tracking-wider text-[11px] mb-3">
              The Journal (12 Articles)
            </div>
            <ul className="space-y-2 text-[#A8988B]">
              <li>
                <button onClick={onOpenJournal} className="hover:text-white transition-colors cursor-pointer">
                  V60 Pour-Over Precision
                </button>
              </li>
              <li>
                <button onClick={onOpenJournal} className="hover:text-white transition-colors cursor-pointer">
                  Ethiopian Direct Trade Story
                </button>
              </li>
              <li>
                <button onClick={onOpenJournal} className="hover:text-white transition-colors cursor-pointer">
                  Espresso Crema Science
                </button>
              </li>
              <li>
                <button onClick={onOpenJournal} className="hover:text-white transition-colors cursor-pointer">
                  Sourdough Croissant Lamination
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[#FAF7F2] uppercase tracking-wider text-[11px] mb-3">
              Hospitality & Visit
            </div>
            <ul className="space-y-2 text-[#A8988B]">
              <li>
                <button onClick={onOpenReservation} className="hover:text-white transition-colors cursor-pointer">
                  Book Table Reservation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('visit')} className="hover:text-white transition-colors cursor-pointer">
                  Operating Hours & Transit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('visit')} className="hover:text-white transition-colors cursor-pointer">
                  Saturday Public Cupping
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('visit')} className="hover:text-white transition-colors cursor-pointer">
                  Private Mezzanine Hire
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[#FAF7F2] uppercase tracking-wider text-[11px] mb-3">
              Direct Trade Partners
            </div>
            <ul className="space-y-2 text-[#A8988B]">
              <li>Idido Smallholders, Gedeo (Ethiopia)</li>
              <li>Finca El Paraiso, Huila (Colombia)</li>
              <li>Kianjiru Farmers Co-op (Kenya)</li>
              <li>Sleepy Willow Water Decaf (Mexico)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 border-t border-[#2F241E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6A61]">
          <div>
            &copy; {new Date().getFullYear()} Morningside Coffee Roasters Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#8C7A70]">
            <span>Roasted Fresh in the East Quarter</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Waste Spent Grounds Program</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
