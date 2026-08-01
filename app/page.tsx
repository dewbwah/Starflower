import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { FlowerMark } from "@/components/FlowerMark";
import { Testimonials } from "@/components/Testimonials";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Rise } from "@/components/ui";
import { CTA, BUSINESS } from "@/lib/constants";
import {
  ChartIcon,
  HardHatIcon,
  BroomIcon,
  QuoteIcon,
  ReceiptIcon,
  ScaleIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "CFO-Level Bookkeeping for Contractors & Small Businesses",
  description:
    "CFO-level bookkeeping for contractors and small businesses nationwide. Based in Liberty, Missouri. I don't just keep your books clean, I tell you what your numbers are saying.",
  alternates: { canonical: "/" },
};

const proofPoints = [
  {
    icon: ChartIcon,
    title: "CFO of a 7-figure company",
    body: "I run the finances for a 7-figure construction company. That same level of financial oversight is what I bring to your books.",
  },
  {
    icon: HardHatIcon,
    title: "Construction industry specialist",
    body: "Job costing, progress billing, retainage, WIP, 1099s. I speak contractor, so I catch the things a generalist bookkeeper never will.",
  },
  {
    icon: BroomIcon,
    title: "Cleanup & catch-up expert",
    body: "Behind on your books or inherited a mess? Cleanup is one of the most common ways clients find me, and one of my favorite things to fix.",
  },
];

const whoIHelp = [
  {
    icon: HardHatIcon,
    title: "Contractors & construction",
    body: "General contractors, foundation and concrete, remodelers, and the trades that run job to job.",
  },
  {
    icon: ScaleIcon,
    title: "Trades & field service",
    body: "Electricians, plumbers, HVAC, landscapers, and crews billing work in the field.",
  },
  {
    icon: ReceiptIcon,
    title: "Service businesses",
    body: "Consultants, agencies, and small service companies that need clean books and real answers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-cream">
        <FlowerMark
          tone="blue"
          className="pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] opacity-[0.05]"
        />
        {/* Extra top padding clears the floating glass nav overlapping this section. */}
        <Container className="relative grid items-center gap-14 pb-16 pt-32 sm:pb-24 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Rise>
              <Eyebrow className="mb-5">Bookkeeping with a CFO behind it</Eyebrow>
            </Rise>
            <Rise delay={60}>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
                CFO-level bookkeeping for contractors and small businesses,{" "}
                <span className="text-coral-600">nationwide</span>.
              </h1>
            </Rise>
            <Rise delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
                I&apos;m not a bookkeeper who took a QuickBooks course. I&apos;m the
                CFO of a 7-figure construction company, and I bring that
                same financial oversight to your business. I don&apos;t just keep your
                books clean, I tell you what your numbers are saying.
              </p>
            </Rise>
            <Rise delay={180}>
              <div className="mt-9 flex flex-col items-start gap-3">
                <CTAButton href={CTA.href} size="lg" className="whitespace-nowrap">
                  {CTA.primaryLabel}
                </CTAButton>
                <p className="whitespace-nowrap text-sm text-ink/60">
                  {CTA.supportShort}
                </p>
              </div>
            </Rise>
          </div>

          {/* Visual: a stylized report card, petal-framed, echoing the logo */}
          <Reveal delay={160} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="leaf bg-navy p-9 shadow-lift sm:p-11">
                <div className="flex items-center justify-between">
                  <FlowerMark tone="light" className="h-9 w-9" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-petal-200">
                    Profit by job
                  </span>
                </div>
                <div className="mt-8 space-y-5">
                  {[
                    { label: "Riverside remodel", value: "+ $24,180", good: true },
                    { label: "Oak St. foundation", value: "+ $11,540", good: true },
                    { label: "Elm Ave. addition", value: "− $3,220", good: false },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-petal-200">{row.label}</span>
                        <span
                          className={`font-semibold ${
                            row.good ? "text-petal-100" : "text-coral-400"
                          }`}
                        >
                          {row.value}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${
                            row.good ? "bg-petal-400" : "bg-coral-500"
                          }`}
                          style={{ width: row.good ? "78%" : "22%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl bg-white/5 p-4 text-sm text-petal-100">
                  <span className="font-semibold text-white">Elm Ave. is losing money.</span>{" "}
                  Here&apos;s why, and what to change on the next bid.
                </div>
              </div>
              <FlowerMark
                tone="coral"
                className="absolute -bottom-6 -right-6 h-16 w-16 rotate-12 drop-shadow-md"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <CredentialsStrip />

      {/* ---------------- PROOF POINTS ---------------- */}
      <Section tone="white">
        <Container>
          <Reveal className="max-w-prose">
            <Eyebrow className="mb-3">Why owners switch to me</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Most bookkeepers record the past. I help you run the business.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {proofPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-petal-100">
                    <p.icon />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-ink/75">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- REVIEWS (early, so visitors hit proof fast) ---------------- */}
      <Testimonials tone="cream" />

      {/* ---------------- WHO I HELP ---------------- */}
      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <Eyebrow className="mb-3">Who I help</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Built for businesses that run on jobs, not just months
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                Construction and the trades are home turf for me, but any small
                service business that wants clean books and straight answers is a
                fit. If you&apos;ve ever finished a busy month with no idea whether
                you actually made money, we should talk.
              </p>
              <div className="mt-8">
                <CTAButton href="/bookkeeping-for-contractors" variant="secondary">
                  See bookkeeping for contractors
                </CTAButton>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-3 lg:gap-4">
              {whoIHelp.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-petal-100 text-navy">
                      <w.icon />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------- CORE ANGLE / SECOND OPINION ---------------- */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="leaf relative overflow-hidden bg-navy p-10 text-white sm:p-14">
                <FlowerMark
                  tone="light"
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-[0.07]"
                />
                <QuoteIcon className="h-10 w-10 text-petal-200" />
                <p className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
                  &ldquo;I don&apos;t just keep your books clean. I tell you where
                  you&apos;re leaking money, which jobs are actually profitable, and
                  what&apos;s coming before it hits you.&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-petal-200">
                  {BUSINESS.founderName}, founder of Starflower Bookkeeping
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow className="mb-3">Worth knowing</Eyebrow>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Why the cheapest option often costs more
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                A lot of my work starts with books that were kept on the cheap. That
                low monthly rate feels great right up until tax time, when the numbers
                don&apos;t hold up and the deductions were missed. It&apos;s a really
                easy thing to get caught by, and it&apos;s nobody&apos;s fault for
                trying to keep costs down.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                If something feels off, bring me your books and your questions.
                Fifteen minutes usually tells us both a lot.
              </p>
              <div className="mt-8">
                <CTAButton href={CTA.href} size="lg">
                  {CTA.primaryLabel}
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------------- QUICK LINKS ---------------- */}
      <Section tone="petal">
        <Container>
          <Reveal className="max-w-prose">
            <Eyebrow className="mb-3">Where to start</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Pick the door that fits
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/bookkeeping-for-contractors",
                title: "Bookkeeping for contractors",
                body: "Job costing done right, so you know which jobs actually make money.",
              },
              {
                href: "/cleanup-bookkeeping",
                title: "Cleanup & catch-up",
                body: "Behind or in a mess? I rebuild your books accurate, current, and tax-ready.",
              },
              {
                href: "/pricing",
                title: "What it costs",
                body: "Honest ranges and exactly what drives the price. No games.",
              },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 80}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl border border-petal-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
                >
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                    {card.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral-600">
                    Learn more{" "}
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
