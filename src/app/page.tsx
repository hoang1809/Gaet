import { NewsCard } from "@/components/pages/home-page/NewsCard";
import HomepageSwiper from "@/components/pages/home-page/Swiper";
import { IcArrowRight } from "@/components/common/resources/icons/IcArrowRight";
import MembersSwiper from "@/components/pages/home-page/MembersSwiper";
import { IcCircleArrowLeft } from "@/components/common/resources/icons/IcCircleArrowLeft";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
          <button className="flex p-4 gap-4 items-center mt-8 font-semibold bg-white text-primary">
            <div>Chi tiết</div>
            <IcArrowRight />
          </button>
        </div>
      </div>

      <div className="container py-28 space-y-24">
        <div>
          <div className="flex justify-between items-end">
            <div>
              <div className="font-medium text-2xl">Tin tức nổi bật</div>
            </div>
            <p className="underline underline-offset-2 text-lg">Xem tất cả</p>
          </div>
          <div className="h-1 w-[120px] bg-primary"></div>
          <div className="grid grid-cols-2 w-full mt-6 gap-x-16 gap-y-5">
            <div className="flex flex-col col-span-2 lg:col-span-1 justify-end">
              <div className="font-medium text-2xl mb-4">
                Kinh doanh vật liệu nổ công nghiệp
              </div>
              <p className="text-lg text-[#888888]">1/11/2024</p>
              <button className="flex p-4 w-fit gap-4 items-center font-semibold mt-6 text-white bg-primary">
                <div>Chi tiết</div>
                <IcArrowRight />
              </button>
            </div>
            <div className="w-full col-span-2 lg:col-span-1 aspect-[688/400]">
              <HomepageSwiper />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f6f6f6]">
        <div className="py-28">
          <div className="container">
            <div>
              <div className="font-semibold text-[28px]">
                Lĩnh vực hoạt động
              </div>
              <div className="h-1 mt-2 w-40 bg-primary"></div>
            </div>
          </div>
          <div className="grid md:container mt-16 h-[100vh] md:h-[50vh] md:grid-cols-5">
            <Link
              href="business/defense-related-products-trading"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business1.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Thương mại quân sự
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/industrial-explosive-materials-trading"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business2.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Kinh doanh vật liệu nổ công nghiệp
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/foreign-relation-activities-in-defense-sector"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business3.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Hoạt động đối ngoại quốc phòng
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/import-export-and-trading-of-civilian-products"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business4.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                XNK và kinh doanh các mặt hàng kinh tế
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/other-activities"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business5.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Các lĩnh vực khác
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
          </div>
        </div>
      </div>

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
        <div className="flex gap-2 font-semibold cursor-pointer mt-2"><div>Xem chi tiết</div><IcArrowRight/></div>
        </div>
      </div>

      <div className="bg-[#f6f6f6]">
        <div className="py-28 container">
          <div className="flex justify-between items-end">
            <div>
              <div className="font-medium text-2xl">Tin tức - Sự kiện</div>
            </div>
            <p className="underline underline-offset-2 text-lg">Xem tất cả</p>
          </div>
          <div className="h-1 w-40 bg-primary"></div>
          <div className="flex gap-8 mt-8 pb-2 overflow-auto thin-scrollbar">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>

      <div className="py-28 container">
        <div className="flex justify-between items-end">
          <div>
            <div className="font-medium text-2xl">Thư viện video</div>
          </div>
          <p className="underline underline-offset-2 text-lg">Xem tất cả</p>
        </div>
        <div className="h-1 w-[120px] bg-primary"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mt-8">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/SDPcu3Bfqsc?si=hMCfxlJXu1ytOo2Y&modestbranding=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/SDPcu3Bfqsc?si=hMCfxlJXu1ytOo2Y&modestbranding=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/SDPcu3Bfqsc?si=hMCfxlJXu1ytOo2Y&modestbranding=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="bg-[#f6f6f6]">
        <div className="py-28 container flex flex-col items-center">
          <div className="font-semibold text-[28px]">Các đơn vị thành viên</div>
          <div className="h-1 w-40 bg-primary"></div>
          <MembersSwiper
            className="w-full mt-16"
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
            slides={[
              "/homepage/members/m1.png",
              "/homepage/members/m2.png",
              "/homepage/members/m3.png",
              "/homepage/members/m4.png",
              "/homepage/members/m5.png",
              "/homepage/members/m6.png",
              "/homepage/members/m7.png",
              "/homepage/members/m8.png",
              "/homepage/members/m9.png",
              "/homepage/members/m10.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
