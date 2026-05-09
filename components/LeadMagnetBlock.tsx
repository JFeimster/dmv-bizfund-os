type LeadMagnetBlockProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export default function LeadMagnetBlock({ title, description, href, cta }: LeadMagnetBlockProps) {
  return (
    <section className="container py-10">
      <div className="card border-gold/40 p-6 md:p-9">
        <p className="kicker">Lead magnet</p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-muted">{description}</p>
        <a className="btn btn-primary mt-6" href={href}>{cta}</a>
      </div>
    </section>
  );
}
