import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd, faqPageSchema } from "@/lib/schema";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bookkeeping FAQ: Costs, CPAs, Cleanup & More",
  description:
    "Straight answers to the questions business owners ask most: what a bookkeeper costs, bookkeeper vs. CPA, signs of a bad bookkeeper, construction bookkeeping, cleanup, and taxes.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      {/* FAQPage schema lives only on this page. */}
      <JsonLd data={faqPageSchema()} />

      <PageHero
        eyebrow="FAQ"
        title={<>The questions I get asked most, answered straight</>}
        intro={
          <>
            No jargon, no runaround. If your question isn&apos;t here, ask me on a call.
            I&apos;m happy to talk it through.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          <FAQAccordion />
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
