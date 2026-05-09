type ContentSectionProps = {
  title: string;
  body: string;
  bullets?: string[];
};

export default function ContentSection({ title, body, bullets = [] }: ContentSectionProps) {
  return (
    <section className="container py-8">
      <div className="card p-6 md:p-8">
        <h2 className="text-3xl font-black">{title}</h2>
        <p className="mt-4 text-muted">{body}</p>
        {bullets.length > 0 ? (
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {bullets.map((item) => (
              <li className="rounded-luxe border border-line p-4 text-muted" key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
