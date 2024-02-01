"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
const links = [
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
];
const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpenMob, setIsSubMenuOpenMob] = useState(false);
  const handleMouseEnter = () => {
    hideBodyOverflow("hidden");
    setIsSubMenuOpen(true);
  };

  const handleOverlayClick = (event) => {
    event.stopPropagation();

    if (
      event.target.id === "submenu-container" ||
      event.target.id === "submenu-container-mob"
    ) {
      hideBodyOverflow("auto");
      setIsSubMenuOpen(false);
      setIsSubMenuOpenMob(false);
    }
  };
  const hideBodyOverflow = (value: string) => {
    if (document.getElementsByTagName("body")[0])
      document.getElementsByTagName("body")[0].style.overflow = value;
  };
  useEffect(() => {
    const headerElement = document.getElementById("header");
    const tools = document.getElementById("tools");

    headerElement?.addEventListener("mousemove", (event) => {
      if (!tools?.contains(event.target)) {
        hideBodyOverflow("auto");
        setIsSubMenuOpen(false);
      }
    });

    return headerElement?.removeEventListener("mousemove", () => {
      hideBodyOverflow("auto");
      setIsSubMenuOpen(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = (targetId: string) => {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -60; // Adjust this value to account for fixed header, if any
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // Attach click event listeners to your navigation links
    const navLinks = document.querySelectorAll(".inner-scroll");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1); // Remove '#' from href
        handleScroll(targetId);
      });
    });
  }, []);

  return (
    <div className="relative inline-block text-left w-full h-full" id="header">
      <div className="bg-winter-wizard h-[60px] text-gray-900 focus:outline-none z-50">
        <div className="flex items-center justify-between gap-5 mx-auto h-full w-full custom_container">
          <Link href="/">
            <img src="/assests/logo.png" width={160} height={100} alt="logo" />
          </Link>
          <div
            className="sm:hidden block"
            onClick={() => {
              setIsSubMenuOpenMob(true);
              hideBodyOverflow("hidden");
            }}
          >
            <Image src="/assests/index/icons/menu.png" width={25} height={10} />
          </div>
          {/* MOBILE MENU */}

          <div
            id="submenu-container-mob"
            onClick={handleOverlayClick}
            className={`fixed top-0  left-0 right-0 ${
              isSubMenuOpenMob
                ? "bg-opacity-50 visible"
                : "opacity-0  invisible"
            } transition-all w-full h-full z-50 bg-black sm:hidden block`}
          >
            <div
              className={` top-0 ${
                isSubMenuOpenMob ? "left-0" : "-left-[300px]"
              } bg-white h-full fixed py-5 px-2 z-50 transition-all submenu-list w-[300px] overflow-auto`}
            >
              <div className="flex items-center justify-between px-2">
                <h1></h1>
                <div
                  className="w-[30px] h-[30px] flex items-center justify-center shadow-lg border rounded-md border-slate-50 bg-white"
                  onClick={() => {
                    setIsSubMenuOpenMob(false);
                    hideBodyOverflow("auto");
                  }}
                >
                  <Image
                    src="/assests/index/icons/close.png"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col justify-center gap-5 mt-5 w-full mx-auto">
                {links.map((el) => (
                  <Link
                    href={el.link}
                    key={el.id}
                    className=" flex items-center justify-start"
                    onClick={() => {
                      setIsSubMenuOpen(false);
                      hideBodyOverflow("auto");
                    }}
                  >
                    <div className="flex transition-all cursor-pointer gap-2 items-center justify-center">
                      <div className="w-[35px] h-[35px] flex items-center justify-center shadow-lg border rounded-md border-slate-50 bg-white">
                        <Image
                          src={el.src}
                          width={17}
                          height={14}
                          alt={el.alt}
                        />
                      </div>
                      <div className="text-sm">{el.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="h-full sm:flex hidden gap-5 ">
            <a
              href="#why_toolefy"
              className="cursor-pointer h-full text-lg  flex items-center justify-center inner-scroll"
            >
              Why toolefy
            </a>
            <a
              href="#how_it_works"
              className="cursor-pointer h-full text-lg  flex items-center justify-center inner-scroll"
            >
              How it works
            </a>
            <div
              className="cursor-pointer h-full text-lg  flex items-center justify-center tools"
              id="tools"
              onMouseEnter={handleMouseEnter}
            >
              Tools
              <div
                id={"submenu-container"}
                aria-hidden="true"
                onClick={handleOverlayClick}
                className={`fixed top-[60px] left-0 right-0 ${
                  isSubMenuOpen
                    ? "bg-opacity-50 visible"
                    : "opacity-0  invisible"
                } transition-all w-full h-full z-50 bg-black `}
              >
                <div
                  className={`relative bg-white z-50 transition-all submenu-list`}
                >
                  <div className="bg-white p-10 grid items-center sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 w-full lg:w-[80%] mx-auto">
                    {links.map((el) => (
                      <div
                        className=" flex items-center justify-start"
                        key={el.id}
                      >
                        <Link
                          className="flex pr-6 pl-3 py-2 transition-all cursor-pointer gap-2 items-center justify-center hover:bg-slate-100 rounded-md"
                          href={el.link}
                          key={el.id}
                          onClick={() => {
                            setIsSubMenuOpen(false);
                            hideBodyOverflow("auto");
                          }}
                        >
                          <div className="w-[40px] h-[40px] flex items-center justify-center shadow-lg border rounded-md border-slate-50 bg-white">
                            <Image
                              src={el.src}
                              width={20}
                              height={14}
                              alt={el.alt}
                            />
                          </div>
                          <div className="text-md">{el.name}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
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
