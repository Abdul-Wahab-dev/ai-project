import MoreTools from "@/app/(components)/moreTools";

import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Split PDF",
  description: "Precision at Your Fingertips: Split PDFs with Ease",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></Script>
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Split PDF</h1>
            <p className="text-black text-center">
              Precision at Your Fingertips: Split PDFs with Ease
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <MoreTools url="split-pdf" />
      </div>
    </div>
  );
}

export default Layout;
