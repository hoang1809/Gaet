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
          <Image alt="logo" src="/Logo.png" width={50} height={56} />
        </Link>
        <div className="hidden md:flex gap-x-8 text-lg">
          <Link className="hover:text-primary" href="#">Trang chủ</Link>
          <Link className="hover:text-primary" href="#">Giới thiệu</Link>
          <Link className="hover:text-primary" href="#">Lĩnh vực hoạt động</Link>
          <Link className="hover:text-primary" href="#">Tin tức</Link>
          <Link className="hover:text-primary" href="#">Pháo hoa</Link>
          <Link className="hover:text-primary" href="#">Thư viện</Link>
          <Link className="hover:text-primary" href="#">Liên hệ </Link>
          <Link className="hover:text-primary" href="#">Vietnam defence 2024</Link>
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
