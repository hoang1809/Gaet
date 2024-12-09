import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Business | Gaet",
  description: "Business",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-[1152px] mb-[100px] px-4">{children}</div>
  );
}
