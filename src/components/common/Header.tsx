"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IcGlobal } from "./resources/icons/IcGlobal";
import { IcSearch } from "./resources/icons/IcSearch";
import { HeaderMobile } from "./HeaderMobile";
import { usePathname } from "next/navigation";
import { NavigationMenuItems } from "./NavigationMenuItems";

const menuContent = [
  {
    label: "Trang chủ",
    href: "/",
    subContent: [
      {
        label: "Map",
        href: "/map",
      },
      {
        label: "2",
        href: "#",
      },
      {
        label: "3",
        href: "#",
      },
    ]
  },
  {
    label: "Giới thiệu",
    href: "#",
  },
  {
    label: "Lĩnh vực hoạt động",
    href: "#",
  },
  {
    label: "Tin tức",
    href: "#",
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
  const path = usePathname()
  return (
    <div className="bg-white w-full sticky top-0 h-20 z-10">
      <div className="container flex justify-between items-center h-full">
        <div className="md:hidden">
          <HeaderMobile />
        </div>
        <Link href="/">
          <Image alt="logo" src="/Logo.png" width={50} height={56} />
        </Link>
        <NavigationMenuItems />
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
