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
        eyebrow="The DMV Funding Resource Center"
        title="DMV business funding clarity without the bank runaround."
        subtitle="Local funding guides, tools, readiness checklists, and referral resources for DC, Northern Virginia, and Maryland business owners who need options — not another generic loan portal in a cheap suit."
        primaryLabel="Check Funding Options"
        primaryHref="/apply"
        secondaryLabel="Use the Funding Readiness Scorecard"
        secondaryHref="/tools/dmv-funding-readiness-scorecard"
        tertiaryLabel="Refer a Business Owner"
        tertiaryHref="/partner"
        trustLine="Veteran-owned. DMV-focused. Built to help owners prepare stronger funding applications — not chase mystery approvals."
      />

      <section className="container py-12 md:py-16">
        <div className="mb-8 max-w-3xl">
          <p className="kicker">Why local owners get stuck</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">DMV owners don’t need more lender sludge. They need clarity.</h2>
          <p className="mt-4 text-muted">Banks move slowly. Online lenders speak fluent fine print. Most owners are stuck between “come back later” and “sign here before you blink.”</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Bank drag", "Traditional underwriting can move slower than your payroll deadline."],
            ["Documentation gaps", "Messy statements, unclear use of funds, and weak prep can stall good conversations."],
            ["Generic marketplaces", "Zip-code lead forms do not understand contractors, restaurants, GovCons, trucking, or local service operators."],
            ["Referral confusion", "Professionals want to help clients without pretending they are the lender. This gives them a cleaner path."]
          ].map(([title, text]) => (
            <div className="card p-6" key={title}>
              <p className="kicker">Pressure point</p>
              <h3 className="mt-3 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="command-panel p-6 md:p-10">
          <p className="kicker">Funding options without the bank runaround</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">Compare possible paths before you burn another week.</h2>
          <p className="mt-4 max-w-3xl text-muted">Explore working capital, equipment financing, business credit prep, revenue-based options, invoice-related use cases, and funding readiness steps. Terms vary. Not all businesses qualify. That’s why preparation matters.</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Working capital", "Equipment financing", "Business credit prep", "Revenue-based options"].map((item) => (
              <div className="trust-pill" key={item}>{item}</div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href="/apply">Compare Funding Options →</a>
            <a className="btn btn-secondary" href="/directory">Explore the Directory</a>
          </div>
        </div>
      </section>

      <LeadMagnetBlock
        title="Not sure what funding fits? Start with the scorecard."
        description="Use the DMV Funding Readiness Scorecard to review revenue, time in business, credit posture, documentation, urgency, and likely next steps before you apply. It is not an approval decision — it is your funding posture check."
        href="/tools/dmv-funding-readiness-scorecard"
        cta="Check My Funding Readiness"
      />

      <CardGrid
        eyebrow="Local funding guides"
        title="Start with your market."
        description="Every location page points business owners toward relevant industries, use cases, tools, and application next steps across DC, Northern Virginia, and Maryland."
        ctaLabel="Explore local guide"
        items={locations.map((item) => ({
          title: item.title,
          description: item.metaDescription,
          href: `/locations/${item.slug}`
        }))}
      />

      <CardGrid
        eyebrow="Industry funding guides"
        title="Your cash-flow problems are not generic."
        description="Contractors, restaurants, GovCons, trucking companies, medical practices, and local operators need different funding conversations."
        ctaLabel="Open industry guide"
        items={industries.map((item) => ({
          title: item.title,
          description: item.summary,
          href: `/industries/${item.slug}`
        }))}
      />

      <CardGrid
        eyebrow="Tools built for business owners"
        title="Run the numbers before the numbers run you."
        description="Start with the scorecard or estimate the gap before cash flow turns into a circus fire. Useful beats fancy."
        ctaLabel="Use tool"
        items={tools.map((item) => ({
          title: item.title,
          description: item.summary,
          href: `/tools/${item.slug}`
        }))}
      />

      <CardGrid
        eyebrow="Funding use cases"
        title="When the bill shows up before the revenue does."
        description="Use-case pages connect urgency to preparation, documents, realistic options, and the apply path."
        ctaLabel="Review use case"
        items={useCases.map((item) => ({
          title: item.title,
          description: item.problemDescription,
          href: `/use-cases/${item.slug}`
        }))}
      />

      <ReferralPartnerCTA />
      <NewsletterCTA />
      <CTASection variant="final" />
      <FAQBlock faqs={faqs} />
      <ComplianceNote />
    </>
  );
}
