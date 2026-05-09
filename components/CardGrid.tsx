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
};

export default function CardGrid({ eyebrow, title, description, items }: CardGridProps) {
  return (
    <section className="container py-12">
      {title ? (
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-black md:text-5xl">{title}</h2>
          {description ? <p className="mt-4 text-muted">{description}</p> : null}
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a className="card block p-6 hover:border-gold" href={item.href} key={item.href}>
            <h3 className="text-xl font-black">{item.title}</h3>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
            <span className="mt-5 inline-flex text-sm font-black text-gold">Open guide →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
