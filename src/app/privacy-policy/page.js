import CommonHeroSection from '@/components/CommonHeroSection';
import { PRIVACY_HERO_CONTENT } from '@/components/data';
import PrivacyGrid from '@/components/privacy-policy/sections/PrivacyGrid';
import PrivacyContact from '@/components/privacy-policy/sections/PrivacyContact';

export const metadata = {
  title: 'Privacy Policy | Spinny',
  description:
    'Read Spinny’s plain-language privacy policy covering collection, use, sharing, and your choices.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={PRIVACY_HERO_CONTENT} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <PrivacyGrid />
        <PrivacyContact />
      </div>
    </main>
  );
}