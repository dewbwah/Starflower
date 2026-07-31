import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Testimonials } from "@/components/Testimonials";
import { SectionHeading, RelatedLinks } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { CASE_STUDIES, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real examples of Starflower Bookkeeping's work: what shape the books were in, what changed, and what it meant for the business.",
  alternates: { canonical: "/case-studies" },
  // Noindex while there are no published studies yet.
  robots: CASE_STUDIES.length === 0 ? { index: false, follow: true } : undefined,
};

export default function CaseStudiesPage() {
  const hasStudies = CASE_STUDIES.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={<>What this looks like in practice</>}
        intro={
          <>
            Every business arrives somewhere different. These are real examples of what
            the books looked like when we started, what actually got done, and what
            changed as a result.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          {hasStudies ? (
            <div className="space-y-10">
              {CASE_STUDIES.map((study, i) => (
                <Reveal key={study.slug} delay={(i % 2) * 80}>
                  <article className="rounded-3xl border border-petal-100 bg-cream p-8 shadow-soft sm:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                        {study.industry}
                      </span>
                      <span className="text-sm text-ink/60">{study.client}</span>
                    </div>

                    {study.metric ? (
                      <p className="mt-6 font-display text-4xl font-semibold text-coral-600">
                        {study.metric.value}{" "}
                        <span className="block text-base font-normal text-ink/70">
                          {study.metric.label}
                        </span>
                      </p>
                    ) : null}

                    <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                      {[
                        { term: "The situation", detail: study.mess },
                        { term: "What I did", detail: study.work },
                        { term: "The result", detail: study.result },
                      ].map((row) => (
                        <div key={row.term}>
                          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-petal-600">
                            {row.term}
                          </dt>
                          <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">
                            {row.detail}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Nothing published yet. Rather than invent results, this says so
               plainly and points people at the reviews, which are real. */
            <div className="mx-auto max-w-prose text-center">
              <SectionHeading
                center
                eyebrow="Coming soon"
                title="I'm writing these up properly"
                intro={
                  <>
                    I want these to be real numbers from real businesses, with
                    permission, rather than vague claims. They&apos;re being put
                    together now. In the meantime, the reviews below are from clients I
                    work with every month, and I&apos;m happy to walk you through
                    specific examples on a call.
                  </>
                }
              />
              <Reveal delay={100}>
                <div className="mt-8">
                  <CTAButton href={CTA.href} size="lg">
                    {CTA.primaryLabel}
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          )}
        </Container>
      </Section>

      <Testimonials />

      <RelatedLinks
        items={[
          {
            href: "/reviews",
            label: "Reviews",
            summary: "What clients say in their own words.",
          },
          {
            href: "/cleanup-bookkeeping",
            label: "Cleanup & catch-up",
            summary: "The service most of these stories start with.",
          },
          {
            href: "/bookkeeping-for-contractors",
            label: "For contractors",
            summary: "Job costing, retainage, and knowing which jobs pay.",
          },
        ]}
      />

      <CTABand />
    </>
  );
}
