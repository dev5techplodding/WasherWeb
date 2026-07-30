import AppHero from '@/components/app/sections/AppHero';
import AppFeatures from '@/components/app/sections/AppFeatures';
import AppScreens from '@/components/app/sections/AppScreens';

export const metadata = {
  title: 'Get the App | Spinny Mobile',
  description:
    'Download the Spinny mobile app for iOS and Android. Book pickups, track laundry status in real-time, and manage wardrobe care.',
};

export default function AppPage() {
  return (
    <main className="min-h-screen bg-white text-[#0E3A66] selection:bg-[#F7941D] selection:text-white">
      <AppHero />
      <AppFeatures />
      <AppScreens />
    </main>
  );
}
