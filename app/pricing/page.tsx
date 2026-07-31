import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Much Does a Bookkeeper Cost? Honest Pricing",
  description:
    "How much does a bookkeeper cost? Honest ranges from $175 to $4,000 a month, what drives the price, and why cheap bookkeeping costs more later. Exact quote after one 15-minute call.",
  alternates: { canonical: "/pricing" },
};

const drivers = [
  {
    title: "Transaction volume",
    body: "More accounts and more monthly transactions mean more to categorize and reconcile. A one-person shop and a busy contractor with three cards aren't the same job.",
  },
  {
    title: "Payroll",
    body: "Running payroll, contractors, and the filings that come with them adds real work each month. If you have a team, that factors in.",
  },
  {
    title: "Cleanup needed",
    body: "If we start from a mess, there's a one-time cleanup to get you current and correct before smooth monthly service begins.",
  },
  {
    title: "Industry complexity",
    body: "Construction job costing, retainage, progress billing, and sales tax take more expertise than a simple service business. Complexity is priced honestly.",
  },
];

const cfoIncludes = [
  "A real read on your numbers, not just tidy data entry",
  "Problems flagged before they grow, not discovered at tax time",
  "Job or profit-center costing so you know what actually makes money",
  "A partner who talks directly to your CPA and speaks their language",
  "Reports you can actually read, with context on what they mean",
  "Someone you can call for anything business related",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>How much does a bookkeeper cost? Here&apos;s the honest answer.</>}
        intro={
          <>
            Bookkeeping generally runs anywhere from $175 to $4,000 a month depending on
            how complex your business is. That&apos;s a wide range, so let me explain
            what actually moves the number and why the cheapest option is rarely the
            cheapest option.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      {/* Range visual */}
      <Section tone="white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-3">The honest range</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              $175 to $4,000 a month
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Where you land depends on the work involved. Here&apos;s roughly how it
              breaks down.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                tier: "Simpler businesses",
                range: "$175 – $600 / mo",
                body: "Lower volume, no payroll, clean books already. Straightforward monthly categorizing, reconciling, and reporting.",
                featured: false,
              },
              {
                tier: "Growing & construction",
                range: "$600 – $1,800 / mo",
                body: "Higher volume, payroll, job costing, and industry complexity. The sweet spot for most contractors and small teams.",
                featured: true,
              },
              {
                tier: "Complex operations",
                range: "$1,800 – $4,000 / mo",
                body: "Multiple entities, heavy volume, deeper reporting, and closer CFO-level involvement each month.",
                featured: false,
              },
            ].map((card, i) => (
              <Reveal key={card.tier} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-8 shadow-soft ${
                    card.featured
                      ? "bg-navy text-white ring-2 ring-coral-500"
                      : "border border-petal-100 bg-cream text-ink"
                  }`}
                >
                  {card.featured ? (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-coral-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Most common
                    </span>
                  ) : null}
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      card.featured ? "text-petal-200" : "text-petal-600"
                    }`}
                  >
                    {card.tier}
                  </span>
                  <p
                    className={`mt-3 font-display text-2xl font-semibold ${
                      card.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {card.range}
                  </p>
                  <p
                    className={`mt-4 text-[0.95rem] leading-relaxed ${
                      card.featured ? "text-petal-100" : "text-ink/75"
                    }`}
                  >
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/55">
              These are honest ranges to set expectations, not a quote. Your exact
              number comes after one quick call, once I understand your business.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Cheap costs more */}
      <Section tone="petal">
        <Container>
          <div className="mx-auto max-w-prose">
            <Reveal>
              <Eyebrow className="mb-3">The market, honestly</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Cheap bookkeeping costs more later
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
                <p>
                  There&apos;s always someone offering to keep your books for $75 a
                  month, and I understand the appeal. Here&apos;s the honest truth
                  though: that price often costs more in the end. Cleanup work later
                  isn&apos;t cheap, and in the meantime you may overpay on taxes because
                  deductions got missed.
                </p>
                <p>
                  What you&apos;re paying me for is the oversight around the numbers,
                  not just the data entry. I&apos;ll tell you what your reports mean and
                  give you a heads up when something needs attention.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What drives price */}
      <Section tone="white">
        <Container>
          <Reveal className="max-w-prose">
            <Eyebrow className="mb-3">What drives the price</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Four things move the number
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {drivers.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 80}>
                <div className="flex h-full gap-4 rounded-2xl border border-petal-100 bg-cream p-7 shadow-soft">
                  <span className="font-display text-2xl font-semibold text-petal-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* What CFO-level includes */}
      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow className="mb-3">What you&apos;re really paying for</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                What CFO-level service includes that cheap bookkeeping skips
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                Anyone can record a transaction. The value is in everything that happens
                around it. This is the part that actually protects your money.
              </p>
              <div className="mt-8">
                <CTAButton href={CTA.href} size="lg">
                  {CTA.primaryLabel}
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="grid gap-3">
                {cfoIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTABand heading="Want your exact number? It takes one call." sub="I'll give you a real quote after a 15-minute conversation about your business. No prep needed, no obligation." />
    </>
  );
}
