import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import InternalLinks from "@/components/InternalLinks";
import FundingApplicationCTA from "@/components/FundingApplicationCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { getUseCaseBySlug, getUseCases } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getUseCases().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getUseCaseBySlug(params.slug);
  if (!item) return {};
  return createMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/use-cases/${item.slug}`
  });
}

export default function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const item = getUseCaseBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader eyebrow="Funding use case" title={item.title} description={item.metaDescription} />
      <ContentSection title="The problem" body={item.problemDescription} bullets={item.fundingReadinessGuidance} />
      <InternalLinks
        title="Relevant industries and tools"
        links={[
          ...item.relevantIndustries.map((slug) => ({ label: slug.replaceAll("-", " "), href: `/industries/${slug}` })),
          { label: item.suggestedCalculatorOrChecklist, href: item.toolSlug ? `/tools/${item.toolSlug}` : "/tools/dmv-funding-readiness-scorecard" },
          { label: "Check Funding Options", href: "/apply" }
        ]}
      />
      <FundingApplicationCTA />
      <ComplianceNote />
    </>
  );
}
