import { BUSINESS, SITE_URL, FAQS } from "./constants";

/**
 * AccountingService is a LocalBusiness subtype. Because Starflower is a
 * service-area business, we describe the area served but publish no street
 * address.
 */
export function accountingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/icon`,
    priceRange: "$$",
    description:
      "CFO-level bookkeeping for contractors and small businesses nationwide. Based in Liberty, Missouri, serving the Kansas City metro locally and clients everywhere, remote.",
    // Service-area business: base location without a public street address.
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.baseCity,
      addressRegion: BUSINESS.baseStateShort,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Kansas City" },
      { "@type": "AdministrativeArea", name: "Kansas City metropolitan area" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "Construction bookkeeping",
      "Job costing",
      "QuickBooks cleanup",
      "Catch-up bookkeeping",
      "Payroll processing",
      "Sales tax management",
      "Profitability analysis",
    ],
    sameAs: [] as string[],
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Small helper so pages can drop a <script type="application/ld+json"> cleanly. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, server-rendered content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
