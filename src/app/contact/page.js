import CommonHeroSection from '@/components/CommonHeroSection';
import ContactForm from '@/components/contact/sections/ContactForm';
import ContactInfo from '@/components/contact/sections/ContactInfo';
import { CONTACT_HERO_CONTENT } from '@/components/data';

export const metadata = {
  title: 'Contact Us | Spinny',
  description:
    'Reach the right team without the usual back-and-forth. Send us a message or find our contact information.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={CONTACT_HERO_CONTENT} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
}