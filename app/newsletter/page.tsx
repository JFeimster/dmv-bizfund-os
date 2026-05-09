import PageHeader from "@/components/PageHeader";
import NewsletterCTA from "@/components/NewsletterCTA";
import ComplianceNote from "@/components/ComplianceNote";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Capital Brief Newsletter",
  description: "Weekly local capital intelligence for DMV business owners, referral partners, and operators.",
  path: "/newsletter"
});

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="DMV Capital Brief"
        title="Weekly capital intelligence for local operators."
        description="Funding use cases, local business pressure points, referral partner notes, tools, and practical next steps. No finance-bro fog machine."
      />
      <section className="container grid gap-5 py-12 md:grid-cols-3">
        {["Local Capital Watch", "Funding Use Case of the Week", "Referral Partner Corner"].map((item) => (
          <div className="card p-6" key={item}>
            <p className="kicker">Section</p>
            <h2 className="mt-3 text-2xl font-black">{item}</h2>
            <p className="mt-3 text-muted">Useful field notes for owners and partners across DC, Northern Virginia, and Maryland.</p>
          </div>
        ))}
      </section>
      <NewsletterCTA />
      <ComplianceNote />
    </>
  );
}
