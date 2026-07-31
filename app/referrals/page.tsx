import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { SectionHeading, RelatedLinks } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { REFERRAL_TOOLS, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Software & Tools I Recommend",
  description:
    "The software Starflower Bookkeeping sets clients up on and recommends: QuickBooks, Xero, Gusto, Google Workspace, Anchor, and Acorn Merchant.",
  alternates: { canonical: "/referrals" },
};

// Group tools by category while preserving the order defined in constants.
const grouped = REFERRAL_TOOLS.reduce<Record<string, typeof REFERRAL_TOOLS>>(
  (acc, tool) => {
    (acc[tool.category] ||= []).push(tool);
    return acc;
  },
  {}
);

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools I recommend"
        title={<>The software I actually trust my clients with</>}
        intro={
          <>
            I&apos;ve tried a lot of tools over the years so you don&apos;t have to.
            These are the ones I set clients up on and genuinely recommend. I&apos;m a
            certified partner with several of them, which usually means better pricing
            and a real person to call when something breaks.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="My short list"
            title="What I put clients on, and why"
            intro={
              <>
                Good software won&apos;t fix bad bookkeeping, but bad software makes
                good bookkeeping much harder than it needs to be.
              </>
            }
          />

          <div className="mt-12 space-y-12">
            {Object.entries(grouped).map(([category, tools]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-petal-600">
                  {category}
                </h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {tools.map((tool, i) => (
                    <Reveal key={tool.name} delay={(i % 2) * 80}>
                      <div className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-7 shadow-soft">
                        <h4 className="font-display text-xl font-semibold text-navy">
                          {tool.name}
                        </h4>
                        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/75">
                          {tool.blurb}
                        </p>
                        {/* CONFIRM: add referral links in lib/constants.ts. */}
                        {tool.href ? (
                          <a
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral-600 hover:text-coral-700"
                          >
                            Take a look <span aria-hidden="true">&rarr;</span>
                          </a>
                        ) : null}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="mx-auto max-w-prose text-center">
            <SectionHeading
              center
              eyebrow="A note on this page"
              title="Recommendations, not sales pitches"
              intro={
                <>
                  I have partner relationships with some of these companies, and some of
                  these links may earn Starflower a referral. That never changes what I
                  recommend. If a tool isn&apos;t right for your business I&apos;ll tell
                  you so, and if you&apos;re already on something that works, I&apos;m
                  not going to move you for the sake of it.
                </>
              }
            />
          </div>
        </Container>
      </Section>

      <RelatedLinks
        items={[
          {
            href: "/trusted-partners",
            label: "Trusted partners",
            summary: "The people I refer clients to when they need more than a bookkeeper.",
          },
          {
            href: "/payroll",
            label: "Payroll",
            summary: "Gusto is where most clients land, and I run it for them.",
          },
          {
            href: "/services",
            label: "All services",
            summary: "Everything I do, and who each piece is for.",
          },
        ]}
      />

      <CTABand heading="Not sure what you should be running on?" />
    </>
  );
}
