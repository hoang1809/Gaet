import Image from "next/image";
import Link from "next/link";
import React from "react";

const siteMap = [
  {
    category: "Giới thiệu",
    item: [
      { title: "Lịch sử phát triển", link: "#" },
      { title: "Các đơn vị thành viên", link: "#" },
      { title: "Tầm nhìn chiến lược", link: "#" },
      { title: "GAET - Profile", link: "#" },
    ],
  },
  {
    category: "Lĩnh vực hoạt động",
    item: [
      { title: "Thương mại quân sự", link: "#" },
      { title: "Kinh doanh vật liệu nổ công nghiệp", link: "#" },
      { title: "Hoạt động đối ngoại quốc phòng", link: "#" },
      { title: "Xuất khẩu và kinh doanh các mặt hàng kinh tế", link: "#" },
      { title: "Lĩnh vực hoạt động khác", link: "#" },
    ],
  },
  {
    category: "Tin tức",
    item: [
      { title: "Tin tức nổi bật", link: "#" },
      { title: "Tin hoạt động", link: "#" },
      { title: "Tin xúc tiến quan hệ", link: "#" },
      { title: "Tin tức nội bộ", link: "#" },
    ],
  },
  {
    category: "Thư viện",
    item: [
      { title: "Thư viện ảnh", link: "#" },
      { title: "Thư viện video", link: "#" },
      { title: "Tài liệu khác", link: "#" },
    ],
  },
  {
    category: "Vietnam Defence 2024",
    item: [
      { title: "Tổng quan", link: "#" },
      { title: "Giới thiệu về triển lãm", link: "#" },
      { title: "Vai trò GAET", link: "#" },
      { title: "Tin tức liên quan", link: "#" },
      { title: "Đăng ký gian hàng", link: "#" },
      { title: "Brochure và các biểu mẫu", link: "#" },
      { title: "Hỏi đáp", link: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="container py-24 grid grid-cols-2 md:grid-cols-5 gap-16">
          {siteMap.map((category) => (
            <div key={category.category}>
              <div className="mb-6 text-2xl font-medium">
                {category.category}
              </div>
              <div className="space-y-4 flex flex-col">
                {category.item.map((item) => (
                  <Link href={item.link} key={item.title}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#E7E7E7]">
        <div className="container py-12 flex gap-y-8 justify-between flex-wrap">
          <div>
            <Link href="/">
              <Image alt="logo" src="/Logo.svg" width={50} height={56} />
            </Link>
            <div className="mb-4">Tổng cục Công nghiệp Quốc phòng</div>
            <div>Tổng Công ty Kinh tế Kỹ thuật Công nghiệp Quốc (GAET)</div>
          </div>

          <div className="space-y-4">
            <div className="text-[#5D5D5D]">Địa chỉ</div>
            <div>102 Kim Mã Thượng, Ba Đình, Hà Nội, Việt Nam</div>
          </div>

          <div className="space-y-4">
            <div className="text-[#5D5D5D]">Điện thoại</div>
            <div>+84 243 832 5377</div>
            <div>+84 243 832 7710</div>
          </div>

          <div className="space-y-4">
            <div className="text-[#5D5D5D]">Email</div>
            <div>contact@gaet.com.vn</div>
          </div>
        </div>
      </div>
    </div>
  );
};
