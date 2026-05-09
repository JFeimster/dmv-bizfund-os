import { getMarketConfig } from "@/lib/market";

export default function ReferralPartnerCTA() {
  const market = getMarketConfig();

  return (
    <section className="container py-10 md:py-14">
      <div className="command-panel p-6 md:p-9">
        <p className="kicker">Referral partners</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-4xl">Help clients find a funding next step without sounding like a loan shark with Wi-Fi.</h2>
        <p className="mt-4 max-w-3xl text-muted">Bank managers, accountants, bookkeepers, attorneys, commercial realtors, consultants, and local connectors can use DMV BizFund OS to refer cleaner, follow up smarter, and stay useful when clients hit capital walls.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {["Give clients a practical next step", "Use tools, guides, and scripts", "Build a local funding pipeline"].map((item) => (
            <div className="trust-pill" key={item}>{item}</div>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-primary" href="/partner">{market.partnerCTA} →</a>
          <a className="btn btn-secondary" href="/apply">Refer a Business Owner</a>
        </div>
      </div>
    </section>
  );
}
