'use client';

const METRICS = [
  {
    feature: 'Estimated Registration Time',
    customer: '2 Minutes',
    vendor: '5 Minutes',
    driver: '3 Minutes',
  },
  {
    feature: 'Required Verification Docs',
    customer: 'None (Mobile / Email)',
    vendor: 'Business Reg & Liability Insurance',
    driver: 'ID, Driver License & Insurance',
  },
  {
    feature: 'Approval & Review Window',
    customer: 'Instant Approval',
    vendor: 'Within 24 Hours',
    driver: 'Within 12 Hours',
  },
  {
    feature: 'Platform Interface Access',
    customer: 'Customer Web & Mobile App',
    vendor: 'Commercial SaaS Facility Hub',
    driver: 'Driver Route Dispatch App',
  },
  {
    feature: 'Core Service Focus',
    customer: 'On-Demand Pickup & Garment Care',
    vendor: 'Batch Processing & Partnering',
    driver: 'Neighborhood Logistics & Delivery',
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white text-[#0E3A66]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-[#0E3A66] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Side-by-Side Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3A66] tracking-tight">
            Role Feature Matrix
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-normal">
            Compare setup timelines, documentation requirements, and platform capabilities across user roles.
          </p>
        </div>

        {/* Spec Sheet Table */}
        <div className="rounded-2xl border border-slate-200 shadow-sm bg-white overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                  Feature
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-[#0E3A66] w-1/4">
                  Customer
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-[#0E3A66] w-1/4">
                  Vendor Partner
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-[#0E3A66] w-1/4">
                  Delivery Partner
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {METRICS.map((row) => (
                <tr key={row.feature} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0E3A66]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-normal">
                    {row.customer}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-normal">
                    {row.vendor}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-normal">
                    {row.driver}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
