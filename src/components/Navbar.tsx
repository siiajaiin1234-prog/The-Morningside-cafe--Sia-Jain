import React, { useState } from 'react';
import { ShoppingBag, Calendar, Menu, X, Coffee, BookOpen } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  activeView: 'home' | 'journal';
  setActiveView: (view: 'home' | 'journal') => void;
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  cart,
  onOpenCart,
  onOpenReservation,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (sectionId: string) => {
    setActiveView('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      onNavigateSection(sectionId);
    }, 50);
  };

  const handleJournalClick = () => {
    setActiveView('journal');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group text-left text-xl sm:text-2xl font-serif font-semibold tracking-tight text-[#1F1916] hover:text-[#8E4A28] transition-colors"
        >
          Morningside Coffee Roasters
        </button>

        {/* Zone 2: 4–6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C504A]">
          <button
            onClick={() => handleNavClick('menu')}
            className="hover:text-[#1F1916] transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8E4A28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="hover:text-[#1F1916] transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8E4A28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Our Story & Craft
          </button>
          <button
            onClick={handleJournalClick}
            className={`transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8E4A28] ${
              activeView === 'journal'
                ? 'text-[#8E4A28] font-semibold after:scale-x-100'
                : 'hover:text-[#1F1916] after:scale-x-0 hover:after:scale-x-100'
            } after:transition-transform`}
          >
            Brew Guides & Journal
          </button>
          <button
            onClick={() => handleNavClick('visit')}
            className="hover:text-[#1F1916] transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8E4A28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Visit & Hours
          </button>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#4A3B32] hover:text-[#1F1916] border border-[#D8C9BB] rounded-md hover:bg-[#F3ECE3] transition-colors cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#8E4A28]" />
            Reserve Table
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View Order Bag"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer whitespace-nowrap shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Order Pickup</span>
            <span className="sm:hidden">Order</span>
            {totalCartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#C87D43] text-white text-[10px] font-bold rounded-sm tabular-nums">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#4A3B32] hover:text-[#1F1916] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD4] bg-[#FAF7F2] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#4A3B32]">
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-2 hover:text-[#8E4A28] border-b border-[#F0E6DA]"
            >
              Seasonal Menu & Kitchen
            </button>
            <button
              onClick={() => handleNavClick('story')}
              className="text-left py-2 hover:text-[#8E4A28] border-b border-[#F0E6DA]"
            >
              Our Story & Roastery
            </button>
            <button
              onClick={handleJournalClick}
              className="text-left py-2 hover:text-[#8E4A28] border-b border-[#F0E6DA] flex items-center justify-between"
            >
              <span>Brew Guides & Journal</span>
              <span className="text-xs text-[#8E4A28] font-semibold">12 Articles</span>
            </button>
            <button
              onClick={() => handleNavClick('visit')}
              className="text-left py-2 hover:text-[#8E4A28] border-b border-[#F0E6DA]"
            >
              Location, Hours & Wi-Fi Policy
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#3A2D26] border border-[#CDBEAF] rounded-md bg-[#F4EDE5]"
            >
              Book a Table Reservation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
