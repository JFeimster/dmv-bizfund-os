import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import { getMarketConfig } from "@/lib/market";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Become a DMV Referral Partner",
  description: "Partner with DMV BizFund OS to help business owners find practical next steps when they need funding guidance.",
  path: "/partner"
});

export default function PartnerPage() {
  const market = getMarketConfig();

  return (
    <>
      <PageHeader
        eyebrow="Partner onboarding"
        title="Become a DMV funding referral partner."
        description="Give business owners a clean next step when the bank says no, maybe, later, or uploads-the-same-PDF-again."
      />
      <section className="container py-12">
        <div className="card p-6 md:p-8">
          <p className="kicker">Partner form placeholder</p>
          <h2 className="mt-3 text-3xl font-black">Partner intake goes here.</h2>
          <p className="mt-4 text-muted">Replace this with a partner application form, HubSpot form, Tally embed, or CRM workflow. Source tracking placeholder: <strong>{market.sourceTrackingId}</strong>.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Bank managers", "Accountants", "Bookkeepers", "Commercial realtors", "Attorneys", "Consultants"].map((item) => (
              <div className="rounded-luxe border border-line p-4" key={item}>{item}</div>
            ))}
          </div>
          <a className="btn btn-primary mt-6" href={market.partnerApplicationUrl}>Become a Referral Partner</a>
        </div>
      </section>
      <ComplianceNote />
    </>
  );
}
