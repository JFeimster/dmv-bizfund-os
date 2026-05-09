type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
  trustLine?: string;
};

export default function Hero({ eyebrow, title, subtitle, primaryLabel, primaryHref, secondaryLabel, secondaryHref, tertiaryLabel, tertiaryHref, trustLine }: HeroProps) {
  return (
    <section className="container py-14 md:py-24">
      <div className="command-panel relative overflow-hidden p-6 md:p-10 lg:p-12">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gold/10 to-transparent" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="kicker">{eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl">{subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn btn-primary" href={primaryHref}>{primaryLabel} →</a>
              {secondaryLabel && secondaryHref ? <a className="btn btn-secondary" href={secondaryHref}>{secondaryLabel}</a> : null}
              {tertiaryLabel && tertiaryHref ? <a className="btn btn-secondary" href={tertiaryHref}>{tertiaryLabel}</a> : null}
            </div>
            {trustLine ? <p className="mt-6 max-w-3xl text-sm font-bold text-muted">{trustLine}</p> : null}
          </div>
          <aside className="rounded-luxe border border-gold/25 bg-black/20 p-5 backdrop-blur">
            <p className="kicker">DMV capital desk</p>
            <div className="mt-4 grid gap-3">
              {[
                "DC, Northern Virginia, and Maryland guides",
                "Funding readiness tools and worksheets",
                "Referral partner resources for local pros"
              ].map((item) => (
                <div className="trust-pill" key={item}>{item}</div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted">Funding options and timing vary by business profile, documentation, and lender requirements. No guarantee of approval.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
