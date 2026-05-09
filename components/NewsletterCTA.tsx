import { getMarketConfig } from "@/lib/market";

export default function NewsletterCTA() {
  const market = getMarketConfig();

  return (
    <section className="container py-10 md:py-14">
      <div className="card grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9">
        <div>
          <p className="kicker">DMV funding field notes</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Get local capital intelligence without the finance-bro fog machine.</h2>
          <p className="mt-4 max-w-3xl text-muted">Funding guides, readiness tools, partner plays, and practical notes for DMV operators and referral pros.</p>
        </div>
        <a className="btn btn-primary md:justify-self-end" href="/newsletter">Subscribe to {market.newsletterName} →</a>
      </div>
    </section>
  );
}
