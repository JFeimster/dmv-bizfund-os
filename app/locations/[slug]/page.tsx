import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import InternalLinks from "@/components/InternalLinks";
import FundingApplicationCTA from "@/components/FundingApplicationCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { getLocationBySlug, getLocations } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getLocations().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getLocationBySlug(params.slug);
  if (!item) return {};
  return createMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/locations/${item.slug}`
  });
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const item = getLocationBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader eyebrow="Location guide" title={item.title} description={item.metaDescription} />
      <ContentSection
        title={`Funding realities in ${item.name}`}
        body={item.body}
        bullets={[
          ...item.localBusinessPainPoints,
          ...item.commonFundingUseCases.map((use) => `Common use case: ${use}`)
        ]}
      />
      <InternalLinks
        title="Related next steps"
        links={[
          ...item.relatedIndustryLinks.map((link) => ({ label: link.label, href: `/industries/${link.slug}` })),
          ...item.relatedToolLinks.map((link) => ({ label: link.label, href: `/tools/${link.slug}` })),
          { label: "Emergency Working Capital", href: "/use-cases/emergency-working-capital" },
          { label: "Check Funding Options", href: "/apply" }
        ]}
      />
      <FundingApplicationCTA />
      <ComplianceNote />
    </>
  );
}
