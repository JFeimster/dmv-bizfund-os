import { getMarketConfig } from "@/lib/market";

export default function NewsletterCTA() {
  const market = getMarketConfig();

  return (
    <section className="container py-10">
      <div className="card p-6 md:p-9">
        <p className="kicker">{market.newsletterName}</p>
        <h2 className="mt-3 text-3xl font-black">Get the local capital brief.</h2>
        <p className="mt-4 max-w-3xl text-muted">Weekly notes on funding use cases, local operator pressure, partner resources, and tools for DMV business owners.</p>
        <a className="btn btn-primary mt-6" href="/newsletter">Subscribe to {market.newsletterName}</a>
      </div>
    </section>
  );
}
