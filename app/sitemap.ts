import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://doralagem.com", lastModified: new Date() },
    { url: "https://doralagem.com/about", lastModified: new Date() },
    { url: "https://doralagem.com/projects", lastModified: new Date() },
    { url: "https://doralagem.com/contact", lastModified: new Date() },
  ];
}
