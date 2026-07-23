import Image from 'next/image';
import AppStoreButtons from '@/components/AppStoreButtons';

const SCREENS = [
  { image: '/F1.jpg', label: 'Book a pickup' },
  { image: '/F2.jpg', label: 'Track your driver' },
  { image: '/F1.jpg', label: 'Manage preferences' },
];

export default function AppScreens() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--washr-blue-deep)' }}
      aria-labelledby="app-screens-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <h2
            id="app-screens-heading"
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.15] text-white"
          >
            A first look at the Spinny app.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
            Preview screens shown below — final in-app design ships with launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-14">
          {SCREENS.map((screen) => (
            <div key={screen.label} className="flex flex-col items-center">
              <div
                className="relative w-full max-w-[220px] aspect-[9/19] rounded-[28px] overflow-hidden border-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                style={{ borderColor: 'rgba(255,255,255,0.14)' }}
              >
                <Image
                  src={screen.image}
                  alt={`Spinny app preview — ${screen.label}`}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-white/60">{screen.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-semibold text-white/85">Get Spinny for iOS and Android.</p>
          <AppStoreButtons />
        </div>
      </div>

      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.12] pointer-events-none" style={{ background: 'var(--washr-orange)' }} aria-hidden="true" />
    </section>
  );
}
