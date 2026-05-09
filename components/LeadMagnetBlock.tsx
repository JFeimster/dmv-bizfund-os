type LeadMagnetBlockProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export default function LeadMagnetBlock({ title, description, href, cta }: LeadMagnetBlockProps) {
  return (
    <section className="container py-10 md:py-14">
      <div className="command-panel grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9">
        <div>
          <p className="kicker">Funding readiness asset</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-muted">{description}</p>
          <p className="mt-4 text-sm font-bold text-muted">For planning and education. This is not an approval decision or guarantee of funding.</p>
        </div>
        <a className="btn btn-primary md:justify-self-end" href={href}>{cta} →</a>
      </div>
    </section>
  );
}
