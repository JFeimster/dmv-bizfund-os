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
    <section className="hero-photo">
      <div className="container hero-photo-inner">
        <span className="hero-badge">{eyebrow}</span>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={primaryHref}>{primaryLabel}</a>
          {secondaryLabel && secondaryHref ? <a className="btn btn-secondary" href={secondaryHref}>{secondaryLabel}</a> : null}
          {tertiaryLabel && tertiaryHref ? <a className="btn btn-secondary" href={tertiaryHref}>{tertiaryLabel}</a> : null}
        </div>
        {trustLine ? <p className="hero-trust-line">{trustLine}</p> : null}
      </div>
    </section>
  );
}
