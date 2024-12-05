import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const lato = localFont({
  src: [
    {
      path: './fonts/Lato-Thin.ttf',
      weight: '100'
    },
    {
      path: './fonts/Lato-Light.ttf',
      weight: '300'
    },
    {
      path: './fonts/Lato-Regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/Lato-Medium.ttf',
      weight: '500'
    },
    {
      path: './fonts/Lato-Semibold.ttf',
      weight: '600'
    },
    {
      path: './fonts/Lato-Bold.ttf',
      weight: '700'
    },
    {
      path: './fonts/Lato-Heavy.ttf',
      weight: '800'
    },
  ],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: "Gaet",
  description: "Gaet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
