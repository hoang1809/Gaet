import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IcGlobal } from "./resources/icons/IcGlobal";
import { IcSearch } from "./resources/icons/IcSearch";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
    <div className="bg-white w-full sticky top-0 h-20 z-10">
      <div className="container flex justify-between items-center h-full">
        <div className="md:hidden">
        <HeaderMobile />
        </div>
        <Link href="/">
          <Image alt="logo" src="/Logo.svg" width={50} height={56} />
        </Link>
        <div className="hidden md:flex gap-x-8 text-base">
          <Link href="#">Trang chủ</Link>
          <Link href="#">Giới thiệu</Link>
          <Link href="#">Lĩnh vực hoạt động</Link>
          <Link href="#">Tin tức</Link>
          <Link href="#">Pháo hoa</Link>
          <Link href="#">Thư viện</Link>
          <Link href="#">Liên hệ </Link>
          <Link href="#">Vietnam defence 2024</Link>
        </div>
        <div className="flex gap-x-8">
          <button className="hidden md:block">
            <IcGlobal />
          </button>
          <button>
            <IcSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
