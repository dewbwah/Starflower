import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Starflower Bookkeeping. What information this website collects, how it's used, and the choices you have.",
  alternates: { canonical: "/privacy" },
  // Stays noindex until Angie's attorney signs off; flip to index: true after review.
  robots: { index: false, follow: true },
};

// PENDING ATTORNEY REVIEW. Drafted Aug 2026; Angie's attorney reviews before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={
          <>
            The short version: this site collects as little as possible, and what you
            share with us stays with us. Here&apos;s the full picture.
          </>
        }
      />
      <Section tone="white">
        <Container>
          <div className="prose-links mx-auto max-w-prose space-y-8 text-ink/80">
            <p className="text-sm text-ink/55">Last updated: August 1, 2026</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Who we are
              </h2>
              <p className="mt-3 leading-relaxed">
                {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) provides bookkeeping and financial advisory services
                for contractors and small businesses. We&apos;re based in{" "}
                {BUSINESS.baseCity}, {BUSINESS.baseState}, and work with clients
                nationwide. This policy covers the information collected through this
                website, starflowerbookkeeping.com.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Information we collect
              </h2>
              <p className="mt-3 leading-relaxed">
                You can browse this entire site without giving us any personal
                information. We only receive information when you choose to share it:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li>
                  <strong className="text-navy">Contact form.</strong> The form on our
                  contact page opens your own email app with your name, email address,
                  and message. Your message comes to us as a regular email; the website
                  itself doesn&apos;t store what you type.
                </li>
                <li>
                  <strong className="text-navy">Booking a call.</strong> Appointments
                  are scheduled through Motion, a third-party scheduling tool. When you
                  book, Motion collects details like your name, email address, and the
                  time you pick, and shares them with us so we can hold your
                  appointment. Motion handles that information under its own privacy
                  policy.
                </li>
                <li>
                  <strong className="text-navy">Calling or emailing us.</strong> If you
                  reach out directly, we keep your contact details and correspondence
                  so we can respond and follow up.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Our website hosting provider (Vercel) keeps standard technical server
                logs, such as IP addresses and pages requested, which help keep the
                site secure and running.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                How we use your information
              </h2>
              <p className="mt-3 leading-relaxed">
                We use the information you share to respond to your questions, schedule
                and conduct calls, and provide our services. That&apos;s it. We
                don&apos;t sell your personal information, we don&apos;t rent it, and
                we don&apos;t share it with anyone for their marketing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Client financial information
              </h2>
              <p className="mt-3 leading-relaxed">
                If you become a client, the financial records you entrust to us are
                governed by your engagement agreement and handled confidentially. We
                treat your books with the same care we&apos;d want for our own, and we
                only share them with parties you authorize, such as your CPA.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Cookies</h2>
              <p className="mt-3 leading-relaxed">
                This site doesn&apos;t use advertising or analytics tracking cookies.
                For details on the little that&apos;s there and how to control it, see
                our <Link href="/cookie-settings">Cookie Settings</Link> page. Because
                we don&apos;t track visitors in the first place, the site behaves the
                same whether or not your browser sends a &ldquo;Do Not Track&rdquo;
                signal.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                How long we keep information
              </h2>
              <p className="mt-3 leading-relaxed">
                We keep correspondence and contact details as long as needed to serve
                you and meet legal and professional record-keeping requirements, then
                delete them. If you&apos;d like something removed sooner, just ask.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Your choices
              </h2>
              <p className="mt-3 leading-relaxed">
                You can ask us at any time what information we have about you, ask us
                to correct it, or ask us to delete it (subject to records we&apos;re
                required to keep). Email or call us using the details below and
                we&apos;ll take care of it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Children&apos;s privacy
              </h2>
              <p className="mt-3 leading-relaxed">
                This site is for business owners and isn&apos;t directed to children.
                We don&apos;t knowingly collect personal information from anyone under
                13.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Changes to this policy
              </h2>
              <p className="mt-3 leading-relaxed">
                If we change how we handle your information, we&apos;ll update this
                page and the date at the top. Meaningful changes will be noted plainly,
                not buried.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions about this policy or your information? Reach us at{" "}
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
