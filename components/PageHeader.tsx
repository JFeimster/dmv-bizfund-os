type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageHeader({ eyebrow, title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: PageHeaderProps) {
  return (
    <section className="container py-12 md:py-18">
      <div className="command-panel p-6 md:p-10">
        <p className="kicker">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted">{description}</p>
        {(primaryLabel && primaryHref) || (secondaryLabel && secondaryHref) ? (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primaryLabel && primaryHref ? <a className="btn btn-primary" href={primaryHref}>{primaryLabel} →</a> : null}
            {secondaryLabel && secondaryHref ? <a className="btn btn-secondary" href={secondaryHref}>{secondaryLabel}</a> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
