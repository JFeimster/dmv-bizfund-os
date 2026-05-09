import { getMarketConfig } from "@/lib/market";

export function organizationSchema() {
  const market = getMarketConfig();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: market.brandName,
    url: `https://${market.domain}`,
    description: market.publicDescriptor,
    parentOrganization: {
      "@type": "Organization",
      name: market.parentBrand
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
