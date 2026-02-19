import { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invertadigital.de";

  // Static routes
  const routes = [
    "",
    "/agentur",
    "/projekte",
    "/marketing",
    "/webentwicklung",
    "/automatisierung",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/${service.category}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
