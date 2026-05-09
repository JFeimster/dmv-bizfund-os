type Tool = {
  slug: string;
  title: string;
  summary: string;
  ctaLabel: string;
};

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a className="card block p-6 hover:border-gold" href={`/tools/${tool.slug}`}>
      <p className="kicker">Tool</p>
      <h2 className="mt-3 text-2xl font-black">{tool.title}</h2>
      <p className="mt-3 text-muted">{tool.summary}</p>
      <span className="btn btn-primary mt-6">{tool.ctaLabel}</span>
    </a>
  );
}
