import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { BUSINESS, CTA } from "@/lib/constants";

// PHASE 2 STUB — not linked in the nav yet, but fully functional. Noindex until
// launch. Appointments always go through the Motion embed on /book-a-call, never
// this form. This form is for general questions only.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Starflower Bookkeeping. For appointments, book a call. For general questions, send a note.",
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Have a question? Let&apos;s connect.</>}
        intro={
          <>
            The best way to talk through your books is a quick call. If you just have a
            general question, use the form below and I&apos;ll get back to you.
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
                Appointments go through my calendar so we can grab a real 15 minutes.
                This form is just for general questions.
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
                  <dt className="font-semibold text-navy">Based in</dt>
                  <dd className="mt-1 text-ink/75">
                    {BUSINESS.baseCity}, {BUSINESS.baseState}. Serving the Kansas City
                    metro and clients nationwide, remote.
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

      <CTABand />
    </>
  );
}
