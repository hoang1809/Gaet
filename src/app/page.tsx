import { IcArrowRight } from "@/components/common/resources/icons/IcArrowRight";
import BannerSection from "@/components/pages/home-page/Sections/BannerSection";
import BusinessSection from "@/components/pages/home-page/Sections/BusinessSection";
import MemberSection from "@/components/pages/home-page/Sections/MemberSection";
import MembersSwiper from "@/components/pages/home-page/MembersSwiper";
import NewsSection from "@/components/pages/home-page/Sections/NewsSection";
import HomepageSwiper from "@/components/pages/home-page/Swiper";
import VideoSection from "@/components/pages/home-page/Sections/VideoSection";
import HeroSection from "@/components/pages/home-page/Sections/HeroSection";

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
