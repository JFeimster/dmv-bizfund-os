import CardGrid from "@/components/CardGrid";
import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import { getIndustries } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Industry Funding Guides",
  description: "Business funding guidance for contractors, restaurants, GovCons, trucking companies, medical practices, and veteran-owned businesses in the DMV.",
  path: "/industries"
});

export default function IndustriesPage() {
  const industries = getIndustries();

  return (
    <>
      <PageHeader
        eyebrow="Industry guides"
        title="Funding guidance by business type."
        description="Different operators have different cash-flow problems. These guides keep the conversation practical."
      />
      <CardGrid
        items={industries.map((item) => ({
          title: item.title,
          description: item.summary,
          href: `/industries/${item.slug}`
        }))}
      />
      <ComplianceNote />
    </>
  );
}
