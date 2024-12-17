"use client";
import { use } from "react";
import { API_URL } from "@/constant/app";
import { useBusinessDetail } from "@/hooks/useBusinessDetail";
import BusinessContentRenderer from "@/components/pages/business/DynamicZoneRender";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Link from "next/link";

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
      {!isLoading && (
        <div>
          {data?.Cover_image && (
            <img src={`${API_URL}${data?.Cover_image.url}`} alt="image" />
          )}
          <Link href="/">
            <button className="mt-6 mb-8 text-[18px] font-normal underline underline-offset-[5px]">
              Trở lại
            </button>
          </Link>
          <div className="max-w-[920px] mx-auto">
            <div className="mb-12">
              <div className="text-[32px] font-bold">{data?.Title}</div>
              <div className="text-[#888] text-[18px] mt-4">
                {dayjs(data?.updatedAt).format("DD/MM/YYYY")}
              </div>
            </div>
            <div>
              {isLoading === false && data && (
                <BusinessContentRenderer business={data} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessDetailPage;
