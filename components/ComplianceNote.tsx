import { getMarketConfig } from "@/lib/market";

export default function ComplianceNote() {
  const market = getMarketConfig();

  return (
    <section className="container py-8">
      <div className="rounded-luxe border border-line bg-white/[0.025] p-5 text-sm text-muted">
        <strong className="text-cream">Funding note:</strong> {market.complianceDisclaimer}
      </div>
    </section>
  );
}
