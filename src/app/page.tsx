import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <EventsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
}
