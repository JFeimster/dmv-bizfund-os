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
        eyebrow="Built for the DC Metro Area"
        title="Business Funding for DMV Operators Who Don’t Have Time for Bank Games."
        subtitle="Explore funding options, readiness tools, local guides, and referral resources for DC, Northern Virginia, and Maryland business owners who need clarity before the bank maze eats another week."
        primaryLabel="Explore DMV Funding Options"
        primaryHref="/apply"
        secondaryLabel="How It Works"
        secondaryHref="/tools/dmv-funding-readiness-scorecard"
        tertiaryLabel="Partner With Us"
        tertiaryHref="/partner"
        trustLine="Veteran-owned. DMV-focused. Built to help owners prepare stronger funding conversations. Funding options, timing, and terms vary. No guarantee of approval."
      />

      <section className="container py-16 md:py-24">
        <div className="mb-12 max-w-3xl md:mx-auto md:text-center">
          <p className="kicker">The District's speed vs. the bank's wait</p>
          <h2 className="display-serif mt-3 text-4xl font-black leading-tight tracking-tight md:text-6xl">DMV owners don’t need more lender sludge. They need clarity.</h2>
          <p className="mt-5 text-muted">Banks move slowly. Online lenders speak fluent fine print. Most owners are stuck between “come back later” and “sign here before you blink.”</p>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {[
            ["Red Tape", "Stop letting paperwork purgatory eat the week before payroll, inventory, repairs, or expansion decisions show up."],
            ["Local Blindness", "National lender pages rarely understand GovCons, restaurants, contractors, medical practices, trucking, or DMV service operators."],
            ["Referral Confusion", "Bankers, accountants, bookkeepers, realtors, and attorneys need a clean way to help clients without playing lender."]
          ].map(([title, text]) => (
            <div className="card p-8 md:p-10" key={title}>
              <h3 className="display-serif text-2xl font-black">{title}</h3>
              <p className="mt-4 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f7fa] py-16 text-[#0a1629] md:py-24">
        <div className="container">
          <div className="mb-12 max-w-3xl md:mx-auto md:text-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c5a059]">Capitol City funding options</p>
            <h2 className="display-serif mt-3 text-4xl font-black leading-tight tracking-tight md:text-6xl">Compare possible paths before you burn another week.</h2>
            <p className="mt-5 text-slate-600">Explore working capital, equipment financing, business credit prep, revenue-based options, invoice-related use cases, and readiness steps. Terms vary. Not all businesses qualify. That’s why preparation matters.</p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {[
              ["Working Capital", "Payroll gaps, inventory timing, repairs, marketing pushes, or short-term operating pressure."],
              ["Equipment & Expansion", "Gear, vehicles, kitchen upgrades, medical equipment, contractor tools, or operational buildout needs."],
              ["Business Credit Prep", "Clean up the funding conversation before you apply and understand what lenders may review."]
            ].map(([title, text]) => (
              <div className="border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#c5a059] md:p-10" key={title}>
                <h3 className="display-serif text-3xl font-black">{title}</h3>
                <p className="mt-5 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="btn btn-primary" href="/apply">Compare Funding Options</a>
            <a className="btn border-[#0a1629] text-[#0a1629] hover:border-[#c5a059] hover:text-[#c5a059]" href="/directory">Explore the Directory</a>
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
        title="Industries we help power across the DMV."
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
