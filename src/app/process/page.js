import ProcedureHero from '@/components/process/ProcedureHero';
import JourneyIntroCards from '@/components/process/JourneyIntroCards';
import SimpleFlowSection from '@/components/process/SimpleFlowSection';
import CustomerJourneySection from '@/components/process/CustomerJourneySection';
import VendorJourneySection from '@/components/process/VendorJourneySection';
import DriverJourneySection from '@/components/process/DriverJourneySection';
import ComparisonSection from '@/components/process/ComparisonSection';
import AppDownloadBanner from '@/components/process/AppDownloadBanner';
import ProcedureFAQ from '@/components/process/ProcedureFAQ';
import ProcedureCTA from '@/components/process/ProcedureCTA';

export const metadata = {
  title: 'Registration process | Spinny Ecosystem',
  description:
    'Experience the cinematic registration journey for customers, care vendors, and delivery partners joining the Spinny ecosystem.',
  keywords: 'Spinny, vendor registration, customer onboarding, vendor portal, driver route, garment care',
  openGraph: {
    title: 'Registration process | Spinny Ecosystem',
    description:
      'Discover how customers, vendors, and delivery professionals join Canada’s premium care ecosystem.',
    type: 'website',
  },
};

export default function processPage() {
  return (
    <main className="min-h-screen bg-white text-[#0E3A66] selection:bg-[#F7941D] selection:text-white">
      {/* 1. HERO SECTION */}
      <ProcedureHero />

      {/* 2. INTRODUCTION SECTION (3 Enormous Floating Cards) */}
      <JourneyIntroCards />

      {/* 2.5 VISUAL FLOW DIAGRAM (Simple 4-Step Process) */}
      <SimpleFlowSection />

      {/* 3. CUSTOMER JOURNEY SECTION (6 Animated Steps) */}
      <CustomerJourneySection />

      {/* 4. VENDOR JOURNEY SECTION (SaaS Dashboard & Factory Workflow) */}
      <VendorJourneySection />

      {/* 5. DRIVER JOURNEY SECTION (GPS Route & Earnings) */}
      <DriverJourneySection />

      {/* 6. COMPARISON SECTION (Horizontal Spec Table) */}
      <ComparisonSection />

      {/* 7. APP DOWNLOAD BANNER */}

      {/* 8. FREQUENTLY ASKED QUESTIONS (Glass Accordion) */}
      <ProcedureFAQ />

      {/* 9. CALL TO ACTION (Final CTA) */}
      {/* <ProcedureCTA /> */}
      <AppDownloadBanner />
    </main>
  );
}