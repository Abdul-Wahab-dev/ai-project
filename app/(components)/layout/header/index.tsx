"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => {
    hideBodyOverflow("hidden");
    setIsSubMenuOpen(true);
    setTimeout(() => {
      setVisible(true);
    }, 1);
  };

  const handleMouseLeave = () => {
    hideBodyOverflow("auto");
    setIsSubMenuOpen(false);
    setTimeout(() => {
      setVisible(false);
    }, 1);
  };
  const handleOverlayClick = (event) => {
    console.log(event.target);
    if (event.target.id === "menu-bar") {
      hideBodyOverflow("auto");
      setIsSubMenuOpen(false);
    }
    setTimeout(() => {
      setVisible(false);
    }, 1);
  };

  const hideBodyOverflow = (value: string) => {
    if (document.getElementsByTagName("body")[0])
      document.getElementsByTagName("body")[0].style.overflow = value;
  };
  return (
    <div className="relative inline-block text-left w-full h-full">
      <div className="bg-winter-wizard h-[60px] text-gray-900 focus:outline-none z-50">
        <div className="flex items-center justify-between mx-auto h-full w-full custom_container">
          <div>Logo</div>
          <div className="h-full">
            <div
              className="cursor-pointer h-full  flex items-center justify-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Tools
            </div>

            <div
              id={"menu-bar"}
              aria-hidden="true"
              onClick={handleOverlayClick}
              className={`fixed top-[60px] left-0 right-0 ${
                isSubMenuOpen ? "bg-opacity-50" : "opacity-0"
              } transition-all w-full h-full bg-black z-50`}
            >
              <div className={`relative bg-white z-50 transition-all`}>
                <div className="bg-white p-10 grid items-center md:grid-cols-3 justify-center gap-5 w-full lg:w-[80%] mx-auto">
                  {[
                    {
                      id: 1,
                      name: "Compress Image",
                      src: "/assests/index/icons/compress.png",
                      link: "/compress",
                      alt: "menu-compress",
                    },
                    {
                      id: 2,
                      name: "Image Format",
                      src: "/assests/index/icons/format.png",
                      link: "/conversion",
                      alt: "menu-conversion",
                    },
                    {
                      id: 3,
                      name: "Image to PDF",
                      src: "/assests/index/icons/image-to-pdf.png",
                      link: "/image-to-pdf",
                      alt: "menu-image-to-pdf",
                    },
                    {
                      id: 4,
                      name: "Merge PDF",
                      src: "/assests/index/icons/merge.png",
                      link: "/merge-pdf",
                      alt: "menu-merge-pdf",
                    },
                    {
                      id: 5,
                      name: "Split PDF",
                      src: "/assests/index/icons/split.png",
                      link: "/split-pdf",
                      alt: "menu-split-pdf",
                    },
                    {
                      id: 6,
                      name: "Remove Pages",
                      src: "/assests/index/icons/remove-pages.png",
                      link: "/remove-pages",
                      alt: "menu-remove-pages",
                    },
                    {
                      id: 7,
                      name: "Extract Pages",
                      src: "/assests/index/icons/extract-pages.png",
                      link: "/extract-pages",
                      alt: "menu-extract-pages",
                    },
                  ].map((el) => (
                    <Link
                      href={el.link}
                      key={el.id}
                      className=" flex items-center justify-start"
                    >
                      <div className="flex pr-6 pl-3 py-2 transition-all cursor-pointer gap-2 items-center justify-center hover:bg-slate-100 rounded-md">
                        <div className="w-[40px] h-[40px] flex items-center justify-center shadow-lg border rounded-md border-slate-50 bg-white">
                          <Image
                            src={el.src}
                            width={20}
                            height={14}
                            alt={el.alt}
                          />
                        </div>
                        <div className="text-md">{el.name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
