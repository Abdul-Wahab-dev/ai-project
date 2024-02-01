import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/(components)/layout/footer";
import Header from "@/app/(components)/layout/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Toolefy | Empowering Digital Excellence for Free – Simplified.",
    template: "%s | Toolefy",
  },
  description:
    "Unlock the Power of Digital Transformation with Our Online Tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
