import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoSection from "@/components/sections/VideoSection";
import ImpactSection from "@/components/sections/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <VideoSection />
        <ImpactSection />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;