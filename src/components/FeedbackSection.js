'use client';

import { useState } from 'react';

export default function FeedbackSection({ topics = [], title = 'Send feedback', description }) {
  const [topic, setTopic] = useState(topics[0] || '');

  return (
    <section id="feedback" className="scroll-mt-28 rounded-[32px] bg-washr-blue-deep p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(18,40,64,0.22)]">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="pill-badge mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff' }}>
            Feedback
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-sm md:text-base leading-7 text-white/75 max-w-xl">
            {description || 'Tell us what needs attention and we will route it to the right team.'}
          </p>

          {topics.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTopic(item)}
                  className="rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200"
                  style={{
                    backgroundColor: topic === item ? 'var(--washr-orange)' : 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    borderColor: topic === item ? 'transparent' : 'rgba(255,255,255,0.15)',
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <form className="rounded-[28px] bg-white/8 border border-white/12 p-6 md:p-7 backdrop-blur-xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white">Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            >
              {topics.map((item) => (
                <option key={item} value={item} className="text-washr-blue-deep">
                  {item}
                </option>
              ))}
            </select>
          </div>

          <label className="block text-sm font-semibold text-white">
            Your message
            <textarea
              rows="6"
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55 outline-none"
              placeholder="Write a short description of what happened or what you want improved."
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-washr-orange px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(242,140,40,0.32)] transition hover:bg-washr-orange-hover active:scale-[0.98]"
          >
            Submit feedback
          </button>
        </form>
      </div>
    </section>
  );
}
