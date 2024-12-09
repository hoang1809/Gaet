import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lĩnh vực hoạt động khác | Gaet",
  description:
    "Other activities | Lĩnh vực hoạt động khác",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
