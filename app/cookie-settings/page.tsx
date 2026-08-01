import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description:
    "How Starflower Bookkeeping's website uses cookies (very little) and how you can control them.",
  alternates: { canonical: "/cookie-settings" },
  // Stays noindex until Angie's attorney signs off; flip to index: true after review.
  robots: { index: false, follow: true },
};

// PENDING ATTORNEY REVIEW. Drafted Aug 2026; Angie's attorney reviews before launch.
// If analytics or a consent tool is ever added, the opt-in/opt-out controls belong
// on this page.
export default function CookieSettingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Settings"
        intro={
          <>
            Good news: there&apos;s not much to manage. This site runs almost entirely
            cookie-free, and this page explains the little that&apos;s there.
          </>
        }
      />
      <Section tone="white">
        <Container>
          <div className="prose-links mx-auto max-w-prose space-y-8 text-ink/80">
            <p className="text-sm text-ink/55">Last updated: August 1, 2026</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                What cookies are
              </h2>
              <p className="mt-3 leading-relaxed">
                Cookies are small text files a website stores in your browser. Sites
                use them for things like remembering logins, measuring traffic, or
                following you around the internet with ads. We think you should know
                exactly which of those apply here.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                What this site uses
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li>
                  <strong className="text-navy">Advertising cookies: none.</strong> We
                  don&apos;t run ad trackers and we don&apos;t sell or share your
                  browsing activity.
                </li>
                <li>
                  <strong className="text-navy">Analytics cookies: none.</strong> The
                  site doesn&apos;t currently set analytics cookies. If that ever
                  changes, we&apos;ll update this page first and give you a way to opt
                  out right here.
                </li>
                <li>
                  <strong className="text-navy">Essential cookies.</strong> Our hosting
                  provider may use strictly technical cookies where needed to serve the
                  site securely. These don&apos;t track you and can&apos;t be turned
                  off, because the site needs them to work.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Third-party tools
              </h2>
              <p className="mt-3 leading-relaxed">
                The booking calendar on our{" "}
                <Link href="/book-a-call">Book a Call</Link> page is provided by
                Motion, and content embedded from a third party can set its own
                cookies under that provider&apos;s policies. If you&apos;d rather not
                interact with the embed, you can always book by calling us instead at{" "}
                <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Controlling cookies in your browser
              </h2>
              <p className="mt-3 leading-relaxed">
                Every major browser lets you view, block, and delete cookies in its
                privacy settings, either for all sites or site by site. Look for
                &ldquo;Privacy and security&rdquo; in Chrome or Edge,
                &ldquo;Privacy&rdquo; in Safari, or &ldquo;Privacy &amp;
                Security&rdquo; in Firefox. Blocking cookies won&apos;t break anything
                on this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions about any of this? Reach us at{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
                <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>. See also
                our <Link href="/privacy">Privacy Policy</Link> and{" "}
                <Link href="/terms">Terms of Service</Link>.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
