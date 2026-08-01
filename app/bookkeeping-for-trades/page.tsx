import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Testimonials } from "@/components/Testimonials";
import {
  SectionHeading,
  FeatureCards,
  CheckList,
  NavyPanel,
  RelatedLinks,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/lib/constants";
import {
  HardHatIcon,
  ReceiptIcon,
  ScaleIcon,
  LayersIcon,
  RefreshIcon,
  ChartIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Bookkeeping for HVAC, Plumbing & Electrical Companies",
  description:
    "Bookkeeping for trades and field service businesses: HVAC, plumbing, electrical, and landscaping. Job costing, truck and inventory tracking, service agreements, and technician payroll.",
  alternates: { canonical: "/bookkeeping-for-trades" },
};

const trades = [
  {
    icon: LayersIcon,
    title: "Job and call costing",
    body: "Whether you run big installs or fifteen service calls a day, you need to know which work actually pays. Costing gets set up to match how you sell.",
  },
  {
    icon: ScaleIcon,
    title: "Technician payroll",
    body: "Hourly, salary, commission, or a mix, with overtime and drive time landing where they belong instead of blurring your margins.",
  },
  {
    icon: RefreshIcon,
    title: "Truck stock and inventory",
    body: "Parts on the vans are real money sitting in the field. Tracked properly so it shows up in your numbers rather than disappearing into supplies.",
  },
  {
    icon: ReceiptIcon,
    title: "Service agreements",
    body: "Maintenance plans and recurring contracts recognized correctly, so your recurring revenue is visible instead of buried in one lump.",
  },
  {
    icon: HardHatIcon,
    title: "Install vs. service split",
    body: "Most trades run two businesses under one roof. Seeing them separately is usually the first genuinely surprising report I hand over.",
  },
  {
    icon: ChartIcon,
    title: "Seasonality planning",
    body: "HVAC especially lives and dies by the season. Knowing what a slow shoulder month looks like before it arrives changes what you do about it.",
  },
];

const signs = [
  "Busy season felt great but the bank account disagrees",
  "You can't say whether service or install makes you more money",
  "Parts and truck stock aren't really tracked anywhere",
  "Technician pay is complicated and nobody's certain it's right",
  "You price service calls based on what competitors charge",
];

export default function TradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bookkeeping for trades"
        title={<>HVAC, plumbing, electrical, and the crews out doing the work</>}
        intro={
          <>
            Trades businesses get the same treatment contractors do from most
            bookkeepers: books built for a shop with a cash register, not for a company
            running trucks, technicians, and hundreds of jobs a month. It doesn&apos;t
            have to be that way.
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
            eyebrow="What trades books need"
            title="The pieces a generalist usually misses"
            intro={
              <>
                Your business has moving parts a typical service business doesn&apos;t.
                Your books should account for them.
              </>
            }
          />
          <FeatureCards items={trades} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Sound familiar?"
                title="The pattern I see most often"
                intro={
                  <>
                    None of these mean anything is wrong with how you run the business.
                    They usually just mean the books were set up for a different kind of
                    company.
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
              <CheckList items={signs} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <NavyPanel
            eyebrow="Why me"
            title="I already speak the language of the field"
          >
            <p>
              I&apos;m the CFO of a 7-figure construction company, so
              crews, trucks, materials, and job-by-job margin are what I deal with every
              week. The vocabulary of your business is already mine, which means we can
              skip the part where you explain what a callback costs you.
            </p>
            <div className="pt-2">
              <CTAButton href="/bookkeeping-for-contractors" variant="ghost" size="lg">
                See the contractor page
              </CTAButton>
            </div>
          </NavyPanel>
        </Container>
      </Section>

      <Testimonials />

      <RelatedLinks
        items={[
          {
            href: "/bookkeeping-for-contractors",
            label: "For contractors",
            summary: "Job costing, retainage, progress billing, and WIP for construction.",
          },
          {
            href: "/payroll",
            label: "Payroll",
            summary: "Technician pay handled and flowing into your job costing.",
          },
          {
            href: "/cleanup-bookkeeping",
            label: "Cleanup & catch-up",
            summary: "If the books were never set up for a trades business, start here.",
          },
        ]}
      />

      <CTABand heading="Let's find out which work actually pays" />
    </>
  );
}
