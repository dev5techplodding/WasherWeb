export default function ApprovalFlow() {
  return (
    <section className="mt-16 rounded-[32px] bg-washr-blue-deep p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(18,40,64,0.22)]">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="pill-badge mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff' }}>
            Approval flow
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Every registration ends with a clear review step.
          </h2>
          <p className="mt-4 text-sm md:text-base leading-7 text-white/75 max-w-3xl">
            After submission, the account is checked for completeness, service fit, and any missing documentation. If something needs attention, the next step is clearly explained so the applicant knows what to fix before approval continues.
          </p>
        </div>
        <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">Example status</p>
          <p className="mt-2 text-sm font-semibold text-white">&quot;Documents received. Review expected within 24 hours.&quot;</p>
        </div>
      </div>
    </section>
  );
}
