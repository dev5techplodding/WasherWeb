import { USER_GROUPS, PROCESS_PILLS } from '@/components/data';

export default function RegistrationGroups() {
  return (
    <>
      <section className="mt-16 max-w-3xl">
        <div className="flex flex-wrap gap-3">
          {PROCESS_PILLS.map((item) => (
            <span key={item} className="pill-badge" style={{ backgroundColor: 'rgba(242,140,40,0.10)', color: 'var(--washr-blue)' }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 xl:grid-cols-3">
        {USER_GROUPS.map((group) => (
          <article key={group.title} className="glass-card p-6 md:p-7 border border-white/70 h-full">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-washr-orange">{group.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-washr-blue-deep">{group.title}</h2>
            <p className="mt-2 text-sm text-washr-text-muted italic">{group.sample}</p>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-washr-blue">Registration steps</h3>
              <ol className="mt-4 space-y-4">
                {group.steps.map((step, index) => (
                  <li key={step} className="flex gap-4 items-start">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-washr-blue-deep text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-washr-text-secondary">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 border border-washr-gray-mid">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-washr-blue">Requirements</h3>
              <ul className="mt-4 space-y-3">
                {group.requirements.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-washr-orange shrink-0" aria-hidden="true" />
                    <p className="text-sm leading-7 text-washr-text-secondary">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
