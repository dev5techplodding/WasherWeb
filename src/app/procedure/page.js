import ProcedureHero from '@/components/procedure/ProcedureHero';
import JourneyIntroCards from '@/components/procedure/JourneyIntroCards';
import CustomerJourneySection from '@/components/procedure/CustomerJourneySection';
import VendorJourneySection from '@/components/procedure/VendorJourneySection';
import DriverJourneySection from '@/components/procedure/DriverJourneySection';
import ComparisonSection from '@/components/procedure/ComparisonSection';
import AppDownloadBanner from '@/components/procedure/AppDownloadBanner';
import ProcedureFAQ from '@/components/procedure/ProcedureFAQ';
import ProcedureCTA from '@/components/procedure/ProcedureCTA';

export const metadata = {
  title: 'Registration Procedure | Spinny Ecosystem',
  description:
    'Experience the cinematic registration journey for customers, laundry vendors, and delivery partners joining the Spinny laundry ecosystem.',
  keywords: 'Spinny, laundry registration, customer onboarding, vendor portal, driver route, garment care',
  openGraph: {
    title: 'Registration Procedure | Spinny Ecosystem',
    description:
      'Discover how customers, vendors, and delivery professionals join Canada’s premium laundry ecosystem.',
    type: 'website',
  },
};

export default function ProcedurePage() {
  return (
    <main className="min-h-screen bg-white text-[#0E3A66] overflow-x-hidden selection:bg-[#F7941D] selection:text-white">
      {/* 1. HERO SECTION (100vh) */}
      <ProcedureHero />

      {/* 2. INTRODUCTION SECTION (3 Enormous Floating Cards) */}
      <JourneyIntroCards />

      {/* 3. CUSTOMER JOURNEY SECTION (6 Animated Steps) */}
      <CustomerJourneySection />

      {/* 4. VENDOR JOURNEY SECTION (SaaS Dashboard & Factory Workflow) */}
      <VendorJourneySection />

      {/* 5. DRIVER JOURNEY SECTION (GPS Route & Earnings) */}
      <DriverJourneySection />

      {/* 6. COMPARISON SECTION (Horizontal Spec Table) */}
      <ComparisonSection />

      {/* 7. APP DOWNLOAD BANNER */}
      <AppDownloadBanner />

      {/* 8. FREQUENTLY ASKED QUESTIONS (Glass Accordion) */}
      <ProcedureFAQ />

      {/* 9. CALL TO ACTION (Final CTA) */}
      <ProcedureCTA />
    </main>
  );
}