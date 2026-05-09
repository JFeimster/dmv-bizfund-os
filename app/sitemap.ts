import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { getIndustries, getLocations, getReferralPartners, getTools, getUseCases } from "@/lib/content";
import { getMarketConfig } from "@/lib/market";

export default function sitemap(): MetadataRoute.Sitemap {
  const market = getMarketConfig();
  const base = `https://${market.domain}`;

  const staticRoutes = ["", "/locations", "/industries", "/use-cases", "/referral-partners", "/tools", "/articles", "/directory", "/newsletter", "/apply", "/partner"];

  const dynamicRoutes = [
    ...getLocations().map((item) => `/locations/${item.slug}`),
    ...getIndustries().map((item) => `/industries/${item.slug}`),
    ...getUseCases().map((item) => `/use-cases/${item.slug}`),
    ...getReferralPartners().map((item) => `/referral-partners/${item.slug}`),
    ...getTools().map((item) => `/tools/${item.slug}`),
    ...getArticles().map((item) => `/articles/${item.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
