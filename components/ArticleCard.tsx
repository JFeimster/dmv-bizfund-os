import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="card group block p-6 transition hover:-translate-y-0.5" href={`/articles/${article.slug}`}>
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
        <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-gold">{article.category}</span>
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readingTime}</span>
      </div>
      <h2 className="mt-4 text-2xl font-black leading-tight group-hover:text-amber">{article.title}</h2>
      <p className="mt-3 text-sm text-muted">{article.description}</p>
      {article.tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.slice(0, 4).map((tag) => (
            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-bold text-muted" key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
      <span className="mt-6 inline-flex text-sm font-black text-gold">Read field note →</span>
    </Link>
  );
}
