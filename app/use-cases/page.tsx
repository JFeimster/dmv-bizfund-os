import CardGrid from "@/components/CardGrid";
import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import { getUseCases } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Funding Use Cases",
  description: "Emergency working capital, equipment financing, payroll gaps, inventory, expansion, and cash-flow gap guidance for DMV business owners.",
  path: "/use-cases"
});

export default function UseCasesPage() {
  const useCases = getUseCases();

  return (
    <>
      <PageHeader
        eyebrow="Use cases"
        title="Funding guidance by problem."
        description="Payroll, repairs, equipment, inventory, expansion, and other moments where timing gets rude."
      />
      <CardGrid
        items={useCases.map((item) => ({
          title: item.title,
          description: item.problemDescription,
          href: `/use-cases/${item.slug}`
        }))}
      />
      <ComplianceNote />
    </>
  );
}
