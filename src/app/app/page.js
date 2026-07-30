import AppHero from '@/components/app/sections/AppHero';
import AppFeatures from '@/components/app/sections/AppFeatures';
import AppScreens from '@/components/app/sections/AppScreens';
import AppDownloadBanner from '@/components/process/AppDownloadBanner';

export const metadata = {
  title: 'Get the Spinny App | Spinny',
  description:
    'Book pickups, track drivers, and manage every order from the Spinny mobile app. Coming soon to iOS and Android.',
};

export default function AppPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <AppHero />
      <AppFeatures />
      <AppScreens />
      <AppDownloadBanner />
    </main>
  );
}
