type NavLink = {
  id: number;
  name: string;
  src: string;
  link: string;
  alt: string;
};
export const NavLinks: NavLink[] = [
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
