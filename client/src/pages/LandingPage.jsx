import LandingNavbar from "../components/layout/LandingNavbar";
import HeroSection from "../components/layout/HeroSection";
import FeaturesSection from "../components/layout/FeaturesSection";
import TimelineSection from "../components/layout/TimelineSection";
import TestimonialsSection from "../components/layout/TestimonialsSection";
import FaqSection from "../components/layout/FaqSection";
import CtaSection from "../components/layout/CtaSection";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/common/PageTransition";

export default function LandingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-surface-subtle dark:bg-surface-dark overflow-x-hidden">
        <LandingNavbar />
        <HeroSection />
        <FeaturesSection />
        <TimelineSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </PageTransition>
  );
}
