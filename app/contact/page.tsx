import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/blocks";
import { Eyebrow } from "@/components/ui";
import { BUSINESS, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Starflower Bookkeeping",
  description:
    "Get in touch with Starflower Bookkeeping. Call 816-451-1555, send a note, or book a 15-minute call. Based in Liberty, Missouri, serving the Kansas City metro and clients nationwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Have a question? Let&apos;s connect.</>}
        intro={
          <>
            The best way to talk through your books is a quick call, and my calendar is
            the fastest route there. If you just have a general question, the form below
            reaches me too.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow className="mb-3">Reach me</Eyebrow>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Prefer to book instead?
              </h2>
              <p className="mt-3 leading-relaxed text-ink/75">
                Appointments go through my calendar so we can grab a real fifteen
                minutes. This form is just for general questions.
              </p>
              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-navy">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${BUSINESS.phoneHref}`}
                      className="text-coral-600 hover:text-coral-700"
                    >
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-coral-600 hover:text-coral-700"
                    >
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Service area</dt>
                  <dd className="mt-1 text-ink/75">
                    Based in {BUSINESS.baseCity}, {BUSINESS.baseState}. I serve the
                    Kansas City metro locally and work with clients nationwide, fully
                    remote.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Hours</dt>
                  {/* CONFIRM hours before launch. */}
                  <dd className="mt-1 text-ink/75">{BUSINESS.hours}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <SectionHeading
            center
            eyebrow="Where I work"
            title="Local to Kansas City, available everywhere"
            intro={
              <>
                Starflower is a service-area business, so there&apos;s no storefront to
                visit. I meet clients over video and phone, which is how the work gets
                done anyway.
              </>
            }
          />

          <Reveal delay={100} className="mx-auto mt-12 max-w-4xl">
            {/* =================================================================
                GOOGLE BUSINESS PROFILE MAP EMBED
                Replace this placeholder with the embed from your Google Business
                Profile: Google Maps → your business → Share → Embed a map →
                copy the <iframe>. Recommended attributes:
                  loading="lazy"
                  title="Starflower Bookkeeping service area"
                  style={{ border: 0 }}
                Because the address is private, embed the SERVICE AREA map rather
                than a pin on the home address.
                ================================================================= */}
            <div
              className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-petal-300 bg-white p-10 text-center"
              role="note"
              aria-label="Map embed placeholder"
            >
              <div className="rounded-full bg-petal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-petal-600">
                Google map goes here
              </div>
              <p className="mt-6 max-w-md text-ink/70">
                Paste the Google Business Profile service-area map embed here. Since the
                address is private, embed the service area rather than a pin on the
                home address.
              </p>
              <p className="mt-6 text-sm font-semibold text-navy">
                Serving the Kansas City metro &amp; clients nationwide
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
