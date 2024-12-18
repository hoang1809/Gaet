import BannerSection from "@/components/pages/home-page/Sections/BannerSection";
import BusinessSection from "@/components/pages/home-page/Sections/BusinessSection";
import HeroSection from "@/components/pages/home-page/Sections/HeroSection";
import MemberSection from "@/components/pages/home-page/Sections/MemberSection";
import NewsSection from "@/components/pages/home-page/Sections/NewsSection";
import VideoSection from "@/components/pages/home-page/Sections/VideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <BusinessSection />

      <BannerSection />

      <NewsSection />

      <VideoSection />

      <MemberSection />
    </div>
  );
}
