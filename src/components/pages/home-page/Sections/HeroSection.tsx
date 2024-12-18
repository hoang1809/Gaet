import { IcArrowRight } from "@/components/common/resources/icons/IcArrowRight";
import OutstandingNews from "../OutstandingNews";

const HeroSection = () => {
  return (
    <>
      <div className="container relative w-full text-white">
        <video
          className="w-full aspect-[1440/800] object-cover"
          src="/homepage/hero.mp4"
          autoPlay
          loop
          muted
        />
        <div className="hidden md:block absolute top-0 w-full max-w-[1440px] h-full bg-gradient-to-b from-[rgba(0,38,70,0)] via-[rgba(0,38,70,0.3)] to-[rgba(0,38,70,0.9)]"></div>

        <div className="relative md:absolute bg-black md:bg-transparent w-full lg:w-[90%] bottom-0 p-4 sm:p-12 md:pl-[72px] md:pb-[58px]">
          <div className="hidden sm:block text-[40px] md:text-[54px] md:font-bold">
            Triển lãm Quốc phòng quốc tế Việt Nam 2024
          </div>
          <div className="text-[40px] md:text-[54px] md:font-bold">
            Vietnam Defence 2024
          </div>
          <div className="text-xl md:text-2xl font-medium">
            Từ ngày 19/12 đến 22/12/2024 tại Sân bay Gia Lâm, Hà Nội, Việt Nam
          </div>
          <button className="flex p-4 gap-4 items-center mt-8 font-semibold bg-white text-primary text-lg">
            <div>Chi tiết</div>
            <IcArrowRight />
          </button>
        </div>
      </div>

      <OutstandingNews />
    </>
  );
};

export default HeroSection;
