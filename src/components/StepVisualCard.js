'use client';

import { forwardRef, useState } from 'react';

/* ─────────────────────────────────────────────────
   1. App Booking Scheduler Mockup (Step 01)
   ───────────────────────────────────────────────── */
function ScheduleMockup({ isActive }) {
  const [selectedService, setSelectedService] = useState('wash-fold');
  const [scentOption, setScentOption] = useState('unscented');
  const [selectedSlot, setSelectedSlot] = useState(1);

  const slots = [
    { id: 0, day: 'Mon', time: '8-10 AM' },
    { id: 1, day: 'Tue', time: '10-12 PM' },
    { id: 2, day: 'Wed', time: '2-4 PM' },
  ];

  return (
    <div className="w-full bg-[#122840]/5 rounded-2xl p-4 border border-slate-200/50 flex flex-col gap-3 text-left font-sans select-none">
      {/* Phone Header */}
      <div className="flex items-center justify-between border-b border-slate-200/30 pb-2">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New Order</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-emerald-600">Online</span>
        </div>
      </div>

      {/* Services Selector */}
      <div>
        <div className="text-[9px] font-extrabold uppercase tracking-wide text-slate-500 mb-1">1. Select Service</div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSelectedService('wash-fold')}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all duration-300 ${
              selectedService === 'wash-fold'
                ? 'border-[var(--washr-orange)] bg-[var(--washr-orange)] text-white shadow-sm'
                : 'border-slate-200 bg-white text-[var(--washr-blue)] hover:border-slate-300'
            }`}
          >
            🧺 Wash & Fold
          </button>
          <button
            onClick={() => setSelectedService('dry-clean')}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all duration-300 ${
              selectedService === 'dry-clean'
                ? 'border-[var(--washr-orange)] bg-[var(--washr-orange)] text-white shadow-sm'
                : 'border-slate-200 bg-white text-[var(--washr-blue)] hover:border-slate-300'
            }`}
          >
            👔 Dry Clean
          </button>
        </div>
      </div>

      {/* Preferences Switches */}
      <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-[0_2px_8px_rgba(27,58,92,0.03)] flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[var(--washr-blue)]">🌿 Hypoallergenic Detergent</span>
          <button
            onClick={() => setScentOption(scentOption === 'unscented' ? 'scented' : 'unscented')}
            className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-300 flex items-center ${
              scentOption === 'unscented' ? 'bg-emerald-500' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                scentOption === 'unscented' ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        <div className="h-[1px] bg-slate-100" />
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Dryer Temp</span>
          <span className="font-bold text-[var(--washr-orange)]">Low Heat (Anti-Shrink)</span>
        </div>
      </div>

      {/* Time Slot Picker */}
      <div>
        <div className="text-[9px] font-extrabold uppercase tracking-wide text-slate-500 mb-1">2. Preferred Slot</div>
        <div className="flex gap-2">
          {slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => setSelectedSlot(slot.id)}
              className={`flex-1 p-2 rounded-xl border flex flex-col items-center gap-0.5 transition-all duration-300 ${
                selectedSlot === slot.id
                  ? 'border-[var(--washr-blue)] bg-[var(--washr-blue)] text-white shadow-sm scale-[1.03]'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              <span className="text-[10px] font-bold">{slot.day}</span>
              <span className="text-[8px] tracking-tight">{slot.time}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   2. Courier Dispatch Map & Details (Step 02)
   ───────────────────────────────────────────────── */
function CollectMockup({ isActive }) {
  return (
    <div className="w-full bg-[#122840]/5 rounded-2xl p-4 border border-slate-200/50 flex flex-col gap-3 text-left font-sans select-none">
      {/* Courier Profile Card */}
      <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-[0_2px_8px_rgba(27,58,92,0.03)] flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-[var(--washr-blue-light)] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
          CR
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-[var(--washr-blue)] truncate">Carlos Rodriguez</h4>
            <span className="text-[10px] font-black text-[var(--washr-orange)]">4.9 ★</span>
          </div>
          <p className="text-[10px] text-slate-500">Washr Premium Courier</p>
          <span className="inline-block mt-1 text-[8px] bg-emerald-500/10 text-emerald-700 px-1.5 py-0.5 rounded font-black uppercase">
            ⚡ Clean EV Van
          </span>
        </div>
      </div>

      {/* Dispatch Tracking Progress */}
      <div className="flex-1 bg-white rounded-xl p-3 border border-slate-200/80 shadow-[0_2px_8px_rgba(27,58,92,0.03)] flex flex-col gap-3 justify-center">
        <div className="relative pl-5 flex flex-col gap-3.5">
          {/* Tracking vertical connector line */}
          <div className="absolute left-[3px] top-[4px] bottom-[4px] w-[1px] bg-slate-200" />

          {/* Timeline steps */}
          <div className="relative flex items-center justify-between">
            <span className="absolute left-[-21px] w-2 h-2 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-500/20" />
            <span className="text-[11px] font-bold text-slate-500">Order Confirmed</span>
            <span className="text-[9px] text-slate-400">10:15 AM</span>
          </div>

          <div className="relative flex items-center justify-between">
            <span className="absolute left-[-21px] w-2 h-2 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-500/20" />
            <span className="text-[11px] font-bold text-slate-500">NFC Bag Linked (#WS-990)</span>
            <span className="text-[9px] text-slate-400">10:17 AM</span>
          </div>

          <div className="relative flex items-center justify-between">
            <span className="absolute left-[-22px] w-2.5 h-2.5 rounded-full bg-[var(--washr-orange)] border-2 border-white ring-4 ring-[var(--washr-orange-glow)] animate-pulse" />
            <span className="text-[11px] font-black text-[var(--washr-blue)]">Driver En Route</span>
            <span className="text-[10px] font-extrabold text-[var(--washr-orange)]">ETA 8m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   3. Commercial Facility Metrics (Step 03)
   ───────────────────────────────────────────────── */
function ProcessMockup({ isActive }) {
  return (
    <div className="w-full bg-[#122840]/5 rounded-2xl p-4 border border-slate-200/50 flex flex-col gap-3 text-left font-sans select-none">
      {/* Facility Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xs font-black text-[var(--washr-blue)]">Facility Partner #08</h4>
          <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Commercial Cleanroom Grade</p>
        </div>
        <span className="text-[9px] font-black bg-[var(--washr-blue-light)] text-white px-2 py-0.5 rounded-full">
          ISO Certified
        </span>
      </div>

      {/* Sensor Metrics Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-[0_1px_4px_rgba(27,58,92,0.02)]">
          <span className="text-[8px] font-black text-slate-400 uppercase">Water Temperature</span>
          <div className="text-[13px] font-black text-[var(--washr-blue)] mt-0.5 flex items-center gap-1">
            🌡️ 30°C <span className="text-[9px] font-bold text-slate-500">(Cold Delicate)</span>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-[0_1px_4px_rgba(27,58,92,0.02)]">
          <span className="text-[8px] font-black text-slate-400 uppercase">Softness Rating</span>
          <div className="text-[13px] font-black text-[var(--washr-blue)] mt-0.5 flex items-center gap-1">
            🧪 0 Grains <span className="text-[9px] font-bold text-emerald-600">(Ultra-Pure)</span>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-[0_1px_4px_rgba(27,58,92,0.02)]">
          <span className="text-[8px] font-black text-slate-400 uppercase">Detergent Standard</span>
          <div className="text-[13px] font-black text-[var(--washr-blue)] mt-0.5 flex items-center gap-1">
            🧴 Premium <span className="text-[9px] font-bold text-slate-500">(Bio-Degrade)</span>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-[0_1px_4px_rgba(27,58,92,0.02)]">
          <span className="text-[8px] font-black text-slate-400 uppercase">Spin Cycle Control</span>
          <div className="text-[13px] font-black text-[var(--washr-blue)] mt-0.5 flex items-center gap-1">
            🔄 800 RPM <span className="text-[9px] font-bold text-slate-500">(No Stretch)</span>
          </div>
        </div>
      </div>

      {/* Quality Control Checklist */}
      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(27,58,92,0.03)] flex flex-col gap-1.5">
        <div className="text-[8px] font-black text-slate-400 uppercase mb-0.5">Live Processing Stages</div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
          <span className="text-emerald-500">✓</span>
          <span>Stain Pre-treatment Applied</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
          <span className="text-emerald-500">✓</span>
          <span>Color-Separated Cleaning Cycle</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black text-[var(--washr-blue)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--washr-orange)] animate-pulse inline-block"></span>
          <span>Final 120-Point Quality Inspection</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   4. Delivery Summary & Ratings (Step 04)
   ───────────────────────────────────────────────── */
function DeliverMockup({ isActive }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="w-full bg-[#122840]/5 rounded-2xl p-4 border border-slate-200/50 flex flex-col gap-3 text-left font-sans select-none">
      {/* Delivery Receipt Header */}
      <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-[0_2px_8px_rgba(27,58,92,0.03)] flex justify-between items-center">
        <div>
          <span className="text-[8px] font-extrabold uppercase tracking-wide text-slate-400">Status</span>
          <div className="text-[11px] font-black text-emerald-600 flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Delivered Fresh & Sealed
          </div>
        </div>
        <div className="text-right">
          <span className="text-[8px] font-extrabold uppercase tracking-wide text-slate-400">Returned</span>
          <p className="text-[10px] font-bold text-[var(--washr-blue)] mt-0.5">Today, 3:15 PM</p>
        </div>
      </div>

      {/* Package configuration */}
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-[0_1px_4px_rgba(27,58,92,0.02)] flex flex-col">
          <span className="text-[8px] font-black text-slate-400 uppercase">Hanger Pressed</span>
          <span className="font-bold text-[var(--washr-blue)] mt-0.5">Collared Shirts</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-[0_1px_4px_rgba(27,58,92,0.02)] flex flex-col">
          <span className="text-[8px] font-black text-slate-400 uppercase">Folded & Wrapped</span>
          <span className="font-bold text-[var(--washr-blue)] mt-0.5">Sheets & Everyday Care</span>
        </div>
      </div>

      {/* Interactive feedback card */}
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-[0_2px_8px_rgba(27,58,92,0.03)] flex flex-col items-center gap-2 text-center">
        <span className="text-[9px] font-black text-[var(--washr-blue)] uppercase tracking-wider">How was your laundry?</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= (hoverRating || rating);
            return (
              <button
                key={star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="text-lg focus:outline-none transition-transform duration-150 active:scale-125 cursor-pointer"
                style={{ color: isFilled ? 'var(--washr-orange)' : 'var(--washr-silver-light)' }}
              >
                ★
              </button>
            );
          })}
        </div>
        <p className="text-[9px] text-slate-500 font-semibold">
          {rating === 5 ? 'Perfect care! Custom scent preferences saved.' : 'Thank you for your rating!'}
        </p>
      </div>
    </div>
  );
}

const MOCKUP_COMPONENTS = [ScheduleMockup, CollectMockup, ProcessMockup, DeliverMockup];

/* ─────────────────────────────────────────────────
   StepVisualCard Component
   Glassmorphism card with rich, interactive mockup
   ───────────────────────────────────────────────── */
const StepVisualCard = forwardRef(function StepVisualCard(
  { step, isActive, style, className = '' },
  ref
) {
  const Mockup = MOCKUP_COMPONENTS[step.index];

  return (
    <div
      ref={ref}
      className={`absolute inset-0 flex items-center justify-center will-change-transform ${className}`}
      style={style}
      aria-hidden={!isActive}
    >
      <div
        className="glass-card w-full max-w-[420px] aspect-square flex flex-col items-center justify-between p-7 md:p-8 transition-shadow duration-500"
        style={{
          boxShadow: isActive
            ? '0 16px 48px rgba(242, 140, 40, 0.12), 0 4px 16px rgba(27, 58, 92, 0.06)'
            : 'var(--washr-shadow-card)',
        }}
      >
        {/* Step Header */}
        <div className="w-full flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-500"
              style={{
                background: isActive ? 'var(--washr-orange)' : 'var(--washr-gray)',
                color: isActive ? '#FFFFFF' : 'var(--washr-silver)',
                boxShadow: isActive ? '0 4px 12px rgba(242, 140, 40, 0.25)' : 'none',
              }}
            >
              {String(step.index + 1).padStart(2, '0')}
            </span>
            <h3
              className="text-sm font-extrabold transition-colors duration-500 uppercase tracking-wider"
              style={{ color: isActive ? 'var(--washr-blue)' : 'var(--washr-text-muted)' }}
            >
              {step.label} Phase
            </h3>
          </div>
          <span className="text-[10px] font-bold text-slate-400">Step {step.number}</span>
        </div>

        {/* Mockup Display */}
        <div className="w-full flex-1 flex items-center justify-center my-2 border border-dashed border-slate-100 rounded-2xl p-2 bg-slate-50/50">
          <Mockup isActive={isActive} />
        </div>

        {/* Detailed Info Panel */}
        <div className="w-full text-center mt-2 pt-2 border-t border-slate-50">
          <h4
            className="text-sm font-black transition-colors duration-500 mb-1"
            style={{ color: isActive ? 'var(--washr-blue)' : 'var(--washr-text-muted)' }}
          >
            {step.title}
          </h4>
          <p
            className="text-[11px] leading-relaxed max-w-[320px] mx-auto transition-colors duration-500"
            style={{ color: isActive ? 'var(--washr-text-secondary)' : 'var(--washr-text-muted)' }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
});

export default StepVisualCard;
