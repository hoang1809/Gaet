import { getStrapiMedia } from "@/lib/utils";
import { News, Tag } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  tags?: Tag[];
  thumbnail: News["thumbnail"];
};

export const NewsCard = ({ title, date, tags, thumbnail }: Props) => {
  return (
    <div className="space-y-4 text-lg min-w-80 md:min-w-[380px]">
      <div className="relative w-full aspect-[458/284]">
      <Image
        fill
        alt="image"
        src={getStrapiMedia(thumbnail?.url ? thumbnail.url : "/")}
      />
      </div>
      <div>{tags?.map((tag) => tag.name).join("; ")}</div>
      <div className="text-[#888888]">{dayjs(date).format("DD/MM/YYYY")}</div>
      <div className="text-2xl font-medium">{title}</div>
    </div>
  );
};
