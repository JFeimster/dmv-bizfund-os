type Tool = {
  slug: string;
  title: string;
  summary: string;
  ctaLabel: string;
};

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a className="card group block p-6 transition hover:-translate-y-0.5" href={`/tools/${tool.slug}`}>
      <p className="kicker">Funding tool</p>
      <h2 className="mt-3 text-2xl font-black leading-tight group-hover:text-amber">{tool.title}</h2>
      <p className="mt-3 text-muted">{tool.summary}</p>
      <div className="mt-5 grid gap-2 text-sm text-muted">
        <span className="trust-pill">Helps with: readiness and next steps</span>
        <span className="trust-pill">Best for: owners who want clarity before applying</span>
      </div>
      <span className="btn btn-primary mt-6">{tool.ctaLabel} →</span>
    </a>
  );
}
