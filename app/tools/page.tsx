import PageHeader from "@/components/PageHeader";
import ToolCard from "@/components/ToolCard";
import ComplianceNote from "@/components/ComplianceNote";
import { getTools } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "DMV Funding Tools",
  description: "Funding readiness scorecards, cash-flow calculators, checklists, and funding preparation tools for DMV business owners.",
  path: "/tools"
});

export default function ToolsPage() {
  const tools = getTools();

  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Funding tools for owners who prefer clarity over panic."
        description="Use these scorecards and calculators to understand the situation before the application starts."
      />
      <section className="container grid gap-5 py-12 md:grid-cols-2">
        {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
      </section>
      <ComplianceNote />
    </>
  );
}
