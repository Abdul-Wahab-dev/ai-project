import MoreTools from "@/app/(components)/moreTools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to PDF",
  description: "Instantly Convert Images to PDF. A Quick and Free Solution",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Image to PDF</h1>
            <p className="text-black text-center">
              Instantly Convert Images to PDF. A Quick and Free Solution
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <MoreTools url="image-to-pdf" />
      </div>
    </div>
  );
}

export default Layout;
