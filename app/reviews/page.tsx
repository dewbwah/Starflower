import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { SectionHeading, RelatedLinks } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { CTA, TESTIMONIALS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Starflower Bookkeeping Reviews",
  description:
    "Reviews for Starflower Bookkeeping from business owners across construction, trades, and small service businesses. Read what working with Angie is actually like.",
  alternates: { canonical: "/reviews" },
};

/**
 * CONFIRM: more detailed Google reviews are being collected. Add them to
 * TESTIMONIALS in lib/constants.ts and they appear here and on the home page.
 *
 * GOOGLE REVIEW LINK: paste the "write a review" short link from the Google
 * Business Profile into REVIEW_LINK below to activate the button.
 */
const REVIEW_LINK: string | null = null;

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-coral-500" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={<>What it&apos;s actually like to work with me</>}
        intro={
          <>
            I&apos;d rather you hear it from the people I work with every month than
            from me. These are real reviews from real clients.
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
            eyebrow="In their words"
            title="Kind words from people I get to work with"
            center
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink/85">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-petal-100 pt-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white"
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-ink/55">Verified Google review</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CredentialsStrip />

      <Section tone="petal">
        <Container>
          <div className="mx-auto max-w-prose text-center">
            <SectionHeading
              center
              eyebrow="Worked with me?"
              title="I'd be grateful for a review"
              intro={
                <>
                  Reviews are how most people find me, and they genuinely make a
                  difference for a small business. If I&apos;ve helped you, a couple of
                  sentences means a lot.
                </>
              }
            />
            <Reveal delay={100}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {REVIEW_LINK ? (
                  <a
                    href={REVIEW_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-coral-600 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2"
                  >
                    Leave a Google review
                  </a>
                ) : (
                  // Until the Google review link is added, point people at the phone.
                  <p className="text-ink/70">
                    Give me a call at{" "}
                    <a
                      href={`tel:${BUSINESS.phoneHref}`}
                      className="font-semibold text-coral-600 hover:text-coral-700"
                    >
                      {BUSINESS.phone}
                    </a>{" "}
                    and I&apos;ll send you the review link.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <RelatedLinks
        items={[
          {
            href: "/about",
            label: "About Angie",
            summary: "The CFO story behind the business, and the family who runs it.",
          },
          {
            href: "/pricing",
            label: "What it costs",
            summary: "Honest ranges before you ever get on a call.",
          },
          {
            href: "/faq",
            label: "Common questions",
            summary: "The things people usually want to know before booking.",
          },
        ]}
      />

      <CTABand heading="Ready to see what that looks like for you?" />
    </>
  );
}
