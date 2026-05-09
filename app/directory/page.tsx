import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import { getDirectoryListings } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Local Capital Directory",
  description: "A starter directory of DMV business capital ecosystem categories, referral resources, and partner types.",
  path: "/directory"
});

export default function DirectoryPage() {
  const listings = getDirectoryListings();

  return (
    <>
      <PageHeader
        eyebrow="Directory MVP"
        title="DMV Local Capital Directory."
        description="Not just lenders. This directory is for accountants, bookkeepers, attorneys, chambers, veteran resources, consultants, and local business connectors."
      />
      <section className="container grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((item) => (
          <article className="card p-6" key={item.name}>
            <p className="kicker">{item.category}</p>
            <h2 className="mt-3 text-2xl font-black">{item.name}</h2>
            <p className="mt-2 text-muted">{item.location}</p>
            <p className="mt-4 text-muted">{item.bestFit}</p>
            <p className="mt-4 text-sm text-muted"><strong className="text-cream">Funding note:</strong> {item.fundingRelatedNote}</p>
            <a className="btn btn-secondary mt-5" href={item.ctaHref}>View next step</a>
          </article>
        ))}
      </section>
      <ComplianceNote />
    </>
  );
}
