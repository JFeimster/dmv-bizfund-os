import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import InternalLinks from "@/components/InternalLinks";
import ReferralPartnerCTA from "@/components/ReferralPartnerCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { getReferralPartnerBySlug, getReferralPartners } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getReferralPartners().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getReferralPartnerBySlug(params.slug);
  if (!item) return {};
  return createMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/referral-partners/${item.slug}`
  });
}

export default function ReferralPartnerDetailPage({ params }: { params: { slug: string } }) {
  const item = getReferralPartnerBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader eyebrow="Referral guide" title={item.title} description={item.metaDescription} />
      <ContentSection title={`When ${item.partnerType}s should pay attention`} body={item.body} bullets={item.clientPainIndicators} />
      <ContentSection title="When to refer" body="A referral works best when the business owner needs clarity, not pressure." bullets={item.whenToRefer} />
      <ContentSection title="How referral works" body={item.howReferralWorks} bullets={["Share the resource or partner form.", "We review the next-step fit.", "Funding options vary by business profile, documentation, revenue, and lender requirements."]} />
      <InternalLinks links={[{ label: "Become a Referral Partner", href: "/partner" }, { label: "Refer a Business Owner", href: "/apply" }, { label: "DMV Funding Readiness Scorecard", href: "/tools/dmv-funding-readiness-scorecard" }]} />
      <ReferralPartnerCTA />
      <ComplianceNote />
    </>
  );
}
