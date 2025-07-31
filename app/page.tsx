import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import NetworkStats from "@/components/NetworkStats";
import GrowthSection from "@/components/GrowthSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import NetworkVisualization from "@/components/NetworkVisualization";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <ServicesSection />
      <NetworkStats />
      <GrowthSection />
      <TestimonialsSection />
      <ProcessSection />
      <NetworkVisualization />
      <FinalCTASection />
    </main>
  );
}
