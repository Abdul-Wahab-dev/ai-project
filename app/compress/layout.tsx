import { Metadata } from "next";
import MoreTools from "@/app/(components)/moreTools";

export const metadata: Metadata = {
  title: "Compress Image",
  description: "Optimize Your Visuals: Effortless Image Compression",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-winter-wizard">
      {/* Compress Section */}
      <div className="h-full">
        <div className="custom_container mx-auto h-full py-10 px-3">
          <div className="w-full bg-white shadow-xl rounded-3xl py-10 px-3 flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">Compress Image</h1>
            <p className="text-black text-center">
              Optimize Your Visuals: Effortless Image Compression
            </p>
            <div className=" py-10 px-3 overflow-hidden">{children}</div>
          </div>
        </div>
        <MoreTools url="compress" />
      </div>
    </div>
  );
}

export default Layout;
