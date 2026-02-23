import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invertadigital.de";

  const routes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/agentur", priority: 0.9, freq: "monthly" as const },
    { path: "/projekte", priority: 0.8, freq: "monthly" as const },
    { path: "/marketing", priority: 0.9, freq: "monthly" as const },
    { path: "/webentwicklung", priority: 0.9, freq: "monthly" as const },
    { path: "/automatisierung", priority: 0.9, freq: "monthly" as const },
    { path: "/kontakt", priority: 0.7, freq: "yearly" as const },
    { path: "/impressum", priority: 0.1, freq: "yearly" as const },
    { path: "/datenschutz", priority: 0.1, freq: "yearly" as const },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/${service.category}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  return [...routes, ...serviceRoutes];
}
