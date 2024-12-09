import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kinh doanh vật liệu nổ công nghiệp | Gaet",
  description:
    "Industrial explosive materials trading | Kinh doanh vật liệu nổ công nghiệp",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
