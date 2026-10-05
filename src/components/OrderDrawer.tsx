import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CheckCircle, Clock, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [pickupTime, setPickupTime] = useState<string>('Ready in ~15 mins');
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein'>('takeaway');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [tableNumber, setTableNumber] = useState<string>('');
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [orderConfirmed, setOrderConfirmed] = useState<{ id: string; name: string } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const tax = subtotal * 0.0825;
  const tipAmount = (subtotal * tipPercent) / 100;
  const total = subtotal + tax + tipAmount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!customerName.trim()) return;

    const newOrderId = 'MC-' + Math.floor(100 + Math.random() * 900);
    setOrderConfirmed({
      id: newOrderId,
      name: customerName.trim(),
    });
    onClearCart();
  };

  const handleCloseAndReset = () => {
    setOrderConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#14100E]/70 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF7F2] h-full flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8DFD4] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8E4A28]" />
            <h3 className="text-base font-serif font-bold text-[#1F1916]">
              Your Pickup Order Bag
            </h3>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="p-1.5 rounded-md hover:bg-[#EAE0D4] text-[#3D3028] transition-colors cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Order Confirmation View */
          <div className="p-6 overflow-y-auto flex-1 flex flex-col justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#E5F4EB] text-[#22723E] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-xs uppercase tracking-widest text-[#8E4A28] font-semibold mb-1">
              Order Received at Bar
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#1F1916] mb-2">
              Thank you, {orderConfirmed.name}!
            </h4>
            <p className="text-xs text-[#66574F] mb-6">
              Our baristas are steaming milk and pulling your shots right now.
            </p>

            <div className="p-4 bg-white border border-[#E8DFD4] rounded-lg text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span className="text-[#8C7A70]">Pickup Token:</span>
                <span className="font-mono font-bold text-[#8E4A28] text-sm">{orderConfirmed.id}</span>
              </div>
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span className="text-[#8C7A70]">Fulfillment:</span>
                <span className="font-semibold text-[#1F1916] capitalize">{orderType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C7A70]">Estimated Ready:</span>
                <span className="font-semibold text-[#1F1916]">{pickupTime}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#8C7A70] mb-6">
              Show order token <strong className="text-[#1F1916] font-mono">{orderConfirmed.id}</strong> at the wooden pickup counter upon arrival.
            </p>

            <button
              onClick={handleCloseAndReset}
              className="w-full py-3 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
            >
              Done & Return to Menu
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Bag View */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="w-12 h-12 text-[#B3A092] mb-3 stroke-[1.5]" />
            <h4 className="text-lg font-serif font-bold text-[#1F1916] mb-1">
              Your bag is empty
            </h4>
            <p className="text-xs text-[#7A6A61] max-w-xs mb-6">
              Explore our espresso bar, hand-crafted single origins, or 72-hour sourdough pastries to start an order.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          /* Cart Items & Checkout View */
          <>
            <div className="p-5 overflow-y-auto flex-1 space-y-4">
              {/* Items List */}
              <div className="divide-y divide-[#E8DFD4] bg-white border border-[#E8DFD4] rounded-lg p-3">
                {cart.map((ci) => (
                  <div key={ci.id} className="py-3 first:pt-1 last:pb-1 flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold text-[#1F1916] leading-tight">
                          {ci.item.name}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#1F1916] tabular-nums">
                          ${(ci.item.price * ci.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Customization Details */}
                      <div className="text-[11px] text-[#7A6A61] mt-0.5 space-y-0.5">
                        {ci.selectedMilk && <div>Milk: {ci.selectedMilk}</div>}
                        {ci.selectedSize && <div>Prep: {ci.selectedSize}</div>}
                        {ci.grindOption && <div>Grind: {ci.grindOption}</div>}
                        {ci.notes && <div className="italic text-[#8E4A28]">"{ci.notes}"</div>}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(ci.id, ci.quantity - 1)}
                          className="w-6 h-6 rounded border border-[#D5C6B7] flex items-center justify-center text-[#4A3B32] hover:bg-[#F5EFE8] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono tabular-nums font-semibold px-1 text-[#1F1916]">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.id, ci.quantity + 1)}
                          className="w-6 h-6 rounded border border-[#D5C6B7] flex items-center justify-center text-[#4A3B32] hover:bg-[#F5EFE8] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onUpdateQuantity(ci.id, 0)}
                          className="ml-auto text-[11px] text-[#A65B45] hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Fulfillment Setting */}
              <div className="p-4 bg-white border border-[#E8DFD4] rounded-lg space-y-3">
                <div className="text-xs font-semibold text-[#3D3028]">Order Type</div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'border-[#2A201A] bg-[#2A201A] text-white'
                        : 'border-[#D5C6B7] bg-white text-[#4A3B32]'
                    }`}
                  >
                    Takeaway Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('dinein')}
                    className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                      orderType === 'dinein'
                        ? 'border-[#2A201A] bg-[#2A201A] text-white'
                        : 'border-[#D5C6B7] bg-white text-[#4A3B32]'
                    }`}
                  >
                    Dine-In Table
                  </button>
                </div>

                {orderType === 'takeaway' ? (
                  <div>
                    <label className="block text-[11px] text-[#8C7A70] mb-1">Pickup Time</label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916]"
                    >
                      <option value="Ready in ~15 mins">Ready in ~15 mins (ASAP)</option>
                      <option value="Ready in ~30 mins">Ready in ~30 mins</option>
                      <option value="Ready in ~45 mins">Ready in ~45 mins</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] text-[#8C7A70] mb-1">Table Number (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Table 4 or Window Patio"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916]"
                    />
                  </div>
                )}
              </div>

              {/* Customer Contact Details */}
              <div className="p-4 bg-white border border-[#E8DFD4] rounded-lg space-y-2.5">
                <div className="text-xs font-semibold text-[#3D3028]">Contact Information</div>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (for SMS pickup alert)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378]"
                />
              </div>

              {/* Barista Tip Selector */}
              <div className="p-4 bg-white border border-[#E8DFD4] rounded-lg">
                <div className="text-xs font-semibold text-[#3D3028] mb-2 flex items-center justify-between">
                  <span>Support Your Barista & Baker</span>
                  <span className="font-mono tabular-nums text-[#8E4A28] font-bold">${tipAmount.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[10, 15, 18, 20].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTipPercent(pct)}
                      className={`py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                        tipPercent === pct
                          ? 'border-[#8E4A28] bg-[#F7EFE9] text-[#1F1916] font-bold'
                          : 'border-[#E8DFD4] bg-[#FAF7F2] text-[#66574F]'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Drawer Footer with Totals & Place Order CTA */}
            <div className="p-5 border-t border-[#E8DFD4] bg-[#FAF7F2]">
              <div className="space-y-1.5 text-xs mb-4">
                <div className="flex justify-between text-[#66574F]">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#66574F]">
                  <span>State & Local Tax (8.25%)</span>
                  <span className="font-mono tabular-nums">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#66574F]">
                  <span>Barista Tip</span>
                  <span className="font-mono tabular-nums">${tipAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1F1916] pt-2 border-t border-[#E8DFD4]">
                  <span>Total Due</span>
                  <span className="font-mono tabular-nums text-base">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={!customerName.trim()}
                className={`w-full py-3 px-4 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  customerName.trim()
                    ? 'bg-[#2A201A] hover:bg-[#43332A] text-white shadow-sm'
                    : 'bg-[#C5B5A5] text-white cursor-not-allowed'
                }`}
              >
                <span>{customerName.trim() ? `Place Order ($${total.toFixed(2)})` : 'Enter Name to Place Order'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
