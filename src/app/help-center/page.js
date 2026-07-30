import HelpCenterHero from '@/components/help-center/sections/HelpCenterHero';
import { HELP_FAQ_ITEMS, FEEDBACK_TOPICS } from '@/components/data';
import FaqAccordion from '@/components/FaqAccordion';
import FeedbackSection from '@/components/FeedbackSection';
import PageCTA from '@/components/PageCTA';
import HelpStats from '@/components/help-center/sections/HelpStats';
import AppDownloadBanner from '@/components/process/AppDownloadBanner';

export const metadata = {
  title: 'Help Center | Spinny',
  description:
    'Find answers to common Spinny questions, send feedback, and get support for service or account issues.',
};

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <HelpCenterHero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <HelpStats />

        <section className="mt-16">
          <FaqAccordion items={HELP_FAQ_ITEMS} title="Answers to common questions" />
        </section>

        {/* <section className="mt-16">
          <FeedbackSection
            topics={FEEDBACK_TOPICS}
            description="Share a service issue, a feature idea, or a general note. The topic you pick helps us route your message faster."
          />
        </section> */}

        {/* <section className="mt-16">
          <PageCTA
            title="Still need help? Start with support and we’ll route it correctly."
            description="If the FAQ did not cover your question, send feedback or contact the support team directly. We’ll point you to the right next step."
            primary={{ label: 'Send feedback', url: '#feedback' }}
            secondary={{ label: 'Contact us', url: '/contact' }}
          />
        </section> */}

      </div>
      <AppDownloadBanner />


    </main>
  );
}