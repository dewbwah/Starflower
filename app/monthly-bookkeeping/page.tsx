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
  ReceiptIcon,
  RefreshIcon,
  ChartIcon,
  ShieldIcon,
  ScaleIcon,
  LayersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Monthly Bookkeeping Services",
  description:
    "Monthly bookkeeping services that keep your books accurate and current: every transaction categorized and reconciled, reports you can read, and problems flagged early.",
  alternates: { canonical: "/monthly-bookkeeping" },
};

const included = [
  {
    icon: ReceiptIcon,
    title: "Every transaction categorized",
    body: "Income and expenses coded correctly and consistently, so your reports mean the same thing in June as they did in January.",
  },
  {
    icon: RefreshIcon,
    title: "Accounts reconciled",
    body: "Bank and credit card accounts matched to your statements every month, so your books reflect what actually happened.",
  },
  {
    icon: ReceiptIcon,
    title: "Invoices and bills managed",
    body: "Accounts receivable and payable kept current, so you know who owes you and what's coming due.",
  },
  {
    icon: ScaleIcon,
    title: "Payroll, if you need it",
    body: "Payroll run on schedule with the filings handled, and contractor 1099s tracked all year instead of every January.",
  },
  {
    icon: ChartIcon,
    title: "Reports you can actually read",
    body: "A profit and loss, balance sheet, and cash flow statement delivered on a predictable schedule, in plain language.",
  },
  {
    icon: ShieldIcon,
    title: "Problems flagged early",
    body: "If something looks off, you hear about it that month, not next spring when your CPA finds it.",
  },
];

const difference = [
  "A note each month on what changed and what it means for you",
  "A heads up when a number moves in a direction worth watching",
  "Your questions answered in plain English, whenever they come up",
  "Books your CPA can file from without billing you to fix them first",
  "A clear picture of whether you actually made money this month",
];

export default function MonthlyBookkeepingPage() {
  return (
    <>
      <PageHero
        eyebrow="Monthly bookkeeping"
        title={<>Clean books every month, with someone actually reading them</>}
        intro={
          <>
            Plenty of services will record your transactions and send you a report.
            The part that usually goes missing is somebody looking at that report and
            telling you what it says. That&apos;s the part I care most about.
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
            eyebrow="What happens each month"
            title="The work, start to finish"
            intro={
              <>
                Here&apos;s exactly what gets done, so there&apos;s no mystery about
                what you&apos;re paying for.
              </>
            }
          />
          <FeatureCards items={included} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="The difference"
                title="Recording the numbers is the easy part"
                intro={
                  <>
                    Software can categorize a transaction. What it can&apos;t do is
                    notice that your material costs crept up four months in a row, or
                    that one customer is quietly becoming your cash flow problem.
                    That&apos;s the judgment you&apos;re really hiring.
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
              <CheckList items={difference} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <NavyPanel
            eyebrow="Getting started"
            title="What if my books are behind right now?"
          >
            <p>
              That&apos;s completely normal, and it doesn&apos;t disqualify you from
              anything. We start with a one-time cleanup to get you accurate and
              current, then monthly service keeps you there. Most clients arrive this
              way, so there&apos;s no need to tidy up before you call me.
            </p>
            <div className="pt-2">
              <CTAButton href="/cleanup-bookkeeping" variant="ghost" size="lg">
                How cleanup works
              </CTAButton>
            </div>
          </NavyPanel>
        </Container>
      </Section>

      <Testimonials />

      <RelatedLinks
        items={[
          {
            href: "/pricing",
            label: "What it costs",
            summary:
              "Honest ranges and the four things that actually move the price.",
          },
          {
            href: "/cleanup-bookkeeping",
            label: "Cleanup & catch-up",
            summary:
              "Behind or unsure your numbers are right? Start here, then move to monthly.",
          },
          {
            href: "/cfo-advisory",
            label: "CFO & advisory",
            summary:
              "For businesses that have outgrown bookkeeping and want a financial partner.",
          },
        ]}
      />

      <CTABand heading="Let's get your months running smoothly" />
    </>
  );
}
