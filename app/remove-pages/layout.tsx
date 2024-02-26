import MoreTools from "@/app/(components)/moreTools";

import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Remove Pages",
  description: "Unify Your Documents: Merge PDFs with Ease.",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></Script>
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Remove Pages</h1>
            <p className="text-black text-center">
              Refine Your Content: Easily Remove Pages from PDF
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <MoreTools url="remove-pages" />
      </div>
    </div>
  );
}

export default Layout;
