import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
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
  ScaleIcon,
  ShieldIcon,
  ReceiptIcon,
  RefreshIcon,
  PeopleIcon,
  LayersIcon,
} from "@/components/icons";

/**
 * CONFIRM WITH ANGIE: the original brief lists payroll processing among her
 * services, so this page is built on that basis. If she'd rather not take
 * payroll work directly, remove this route from SERVICES in lib/constants.ts
 * and from app/sitemap.ts and the page disappears from the nav and footer.
 */
export const metadata: Metadata = {
  title: "Small Business Payroll Services",
  description:
    "Payroll services for small businesses and contractors: payroll run on time, tax filings handled, and subcontractor 1099s tracked all year instead of every January.",
  alternates: { canonical: "/payroll" },
};

const handled = [
  {
    icon: RefreshIcon,
    title: "Payroll run on schedule",
    body: "Your team gets paid on the same day every time, without you blocking out an evening to make it happen.",
  },
  {
    icon: ShieldIcon,
    title: "Tax filings handled",
    body: "Federal, state, and local payroll tax filings and deposits submitted on time, which is the part that gets expensive when it slips.",
  },
  {
    icon: ReceiptIcon,
    title: "Subcontractor 1099s",
    body: "W-9s collected up front and payments tracked all year, so January is a non-event instead of a scramble.",
  },
  {
    icon: ScaleIcon,
    title: "New hire onboarding",
    body: "Getting a new employee properly set up, classified correctly, and into the system without paperwork landing back on you.",
  },
  {
    icon: PeopleIcon,
    title: "Employee questions",
    body: "Your team can ask about a pay stub or a withholding change without it becoming your problem to solve.",
  },
  {
    icon: LayersIcon,
    title: "Tied into your books",
    body: "Payroll flows straight into your bookkeeping and, for contractors, into job costing, so labor lands on the right job.",
  },
];

const whyItMatters = [
  "Payroll tax penalties are avoidable and genuinely expensive",
  "Worker classification mistakes get costly the longer they run",
  "Labor is usually your biggest cost and belongs in job costing",
  "Your team noticing payroll problems is bad for morale",
];

export default function PayrollPage() {
  return (
    <>
      <PageHero
        eyebrow="Payroll"
        title={<>Payroll that runs on time, without living in your head</>}
        intro={
          <>
            Payroll is the one thing in a small business that absolutely cannot slip.
            Your team notices immediately, and so does the IRS. It&apos;s a good
            candidate for handing off.
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
            eyebrow="What's handled"
            title="Everything from the run to the filings"
            intro={
              <>
                I set most clients up on Gusto, which I&apos;m a preferred partner for,
                then handle the running of it so you don&apos;t have to learn another
                system.
              </>
            }
          />
          <FeatureCards items={handled} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Why it's worth handing off"
                title="The mistakes here are the expensive kind"
                intro={
                  <>
                    Most payroll problems I see aren&apos;t carelessness. They&apos;re
                    a busy owner doing payroll at 9pm between other jobs. That&apos;s
                    exactly when small errors slip through.
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
              <CheckList items={whyItMatters} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <NavyPanel
            eyebrow="For contractors"
            title="Labor is the number that decides your margin"
          >
            <p>
              On a construction job, labor is usually the largest and least predictable
              cost. If payroll isn&apos;t flowing into job costing, your margins are
              guesses. I connect the two, so the hours your crew works land on the job
              they worked on.
            </p>
            <div className="pt-2">
              <CTAButton href="/bookkeeping-for-contractors" variant="ghost" size="lg">
                Bookkeeping for contractors
              </CTAButton>
            </div>
          </NavyPanel>
        </Container>
      </Section>

      <RelatedLinks
        items={[
          {
            href: "/monthly-bookkeeping",
            label: "Monthly bookkeeping",
            summary: "Payroll works best bundled with the monthly service.",
          },
          {
            href: "/referrals",
            label: "Tools I recommend",
            summary: "Gusto and the rest of the software I set clients up on.",
          },
          {
            href: "/pricing",
            label: "What it costs",
            summary: "Payroll is one of the four things that moves your monthly price.",
          },
        ]}
      />

      <CTABand heading="Let's take payroll off your plate" />
    </>
  );
}
