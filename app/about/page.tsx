import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PetalFrame, PhotoPlaceholder } from "@/components/ui";
import { FlowerMark } from "@/components/FlowerMark";
import { CTA, BUSINESS } from "@/lib/constants";
import { HandshakeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Angie",
  description:
    "Meet Angie, founder of Starflower Bookkeeping. CFO of a multi-million dollar construction company bringing real financial oversight to small businesses nationwide.",
  alternates: { canonical: "/about" },
  // Trust page, not an SEO target.
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            I&apos;m the CFO who decided small businesses deserve the same financial
            oversight.
          </>
        }
        intro={
          <>
            Hi, I&apos;m {BUSINESS.founderName}. I run the finances for a multi-million
            dollar foundation repair company, and I started Starflower to bring that
            level of oversight to contractors and small businesses that have never had
            it.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      {/* Story + photo */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-24">
              <PetalFrame className="mx-auto max-w-sm shadow-lift">
                {/* PHOTO: drop Angie's headshot at /public/images/angie.jpg and
                    replace this placeholder with a next/image (see README). */}
                <PhotoPlaceholder
                  label="Photo of Angie goes here (petal-masked)"
                  className="aspect-[4/5] w-full"
                />
              </PetalFrame>
              <p className="mt-4 text-center text-sm text-ink/55">
                {BUSINESS.founderName}, founder of Starflower Bookkeeping
              </p>
            </Reveal>

            <Reveal delay={100} className="prose-links max-w-prose">
              <Eyebrow className="mb-3">My story</Eyebrow>
              <div className="space-y-5 text-lg leading-relaxed text-ink/80">
                <p>
                  For years I&apos;ve sat in the CFO seat of a multi-million dollar
                  construction company. That means I&apos;ve lived inside the numbers
                  that keep a real, growing business alive: cash flow, job costing,
                  payroll, taxes, and the hundred decisions that ride on knowing where
                  you actually stand.
                </p>
                <p>
                  I came up in the construction world, managing people and money on
                  projects where a single mispriced job can wipe out a good quarter. I
                  learned that clean books aren&apos;t the goal. They&apos;re the
                  starting line. The real value is what the numbers tell you: which
                  jobs make money, where cash is leaking, and what&apos;s coming before
                  it lands on you.
                </p>
                <p>
                  Along the way I kept meeting business owners who were flying blind.
                  Good, hardworking contractors and small business owners paying a cheap
                  bookkeeper to record the past, with no one helping them read it. Some
                  had books so tangled they were making decisions on numbers that
                  were flat-out wrong.
                </p>
                <p>
                  So I started Starflower Bookkeeping. Same financial oversight I bring
                  to a multi-million dollar company, sized and priced for yours. I work
                  fully remote from {BUSINESS.baseCity}, {BUSINESS.baseState}, in the
                  Kansas City metro, with clients all over the country.
                </p>
              </div>

              {/* Highlighted callout: third-party office manager */}
              <div className="not-prose mt-10 rounded-2xl border border-petal-200 bg-petal-50 p-7">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-petal-100">
                    <HandshakeIcon />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy">
                      More than a bookkeeper: a third-party office manager
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink/80">
                      My clients don&apos;t just hand me receipts. They call me when a
                      vendor question comes up, when they&apos;re weighing a hire, when
                      the CPA needs something, or when they just need someone who
                      understands the business to think it through with them. Consider me
                      the office manager you can reach for anything business related.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CredentialsStrip />

      {/* Values strip */}
      <Section tone="petal">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Straight talk",
                body: "I tell you what the numbers mean in plain English, including the parts you might not want to hear.",
              },
              {
                title: "Real oversight",
                body: "I flag problems before they grow instead of just recording them after they hurt.",
              },
              {
                title: "In your corner",
                body: "I work alongside your CPA and act as a partner in the business, not a data-entry service.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex items-start gap-4">
                  <FlowerMark tone="coral" className="mt-1 h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand heading="Let's talk about your business" />
    </>
  );
}
