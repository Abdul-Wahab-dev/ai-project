import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://toolefy.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://toolefy.com/compress",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://toolefy.com/conversion",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://toolefy.com/extract-pages",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://toolefy.com/image-to-pdf",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://toolefy.com/merge-pdf",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://toolefy.com/remove-pages",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://toolefy.com/split-pdf",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
  ];
}
