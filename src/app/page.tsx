import FeauterdCourses from "@/components/FeauterdCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeauterdCourses />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
