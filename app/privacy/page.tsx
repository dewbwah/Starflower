import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Starflower Bookkeeping. How we handle the information you share with us.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

// PLACEHOLDER privacy policy. Replace with reviewed legal copy before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={
          <>
            This is a placeholder privacy policy. Please replace it with a reviewed
            version before launch.
          </>
        }
      />
      <Section tone="white">
        <Container>
          <div className="prose-links mx-auto max-w-prose space-y-6 text-ink/80">
            <p className="text-sm text-ink/55">Last updated: July 30, 2026 (placeholder)</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Overview</h2>
              <p className="mt-3 leading-relaxed">
                {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
                privacy. This policy explains what information we collect through this
                website and how we use it. This is placeholder text and should be
                reviewed by a qualified professional before going live.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Information we collect
              </h2>
              <p className="mt-3 leading-relaxed">
                When you contact us or book a call, we may collect your name, email
                address, phone number, and any details you choose to share about your
                business. We use this information only to respond to you and provide our
                services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Booking and scheduling
              </h2>
              <p className="mt-3 leading-relaxed">
                Appointments are scheduled through a third-party calendar tool (Motion).
                Information you enter there is handled under that provider&apos;s privacy
                policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                How we use your information
              </h2>
              <p className="mt-3 leading-relaxed">
                We use your information to respond to inquiries, schedule and conduct
                calls, and deliver our services. We do not sell your personal
                information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions about this policy? Reach us at{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
                <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
