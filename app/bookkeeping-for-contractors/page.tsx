import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Testimonials } from "@/components/Testimonials";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { FlowerMark } from "@/components/FlowerMark";
import { CTA } from "@/lib/constants";
import {
  LayersIcon,
  ReceiptIcon,
  ScaleIcon,
  ShieldIcon,
  ChartIcon,
  HardHatIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Construction Bookkeeping & Bookkeeper for Contractors",
  description:
    "Construction bookkeeping done right: job costing, progress billing, retainage, WIP, and 1099s. Know which jobs actually make money. CFO-level oversight for contractors.",
  alternates: { canonical: "/bookkeeping-for-contractors" },
};

const requirements = [
  {
    icon: LayersIcon,
    title: "Job costing",
    body: "Every dollar of labor, material, and overhead tied to the right job, so you can see real margin per project instead of one blurry monthly number.",
  },
  {
    icon: ReceiptIcon,
    title: "Progress billing",
    body: "Bill in draws as the work gets done, tracked cleanly against the contract so nothing slips and cash keeps moving.",
  },
  {
    icon: ScaleIcon,
    title: "Retainage tracking",
    body: "Money held back on a job is still your money. I track retainage receivable and payable so it doesn't quietly disappear.",
  },
  {
    icon: ShieldIcon,
    title: "Subcontractor 1099s",
    body: "W-9s collected, payments tracked all year, and 1099s ready at year end without the January scramble.",
  },
  {
    icon: ChartIcon,
    title: "WIP tracking",
    body: "Work in progress and over/under billing kept current, so your financials reflect reality and your bonding company trusts them.",
  },
  {
    icon: HardHatIcon,
    title: "Contractor-aware categorizing",
    body: "Materials, equipment, and job costs coded the way a contractor's books should be, not the way a coffee shop's are.",
  },
];

export default function ContractorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bookkeeping for contractors"
        title={
          <>
            A generalist bookkeeper treats your construction company like a coffee
            shop.
          </>
        }
        intro={
          <>
            And that&apos;s exactly how profitable-looking contractors quietly lose
            money. Construction runs on jobs, not just months. If your books can&apos;t
            tell you which jobs made money, they aren&apos;t doing their job.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      {/* The pain */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow className="mb-3">The problem</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Your P&amp;L says you&apos;re fine. Your gut says otherwise.
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
                <p>
                  Most bookkeepers can categorize a transaction. Very few understand
                  that in construction, the same expense can be a job cost, overhead, or
                  equipment depending on context, and that getting it wrong makes your
                  margins meaningless.
                </p>
                <p>
                  So the reports look clean, the totals add up, and you still have no
                  idea whether the big job you just finished actually made you money.
                  That&apos;s not a spreadsheet problem. That&apos;s a job-costing
                  problem.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-coral-100 bg-coral-50 p-8 sm:p-10">
                <h3 className="font-display text-lg font-semibold text-navy">
                  Sound familiar?
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "It's hard to say which of last year's jobs were your best and worst.",
                    "Retainage and draws live mostly in your head.",
                    "1099 season turns into a scramble every January.",
                    "Your bonding company or lender asks questions you can't easily answer.",
                    "You bid the next job on instinct, because the cost history isn't there.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What construction books require */}
      <Section tone="petal">
        <Container>
          <Reveal className="max-w-prose">
            <Eyebrow className="mb-3">What construction books actually require</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              The things generalists skip, in plain English
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Here&apos;s what real construction bookkeeping includes, and why each
              piece matters to your bottom line.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-petal-100">
                    <r.icon />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Proof: her background */}
      <Section tone="white">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white sm:p-14">
              <FlowerMark
                tone="light"
                className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 opacity-[0.06]"
              />
              <div className="relative max-w-2xl">
                <Eyebrow tone="petal" className="mb-4">
                  Why me
                </Eyebrow>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Construction is home turf for me
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-petal-100">
                  I&apos;m the CFO of a 7-figure construction company.
                  I&apos;ve spent years inside construction finance, doing exactly this
                  work at scale: costing jobs, managing draws and retainage, keeping the
                  books lenders and bonding companies rely on. When I set up your job
                  costing, it&apos;s from someone who has to live with those numbers
                  every day.
                </p>
                <div className="mt-8">
                  <CTAButton href={CTA.href} size="lg">
                    {CTA.primaryLabel}
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Core promise */}
      <Section tone="petal">
        <Container>
          <div className="mx-auto max-w-prose text-center">
            <Reveal>
              <Eyebrow className="mb-3">The promise</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                You&apos;ll finally know which jobs actually make money
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                Not a guess. Not a gut feeling. A clear read on margin by job, so you
                bid smarter, cut the work that loses money, and grow the work that
                doesn&apos;t. That&apos;s the difference between books that record the
                past and books that help you run the business.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Testimonials />

      <CTABand heading="Bring me one job and let's cost it out together" />
    </>
  );
}
