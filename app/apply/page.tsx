import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import { getMarketConfig } from "@/lib/market";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Check Funding Options",
  description: "Start a funding options review for your DMV business. Funding options vary and approval is not guaranteed.",
  path: "/apply"
});

export default function ApplyPage() {
  const market = getMarketConfig();

  return (
    <>
      <PageHeader
        eyebrow="Funding application"
        title="Check funding options without pretending the bank maze is normal."
        description="Start here if your business needs working capital, equipment funding, emergency cash-flow support, or a practical next step after a bank decline."
      />
      <section className="container py-12">
        <div className="card p-6 md:p-8">
          <p className="kicker">MVP form placeholder</p>
          <h2 className="mt-3 text-3xl font-black">Application routing goes here.</h2>
          <p className="mt-4 text-muted">Replace this block later with a Tally form, HubSpot form, native Next.js form, or n8n webhook. Keep source tracking attached to: <strong>{market.sourceTrackingId}</strong>.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-luxe border border-line p-5">
              <h3 className="font-black">Good to prepare</h3>
              <ul className="mt-3 list-disc pl-5 text-muted">
                <li>Business name and entity details</li>
                <li>Monthly revenue range</li>
                <li>Time in business</li>
                <li>Funding need and use of funds</li>
                <li>Recent statements or documentation</li>
              </ul>
            </div>
            <div className="rounded-luxe border border-line p-5">
              <h3 className="font-black">Expectation check</h3>
              <p className="mt-3 text-muted">Submitting information does not guarantee approval. Funding options depend on business profile, revenue, documentation, credit, and lender requirements.</p>
            </div>
          </div>
        </div>
      </section>
      <ComplianceNote />
    </>
  );
}
