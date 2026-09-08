import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ClientMarquee from '../components/home/ClientMarquee';
import ServicesGrid from '../components/home/ServicesGrid';
import HomeWhatsAppSection from '../components/home/HomeWhatsAppSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CoreValues from '../components/home/CoreValues';
import SolutionsTabs from '../components/home/SolutionsTabs';
import AchievementCounters from '../components/home/AchievementCounters';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import TickerPills from '../components/home/TickerPills';
import PricingSection from '../components/home/PricingSection';
import LatestBlogs from '../components/home/LatestBlogs';

export default function HomePage() {
  return (
    <div className="bg-[#100317]">
      <HeroSection />
      <ClientMarquee />
      <ServicesGrid />
      <HomeWhatsAppSection />
      <WhyChooseUs />
      <CoreValues />
      <SolutionsTabs />
      <AchievementCounters />
      <TestimonialsSlider />
      <TickerPills />
      <PricingSection />
      <LatestBlogs />
    </div>
  );
}
