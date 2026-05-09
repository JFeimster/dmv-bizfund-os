import ArticleCard from "@/components/ArticleCard";
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

  return (
    <>
      <PageHeader
        eyebrow="Articles"
        title="DMV business funding guides without the bank runaround."
        description="Practical articles for local owners who need funding clarity, preparation, and useful next steps before the cash-flow circus catches fire."
      />
      <section className="container grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => <ArticleCard article={article} key={article.slug} />)}
      </section>
      <ComplianceNote />
    </>
  );
}
