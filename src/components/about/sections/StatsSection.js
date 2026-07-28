import { ABOUT_STATS } from '@/components/data';

export default function StatsSection() {
  return (
    <section className="mt-16 rounded-[32px] bg-washr-blue-deep px-6 py-10 md:px-10 md:py-12 shadow-[0_30px_80px_rgba(18,40,64,0.25)]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
        {ABOUT_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-washr-orange">
              {stat.value}
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-5 text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
