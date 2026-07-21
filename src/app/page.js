import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import CursorGlow from '@/components/CursorGlow';
import PageProgress from '@/components/PageProgress';
import HeroSection from '@/components/HeroSection';
import Seemless from '@/components/Seemless';
import MarqueeTicker from '@/components/MarqueeTicker';
import AboutSection from '@/components/AboutSection';
import FrameScrollSection from '@/components/FrameScrollSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import ScienceSection from '@/components/ScienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* ─── Custom Cursor + Page Progress (global) ─── */}
      <CursorGlow />
      <PageProgress />

      {/* ─── Preloader: Cursive path drawing + wiping upward reveal ─── */}
      <Preloader />

      {/* ─── Navbar: Fixed glass header ─── */}
      <Navbar />

      {/* ─── Hero: Giant text split + interactive centered mockup ─── */}
      <HeroSection />

      {/* ─── Seemless: Tactile split-text and mouse parallax experience ─── */}
      <Seemless />

      {/* ─── Marquee Ticker 1: Orange horizontal sliding text ─── */}
      <MarqueeTicker
        items={[
          'Seamless Garment Care',
          'Reclaim Your Time',
          'Vetted Commercial Partners',
          'Free Pickups',
          '100% Satisfaction Guaranteed',
        ]}
        bg="var(--washr-orange)"
        textColor="#FFFFFF"
      />

      {/* ─── About: Features polaroid tilt cards ─── */}
      <AboutSection />

      {/* ─── Cinematic Scroll: CDN-based GSAP scroll sequence ─── */}
      <FrameScrollSection />

      {/* ─── Services Carousel: Horizontal click slider with scale effect ─── */}
      <ServicesCarousel />

      {/* ─── Marquee Ticker 2: Deep blue horizontal sliding text reversed ─── */}
      <MarqueeTicker
        items={[
          'Eco-Conscious Cleaning',
          'Hypoallergenic Detergents',
          'Custom Fabric Preferences',
          'Certified Commercial Facilities',
          '24h Speed Turnaround',
        ]}
        bg="var(--washr-blue-deep)"
        textColor="var(--washr-orange)"
        reverse={true}
      />

      {/* ─── Science Section: Detailed precision algorithms + polaroids ─── */}
      <ScienceSection />

      {/* ─── Testimonials: Social Proof masonry grid ─── */}
      <TestimonialsSection />

      {/* ─── CTA: Conversion wavy section with signup forms ─── */}
      <CTASection />

      {/* ─── Footer: Wavy top curve layout links ─── */}
      <Footer />
    </>
  );
}
