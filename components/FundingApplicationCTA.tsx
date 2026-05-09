import { getMarketConfig } from "@/lib/market";

export default function FundingApplicationCTA() {
  const market = getMarketConfig();

  return (
    <section className="container py-10">
      <div className="card p-6 md:p-9">
        <p className="kicker">Owner CTA</p>
        <h2 className="mt-3 text-3xl font-black">Ready to review possible next steps?</h2>
        <p className="mt-4 max-w-3xl text-muted">Check funding options or use the readiness scorecard first if you need to organize the situation before applying.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/apply">{market.primaryCTA}</a>
          <a className="btn btn-secondary" href="/tools/dmv-funding-readiness-scorecard">{market.secondaryCTA}</a>
        </div>
      </div>
    </section>
  );
}
