import Preloader from '@/components/Preloader';
import CursorGlow from '@/components/CursorGlow';
import PageProgress from '@/components/PageProgress';
import HeroSection from '@/components/home/sections/HeroSection';
import Seemless from '@/components/home/sections/Seemless';
import MarqueeTicker from '@/components/MarqueeTicker';
import AboutSection from '@/components/home/sections/AboutSection';
import FrameScrollSection from '@/components/home/sections/FrameScrollSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import ScienceSection from '@/components/home/sections/ScienceSection';
import TestimonialsSection from '@/components/home/sections/TestimonialsSection';
import CTASection from '@/components/home/sections/CTASection';
import { HOME_MARQUEE_1, HOME_MARQUEE_2 } from '@/components/data';

export default function Home() {
  return (
    <>
      {/* ─── Custom Cursor + Page Progress (global) ─── */}
      <CursorGlow />
      <PageProgress />

      {/* ─── Preloader: Cursive path drawing + wiping upward reveal ─── */}
      <Preloader />

      {/* ─── Hero: Giant text split + interactive centered mockup ─── */}
      <HeroSection />

      {/* ─── Seemless: Tactile split-text and mouse parallax experience ─── */}
      <Seemless />

      {/* ─── Marquee Ticker 1: Orange horizontal sliding text ─── */}
      <MarqueeTicker
        items={HOME_MARQUEE_1}
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
        items={HOME_MARQUEE_2}
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
    </>
  );
}
