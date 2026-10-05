import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Heart, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { BlogArticle } from '../types';

interface BlogSectionProps {
  articles: BlogArticle[];
  onOpenArticle: (article: BlogArticle) => void;
  likesMap: Record<string, { count: number; liked: boolean }>;
  onToggleLike: (articleId: string) => void;
  isDedicatedView?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  articles,
  onOpenArticle,
  likesMap,
  onToggleLike,
  isDedicatedView = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'quick'>('recent');

  const categories = [
    'All',
    'Brew Guides',
    'Origin & Sourcing',
    'Coffee Science',
    'Bakery & Pairings',
    'Cafe Culture',
  ];

  // Filtering & Sorting logic
  const filteredArticles = useMemo(() => {
    let result = articles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'popular') {
      result = [...result].sort((a, b) => {
        const likesA = likesMap[a.id]?.count ?? a.likes;
        const likesB = likesMap[b.id]?.count ?? b.likes;
        return likesB - likesA;
      });
    } else if (sortBy === 'quick') {
      result = [...result].sort((a, b) => {
        const timeA = parseInt(a.readTime, 10) || 5;
        const timeB = parseInt(b.readTime, 10) || 5;
        return timeA - timeB;
      });
    }

    return result;
  }, [articles, selectedCategory, searchQuery, sortBy, likesMap]);

  // Featured article (first one matching filter, or default to Julian's pour over guide)
  const featuredArticle = filteredArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <section
      id="journal"
      className={`py-20 bg-[#FAF7F2] border-b border-[#E8DFD4] scroll-mt-20 ${
        isDedicatedView ? 'min-h-screen pt-28' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8E4A28] mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Morningside Journal & Roastery Archives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1916] tracking-tight mb-4">
            Notes on Coffee Extraction, Origin Terroir & Hearth Baking
          </h2>
          <p className="text-base text-[#66574F] leading-relaxed">
            Written by our roasters, baristas, and pastry team. A repository of practical brew guides, sensory science, direct-trade travelogues, and neighborhood reflections.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Interactive Category Tabs (Functional buttons with active states) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1F1916] text-white shadow-xs'
                      : 'bg-[#EFE8DF] text-[#55463D] hover:bg-[#E5DCD1]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search & Sort Select */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-1.5 px-3 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#4A3B32] focus:outline-none focus:ring-1 focus:ring-[#8E4A28] cursor-pointer"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Loved</option>
                <option value="quick">Quickest Read</option>
              </select>
            </div>
          </div>

          {/* Result counter in quiet tabular numerals */}
          <div className="text-xs text-[#8C7A70] flex items-center justify-between">
            <span>
              Showing <strong className="font-mono tabular-nums text-[#1F1916]">{filteredArticles.length}</strong> published articles
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#8E4A28] underline cursor-pointer"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Featured Hero Article Spotlight */}
        {featuredArticle && (
          <div className="mb-12 bg-white border border-[#E8DFD4] rounded-xl overflow-hidden hover:border-[#C4B1A0] transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image side */}
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden relative">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500 cursor-pointer"
                  onClick={() => onOpenArticle(featuredArticle)}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-[#7A6A61] mb-3">
                    <span className="font-semibold text-[#8E4A28] uppercase tracking-wider">{featuredArticle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredArticle.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h3
                    onClick={() => onOpenArticle(featuredArticle)}
                    className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1916] leading-tight mb-4 hover:text-[#8E4A28] transition-colors cursor-pointer [text-wrap:balance]"
                  >
                    {featuredArticle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66574F] leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F2ECE4] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EFE8DF] flex items-center justify-center text-xs font-serif font-bold text-[#1F1916]">
                      {featuredArticle.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1F1916]">{featuredArticle.author.name}</div>
                      <div className="text-[11px] text-[#8C7A70]">{featuredArticle.author.role}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenArticle(featuredArticle)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => {
            const articleLikes = likesMap[article.id]?.count ?? article.likes;
            const isLiked = likesMap[article.id]?.liked ?? false;

            return (
              <article
                key={article.id}
                className="bg-white border border-[#E8DFD4] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C4B1A0] transition-colors group"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div
                    onClick={() => onOpenArticle(article)}
                    className="h-48 overflow-hidden cursor-pointer relative bg-[#F5EFE8]"
                  >
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Unboxed metadata with typographic separators (Anti-Slop rule) */}
                    <div className="flex items-center gap-2 text-[11px] text-[#7A6A61] mb-2.5">
                      <span className="font-semibold text-[#8E4A28] uppercase tracking-wider">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h4
                      onClick={() => onOpenArticle(article)}
                      className="text-base sm:text-lg font-serif font-bold text-[#1F1916] leading-snug mb-2.5 line-clamp-2 cursor-pointer group-hover:text-[#8E4A28] transition-colors"
                    >
                      {article.title}
                    </h4>

                    <p className="text-xs text-[#66574F] leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Zone */}
                <div className="px-5 pb-5 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8C7A70]">{article.author.name}</span>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike(article.id);
                      }}
                      className={`flex items-center gap-1 text-[11px] font-mono tabular-nums transition-colors cursor-pointer ${
                        isLiked ? 'text-[#C84A31]' : 'text-[#8C7A70] hover:text-[#C84A31]'
                      }`}
                      title="Like"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{articleLikes}</span>
                    </button>

                    <button
                      onClick={() => onOpenArticle(article)}
                      className="font-semibold text-[#8E4A28] hover:text-[#1F1916] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#E8DFD4] rounded-lg">
            <BookOpen className="w-8 h-8 text-[#8C7A70] mx-auto mb-3" />
            <p className="text-sm font-semibold text-[#1F1916]">No articles found</p>
            <p className="text-xs text-[#7A6A61] mt-1">No articles match "{searchQuery}" in category "{selectedCategory}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#1F1916] bg-[#F5EFE8] hover:bg-[#EAE0D4] rounded-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
