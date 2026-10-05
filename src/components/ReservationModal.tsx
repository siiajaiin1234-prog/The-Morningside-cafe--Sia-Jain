import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReservation: (res: Reservation) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onConfirmReservation,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-06');
  const [time, setTime] = useState('10:30 AM');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<Reservation['seatingArea']>('Sunlit Window Patio');
  const [notes, setNotes] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const newRes: Reservation = {
      id: 'RES-' + Math.floor(1000 + Math.random() * 9000),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      date,
      time,
      guests,
      seatingArea,
      notes: notes.trim() || undefined,
      status: 'confirmed',
    };

    onConfirmReservation(newRes);
    setConfirmedReservation(newRes);
  };

  const handleResetAndClose = () => {
    setConfirmedReservation(null);
    onClose();
  };

  const seatingOptions: Reservation['seatingArea'][] = [
    'Sunlit Window Patio',
    'Communal Roastery Bench',
    'Cozy Reading Nook',
    'Espresso Bar Counter',
  ];

  const timeSlots = [
    '7:30 AM', '8:30 AM', '9:30 AM', '10:30 AM', '11:30 AM',
    '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#14100E]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border border-[#D5C6B7] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-md hover:bg-[#EAE0D4] text-[#3D3028] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedReservation ? (
          /* Confirmation Ticket View */
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-[#E5F4EB] text-[#22723E] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div className="text-xs uppercase tracking-widest text-[#8E4A28] font-semibold mb-1">
              Table Reserved Successfully
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1F1916] mb-2">
              We look forward to hosting you!
            </h3>
            <p className="text-xs text-[#66574F] mb-6">
              A confirmation text has been logged for your arrival at Morningside Coffee.
            </p>

            <div className="p-5 bg-white border border-[#E8DFD4] rounded-lg text-left text-xs space-y-2.5 mb-6">
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span className="text-[#8C7A70]">Confirmation Code:</span>
                <span className="font-mono font-bold text-[#1F1916]">{confirmedReservation.id}</span>
              </div>
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span className="text-[#8C7A70]">Guest Name:</span>
                <span className="font-semibold text-[#1F1916]">{confirmedReservation.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span className="text-[#8C7A70]">Date & Time:</span>
                <span className="font-semibold text-[#1F1916]">{confirmedReservation.date} at {confirmedReservation.time}</span>
              </div>
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span className="text-[#8C7A70]">Party Size:</span>
                <span className="font-semibold text-[#1F1916]">{confirmedReservation.guests} {confirmedReservation.guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C7A70]">Seating Area:</span>
                <span className="font-semibold text-[#8E4A28]">{confirmedReservation.seatingArea}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
            >
              Done & Return to Cafe
            </button>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-[#8E4A28] font-semibold mb-1">
                Table & Gathering Reservations
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1F1916]">
                Reserve Your Morning Table
              </h3>
              <p className="text-xs text-[#66574F] mt-1">
                We reserve select tables for morning coffee meetings, brunch gatherings, and quiet reading sessions. Walk-ins are always welcomed!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                  Preferred Seating Ambience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {seatingOptions.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setSeatingArea(area)}
                      className={`p-2.5 text-xs text-left rounded-md border transition-colors cursor-pointer ${
                        seatingArea === area
                          ? 'border-[#2A201A] bg-[#2A201A] text-white font-medium'
                          : 'border-[#D5C6B7] bg-white text-[#4A3B32] hover:bg-[#F5EFE8]'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3028] mb-1.5">
                  Special Notes or Dietary Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday breakfast, baby high-chair needed, quiet corner..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
