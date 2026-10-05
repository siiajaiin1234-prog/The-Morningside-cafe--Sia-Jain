/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { BlogSection } from './components/BlogSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { ReservationModal } from './components/ReservationModal';
import { OrderDrawer } from './components/OrderDrawer';
import { BLOG_ARTICLES } from './data/blogArticles';
import { BlogArticle, CartItem, MenuItem, Reservation } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'journal'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  // Like counters map
  const [likesMap, setLikesMap] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    BLOG_ARTICLES.forEach((art) => {
      initial[art.id] = { count: art.likes, liked: false };
    });
    return initial;
  });

  const handleToggleLike = (articleId: string) => {
    setLikesMap((prev) => {
      const current = prev[articleId] || { count: 0, liked: false };
      const nextLiked = !current.liked;
      const nextCount = nextLiked ? current.count + 1 : current.count - 1;
      return {
        ...prev,
        [articleId]: { count: nextCount, liked: nextLiked },
      };
    });
  };

  const handleAddToCart = (
    item: MenuItem,
    customization?: { milk?: string; size?: string; grind?: string; notes?: string }
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          ci.selectedMilk === customization?.milk &&
          ci.selectedSize === customization?.size &&
          ci.grindOption === customization?.grind &&
          ci.notes === customization?.notes
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }

      return [
        ...prev,
        {
          id: 'cart_' + Date.now() + Math.random().toString(36).substring(2, 6),
          item,
          quantity: 1,
          selectedMilk: customization?.milk,
          selectedSize: customization?.size,
          grindOption: customization?.grind,
          notes: customization?.notes,
        },
      ];
    });
  };

  const handleUpdateCartQuantity = (id: string, newQuantity: number) => {
    setCart((prev) => {
      if (newQuantity <= 0) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveView('home');
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A2421]">
      {/* 3-Zone Navigation Header */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onNavigateSection={scrollToSection}
      />

      <main className="flex-1">
        {activeView === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero
              onExploreMenu={() => scrollToSection('menu')}
              onExploreJournal={() => setActiveView('journal')}
              onOpenReservation={() => setIsReservationOpen(true)}
            />

            {/* Menu & Kitchen Section */}
            <MenuSection onAddToCart={handleAddToCart} />

            {/* Roastery & Sourdough Bakery Craft Story */}
            <StorySection />

            {/* The Journal Showcase (12 In-Depth Articles) */}
            <BlogSection
              articles={BLOG_ARTICLES}
              onOpenArticle={(article) => setActiveArticle(article)}
              likesMap={likesMap}
              onToggleLike={handleToggleLike}
            />

            {/* Location, Hours & Laptop Guidelines */}
            <VisitSection />
          </>
        ) : (
          /* Dedicated Full Journal View */
          <div>
            <div className="bg-[#1C1613] text-[#FAF7F2] py-14 border-b border-[#352922]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C87D43] mb-2">
                  Specialty Coffee Archives & Brew Guides
                </div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-3">
                  The Morningside Coffee Journal
                </h1>
                <p className="text-sm sm:text-base text-[#D5C6B7] max-w-2xl leading-relaxed">
                  A comprehensive library of 12 detailed articles exploring water chemistry, extraction dynamics, heirloom origins, sourdough lamination, and neighborhood culture.
                </p>
                <button
                  onClick={() => {
                    setActiveView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-6 text-xs font-semibold text-[#FAF7F2] hover:text-[#C87D43] transition-colors underline cursor-pointer"
                >
                  &larr; Back to Cafe Main Page
                </button>
              </div>
            </div>

            <BlogSection
              articles={BLOG_ARTICLES}
              onOpenArticle={(article) => setActiveArticle(article)}
              likesMap={likesMap}
              onToggleLike={handleToggleLike}
              isDedicatedView={true}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenJournal={() => {
          setActiveView('journal');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Full Article Reading Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
          onSelectArticle={(art) => setActiveArticle(art)}
          allArticles={BLOG_ARTICLES}
          onToggleLike={handleToggleLike}
          isLiked={likesMap[activeArticle.id]?.liked ?? false}
          likesCount={likesMap[activeArticle.id]?.count ?? activeArticle.likes}
        />
      )}

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onConfirmReservation={() => {}}
      />

      {/* Order Pickup Slide-over Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
