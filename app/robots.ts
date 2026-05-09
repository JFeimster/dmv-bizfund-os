import type { MetadataRoute } from "next";
import { getMarketConfig } from "@/lib/market";

export default function robots(): MetadataRoute.Robots {
  const market = getMarketConfig();
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `https://${market.domain}/sitemap.xml`
  };
}
