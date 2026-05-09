import { getMarketConfig } from "@/lib/market";

export default function FundingApplicationCTA() {
  const market = getMarketConfig();

  return (
    <section className="container py-10 md:py-14">
      <div className="card p-6 md:p-9">
        <p className="kicker">Funding review</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Check what funding options may fit before you chase applications.</h2>
        <p className="mt-4 max-w-3xl text-muted">Bring the basics: revenue, time in business, use of funds, and documentation. Better inputs create better funding conversations.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-primary" href="/apply">{market.primaryCTA} →</a>
          <a className="btn btn-secondary" href="/tools/dmv-funding-readiness-scorecard">{market.secondaryCTA}</a>
        </div>
        <p className="mt-5 text-xs font-bold text-muted">No guarantee of approval. Funding options, timing, and terms vary by business profile, documentation, and lender requirements.</p>
      </div>
    </section>
  );
}
