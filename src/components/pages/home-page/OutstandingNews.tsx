"use client";
import { IcArrowRight } from "@/components/common/resources/icons/IcArrowRight";
import { useState } from "react";
import NewsSwiper from "./Swiper";
import { useNewsList } from "@/hooks/useNewsList";
import { News } from "@/types";

const OutstandingNews = () => {
  const { data } = useNewsList();
  return (
    <div className="container py-28 space-y-24">
      <div>
        <div className="flex justify-between items-end">
          <div>
            <div className="font-medium text-2xl">Tin tức nổi bật</div>
          </div>
          <p className="underline underline-offset-2 text-lg">Xem tất cả</p>
        </div>
        <div className="h-1 w-[120px] mt-2 bg-primary"></div>
        <NewsSwiper news={data}/>
      </div>
    </div>
  );
};

export default OutstandingNews;