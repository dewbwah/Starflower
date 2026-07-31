import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Section";
import { BUSINESS, SERVICES, TRUST_SIGNALS } from "@/lib/constants";

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/referrals", label: "Tools I Recommend" },
  { href: "/trusted-partners", label: "Trusted Partners" },
  { href: "/contact", label: "Contact" },
  { href: "/book-a-call", label: "Book a Call" },
];

export function Footer() {
  const year = 2026; // Static build; bump on next deploy or swap for a build-time value.

  return (
    <footer className="bg-navy-900 text-petal-200">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-petal-200/80">
              CFO-level bookkeeping for contractors and small businesses. Based in{" "}
              {BUSINESS.baseCity}, {BUSINESS.baseState}, serving the Kansas City metro
              locally and clients nationwide, remote.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <p>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="font-medium text-white transition-colors hover:text-coral-400"
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-coral-400"
                >
                  {BUSINESS.email}
                </a>
              </p>
              {/* CONFIRM hours before launch. */}
              <p className="text-petal-200/70">{BUSINESS.hours}</p>
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-coral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-coral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Credentials
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-petal-200/85">
              {TRUST_SIGNALS.map((sig) => (
                <li key={sig}>{sig}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-petal-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-coral-400">
              Privacy Policy
            </Link>
            <span className="text-petal-200/40">
              Serving contractors &amp; small businesses nationwide
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
