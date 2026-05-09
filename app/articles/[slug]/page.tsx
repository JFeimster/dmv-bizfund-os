import { notFound } from "next/navigation";
import ArticleBody from "@/components/ArticleBody";
import ComplianceNote from "@/components/ComplianceNote";
import PageHeader from "@/components/PageHeader";
import { getArticleBySlug, getArticles } from "@/lib/articles";
import { createMetadata } from "@/lib/seo";

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${article.slug}`
  });
}

export default async function ArticleDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${article.category} • ${article.date} • ${article.readingTime}`}
        title={article.title}
        description={article.description}
      />
      <ArticleBody content={article.content} />
      <ComplianceNote />
    </>
  );
}
