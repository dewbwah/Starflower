import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Testimonials } from "@/components/Testimonials";
import { SectionHeading, FeatureCards, CheckList, RelatedLinks } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/lib/constants";
import { HardHatIcon, ScaleIcon, ChartIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bookkeeper in Kansas City",
  description:
    "Bookkeeping services for Kansas City small businesses and contractors. CFO-level oversight, job costing, and cleanup work across the KC metro on both sides of the state line.",
  alternates: { canonical: "/bookkeeper-kansas-city" },
};

const sectors = [
  {
    icon: HardHatIcon,
    title: "Construction & specialty trades",
    body: "KC has a deep bench of contractors and subs. Most of them are bidding work without real cost history behind them, which is the gap I close.",
  },
  {
    icon: ScaleIcon,
    title: "Field service businesses",
    body: "HVAC, plumbing, electrical, and landscaping crews running trucks across a metro that sprawls into two states.",
  },
  {
    icon: ChartIcon,
    title: "Growing small businesses",
    body: "Companies past the DIY stage that need real reporting before the next hire, the next location, or the next loan conversation.",
  },
];

const metroPoints = [
  "Businesses operating on both the Missouri and Kansas sides",
  "Multi-state payroll and sales tax questions handled properly",
  "Contractors working jobs across several municipalities",
  "Owners who'd rather meet on video than lose half a day to traffic",
];

export default function KansasCityPage() {
  return (
    <>
      <PageHero
        eyebrow="Kansas City metro"
        title={<>Bookkeeping for Kansas City businesses that have outgrown guesswork</>}
        intro={
          <>
            I work with businesses across the KC metro from my base just north of the
            river. Kansas City is a two-state market with plenty of businesses operating
            on both sides, and that adds wrinkles a generalist bookkeeper often
            misses.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <CredentialsStrip />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Who I serve here"
            title="The KC businesses I know best"
            intro={
              <>
                My background is construction finance, so contractors and trades are
                home turf. But any small business that wants clean books and straight
                answers is a fit.
              </>
            }
          />
          <FeatureCards items={sectors} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="The two-state thing"
                title="A metro split across a state line has quirks"
                intro={
                  <>
                    If you have employees in Missouri and Kansas, or you take work on
                    both sides, there are payroll and sales tax details that need
                    handling deliberately rather than hoping they sort themselves out.
                  </>
                }
              />
              <div className="mt-8">
                <CTAButton href={CTA.href} size="lg">
                  {CTA.primaryLabel}
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <CheckList items={metroPoints} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Testimonials />

      <RelatedLinks
        items={[
          {
            href: "/bookkeeping-for-contractors",
            label: "For contractors",
            summary: "Job costing, retainage, and progress billing done properly.",
          },
          {
            href: "/payroll",
            label: "Payroll",
            summary: "Multi-state payroll and filings handled without the headache.",
          },
          {
            href: "/bookkeeper-liberty-mo",
            label: "Liberty, MO",
            summary: "My home base in Clay County, just north of the river.",
          },
        ]}
      />

      <CTABand heading="Let's talk about your Kansas City business" />
    </>
  );
}
