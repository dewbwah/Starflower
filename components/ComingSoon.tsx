import type { ReactNode } from "react";
import { Container, Section } from "./Section";
import { PageHero } from "./PageHero";
import { CTAButton } from "./CTAButton";
import { CTABand } from "./CTABand";
import { CTA } from "@/lib/constants";

/**
 * Shared shell for Phase 2 stub pages. Gives each route a real headline, one
 * paragraph, and the CTA so the URL resolves cleanly, while the full content is
 * still to come. These pages are noindex and are intentionally NOT linked in the
 * nav yet (see each route's metadata).
 */
export function ComingSoon({
  eyebrow,
  title,
  paragraph,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  paragraph: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={paragraph}>
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>
      {children ? (
        <Section tone="white">
          <Container>{children}</Container>
        </Section>
      ) : null}
      <CTABand />
    </>
  );
}
