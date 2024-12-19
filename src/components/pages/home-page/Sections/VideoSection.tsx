"use client";
import { useVideoGallery } from "@/hooks/useVideoGallery";
import React from "react";

const VideoSection = () => {
  const { data, isLoading, isError } = useVideoGallery();
  const videoList = data.slice(0, 3);
  return (
    <div className="py-28 container">
      <div className="flex justify-between items-end">
        <div>
          <div className="font-medium text-2xl">Thư viện video</div>
        </div>
        <p className="underline underline-offset-2 text-lg">Xem tất cả</p>
      </div>
      <div className="h-1 w-[120px] mt-2 bg-primary"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mt-8">
        {videoList.map((video) => (
          <video
            key={video.id}
            className="w-full aspect-video object-cover"
            src={video.video.url}
            controls
          />
        ))}
        {/* <iframe
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
        ></iframe> */}
      </div>
    </div>
  );
};

export default VideoSection;
