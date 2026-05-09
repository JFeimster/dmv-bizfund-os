type CardItem = {
  title: string;
  description: string;
  href: string;
};

type CardGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: CardItem[];
  ctaLabel?: string;
};

export default function CardGrid({ eyebrow, title, description, items, ctaLabel = "Open guide" }: CardGridProps) {
  return (
    <section className="container py-12 md:py-16">
      {title ? (
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
            {description ? <p className="mt-4 text-muted">{description}</p> : null}
          </div>
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a className="card group block p-6 transition hover:-translate-y-0.5" href={item.href} key={item.href}>
            <div className="flex h-full flex-col">
              <p className="kicker">Capital file</p>
              <h3 className="mt-3 text-xl font-black leading-tight group-hover:text-amber">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted">{item.description}</p>
              <span className="mt-5 inline-flex text-sm font-black text-gold">{ctaLabel} →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
