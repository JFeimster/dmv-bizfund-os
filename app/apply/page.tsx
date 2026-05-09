import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
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
        eyebrow="Funding review"
        title="Check funding options without pretending the bank maze is normal."
        description="Start here if your business needs working capital, equipment funding, emergency cash-flow support, or a practical next step after a bank decline. Better inputs create better funding conversations."
        primaryLabel="Start Funding Review"
        primaryHref={market.applicationUrl}
        secondaryLabel="Use the Scorecard First"
        secondaryHref="/tools/dmv-funding-readiness-scorecard"
      />
      <section className="container py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-6 md:p-8">
            <p className="kicker">Application routing</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Start with the facts, not panic.</h2>
            <p className="mt-4 text-muted">Replace this block later with a Tally form, HubSpot form, native Next.js form, or n8n webhook. Keep source tracking attached to: <strong>{market.sourceTrackingId}</strong>.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn btn-primary" href={market.applicationUrl}>Start Funding Review →</a>
              <a className="btn btn-secondary" href="/tools/dmv-funding-readiness-scorecard">Check Readiness First</a>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <p className="kicker">Expectation check</p>
            <h2 className="mt-3 text-2xl font-black">No magic wand. No mystery approval theater.</h2>
            <p className="mt-4 text-muted">Submitting information does not guarantee approval. Funding options depend on business profile, revenue, documentation, credit, and lender requirements.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            ["What you need", "Business name, monthly revenue range, time in business, funding need, and use of funds."],
            ["What helps", "Recent bank statements, clean documentation, and a clear reason for capital."],
            ["What happens next", "Your information can be reviewed for available funding paths. Terms, timing, and eligibility vary."]
          ].map(([title, text]) => (
            <div className="card p-5" key={title}>
              <h3 className="font-black">{title}</h3>
              <p className="mt-3 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection variant="tool" />
      <ComplianceNote />
    </>
  );
}
