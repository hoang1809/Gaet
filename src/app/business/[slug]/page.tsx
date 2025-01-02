"use client";
import DynamicZoneRenderer from "@/components/common/DynamicZoneRenderer";
import Skeleton from "@/components/pages/business/Skeleton";
import { useBusinessDetail } from "@/hooks/useBusinessDetail";
import { getStrapiMedia } from "@/lib/utils";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

dayjs.extend(customParseFormat);

const BusinessDetailPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params);
  const { data, isLoading, isError } = useBusinessDetail(slug);
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          {data?.cover && (
            <div className="w-full relative aspect-[1120/450]">
              <Image
                fill
                priority
                src={getStrapiMedia(data?.cover.url)}
                alt="image"
              />
            </div>
          )}
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

export default BusinessDetailPage;
