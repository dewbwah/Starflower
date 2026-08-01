import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/blocks";
import { CheckIcon, PeopleIcon } from "@/components/icons";
import { CTA, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bookkeeping Services for Small Businesses",
  description:
    "Bookkeeping services from Starflower Bookkeeping: monthly bookkeeping, cleanup and catch-up, construction and trades, virtual bookkeeping, payroll, and CFO advisory.",
  alternates: { canonical: "/services" },
};

// Hub page: a short paragraph per service, each linking to its own page.
// Depth belongs on the individual pages, not here.
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything your books, and your business, need in one place</>}
        intro={
          <>
            Some businesses need someone to take the books off their plate every
            month. Some need a mess untangled first. Some have outgrown bookkeeping
            and need a financial partner. Here&apos;s what I offer, and who each piece
            is for.
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
            eyebrow="What I do"
            title="Pick the piece that fits where you are"
            intro={
              <>
                Not sure which one you need? That&apos;s genuinely what the call is
                for. Tell me what&apos;s going on and I&apos;ll point you to the right
                thing, even if it isn&apos;t me.
              </>
            }
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.href} delay={(i % 2) * 80}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
                >
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {service.label}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                    {service.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral-600">
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

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Card: the "office manager in a box" list */}
            <Reveal>
              <div className="leaf relative overflow-hidden bg-navy p-9 text-white sm:p-11">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-petal-100">
                    <PeopleIcon />
                  </span>
                  <h3 className="font-display text-2xl font-semibold">
                    Your office manager in a box
                  </h3>
                </div>
                <ul className="mt-8 space-y-3.5">
                  {[
                    "Sales tax filings",
                    "HR questions",
                    "Vendor problems and questions",
                    "Help thinking through a hire",
                    "A second opinion before you sign something",
                    "Getting your CPA everything they need",
                    "Talking decisions through with someone who knows your numbers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-petal-100">
                      <span className="mt-1 shrink-0 text-coral-400">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Copy */}
            <div>
              <SectionHeading
                eyebrow="Also on the table"
                title="The things that don't fit neatly in a list"
                intro={
                  <>
                    My clients call me their office manager in a box. A lot of what I
                    do is simply being the person who knows their numbers and picks up
                    the phone. If you&apos;re wondering whether something falls under
                    what I do, just ask.
                  </>
                }
              />
              <Reveal delay={100}>
                <div className="mt-8">
                  <CTAButton href="/contact" variant="ghost">
                    Ask if it&apos;s covered
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand heading="Not sure which one you need?" />
    </>
  );
}
