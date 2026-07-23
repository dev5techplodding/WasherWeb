import CommonHeroSection from '@/components/CommonHeroSection';
import { APP_HERO_CONTENT } from '@/components/data';
import AppFeatures from '@/components/app/sections/AppFeatures';
import AppScreens from '@/components/app/sections/AppScreens';
import AppDownloadBanner from '@/components/procedure/AppDownloadBanner';

export const metadata = {
  title: 'Get the Spinny App | Spinny',
  description:
    'Book pickups, track drivers, and manage every order from the Spinny mobile app. Coming soon to iOS and Android.',
};

export default function AppPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={APP_HERO_CONTENT} />
      <AppFeatures />
      <AppScreens />
      <AppDownloadBanner />
    </main>
  );
}
