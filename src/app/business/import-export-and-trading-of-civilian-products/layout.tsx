import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "XNK và kinh doanh các mặt hàng kinh tế | Gaet",
  description:
    "Import, export and trading of civilian products | Xuất nhập khẩu và kinh doanh các mặt hàng kinh tế",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
