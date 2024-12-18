"use client";
import Image from "next/image";
import Link from "next/link";
import { HeaderMobile } from "./HeaderMobile";
import { IcGlobal } from "./resources/icons/IcGlobal";
import { IcSearch } from "./resources/icons/IcSearch";

const menuContent = [
  {
    label: "Trang chủ",
    href: "/",
    subContent: [
      {
        label: "Bản đồ",
        href: "/gioi-thieu",
      },
    ],
  },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    label: "Lĩnh vực hoạt động",
    href: "/#linh-vuc-hoat-dong",
  },
  {
    label: "Tin tức",
    href: "#tin-tuc",
  },
  {
    label: "Pháo hoa",
    href: "#",
  },
  {
    label: "Thư viện",
    href: "#",
  },
  {
    label: "Liên hệ",
    href: "#",
  },
  {
    label: "Vietnam defence 2024",
    href: "#",
  },
];

export const Header = () => {
  // const path = usePathname();
  return (
    <div className="bg-white w-full sticky top-0 h-20 z-10">
      <div className="container flex justify-between items-center h-full">
        <div className="md:hidden">
          <HeaderMobile />
        </div>
        <Link href="/">
          <Image alt="logo" src="/Logo.png" width={50} height={56} />
        </Link>
        {/* <NavigationMenuItems /> */}
        <div className="hidden md:flex gap-x-8 text-base">
          {menuContent.map((item, index) => (
            <Link
              key={index}
              className="text-lg hover:text-primary font-normal"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
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
