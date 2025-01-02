"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IcArrowRight } from "@/components/common/resources/icons/IcArrowRight";
import { IcCircleArrowLeft } from "@/components/common/resources/icons/IcCircleArrowLeft";
import { API_URL } from "@/constant/app";
import { News } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/utils";

type Props = {
  news: News[];
};

export default function NewsSwiper({ news }: Props) {
  const [currentNews, setCurrentNews] = useState(news[0]);
  console.log("news", news);

  useEffect(() => {
    news && setCurrentNews(news[0]);
  }, [news]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.realIndex;
    console.log("currentIndex", currentIndex);
    setCurrentNews(news[currentIndex]);
  };

  return (
    <div className="grid grid-cols-2 w-full mt-6 gap-x-16 gap-y-5">
      <div className="flex flex-col col-span-2 lg:col-span-1 justify-end">
        <div className="font-medium text-2xl mb-4">{currentNews?.title}</div>
        <p className="text-lg text-[#888888]">
          {dayjs(currentNews?.updatedAt).format("DD/MM/YYYY")}
        </p>
        <Link href={`/tin-tuc/${currentNews?.documentId}`}>
          <button className="flex p-4 w-fit gap-4 items-center font-semibold mt-6 text-white bg-primary text-lg">
            <div>Chi tiết</div>
            <IcArrowRight />
          </button>
        </Link>
      </div>
      <div className="w-full col-span-2 lg:col-span-1 aspect-[688/400]">
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}
          loop
          className="mySwiper h-full w-full relative"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {news.map((news) => (
            <SwiperSlide className="relative w-full h-full" key={news.id}>
              <Image fill src={getStrapiMedia(news?.thumbnail?.url ? news.thumbnail.url : '/')} alt="" />
            </SwiperSlide>
          ))}
          <div className="flex gap-x-4 absolute bottom-8 right-8 z-[1]">
            <button className="prev">
              <IcCircleArrowLeft className="text-primary" />
            </button>
            <button className="next">
              <IcCircleArrowLeft className="rotate-180 text-primary" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
