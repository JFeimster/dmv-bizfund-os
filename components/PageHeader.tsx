type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="container py-14 md:py-20">
      <p className="kicker">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg text-muted">{description}</p>
    </section>
  );
}
