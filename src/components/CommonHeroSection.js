import Image from 'next/image';

export default function CommonHeroSection({ content = {} }) {
  const {
    eyebrow,
    heading,
    description,
    backgroundImage,
    rightImage,
    buttons = [],
    accentText,
  } = content;

  const darkHeroStyle = {
    background:
      'linear-gradient(135deg, rgba(18,40,64,0.98) 0%, rgba(27,58,92,0.96) 45%, rgba(18,40,64,1) 100%)',
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20" style={darkHeroStyle}>
      {backgroundImage ? (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,40,64,0.32),rgba(18,40,64,0.78))]" />
        </div>
      ) : null}

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(242,140,40,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_70%)] blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="pill-badge mb-4" style={{ backgroundColor: 'rgba(242,140,40,0.18)', color: '#fff' }}>
                {eyebrow}
              </p>
            ) : null}

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[0.95]">
              {heading}
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/78 max-w-2xl leading-8">
              {description}
            </p>

            {accentText ? (
              <p className="mt-4 text-sm font-medium text-white/86 max-w-xl">
                {accentText}
              </p>
            ) : null}

            {buttons.length > 0 ? (
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {buttons.map((button) => {
                  const isPrimary = button.variant !== 'secondary';

                  return (
                    <a
                      key={`${button.label}-${button.url}`}
                      href={button.url}
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 active:scale-[0.98]"
                      style={{
                        backgroundColor: isPrimary ? 'var(--washr-orange)' : 'rgba(255,255,255,0.10)',
                        color: isPrimary ? '#ffffff' : '#ffffff',
                        border: isPrimary ? '1px solid transparent' : '1px solid rgba(255,255,255,0.18)',
                        boxShadow: isPrimary ? '0 8px 24px rgba(242,140,40,0.32)' : 'none',
                      }}
                    >
                      {button.label}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="relative">
            {rightImage ? (
              <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] min-h-[320px] md:min-h-[420px] backdrop-blur-xl">
                <Image
                  src={rightImage.src}
                  alt={rightImage.alt}
                  fill
                  priority={rightImage.priority}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={rightImage.className || 'object-cover'}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(18,40,64,0.05) 0%, rgba(18,40,64,0.56) 100%)',
                  }}
                  aria-hidden="true"
                />
                {rightImage.badge ? (
                  <div className="absolute left-5 bottom-5 rounded-2xl bg-[rgba(18,40,64,0.78)] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm border border-white/12">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                      {rightImage.badge.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {rightImage.badge.value}
                    </p>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="rounded-[32px] border border-white/12 bg-white/8 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  {Array.isArray(content.stats) && content.stats.length > 0
                    ? content.stats.map((stat) => (
                        <article key={stat.label} className="rounded-2xl bg-white/8 p-4 border border-white/12">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/58">{stat.label}</p>
                          <p className="mt-2 text-sm font-semibold text-white leading-relaxed">{stat.value}</p>
                        </article>
                      ))
                    : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}