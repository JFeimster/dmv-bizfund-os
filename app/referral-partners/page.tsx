import CardGrid from "@/components/CardGrid";
import PageHeader from "@/components/PageHeader";
import ReferralPartnerCTA from "@/components/ReferralPartnerCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { getReferralPartners } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Referral Partner Guides",
  description: "Referral guides for bank managers, accountants, bookkeepers, consultants, attorneys, and local business connectors.",
  path: "/referral-partners"
});

export default function ReferralPartnersPage() {
  const partners = getReferralPartners();

  return (
    <>
      <PageHeader
        eyebrow="Referral partner hub"
        title="Help clients find a practical next step."
        description="You do not need to become a loan expert. You need a clean path for business owners who hit funding friction."
      />
      <CardGrid
        items={partners.map((item) => ({
          title: item.title,
          description: item.summary,
          href: `/referral-partners/${item.slug}`
        }))}
      />
      <ReferralPartnerCTA />
      <ComplianceNote />
    </>
  );
}
