import { NavLinks } from "@/contants";
import Image from "next/image";
import Link from "next/link";
export const MoreTools = ({ url }: { url: string }) => {
  return (
    <div className="bg-white  p-12">
      <div className="custom_container mx-auto">
        <div>
          <h2 className="pb-10 text-xl text-center text-gray-800 font-semibold">
            Explore More Tools
          </h2>
        </div>
        <div className="bg-white grid items-center sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 text-gray-800 w-full lg:w-[80%] mx-auto">
          {NavLinks.filter((el) => !el.link.includes(url.toLowerCase())).map(
            (el) => (
              <div
                className="flex transition-all gap-2 items-center justify-start"
                key={el.id}
              >
                <Link
                  href={el.link}
                  key={el.id}
                  className=" flex items-center transition-all justify-start gap-3 pl-3 pr-7  py-2 rounded hover:bg-slate-50"
                >
                  <div className="w-[40px] h-[40px] flex items-center justify-center shadow-lg border rounded-md border-slate-50 bg-white">
                    <Image src={el.src} width={22} height={14} alt={el.alt} />
                  </div>
                  <div className="text-sm">{el.name}</div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreTools;
