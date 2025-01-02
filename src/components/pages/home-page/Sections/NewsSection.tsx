"use client";
import { useNewsList } from "@/hooks/useNewsList";
import Link from "next/link";
import { NewsCard } from "../NewsCard";

const NewsSection = () => {
  const { data, isLoading, isError } = useNewsList();
  const news = data?.slice(0, 3);
  return (
    <div className="bg-[#f6f6f6]">
      <div id="tin-tuc" className="py-28 container">
        <div className="flex justify-between items-end">
          <div>
            <div className="font-medium text-2xl">Tin tức - Sự kiện</div>
          </div>
          <p className="underline underline-offset-2 text-lg">Xem tất cả</p>
        </div>
        <div className="h-1 mt-2 w-[120px] bg-primary"></div>
        <div className="flex gap-8 mt-8 pb-2 overflow-auto thin-scrollbar">
          {news?.map((news) => (
            <Link className="flex-1" href={`/tin-tuc/${news.documentId}`} key={news.id}>
              <NewsCard
                key={news.id}
                title={news.title}
                date={news.createdAt}
                tags={news.tags}
                thumbnail={news.thumbnail}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
