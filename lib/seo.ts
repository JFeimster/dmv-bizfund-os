import type { Metadata } from "next";
import { getMarketConfig } from "@/lib/market";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const market = getMarketConfig();
  const url = `https://${market.domain}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: market.brandName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
