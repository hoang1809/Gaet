import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tin tức | Gaet",
  description: "News | Tin tức",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto min-h-screen max-w-[1152px] mb-[100px] px-4">
      {children}
    </div>
  );
}
