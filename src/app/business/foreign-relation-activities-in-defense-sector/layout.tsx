import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hoạt động đối ngoại quốc phòng | Gaet",
  description:
    "foreign-relation-activities-in-defense sector | Hoạt động đối ngoại quốc phòng",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
