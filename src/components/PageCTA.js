import Link from 'next/link';

export default function PageCTA({ title, description, primary, secondary }) {
  return (
    <section className="rounded-[32px] bg-washr-blue-deep p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(18,40,64,0.22)]">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="pill-badge mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff' }}>
            Next step
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-sm md:text-base leading-7 text-white/75 max-w-3xl">{description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {primary ? (
            <Link
              href={primary.url}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 active:scale-[0.98]"
              style={{ backgroundColor: 'var(--washr-orange)', color: '#fff' }}
            >
              {primary.label}
            </Link>
          ) : null}

          {secondary ? (
            <Link
              href={secondary.url}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 active:scale-[0.98]"
              style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}