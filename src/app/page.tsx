import FeaturedCourses from "@/components/featuredCoureses";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Instructors from "@/components/instructors";
import MusicSchoolTestimonials from "@/components/testimonialCards";
import UpcomingWebinars from "@/components/upcomingWebinars";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
