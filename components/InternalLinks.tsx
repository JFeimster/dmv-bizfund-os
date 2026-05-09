type LinkItem = {
  label: string;
  href: string;
};

export default function InternalLinks({ title = "Keep moving", links }: { title?: string; links: LinkItem[] }) {
  return (
    <section className="container py-8">
      <div className="card p-6">
        <h2 className="text-2xl font-black">{title}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((link) => (
            <a className="btn btn-secondary" href={link.href} key={`${link.href}-${link.label}`}>{link.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
