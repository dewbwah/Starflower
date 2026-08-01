import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the Starflower Bookkeeping website: what you can expect from this site and what we ask of you.",
  alternates: { canonical: "/terms" },
  // Stays noindex until Angie's attorney signs off; flip to index: true after review.
  robots: { index: false, follow: true },
};

// PENDING ATTORNEY REVIEW. Drafted Aug 2026; Angie's attorney reviews before launch.
export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        intro={
          <>
            The ground rules for using this website. Written to be read, not to
            intimidate.
          </>
        }
      />
      <Section tone="white">
        <Container>
          <div className="prose-links mx-auto max-w-prose space-y-8 text-ink/80">
            <p className="text-sm text-ink/55">Last updated: August 1, 2026</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Agreeing to these terms
              </h2>
              <p className="mt-3 leading-relaxed">
                By using starflowerbookkeeping.com (the &ldquo;site&rdquo;), you agree
                to these terms. The site is operated by {BUSINESS.name}{" "}
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), based in{" "}
                {BUSINESS.baseCity}, {BUSINESS.baseState}. If you don&apos;t agree with
                something here, please don&apos;t use the site, or better yet, reach
                out and ask us about it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                This site is information, not advice
              </h2>
              <p className="mt-3 leading-relaxed">
                Everything on this site, including blog posts, FAQs, and pricing
                guidance, is general information. It isn&apos;t accounting, tax, legal,
                or investment advice for your specific situation, and reading it
                doesn&apos;t make you a client. Advice tailored to your business only
                comes through an actual engagement with us, under a separate written
                agreement. For tax filings and legal questions, work with your CPA or
                attorney; we&apos;re happy to work alongside them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Becoming a client
              </h2>
              <p className="mt-3 leading-relaxed">
                Bookkeeping, payroll, cleanup, and advisory services are provided under
                a separate engagement agreement that spells out scope, pricing, and
                responsibilities. If anything in these website terms conflicts with
                your engagement agreement, the engagement agreement wins.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Booking and contact
              </h2>
              <p className="mt-3 leading-relaxed">
                Calls are scheduled through Motion, a third-party tool with its own
                terms and privacy practices. When you book a call or contact us, you
                agree that we may respond using the contact details you provide. We
                don&apos;t send marketing you didn&apos;t ask for.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Reviews and testimonials
              </h2>
              <p className="mt-3 leading-relaxed">
                Reviews on this site are from real clients, shared with permission.
                They describe those clients&apos; experiences; your results will depend
                on your business and circumstances.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Our content
              </h2>
              <p className="mt-3 leading-relaxed">
                The content on this site, including text, graphics, the Starflower
                name, and the flower mark, belongs to {BUSINESS.name}. You&apos;re
                welcome to share links to it. Please don&apos;t copy it, scrape it, or
                pass it off as your own without asking first.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Acceptable use
              </h2>
              <p className="mt-3 leading-relaxed">
                Don&apos;t misuse the site: no attempting to break, overload, or gain
                unauthorized access to it, no using it to send spam, and no using our
                contact channels for anything unlawful. Basically, use the site the way
                you&apos;d want someone using yours.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Third-party links and tools
              </h2>
              <p className="mt-3 leading-relaxed">
                We link to software and local partners we trust, and some links may be
                referral links. Those sites and tools have their own terms, and we
                aren&apos;t responsible for what happens on them. A recommendation is
                our honest opinion, not a guarantee.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                No warranties, limited liability
              </h2>
              <p className="mt-3 leading-relaxed">
                We work to keep this site accurate and available, but it&apos;s
                provided &ldquo;as is&rdquo; without warranties of any kind. To the
                fullest extent allowed by law, {BUSINESS.name} isn&apos;t liable for
                damages arising from your use of the site or reliance on its content.
                This doesn&apos;t limit any liability that can&apos;t be limited under
                applicable law, and it doesn&apos;t apply to services provided under an
                engagement agreement, which has its own terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Governing law
              </h2>
              <p className="mt-3 leading-relaxed">
                These terms are governed by the laws of the State of Missouri, and any
                disputes about them belong in the state or federal courts serving Clay
                County, Missouri.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Changes to these terms
              </h2>
              <p className="mt-3 leading-relaxed">
                We may update these terms from time to time. The date at the top always
                reflects the current version, and continuing to use the site after a
                change means you accept the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions about these terms? Reach us at{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
                <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>. See also
                our <Link href="/privacy">Privacy Policy</Link> and{" "}
                <Link href="/cookie-settings">Cookie Settings</Link>.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
