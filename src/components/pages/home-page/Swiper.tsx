"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useId } from "react";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import { IcCircleArrowLeft } from "@/components/common/resources/icons/IcCircleArrowLeft";

// type Props = {
//   slides: { src: string; title: string }[];
//   slidesPerView?: number;
//   slideClassName?: string;
//   breakpoints?: {
//     [width: number]: SwiperOptions;
//     [ratio: string]: SwiperOptions;
//   };
//   className?: string;
// };

export default function HomepageSwiper() {
  const id = useId()?.replace(/\W/g, "");
  return (
    <>
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation]}
        loop
        className="mySwiper h-full w-full relative"
      >
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src="/homepage/homepageImage2.jpg"
            alt="img1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src="/homepage/homepageImage1.jpg"
            alt="img2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src="/homepage/homepageImage3.jpg"
            alt="img3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src="/homepage/homepageImage4.jpg"
            alt="img4"
          />
        </SwiperSlide>
        <div className="flex gap-x-4 absolute bottom-8 right-8 z-[1]">
          <button className="prev">
            <IcCircleArrowLeft className="text-primary" />
          </button>
          <button className="next">
            <IcCircleArrowLeft className="rotate-180 text-primary" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
