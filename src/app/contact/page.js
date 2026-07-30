import ScrollToTop from '@/components/ScrollToTop';
import ContactHero from '@/components/contact/sections/ContactHero';
import ContactForm from '@/components/contact/sections/ContactForm';
import ContactInfo from '@/components/contact/sections/ContactInfo';
import AppDownloadBanner from '@/components/process/AppDownloadBanner';

export const metadata = {
  title: 'Contact Us | Spinny',
  description:
    'Reach the right team without the usual back-and-forth. Send us a message or find our contact information.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <ScrollToTop />
      {/* <ContactHero /> */}
      <section className="relative w-full pt-10 pb-10 lg:pt-10 lg:pb-10 text-white overflow-hidden bg-[#0B1726]">

      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* <ContactForm /> */}
        <ContactInfo />

      </div>
      <AppDownloadBanner />
    </main>
  );
}