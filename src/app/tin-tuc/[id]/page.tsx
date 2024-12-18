"use client";
import DynamicZoneRenderer from "@/components/common/DynamicZoneRenderer";
import Skeleton from "@/components/pages/business/Skeleton";
import { useNewsDetail } from "@/hooks/useNewsDetail";
import dayjs from "dayjs";
import Link from "next/link";
import { use } from "react";

const NewsDetailPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);
  const { data, isLoading, isError } = useNewsDetail(id);
  console.log("data", data);
  console.log("content", data?.content);
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <Link href="/">
            <button className="mt-6 mb-8 text-[18px] font-normal underline underline-offset-[5px]">
              Trở lại
            </button>
          </Link>
          <div className="max-w-[920px] mx-auto">
            <div className="mb-12">
              <div className="text-[32px] font-bold">{data?.title}</div>
              <div className="text-[#888] text-[18px] mt-4">
                {dayjs(data?.updatedAt).format("DD/MM/YYYY")}
              </div>
            </div>
            <div>
              {isLoading === false && data && (
                <DynamicZoneRenderer content={data.content} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsDetailPage;
