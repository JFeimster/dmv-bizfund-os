import { getMarketConfig } from "@/lib/market";

type CTASectionProps = {
  variant?: "applicant" | "partner" | "newsletter" | "tool" | "final";
};

const copy = {
  applicant: {
    eyebrow: "Next step",
    title: "Stop guessing. Review what may be possible.",
    description: "Use the apply path to start a funding options review, or take the scorecard first if you need a cleaner read on readiness.",
    primary: "Check Funding Options",
    primaryHref: "/apply",
    secondary: "Use the Scorecard",
    secondaryHref: "/tools/dmv-funding-readiness-scorecard"
  },
  partner: {
    eyebrow: "Referral partner path",
    title: "Help local owners without playing lender.",
    description: "Give clients a practical next step when the bank says no, maybe, later, or asks for the same PDF again.",
    primary: "Become a Partner",
    primaryHref: "/partner",
    secondary: "View Referral Resources",
    secondaryHref: "/referral-partners"
  },
  newsletter: {
    eyebrow: "DMV funding field notes",
    title: "Get practical capital intelligence in your inbox.",
    description: "Local guides, tool drops, funding readiness notes, and partner plays without the finance-bro fog machine.",
    primary: "Join the Newsletter",
    primaryHref: "/newsletter",
    secondary: "Browse Articles",
    secondaryHref: "/articles"
  },
  tool: {
    eyebrow: "Use the tool first",
    title: "Run the numbers before the numbers run you.",
    description: "Start with a worksheet or scorecard, then use your inputs to prepare a cleaner funding conversation.",
    primary: "Open Tool Library",
    primaryHref: "/tools",
    secondary: "Check Funding Options",
    secondaryHref: "/apply"
  },
  final: {
    eyebrow: "Local capital command center",
    title: "Ready to move from confused to prepared?",
    description: "Explore the guides, run the scorecard, or start a funding options review with better inputs and fewer blind spots.",
    primary: "Start Funding Review",
    primaryHref: "/apply",
    secondary: "Explore Local Guides",
    secondaryHref: "/locations"
  }
};

export default function CTASection({ variant = "applicant" }: CTASectionProps) {
  const market = getMarketConfig();
  const selected = copy[variant];
  const primary = variant === "applicant" ? market.primaryCTA : selected.primary;
  const secondary = variant === "applicant" ? market.secondaryCTA : selected.secondary;

  return (
    <section className="container py-12 md:py-16">
      <div className="command-panel p-6 md:p-10">
        <p className="kicker">{selected.eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">{selected.title}</h2>
        <p className="mt-4 max-w-3xl text-muted">{selected.description}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-primary" href={selected.primaryHref}>{primary} →</a>
          <a className="btn btn-secondary" href={selected.secondaryHref}>{secondary}</a>
        </div>
        <p className="mt-5 text-xs font-bold text-muted">Funding options, timing, and terms vary. Not all businesses qualify. No guarantee of approval.</p>
      </div>
    </section>
  );
}
