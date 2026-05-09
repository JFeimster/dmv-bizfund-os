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
};

export default function Hero({ eyebrow, title, subtitle, primaryLabel, primaryHref, secondaryLabel, secondaryHref, tertiaryLabel, tertiaryHref }: HeroProps) {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-4xl">
        <p className="kicker">{eyebrow}</p>
        <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={primaryHref}>{primaryLabel}</a>
          {secondaryLabel && secondaryHref ? <a className="btn btn-secondary" href={secondaryHref}>{secondaryLabel}</a> : null}
          {tertiaryLabel && tertiaryHref ? <a className="btn btn-secondary" href={tertiaryHref}>{tertiaryLabel}</a> : null}
        </div>
      </div>
    </section>
  );
}
