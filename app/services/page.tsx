import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/blocks";
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
          <div className="mx-auto max-w-prose text-center">
            <SectionHeading
              center
              eyebrow="Also on the table"
              title="The things that don't fit neatly in a list"
              intro={
                <>
                  Sales tax filings, HR questions, vendor problems, help thinking
                  through a hire, or a second opinion before you sign something. A lot
                  of what I do for clients is simply being the person who knows their
                  numbers and picks up the phone. If you&apos;re wondering whether
                  something falls under what I do, just ask.
                </>
              }
            />
          </div>
        </Container>
      </Section>

      <CTABand heading="Not sure which one you need?" />
    </>
  );
}
