import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lĩnh vực hoạt động | Gaet",
  description: "Business | Lĩnh vực hoạt động",
};

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto  min-h-screen max-w-[1152px] mb-[100px] px-4">
      {children}
    </div>
  );
}
