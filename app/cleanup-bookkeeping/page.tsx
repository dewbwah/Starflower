import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { CTA } from "@/lib/constants";
import { SearchIcon, LayersIcon, RefreshIcon, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "QuickBooks Cleanup & Catch-Up Bookkeeping Services",
  description:
    "Books behind or a mess? QuickBooks cleanup and catch-up bookkeeping that rebuilds your records accurate, current, and tax-ready. One-time project with a clear price, zero judgment.",
  alternates: { canonical: "/cleanup-bookkeeping" },
};

const steps = [
  {
    n: "01",
    icon: SearchIcon,
    title: "Review",
    body: "I dig into your file to see exactly what's there: what's miscategorized, what's missing, where reconciliations broke down, and how far back it goes. You get a clear picture and a fixed price before any work starts.",
  },
  {
    n: "02",
    icon: LayersIcon,
    title: "Rebuild",
    body: "I fix the chart of accounts, recategorize transactions correctly, untangle duplicates and errors, and restore the structure your books should have had from the start.",
  },
  {
    n: "03",
    icon: RefreshIcon,
    title: "Reconcile",
    body: "Every account matched to your bank and credit card statements, month by month, until the books tie out to reality and the numbers can be trusted.",
  },
  {
    n: "04",
    icon: ShieldIcon,
    title: "Hand back clean",
    body: "You get accurate, current, tax-ready books plus a plain-English summary of what I found and fixed. From there, monthly service keeps them clean going forward.",
  },
];

export default function CleanupPage() {
  return (
    <>
      <PageHero
        eyebrow="Cleanup & catch-up bookkeeping"
        title={<>Behind on your books, or worried they&apos;re just wrong?</>}
        intro={
          <>
            Either way, you&apos;re in good company. Cleanup is one of the most common
            ways clients find me, and there&apos;s zero judgment here. Let&apos;s get
            your books accurate, current, and tax-ready.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      {/* Two situations */}
      <Section tone="white">
        <Container>
          <Reveal className="max-w-prose">
            <Eyebrow className="mb-3">Two ways this usually happens</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              You&apos;re probably in one of these two spots
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-petal-600">
                  Situation one
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                  Your books are behind
                </h3>
                <p className="mt-4 leading-relaxed text-ink/75">
                  Life got busy, the business grew, and the bookkeeping slid. You&apos;re
                  three, six, maybe twelve months behind and dreading tax season. No
                  lecture from me. I&apos;ll catch you all the way up and get you current,
                  then keep you there.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-600">
                  Situation two
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                  Your books are wrong
                </h3>
                <p className="mt-4 leading-relaxed text-ink/75">
                  They&apos;re up to date, but you don&apos;t trust them. A cheap
                  bookkeeper or a DIY QuickBooks file left things miscategorized and
                  unreconciled, so the reports look finished but tell you the wrong
                  story. I&apos;ll find what&apos;s off and rebuild it right.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4-step process graphic */}
      <Section tone="navy">
        <Container>
          <Reveal className="max-w-prose">
            <Eyebrow tone="petal" className="mb-3">
              The process
            </Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Review, rebuild, reconcile, hand back clean
            </h2>
            <p className="mt-4 text-lg text-petal-100">
              A clear, four-step project with a fixed price up front. No surprises, no
              open-ended hourly meter.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90}>
                <div className="relative flex h-full flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-petal-500/20 text-petal-100">
                      <s.icon />
                    </span>
                    <span className="font-display text-2xl font-semibold text-white/25">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-petal-100/85">
                    {s.body}
                  </p>
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-petal-400/50 lg:block"
                    >
                      &rarr;
                    </span>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Pricing frame: one-time then monthly */}
      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow className="mb-3">How it&apos;s priced</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                A one-time project, then a clean handoff
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
                <p>
                  Cleanup is a one-time project with a clear, fixed price based on how
                  far behind you are and how tangled things got. You&apos;ll know the
                  number before we start.
                </p>
                <p>
                  Once your books are caught up and correct, monthly service keeps them
                  that way, so you never have to pay for a cleanup twice.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={CTA.href} size="lg">
                  {CTA.primaryLabel}
                </CTAButton>
                <CTAButton href="/pricing" variant="ghost" size="lg">
                  See pricing
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl bg-white p-8 shadow-soft sm:p-10">
                <h3 className="font-display text-lg font-semibold text-navy">
                  What you walk away with
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Accurate, reconciled books you can actually trust",
                    "Records that are current and tax-ready",
                    "A plain-English summary of what was wrong and how I fixed it",
                    "A clean starting point for smart monthly bookkeeping",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink/80">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coral-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTABand heading="However far behind you are, we can sort it out" />
    </>
  );
}
