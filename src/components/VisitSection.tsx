import React, { useState } from 'react';
import { MapPin, Clock, Wifi, Train, Car, Coffee, Compass, Check } from 'lucide-react';

export const VisitSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');

  // Weekly hours schedule
  const schedule = [
    { day: 'Monday', hours: '7:00 AM – 6:00 PM', notes: 'Roastery in session' },
    { day: 'Tuesday', hours: '7:00 AM – 6:00 PM', notes: 'Full bakery' },
    { day: 'Wednesday', hours: '7:00 AM – 6:00 PM', notes: 'Single origin drop' },
    { day: 'Thursday', hours: '7:00 AM – 6:00 PM', notes: 'Roastery in session' },
    { day: 'Friday', hours: '7:00 AM – 7:00 PM', notes: 'Extended evening' },
    { day: 'Saturday', hours: '8:00 AM – 6:00 PM', notes: 'Public Cupping at 10 AM' },
    { day: 'Sunday', hours: '8:00 AM – 6:00 PM', notes: 'Screen-Free Garden Patio' },
  ];

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryEmail('');
      setInquiryText('');
    }, 4000);
  };

  return (
    <section id="visit" className="py-24 bg-[#F5EFE8] border-b border-[#E8DFD4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8E4A28] mb-2">
            East Quarter Neighborhood
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1916] tracking-tight mb-4">
            Visit the Roastery, Kitchen & Sunlit Garden Patio
          </h2>
          <p className="text-base text-[#66574F] leading-relaxed">
            Housed in the historic 1920s Mill Building on Heritage Way. Join us for early espresso, freshly baked viennoiserie, or slow Saturday cuppings.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Hours of Operation & Live Status */}
          <div className="lg:col-span-6 bg-white border border-[#E8DFD4] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F2ECE4]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8E4A28]" />
                  <h3 className="text-lg font-serif font-bold text-[#1F1916]">
                    Operating Hours
                  </h3>
                </div>
                {/* Live status badge */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Open Now · Closes at 6:00 PM</span>
                </div>
              </div>

              {/* Hours Table */}
              <div className="space-y-2.5 text-xs">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-2 border-b border-[#F5EFE8] last:border-none"
                  >
                    <span className="font-semibold text-[#1F1916] w-28">{item.day}</span>
                    <span className="font-mono tabular-nums text-[#4A3B32]">{item.hours}</span>
                    <span className="text-[11px] text-[#8C7A70] hidden sm:inline">{item.notes}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Saturday Tasting Event Callout */}
            <div className="mt-8 p-4 bg-[#FAF7F2] border border-[#E8DFD4] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8E4A28] uppercase tracking-wider mb-1">
                <Coffee className="w-3.5 h-3.5" />
                <span>Weekly Community Cupping</span>
              </div>
              <p className="text-xs text-[#5C504A] leading-relaxed">
                Every Saturday at 10:00 AM, our green buyer leads an informal public cupping of our freshest harvest arrivals. Free admission; all curiosity levels welcome.
              </p>
            </div>
          </div>

          {/* Right Column: Location, Getting Here & Laptop Policy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white border border-[#E8DFD4] rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8E4A28] mb-1">
                    Location & Directions
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#1F1916]">
                    412 Heritage Way, East Quarter
                  </h4>
                  <p className="text-xs text-[#66574F] mt-1">
                    At the corner of Timberline Blvd & 4th Avenue, entrance adjacent to the brick courtyard arch.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#8E4A28] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F2ECE4] text-xs">
                <div className="flex items-start gap-2.5">
                  <Train className="w-4 h-4 text-[#8E4A28] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1F1916] block">Public Transit</span>
                    <span className="text-[#66574F]">Heritage Station (Blue & Red Line), 2-minute walk east.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#8E4A28] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1F1916] block">Parking & Bikes</span>
                    <span className="text-[#66574F]">Complimentary 90-min customer parking in rear lot + 18 bike racks.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop & Wi-Fi Policy */}
            <div className="bg-white border border-[#E8DFD4] rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E4A28] mb-2">
                <Wifi className="w-4 h-4" />
                <span>Our Digital Presence & Gathering Philosophy</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1F1916] mb-2">
                Co-Working Hours & Screen-Free Weekends
              </h4>
              <p className="text-xs text-[#66574F] leading-relaxed mb-4">
                We love welcoming remote workers, students, and writers! Monday through Friday, enjoy our high-speed gigabit Wi-Fi and power outlets at the communal oak bench.
              </p>
              <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD4] rounded-md text-xs text-[#5C504A]">
                <strong className="text-[#1F1916] font-semibold">Weekend Policy:</strong> On Saturdays and Sundays, all courtyard tables are reserved for dining, reading physical books, and conversation—laptops are tucked away so community can flourish.
              </div>
            </div>

          </div>

        </div>

        {/* Quick Question / Event Inquiry Bar */}
        <div className="bg-white border border-[#E8DFD4] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-base font-serif font-bold text-[#1F1916] mb-1">
              Hosting a Private Gathering or Morning Book Club?
            </h4>
            <p className="text-xs text-[#66574F]">
              Our sunlit mezzanine and roasting floor are available for evening private events, cupping workshops, and bridal breakfasts.
            </p>
          </div>

          <form onSubmit={handleInquiry} className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={inquiryEmail}
              onChange={(e) => setInquiryEmail(e.target.value)}
              className="px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
            >
              {inquirySent ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inquiry Sent!</span>
                </>
              ) : (
                <span>Ask Events Team</span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
