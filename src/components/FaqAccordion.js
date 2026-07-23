'use client';

import { useState } from 'react';

export default function FaqAccordion({ items = [], title = 'Frequently asked questions' }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <p className="pill-badge mb-3" style={{ backgroundColor: 'rgba(27,58,92,0.08)', color: 'var(--washr-blue)' }}>
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-washr-blue-deep">{title}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className="rounded-[28px] border border-washr-gray-mid bg-white shadow-[0_12px_36px_rgba(27,58,92,0.06)] overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-lg font-semibold text-washr-blue-deep">{item.question}</span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-washr-gray-mid text-washr-blue transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="px-5 md:px-6 pb-5 text-sm md:text-base leading-7 text-washr-text-secondary">
                    {item.answer}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}