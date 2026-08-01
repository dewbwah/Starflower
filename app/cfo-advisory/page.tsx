import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
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
  ChartIcon,
  ScaleIcon,
  LayersIcon,
  RefreshIcon,
  ShieldIcon,
  SearchIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Fractional CFO & Advisory Services for Small Business",
  description:
    "Outsourced CFO services for small businesses: cash flow forecasting, margin and job profitability analysis, and the financial guidance that comes after clean books.",
  alternates: { canonical: "/cfo-advisory" },
};

const work = [
  {
    icon: RefreshIcon,
    title: "Cash flow forecasting",
    body: "A forward look at what's coming in and going out, so you can see a tight month while there's still time to do something about it.",
  },
  {
    icon: ScaleIcon,
    title: "Margin analysis",
    body: "Which services, products, or customers actually carry your business, and which ones quietly cost you money to keep.",
  },
  {
    icon: LayersIcon,
    title: "Job profitability",
    body: "For contractors especially: real margin per job, so your next bid is built on your own cost history instead of a hopeful guess.",
  },
  {
    icon: ChartIcon,
    title: "Growth decisions",
    body: "Can you afford the hire, the truck, the second crew? We look at the numbers together before you commit to the payment.",
  },
  {
    icon: SearchIcon,
    title: "Pricing support",
    body: "Most small businesses underprice because they've never fully costed the work. We find out what your work actually costs to deliver.",
  },
  {
    icon: ShieldIcon,
    title: "Lender & bonding readiness",
    body: "Financials that hold up when a bank or bonding company asks questions, prepared before you need them rather than during a scramble.",
  },
];

const signs = [
  "You're profitable on paper but never seem to have cash",
  "You're making six-figure decisions on gut feel",
  "You can't say which part of the business earns the most",
  "Your lender or bonding company wants more than you can produce",
  "You're growing and it somehow feels harder, not easier",
];

export default function CfoAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="CFO & advisory"
        title={<>When clean books aren&apos;t the finish line anymore</>}
        intro={
          <>
            Good bookkeeping tells you what happened. At some point that stops being
            enough, and you need someone to help you decide what to do next. That&apos;s
            the work I do every day as a CFO, sized for a business like yours.
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
            eyebrow="The work"
            title="What advisory actually looks like"
            intro={
              <>
                Not a vague monthly meeting. Specific questions, answered with your own
                numbers.
              </>
            }
          />
          <FeatureCards items={work} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Is this you?"
                title="Signs you've outgrown bookkeeping alone"
                intro={
                  <>
                    If a few of these land, it&apos;s usually a sign the business has
                    grown past what monthly reports on their own can tell you.
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
            title="I'm not borrowing this experience from a textbook"
          >
            <p>
              I sit in the CFO seat of a 7-figure construction company. Cash
              flow forecasting, job costing, and lender conversations aren&apos;t
              services I studied, they&apos;re what my week looks like. When we go
              through your numbers, you&apos;re getting the same thinking I apply to a
              company many times your size.
            </p>
            <p>
              Most businesses your size can&apos;t hire a CFO, and honestly most
              don&apos;t need a full-time one. They just need this thinking applied to
              their numbers a few times a year.
            </p>
          </NavyPanel>
        </Container>
      </Section>

      <RelatedLinks
        items={[
          {
            href: "/bookkeeping-for-contractors",
            label: "Bookkeeping for contractors",
            summary: "Job costing done properly, which is where contractor advisory starts.",
          },
          {
            href: "/monthly-bookkeeping",
            label: "Monthly bookkeeping",
            summary: "Clean, current books are the foundation advisory work is built on.",
          },
          {
            href: "/pricing",
            label: "What it costs",
            summary: "Where advisory sits in the range, and what drives the number.",
          },
        ]}
      />

      <CTABand heading="Let's look at your numbers together" />
    </>
  );
}
