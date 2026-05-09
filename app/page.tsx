import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";
import CTASection from "@/components/CTASection";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import NewsletterCTA from "@/components/NewsletterCTA";
import ReferralPartnerCTA from "@/components/ReferralPartnerCTA";
import ComplianceNote from "@/components/ComplianceNote";
import FAQBlock from "@/components/FAQBlock";
import { getLocations, getIndustries, getUseCases, getTools, getFaqs } from "@/lib/content";
import { getMarketConfig } from "@/lib/market";

export default function HomePage() {
  const market = getMarketConfig();
  const locations = getLocations().slice(0, 6);
  const industries = getIndustries().slice(0, 5);
  const useCases = getUseCases();
  const tools = getTools();
  const faqs = getFaqs();

  return (
    <>
      <Hero
        eyebrow="Local Capital Intelligence Hub"
        title="Business funding guidance for DMV owners who need options — not the bank runaround."
        subtitle="Explore local funding guides, readiness tools, industry resources, and referral partner support for business owners across DC, Northern Virginia, and Maryland."
        primaryLabel={market.primaryCTA}
        primaryHref="/apply"
        secondaryLabel={market.secondaryCTA}
        secondaryHref="/tools/dmv-funding-readiness-scorecard"
        tertiaryLabel={market.partnerCTA}
        tertiaryHref="/partner"
      />

      <section className="container py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Local SEO guides", "Funding pages built around DC, Northern Virginia, Maryland, and the nearby markets where operators actually work."],
            ["Readiness tools", "Scorecards and calculators to help owners see what to prepare before applying."],
            ["Referral partner engine", "Clean next steps for bank managers, accountants, bookkeepers, consultants, and local connectors."]
          ].map(([title, text]) => (
            <div className="card p-6" key={title}>
              <p className="kicker">Built for action</p>
              <h2 className="mt-3 text-2xl font-black">{title}</h2>
              <p className="mt-3 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CardGrid
        eyebrow="Local funding guides"
        title="Start with your market."
        description="Every location page points business owners toward relevant industries, use cases, tools, and application next steps."
        items={locations.map((item) => ({
          title: item.title,
          description: item.metaDescription,
          href: `/locations/${item.slug}`
        }))}
      />

      <CardGrid
        eyebrow="Industry guides"
        title="Your cash-flow problems are not generic."
        description="Contractors, restaurants, GovCons, trucking companies, and medical practices need different funding conversations."
        items={industries.map((item) => ({
          title: item.title,
          description: item.summary,
          href: `/industries/${item.slug}`
        }))}
      />

      <LeadMagnetBlock
        title="DMV Funding Readiness Scorecard"
        description="Get a practical read on what to prepare before applying. No magic wand. No guaranteed approval circus. Just clarity."
        href="/tools/dmv-funding-readiness-scorecard"
        cta="Get Your Score"
      />

      <CardGrid
        eyebrow="Funding use cases"
        title="When the bill shows up before the revenue does."
        description="Use-case pages connect urgency to preparation, documents, realistic options, and the apply path."
        items={useCases.map((item) => ({
          title: item.title,
          description: item.problemDescription,
          href: `/use-cases/${item.slug}`
        }))}
      />

      <CardGrid
        eyebrow="Tools"
        title="Clarity beats panic."
        description="Start with the scorecard or estimate the gap before cash flow turns into a circus fire."
        items={tools.map((item) => ({
          title: item.title,
          description: item.summary,
          href: `/tools/${item.slug}`
        }))}
      />

      <ReferralPartnerCTA />
      <NewsletterCTA />
      <CTASection />
      <FAQBlock faqs={faqs} />
      <ComplianceNote />
    </>
  );
}
