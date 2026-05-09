import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import InternalLinks from "@/components/InternalLinks";
import FundingApplicationCTA from "@/components/FundingApplicationCTA";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import ComplianceNote from "@/components/ComplianceNote";
import { getIndustries, getIndustryBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getIndustries().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getIndustryBySlug(params.slug);
  if (!item) return {};
  return createMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/industries/${item.slug}`
  });
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const item = getIndustryBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader eyebrow="Industry guide" title={item.title} description={item.metaDescription} />
      <ContentSection
        title={`Funding needs for ${item.industryName}`}
        body={item.body}
        bullets={[
          ...item.commonFundingNeeds.map((need) => `Funding need: ${need}`),
          ...item.typicalUrgencyTriggers.map((trigger) => `Urgency trigger: ${trigger}`)
        ]}
      />
      <ContentSection title="Documents to prepare" body="Better documentation does not guarantee approval, but it can reduce the chaos tax." bullets={item.documentsNeeded} />
      <LeadMagnetBlock title={item.suggestedLeadMagnet} description="Use this resource to organize the situation before applying or referring a business owner." href="/tools/dmv-funding-readiness-scorecard" cta="Get Your Score" />
      <InternalLinks
        links={[
          ...item.useCaseLinks.map((link) => ({ label: link.label, href: `/use-cases/${link.slug}` })),
          { label: "DMV Funding Readiness Scorecard", href: "/tools/dmv-funding-readiness-scorecard" },
          { label: "Check Funding Options", href: "/apply" }
        ]}
      />
      <FundingApplicationCTA />
      <ComplianceNote />
    </>
  );
}
