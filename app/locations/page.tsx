import CardGrid from "@/components/CardGrid";
import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import { getLocations } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Business Funding Location Guides",
  description: "Local funding guides for Washington DC, Northern Virginia, Maryland, Alexandria, Arlington, Fairfax County, and nearby DMV markets.",
  path: "/locations"
});

export default function LocationsPage() {
  const locations = getLocations();

  return (
    <>
      <PageHeader
        eyebrow="Local funding guides"
        title="Business funding guides by DMV market."
        description="Find local funding context, common cash-flow problems, related industries, useful tools, and next-step application paths."
      />
      <CardGrid
        items={locations.map((item) => ({
          title: item.title,
          description: item.metaDescription,
          href: `/locations/${item.slug}`
        }))}
      />
      <ComplianceNote />
    </>
  );
}
