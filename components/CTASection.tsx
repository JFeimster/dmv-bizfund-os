import { getMarketConfig } from "@/lib/market";

export default function CTASection() {
  const market = getMarketConfig();

  return (
    <section className="container py-12">
      <div className="card p-6 md:p-10">
        <p className="kicker">Next step</p>
        <h2 className="mt-3 text-3xl font-black md:text-5xl">Stop guessing. See what may be possible.</h2>
        <p className="mt-4 max-w-3xl text-muted">Use the apply path to start a funding options review or take the scorecard first if you need a cleaner read on readiness.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/apply">{market.primaryCTA}</a>
          <a className="btn btn-secondary" href="/tools/dmv-funding-readiness-scorecard">{market.secondaryCTA}</a>
        </div>
      </div>
    </section>
  );
}
