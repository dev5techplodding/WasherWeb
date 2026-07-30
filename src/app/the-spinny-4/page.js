import Image from 'next/image';
import SimpleFlowSection from '@/components/process/SimpleFlowSection';
import AppDownloadBanner from '@/components/process/AppDownloadBanner';
import AppStoreButtons from '@/components/AppStoreButtons';

export const metadata = {
  title: 'The Spinny 4 | 4 Easy Steps',
  description:
    'Discover how Spinny works in 4 easy steps. From 30-second schedule pickup to specialized cleaning and delivery.',
};

export default function TheSpinny4Page() {
  return (
    <main className="min-h-screen bg-white text-[#0E3A66]">
      {/* 1. HERO HEADER */}
      {/* <section className="relative w-full pt-36 pb-20 lg:pt-44 lg:pb-24 text-white overflow-hidden bg-[#0B1726]">
        {/* Background Image with Dark Overlay */}
      {/* <div className="absolute inset-0 z-0">
          <Image
            src="/ironing.jpg"
            alt="The Spinny 4 Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1726]/90 via-[#0B1726]/80 to-[#0B1726]" />
        </div>

        {/* Ambient Glows & Grid Pattern */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.25)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
            <span>THE SPINNY 4</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white mb-6">
            How Spinny Works in <br />
            <span className="text-[#F7941D]">4 Easy Steps</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto mb-8">
            Experience effortless, predictable garment and household textile care. Schedule in 30 seconds, and we take care of the rest.
          </p>

          <AppStoreButtons className="justify-center" />
        </div>
      </section> */}

      <section className="relative w-full pt-10 pb-10 lg:pt-10 lg:pb-10 text-white overflow-hidden bg-[#0B1726]">

      </section>
      {/* 2. SIMPLE 4-STEP PROCESS SECTION (IN THE MIDDLE) */}
      <SimpleFlowSection />

      {/* 3. APP DOWNLOAD BANNER */}
      <AppDownloadBanner />
    </main>
  );
}
