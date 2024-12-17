import { IcArrowRight } from "@/components/common/resources/icons/IcArrowRight";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="py-28 container grid grid-cols-1 md:grid-cols-3 gap-8">
      <Image
        className="w-full"
        src="/homepage/banner1.png"
        alt="banner"
        width={400}
        height={400}
      />
      <Image
        className="w-full"
        src="/homepage/banner2.png"
        alt="banner"
        width={400}
        height={400}
      />
      <div className="bg-[url('/homepage/banner3.png')] w-full bg-cover bg-center px-8 pt-[43px] text-lg text-white">
        <div>GAET cung cấp các sản phẩm pháo hoa không gây tiếng nổ.</div>
        <div className="flex gap-2 font-semibold cursor-pointer mt-2">
          <div>Xem chi tiết</div>
          <IcArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
