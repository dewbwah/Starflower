import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { REFERRAL_TOOLS, CTA } from "@/lib/constants";

// PHASE 2 STUB — coming soon. Not linked in the nav yet. Noindex until built out.
// Vendor tools Angie recommends. Add real referral/affiliate links when ready.
export const metadata: Metadata = {
  title: "Tools I Recommend",
  description:
    "The vendor tools Starflower Bookkeeping recommends to clients: Gusto, Google Workspace, Anchor, QuickBooks, Xero, and Acorn Merchant. Coming soon.",
  robots: { index: false, follow: true },
};

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools I recommend"
        title={<>The tools I actually trust my clients with</>}
        intro={
          <>
            Over the years I&apos;ve tried a lot of software so you don&apos;t have to.
            These are the tools I recommend and set clients up on. A fuller page with my
            notes and referral links is coming soon.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          <Reveal>
            <Eyebrow className="mb-3">My short list</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REFERRAL_TOOLS.map((tool, i) => (
              <Reveal key={tool.name} delay={(i % 3) * 80}>
                {/* TODO: wrap in referral/affiliate link when available. */}
                <div className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-7 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-navy">
                    {tool.name}
                  </h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                    {tool.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
