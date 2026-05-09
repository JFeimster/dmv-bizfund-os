import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderInline(text: string) {
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);

  return boldParts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default function ArticleBody({ content }: { content: string }) {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      nodes.push(
        <ul className="my-6 list-disc space-y-2 pl-6 text-muted" key={`ul-${nodes.length}`}>
          {listItems.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ul>
      );
      listItems = [];
    }
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith("# ")) {
      nodes.push(<h1 className="mt-8 text-4xl font-black" key={index}>{line.replace(/^#\s+/, "")}</h1>);
      return;
    }

    if (line.startsWith("## ")) {
      const text = line.replace(/^##\s+/, "");
      nodes.push(<h2 id={slugify(text)} className="mt-10 text-3xl font-black" key={index}>{text}</h2>);
      return;
    }

    if (line.startsWith("### ")) {
      const text = line.replace(/^###\s+/, "");
      nodes.push(<h3 id={slugify(text)} className="mt-8 text-2xl font-black" key={index}>{text}</h3>);
      return;
    }

    nodes.push(<p className="my-5 text-muted" key={index}>{renderInline(line)}</p>);
  });

  flushList();

  return (
    <article className="container py-8">
      <div className="card p-6 md:p-10">
        <div className="prose-lite max-w-none">{nodes}</div>
        <div className="mt-10 border-t border-line pt-6">
          <Link className="btn btn-primary" href="/apply">Check Funding Options</Link>
          <Link className="btn btn-secondary ml-3" href="/tools/dmv-funding-readiness-scorecard">Get Your Score</Link>
        </div>
      </div>
    </article>
  );
}
