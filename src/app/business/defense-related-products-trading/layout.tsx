import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Thương mại quân sự | Gaet",
  description:
    "Defense related products trading | Thương mại quân sự",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
