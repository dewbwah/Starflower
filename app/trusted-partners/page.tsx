import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { SectionHeading, RelatedLinks } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { TRUSTED_PARTNERS, CTA, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trusted Partners & Local Referrals",
  description:
    "The CPAs, attorneys, insurance agents, and bankers Starflower Bookkeeping refers clients to. People Angie trusts with her own clients.",
  alternates: { canonical: "/trusted-partners" },
};

// Categories with no partners yet are hidden, so this page is safe to ship
// while Angie is still deciding who to list.
const filled = TRUSTED_PARTNERS.filter((c) => c.partners.length > 0);

export default function TrustedPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Trusted partners"
        title={<>The people I send my own clients to</>}
        intro={
          <>
            Bookkeeping is one piece of running a business. When a client needs
            something outside what I do, I don&apos;t want them searching and hoping.
            These are professionals I know, trust, and have watched take good care of
            people I care about.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          {filled.length > 0 ? (
            <>
              <SectionHeading
                eyebrow="Who I recommend"
                title="Good people, grouped by what they do"
                intro={
                  <>
                    No one pays to be on this list. They&apos;re here because I&apos;d
                    send my own family to them.
                  </>
                }
              />
              <div className="mt-12 space-y-14">
                {filled.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {group.category}
                    </h3>
                    <p className="mt-2 max-w-prose leading-relaxed text-ink/70">
                      {group.intro}
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.partners.map((p, i) => (
                        <Reveal key={p.name} delay={(i % 3) * 80}>
                          <div className="flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-7 shadow-soft">
                            <h4 className="font-display text-lg font-semibold text-navy">
                              {p.name}
                            </h4>
                            <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/75">
                              {p.blurb}
                            </p>
                            {p.href ? (
                              <a
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral-600 hover:text-coral-700"
                              >
                                Visit <span aria-hidden="true">&rarr;</span>
                              </a>
                            ) : null}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* CONFIRM: add real partners to TRUSTED_PARTNERS in
               lib/constants.ts and the full directory replaces this block. */
            <>
              <SectionHeading
                center
                eyebrow="Who I recommend"
                title="I'm putting this list together carefully"
                intro={
                  <>
                    I&apos;d rather recommend a handful of people I genuinely vouch for
                    than publish a long directory. The full list is coming shortly.
                  </>
                }
              />
              <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
                <div className="grid gap-5 sm:grid-cols-2">
                  {TRUSTED_PARTNERS.map((group) => (
                    <div
                      key={group.category}
                      className="rounded-2xl border border-petal-100 bg-cream p-7 shadow-soft"
                    >
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {group.category}
                      </h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                        {group.intro}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-center text-ink/70">
                  Need a recommendation right now? Call me at{" "}
                  <a
                    href={`tel:${BUSINESS.phoneHref}`}
                    className="font-semibold text-coral-600 hover:text-coral-700"
                  >
                    {BUSINESS.phone}
                  </a>{" "}
                  and I&apos;ll point you to the right person.
                </p>
              </Reveal>
            </>
          )}
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="mx-auto max-w-prose text-center">
            <SectionHeading
              center
              eyebrow="Are you a good fit for this list?"
              title="I'm always glad to meet good professionals"
              intro={
                <>
                  If you look after small businesses and contractors the way I try to,
                  I&apos;d like to know you. My clients ask me for recommendations
                  constantly, and I&apos;d rather have a real name to give them.
                </>
              }
            />
            <Reveal delay={100}>
              <div className="mt-8">
                <CTAButton href="/contact" variant="secondary" size="lg">
                  Get in touch
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <RelatedLinks
        items={[
          {
            href: "/referrals",
            label: "Tools I recommend",
            summary: "The software I set clients up on, from QuickBooks to Gusto.",
          },
          {
            href: "/about",
            label: "About Angie",
            summary: "Why I work the way I do, and who's on the team.",
          },
          {
            href: "/services",
            label: "All services",
            summary: "Everything I handle, and who each piece is for.",
          },
        ]}
      />

      <CTABand />
    </>
  );
}
