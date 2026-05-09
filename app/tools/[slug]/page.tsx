import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import InternalLinks from "@/components/InternalLinks";
import FundingApplicationCTA from "@/components/FundingApplicationCTA";
import NewsletterCTA from "@/components/NewsletterCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { getToolBySlug, getTools } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTools().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const item = getToolBySlug(slug);
  if (!item) return {};
  return createMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/tools/${item.slug}`
  });
}

export default async function ToolDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const item = getToolBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Funding tool"
        title={item.title}
        description={item.metaDescription}
        primaryLabel={item.ctaLabel}
        primaryHref={item.ctaHref}
        secondaryLabel="Start Funding Review"
        secondaryHref="/apply"
      />
      <ContentSection title="What this tool helps with" body={item.body} bullets={item.bestFor} />
      <section className="container py-8 md:py-12">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="card p-6 md:p-8">
            <p className="kicker">How to use it</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Use the tool before the application pressure gets weird.</h2>
            <p className="mt-3 text-muted">Review the inputs, answer honestly, and use the result as a planning snapshot. This is not an approval decision. It is a better way to organize the conversation before you chase funding.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn btn-primary" href={item.ctaHref}>{item.ctaLabel} →</a>
              <a className="btn btn-secondary" href="/apply">Start Application</a>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <p className="kicker">Best used for</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {item.bestFor.map((use) => (
                <li className="rounded-luxe border border-line bg-white/[0.03] p-3" key={use}>{use}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <InternalLinks links={[{ label: "Apply", href: "/apply" }, { label: "Subscribe to DMV Capital Brief", href: "/newsletter" }, { label: "Referral Partner Hub", href: "/referral-partners" }]} />
      <FundingApplicationCTA />
      <NewsletterCTA />
      <ComplianceNote />
    </>
  );
}
