import { DIFFERENTIATORS } from '@/components/data';

export default function MissionSection() {
  return (
    <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[32px] bg-washr-blue-deep p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(18,40,64,0.25)]">
        <p className="pill-badge mb-5" style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff' }}>
          Mission
        </p>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          To make expert garment care feel as convenient as every other modern service.
        </h2>
        <p className="mt-5 text-sm md:text-base leading-7 text-white/75">
          That means fewer unknowns, cleaner communication, and service standards that hold up in real life. We design the experience so customers know who is handling their items, when pickup will happen, and when they should expect delivery.
        </p>
      </div>

      <div className="glass-card p-8 md:p-10 border border-white/70">
        <h2 className="text-2xl font-bold text-washr-blue-deep">What sets us apart</h2>
        <div className="mt-6 space-y-4">
          {DIFFERENTIATORS.map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-washr-orange shrink-0" aria-hidden="true" />
              <p className="text-sm md:text-base leading-7 text-washr-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
