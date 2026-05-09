import { getMarketConfig } from "@/lib/market";

export default function ReferralPartnerCTA() {
  const market = getMarketConfig();

  return (
    <section className="container py-10">
      <div className="card p-6 md:p-9">
        <p className="kicker">Referral partners</p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">Your network needs capital answers.</h2>
        <p className="mt-4 max-w-3xl text-muted">Bank managers, accountants, bookkeepers, attorneys, consultants, and local connectors can give business owners a practical next step without pretending to be lenders.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/partner">{market.partnerCTA}</a>
          <a className="btn btn-secondary" href="/apply">Refer a Business Owner</a>
        </div>
      </div>
    </section>
  );
}
