import React, { useState } from 'react';
import roastingImg from '../assets/images/coffee_beans_roasting_1791168438995.jpg';
import bakeryImg from '../assets/images/bakery_pastries_display_1791168426016.jpg';
import pouroverImg from '../assets/images/pourover_brew_process_1791168413508.jpg';

export const StorySection: React.FC = () => {
  const [activeRoastTab, setActiveRoastTab] = useState<'light' | 'medium' | 'dark'>('light');

  const roastProfiles = {
    light: {
      name: 'Nordic-Style Light Roast',
      temp: '202°C Drop Temp',
      time: '9m 10s Total Roasting',
      flavors: 'Jasmine, White Peach, Bergamot, Meyer Lemon',
      idealBrew: 'Hario V60, Chemex, Aeropress',
      rationale: 'Preserves the delicate organic fruit acids and floral terpenes native to high-elevation Ethiopian and Kenyan mountain terroir. No roast bitterness.',
      pairing: 'Almond Frangipane Brioche or Swedish Cardamom Bun',
    },
    medium: {
      name: 'Omni Medium Roast',
      temp: '210°C Drop Temp',
      time: '10m 40s Total Roasting',
      flavors: 'Brown Butter, Candied Pecan, Dark Honey, Red Apple',
      idealBrew: 'Drip Batch Brew, French Press, Mokamaster',
      rationale: 'Developed past first crack to caramelize natural sucrose while retaining vibrant stone fruit character. The quintessential crowd-pleasing morning cup.',
      pairing: 'Warm Sourdough Butter Croissant with Cultured Jam',
    },
    dark: {
      name: 'Heritage Espresso Dark Roast',
      temp: '219°C Drop Temp',
      time: '12m 20s Total Roasting',
      flavors: 'Dark Cocoa Truffle, Smoked Molasses, Black Cherry',
      idealBrew: '9-Bar Espresso Machine, Moka Pot, Cold Brew',
      rationale: 'Deep Maillard and caramelized lipid development creating heavy crema, velvety mouthfeel, and bold presence that cuts cleanly through steamed dairy.',
      pairing: 'Whipped Ricotta Toast with Fig & Hot Honey',
    },
  };

  const currentProfile = roastProfiles[activeRoastTab];

  return (
    <section id="story" className="py-24 bg-[#F5EFE8] border-b border-[#E8DFD4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8E4A28] mb-2">
            The Philosophy Behind the Cup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1916] tracking-tight mb-6">
            We believe coffee is agriculture first, chemistry second, and hospitality always.
          </h2>
          <p className="text-base text-[#5A4B43] leading-relaxed">
            Founded in 2018 in an abandoned 1920s brick timber warehouse, Morningside began with a restored 12kg cast-iron Giesen drum roaster and a stubborn obsession with uncompromised craft.
          </p>
        </div>

        {/* 3 Pillars Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Pillar 1: Roasting */}
          <div className="bg-white border border-[#E5DACD] rounded-lg overflow-hidden flex flex-col">
            <div className="h-56 overflow-hidden">
              <img
                src={roastingImg}
                alt="Roasted coffee beans swirling in drum roaster cooling tray"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-[#8E4A28] mb-1">Pillar One</div>
                <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-3">
                  Cast-Iron Drum Roasting
                </h3>
                <p className="text-xs text-[#66574F] leading-relaxed mb-4">
                  We roast in small 12kg batches using conductive and convective thermal sensors. By monitoring rate-of-rise (RoR) curves in real time, we prevent baking and preserve delicate floral aromatics.
                </p>
              </div>
              <div className="text-[11px] text-[#8C7A70] pt-3 border-t border-[#F2ECE4]">
                100% roasted in-house weekly · zero third-party co-packing
              </div>
            </div>
          </div>

          {/* Pillar 2: 72-Hour Bakery */}
          <div className="bg-white border border-[#E5DACD] rounded-lg overflow-hidden flex flex-col">
            <div className="h-56 overflow-hidden">
              <img
                src={bakeryImg}
                alt="Golden sourdough croissants and cardamom rolls on marble counter"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-[#8E4A28] mb-1">Pillar Two</div>
                <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-3">
                  72-Hour Sourdough Bakery
                </h3>
                <p className="text-xs text-[#66574F] leading-relaxed mb-4">
                  Our pastry team begins laminating at 3:30 AM every morning. We rely solely on our 8-year-old wild levain starter and 84% butterfat Normandy butter—no commercial chemical yeasts or artificial improvers.
                </p>
              </div>
              <div className="text-[11px] text-[#8C7A70] pt-3 border-t border-[#F2ECE4]">
                Baked fresh at 6:30 AM & 11:00 AM daily
              </div>
            </div>
          </div>

          {/* Pillar 3: Pour Over Lab */}
          <div className="bg-white border border-[#E5DACD] rounded-lg overflow-hidden flex flex-col">
            <div className="h-56 overflow-hidden">
              <img
                src={pouroverImg}
                alt="Barista brewing single origin coffee on pour over stand"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-[#8E4A28] mb-1">Pillar Three</div>
                <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-3">
                  Custom Mineral Water Lab
                </h3>
                <p className="text-xs text-[#66574F] leading-relaxed mb-4">
                  Brewed coffee is 98.5% water. We re-mineralize reverse-osmosis water to precise specifications: 80 ppm TDS with balanced magnesium-to-calcium ions to extract sweet fruit acids without astringency.
                </p>
              </div>
              <div className="text-[11px] text-[#8C7A70] pt-3 border-t border-[#F2ECE4]">
                SCA Water Standard Certified at 80 ppm
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Roast Profile Explorer */}
        <div className="bg-white border border-[#DDCFBF] rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#EFE8DF]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8E4A28] mb-1">
                Interactive Roastery Guide
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
                Explore Our Roast Profile Development
              </h4>
            </div>

            {/* Segmented control tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F5EFE8] rounded-md">
              {(['light', 'medium', 'dark'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveRoastTab(tab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm capitalize transition-colors cursor-pointer ${
                    activeRoastTab === tab
                      ? 'bg-[#1F1916] text-white shadow-xs'
                      : 'text-[#66574F] hover:text-[#1F1916]'
                  }`}
                >
                  {tab} Roast
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <div className="text-[11px] text-[#8C7A70] uppercase tracking-wider font-semibold">
                  Profile Name & Calibration
                </div>
                <div className="text-base font-serif font-bold text-[#1F1916] mt-0.5">
                  {currentProfile.name}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs bg-[#FAF7F2] p-3 rounded-md border border-[#EFE8DF]">
                <div>
                  <span className="text-[#8C7A70] block">Target Temp:</span>
                  <span className="font-semibold text-[#1F1916]">{currentProfile.temp}</span>
                </div>
                <div>
                  <span className="text-[#8C7A70] block">Drum Time:</span>
                  <span className="font-semibold text-[#1F1916]">{currentProfile.time}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#8C7A70] uppercase tracking-wider font-semibold mb-1">
                Tasting Notes & Aromatics
              </div>
              <p className="text-sm font-medium text-[#8E4A28] mb-3">
                {currentProfile.flavors}
              </p>
              <p className="text-xs text-[#66574F] leading-relaxed">
                {currentProfile.rationale}
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-[11px] text-[#8C7A70] uppercase tracking-wider font-semibold mb-0.5">
                  Recommended Brew Gear
                </div>
                <div className="text-xs font-medium text-[#1F1916]">
                  {currentProfile.idealBrew}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-[#8C7A70] uppercase tracking-wider font-semibold mb-0.5">
                  Baker's Pairing Recommendation
                </div>
                <div className="text-xs text-[#5A4B43]">
                  {currentProfile.pairing}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
