import Hero from "@/components/Hero";
import KnowMe from "@/components/KnowMe";
import ServicesSection from "@/components/ServiceSection";
import ReviewCarousel from "@/components/Reviews";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function Home() {
  return (
    <>
      <DisclaimerModal />
      <main className="flex flex-col bg-white">
        <Hero />
        <KnowMe />
        <ServicesSection />
        <ReviewCarousel />
      </main>
    </>
  );
}