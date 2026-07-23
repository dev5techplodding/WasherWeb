'use client';

import { useState } from 'react';

const TOPICS = [
  'General Inquiry',
  'Service or Order Support',
  'Vendor Partnership',
  'Driver Onboarding',
  'Billing Questions',
  'Privacy Concerns',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="mt-16 text-center max-w-2xl mx-auto rounded-[32px] bg-washr-blue-deep text-white p-8 md:p-12 shadow-[0_30px_80px_rgba(18,40,64,0.22)] border border-white/10">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white mb-6 animate-bounce">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Message sent successfully!</h2>
        <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed">
          Thanks for reaching out, {name}. Our support team has received your request regarding <strong>{topic}</strong> and will get back to you within 24 business hours.
        </p>
        <button
          onClick={() => {
            setName('');
            setEmail('');
            setTopic(TOPICS[0]);
            setMessage('');
            setSubmitted(false);
          }}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-washr-orange px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(242,140,40,0.32)] transition hover:bg-opacity-90 active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <section className="mt-16 max-w-3xl mx-auto scroll-mt-28">
      <div className="text-center mb-10">
        <span className="pill-badge" style={{ backgroundColor: 'rgba(27,58,92,0.08)', color: 'var(--washr-blue)' }}>
          Get in touch
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-washr-blue-deep">Send Us a Message</h2>
        <p className="mt-2 text-sm text-washr-text-secondary">
          Fill out the form below and the right department will respond.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass-card p-6 md:p-8 border border-white/70 space-y-6 shadow-[0_20px_50px_rgba(27,58,92,0.06)] rounded-[32px] bg-white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-washr-blue-deep mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full rounded-2xl border border-washr-gray-mid bg-slate-50 px-4 py-3 text-sm text-washr-blue-deep placeholder:text-washr-text-muted focus:bg-white focus:border-washr-orange outline-none transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-washr-blue-deep mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. jane@example.com"
              className="w-full rounded-2xl border border-washr-gray-mid bg-slate-50 px-4 py-3 text-sm text-washr-blue-deep placeholder:text-washr-text-muted focus:bg-white focus:border-washr-orange outline-none transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="topic" className="block text-sm font-semibold text-washr-blue-deep mb-2">
            Inquiry Topic
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-2xl border border-washr-gray-mid bg-slate-50 px-4 py-3 text-sm text-washr-blue-deep outline-none focus:bg-white focus:border-washr-orange transition-colors duration-200"
          >
            {TOPICS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-washr-blue-deep mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your request in detail..."
            className="w-full rounded-2xl border border-washr-gray-mid bg-slate-50 px-4 py-3 text-sm text-washr-blue-deep placeholder:text-washr-text-muted focus:bg-white focus:border-washr-orange outline-none transition-colors duration-200"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-washr-orange px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(242,140,40,0.32)] hover:bg-opacity-95 hover:shadow-[0_12px_28px_rgba(242,140,40,0.4)] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
