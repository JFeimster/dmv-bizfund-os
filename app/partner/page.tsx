import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
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
        eyebrow="Referral partner command center"
        title="Help clients find funding options without becoming the lender."
        description="For bank managers, accountants, bookkeepers, commercial realtors, attorneys, consultants, and local connectors whose clients need a clean next step when capital gets complicated."
        primaryLabel="Become a Referral Partner"
        primaryHref={market.partnerApplicationUrl}
        secondaryLabel="Refer a Business Owner"
        secondaryHref="/apply"
      />
      <section className="container py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card p-6 md:p-8">
            <p className="kicker">Who this is for</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Professionals with business-owner clients who hit funding walls.</h2>
            <p className="mt-4 text-muted">You do not need to play lender, underwriter, or motivational finance wizard. You need a safe, useful path to refer clients when they need options.</p>
            <a className="btn btn-primary mt-6" href={market.partnerApplicationUrl}>Become a Referral Partner →</a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Why clients get stuck", "Bank declines, thin documentation, timing pressure, unclear use of funds, or lender mismatch."],
              ["How to refer safely", "Point clients toward a funding review. Do not promise approvals, rates, speed, or funding amounts."],
              ["What happens next", "The owner can review available next steps based on profile, documentation, and lender requirements."],
              ["Why partners use this", "Cleaner conversations, better follow-up, practical tools, and a local resource hub clients can understand."]
            ].map(([title, text]) => (
              <div className="card p-5" key={title}>
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 card p-6 md:p-8">
          <p className="kicker">Partner intake</p>
          <h2 className="mt-3 text-3xl font-black">Partner form placeholder.</h2>
          <p className="mt-4 text-muted">Replace this with a partner application form, HubSpot form, Tally embed, or CRM workflow. Source tracking placeholder: <strong>{market.sourceTrackingId}</strong>.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {["Bank managers", "Accountants", "Bookkeepers", "Commercial realtors", "Attorneys", "Consultants"].map((item) => (
              <div className="trust-pill" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>
      <CTASection variant="partner" />
      <ComplianceNote />
    </>
  );
}
