import Link from "next/link";
import { Container } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { FlowerMark } from "@/components/FlowerMark";
import { NAV_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <FlowerMark
        tone="blue"
        className="pointer-events-none absolute -right-28 -top-28 h-[30rem] w-[30rem] opacity-[0.05]"
      />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <FlowerMark tone="coral" className="h-14 w-14" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-coral-600">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          This page wandered off
        </h1>
        <p className="mt-5 max-w-md text-lg text-ink/75">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back to
          something useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/" size="lg">
            Back to home
          </CTAButton>
          <CTAButton href="/book-a-call" variant="ghost" size="lg">
            Book a call
          </CTAButton>
        </div>
        <nav aria-label="Helpful links" className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium text-navy/70 underline decoration-petal-300 underline-offset-4 transition-colors hover:text-coral-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
