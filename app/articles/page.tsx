import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import PageHeader from "@/components/PageHeader";
import { getArticles } from "@/lib/articles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Business Funding Articles",
  description: "Business funding articles, guides, and practical next steps for DMV business owners and referral partners.",
  path: "/articles"
});

export default function ArticlesPage() {
  const articles = getArticles();
  const featured = articles[0];
  const remaining = articles.slice(1);

  return (
    <>
      <PageHeader
        eyebrow="DMV funding field notes"
        title="Business funding articles with teeth."
        description="Practical guides for local owners and referral partners who need funding clarity, preparation, and useful next steps before the cash-flow circus catches fire."
        primaryLabel="Check Funding Readiness"
        primaryHref="/tools/dmv-funding-readiness-scorecard"
        secondaryLabel="Start Funding Review"
        secondaryHref="/apply"
      />
      {featured ? (
        <section className="container py-8">
          <div className="command-panel p-6 md:p-9">
            <p className="kicker">Featured guide</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">{featured.title}</h2>
            <p className="mt-4 max-w-3xl text-muted">{featured.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn btn-primary" href={`/articles/${featured.slug}`}>Read Featured Guide →</a>
              <a className="btn btn-secondary" href="/tools/dmv-funding-readiness-scorecard">Use the Scorecard</a>
            </div>
          </div>
        </section>
      ) : null}
      <section className="container grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
        {remaining.map((article) => <ArticleCard article={article} key={article.slug} />)}
      </section>
      <CTASection variant="newsletter" />
      <CTASection variant="applicant" />
      <ComplianceNote />
    </>
  );
}
