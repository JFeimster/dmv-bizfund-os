import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import InternalLinks from "@/components/InternalLinks";
import FundingApplicationCTA from "@/components/FundingApplicationCTA";
import NewsletterCTA from "@/components/NewsletterCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { getToolBySlug, getTools } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getTools().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getToolBySlug(params.slug);
  if (!item) return {};
  return createMetadata({
    title: item.seoTitle,
    description: item.metaDescription,
    path: `/tools/${item.slug}`
  });
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const item = getToolBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader eyebrow="Funding tool" title={item.title} description={item.metaDescription} />
      <ContentSection title="What this tool helps with" body={item.body} bullets={item.bestFor} />
      <section className="container py-6">
        <div className="card p-6 md:p-8">
          <p className="kicker">MVP placeholder</p>
          <h2 className="mt-3 text-3xl font-black">Tool form goes here.</h2>
          <p className="mt-3 text-muted">For the first build, this page routes users toward the apply flow. Later, embed Tally, HubSpot, a native form, or an n8n webhook.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={item.ctaHref}>{item.ctaLabel}</a>
            <a className="btn btn-secondary" href="/apply">Start Application</a>
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
