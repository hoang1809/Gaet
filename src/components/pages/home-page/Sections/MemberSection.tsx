import React from "react";
import MembersSwiper from "../MembersSwiper";

const MemberSection = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="py-28 container flex flex-col items-center">
        <div className="font-semibold text-[28px]">Các đơn vị thành viên</div>
        <div className="h-1 w-[120px] mt-2 bg-primary"></div>
        <MembersSwiper
          className="w-full mt-16"
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          slides={[
            "/homepage/members/m1.png",
            "/homepage/members/m2.png",
            "/homepage/members/m3.png",
            "/homepage/members/m4.png",
            "/homepage/members/m5.png",
            "/homepage/members/m6.png",
            "/homepage/members/m7.png",
            "/homepage/members/m8.png",
            "/homepage/members/m9.png",
            "/homepage/members/m10.png",
          ]}
        />
      </div>
    </div>
  );
};

export default MemberSection;
