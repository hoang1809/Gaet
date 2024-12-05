import React from "react";

export const NewsCard = () => {
  return (
    <div className="space-y-4 min-w-80 md:min-w-[380px]">
      <img className="aspect-[458/284] bg-blue-400" src="/homepage/homepageImage2.jpg"></img>
      <div>Tin tức nổi bật; Tin tức nội bộ</div>
      <div className="text-[#888888]">04/11/2024</div>
      <div className="text-2xl font-medium">
        Tổng công ty Kinh tế Kỹ thuật CNQP (GAET) bàn giao nhiệm vụ Chủ tịch, Bí
        thư Đảng ủy
      </div>
    </div>
  );
};
