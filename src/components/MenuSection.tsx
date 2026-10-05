import React, { useState, useMemo } from 'react';
import { Plus, Check, Search, Sparkles, Coffee } from 'lucide-react';
import { CAFE_MENU } from '../data/menuData';
import { MenuItem, CartItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, customization?: { milk?: string; size?: string; grind?: string; notes?: string }) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Customization modal state
  const [selectedMilk, setSelectedMilk] = useState<string>('Organic Whole Milk');
  const [selectedTemp, setSelectedTemp] = useState<string>('Standard Hot');
  const [selectedGrind, setSelectedGrind] = useState<string>('Whole Bean (Uncrushed)');
  const [itemNote, setItemNote] = useState<string>('');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'espresso', label: 'Espresso Bar' },
    { id: 'filter', label: 'Pour Over & Filter' },
    { id: 'signatures', label: 'Seasonal Signatures' },
    { id: 'bakery', label: 'Artisan Bakery' },
    { id: 'kitchen', label: 'Farmhouse Kitchen' },
    { id: 'beans', label: 'Whole Bean Bags' },
  ];

  const filteredItems = useMemo(() => {
    return CAFE_MENU.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tastingNotes && item.tastingNotes.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenCustomize = (item: MenuItem) => {
    setSelectedItemForModal(item);
    setSelectedMilk('Organic Whole Milk');
    setSelectedTemp('Standard Hot');
    setSelectedGrind('Whole Bean (Uncrushed)');
    setItemNote('');
  };

  const handleConfirmAdd = () => {
    if (!selectedItemForModal) return;
    const isCoffeeDrink = ['espresso', 'signatures'].includes(selectedItemForModal.category);
    const isBean = selectedItemForModal.category === 'beans';

    onAddToCart(selectedItemForModal, {
      milk: isCoffeeDrink ? selectedMilk : undefined,
      size: isCoffeeDrink ? selectedTemp : undefined,
      grind: isBean ? selectedGrind : undefined,
      notes: itemNote.trim() || undefined,
    });

    setAddedNotice(`Added ${selectedItemForModal.name} to order bag`);
    setTimeout(() => setAddedNotice(null), 3000);
    setSelectedItemForModal(null);
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8E4A28] mb-2">
            Crafted Daily in Small Batches
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1916] tracking-tight mb-4">
            Seasonal Coffee & Kitchen Menu
          </h2>
          <p className="text-base text-[#66574F] leading-relaxed">
            Every espresso is weighed to 0.1g, single-origins poured to order, and viennoiserie freshly baked in our stone-deck hearth at sunrise.
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Functional Button Segmented Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2A201A] text-white shadow-xs'
                    : 'bg-[#EFE8DF] text-[#55463D] hover:bg-[#E5DCD1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7A70] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search drinks, toast, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
            />
          </div>
        </div>

        {/* Notification Toast */}
        {addedNotice && (
          <div className="mb-6 p-3 bg-[#E8F3EB] border border-[#A7D4B3] rounded-md text-xs font-medium text-[#1E562D] flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2E7D32]" />
              {addedNotice}
            </span>
            <span className="text-[11px] text-[#2E7D32] underline cursor-pointer" onClick={() => setAddedNotice(null)}>
              Dismiss
            </span>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#E8DFD4] rounded-lg p-5 flex flex-col justify-between hover:border-[#C4B1A0] transition-colors"
            >
              <div>
                {/* Header: Title + Price */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-serif font-bold text-[#1F1916] leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-sm font-semibold text-[#1F1916] font-mono tabular-nums whitespace-nowrap">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#66574F] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Origin / Process Details if applicable */}
                {item.origin && (
                  <div className="text-[11px] text-[#8E4A28] font-medium mb-3">
                    {item.origin} {item.process ? `· ${item.process}` : ''}
                  </div>
                )}

                {/* Tasting notes - unboxed text with typographic separators */}
                {item.tastingNotes && item.tastingNotes.length > 0 && (
                  <div className="flex items-center flex-wrap gap-1.5 text-[11px] text-[#7A6A61] mb-4">
                    <span className="font-semibold text-[#4A3B32]">Notes:</span>
                    {item.tastingNotes.map((note, index) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {index < (item.tastingNotes?.length || 0) - 1 && (
                          <span aria-hidden="true" className="opacity-40">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-[#F2ECE4] flex items-center justify-between">
                <span className="text-[11px] text-[#938276] uppercase tracking-wider font-medium">
                  {item.category === 'beans' ? 'Whole Bean 250g' : item.popular ? 'House Favorite' : 'Fresh Daily'}
                </span>
                <button
                  onClick={() => handleOpenCustomize(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1F1916] bg-[#F4EDE5] hover:bg-[#E8DDD0] rounded-md transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Order Item</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#E8DFD4] rounded-lg">
            <p className="text-sm text-[#7A6A61]">No menu items matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#8E4A28] underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Item Customization Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 bg-[#120E0C]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] border border-[#D5C6B7] rounded-lg max-w-md w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8E4A28] font-semibold">
                  Add to Pickup Order
                </span>
                <h3 className="text-lg font-serif font-bold text-[#1F1916]">
                  {selectedItemForModal.name}
                </h3>
              </div>
              <div className="text-base font-semibold text-[#1F1916] font-mono tabular-nums">
                ${selectedItemForModal.price.toFixed(2)}
              </div>
            </div>

            <p className="text-xs text-[#66574F] mb-5">
              {selectedItemForModal.description}
            </p>

            {/* Customization for espresso / coffee drinks */}
            {['espresso', 'signatures'].includes(selectedItemForModal.category) && (
              <div className="space-y-4 mb-5 border-t border-b border-[#E8DFD4] py-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-2">
                    Milk Option
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'Organic Whole Milk', extra: '' },
                      { id: 'Minor Figures Oat', extra: '+$0.75' },
                      { id: 'Sprouted Almond', extra: '+$0.75' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMilk(m.id)}
                        className={`p-2 text-xs text-left rounded-md border transition-colors cursor-pointer ${
                          selectedMilk === m.id
                            ? 'border-[#2A201A] bg-[#2A201A] text-white'
                            : 'border-[#D5C6B7] bg-white text-[#4A3B32] hover:bg-[#F5EFE8]'
                        }`}
                      >
                        <div className="font-medium">{m.id}</div>
                        {m.extra && <div className="text-[10px] opacity-75">{m.extra}</div>}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-2">
                    Temperature & Preparation
                  </label>
                  <div className="flex gap-2">
                    {['Standard Hot', 'Over Clear Ice'].map((temp) => (
                      <button
                        key={temp}
                        type="button"
                        onClick={() => setSelectedTemp(temp)}
                        className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                          selectedTemp === temp
                            ? 'border-[#2A201A] bg-[#2A201A] text-white'
                            : 'border-[#D5C6B7] bg-white text-[#4A3B32] hover:bg-[#F5EFE8]'
                        }`}
                      >
                        {temp}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Customization for retail beans */}
            {selectedItemForModal.category === 'beans' && (
              <div className="mb-5 border-t border-b border-[#E8DFD4] py-4">
                <label className="block text-xs font-semibold text-[#3D3028] mb-2">
                  Grind Selection (Free In-House Precision Grinding)
                </label>
                <div className="space-y-1.5">
                  {[
                    'Whole Bean (Recommended for freshness)',
                    'Coarse (French Press & Cold Brew)',
                    'Medium (V60 Pour Over & Chemex)',
                    'Fine (Espresso Machine & Moka Pot)',
                  ].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGrind(g)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-md border transition-colors cursor-pointer ${
                        selectedGrind === g
                          ? 'border-[#8E4A28] bg-[#F7EFE9] text-[#1F1916] font-medium'
                          : 'border-[#E8DFD4] bg-white text-[#5C504A] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions Note */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                Special Requests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Extra hot, splash of room, light ice..."
                value={itemNote}
                onChange={(e) => setItemNote(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedItemForModal(null)}
                className="px-4 py-2 text-xs font-semibold text-[#5C504A] hover:text-[#1F1916] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmAdd}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
              >
                Add to Order Bag
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
