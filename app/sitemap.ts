import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://dor-alagem.com", lastModified: new Date() },
    { url: "https://dor-alagem.com/about", lastModified: new Date() },
    { url: "https://dor-alagem.com/projects", lastModified: new Date() },
    { url: "https://dor-alagem.com/contact", lastModified: new Date() },
  ];
}
