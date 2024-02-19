import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/app/(components)/layout/footer";
import Header from "@/app/(components)/layout/header";
import GoogleAnalytics from "@/app/GoogleAnalytics";

const raleway = Raleway({ subsets: ["latin"] });

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
      <body className={`${raleway.className} bg-white`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
