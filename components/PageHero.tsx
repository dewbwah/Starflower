import type { ReactNode } from "react";
import { Container } from "./Section";
import { FlowerMark } from "./FlowerMark";
import { Eyebrow, Rise } from "./ui";

/** Reusable inner-page hero with the low-opacity petal motif. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** CTA row or extra content. */
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Single oversized, very low-opacity petal behind the hero. */}
      <FlowerMark
        tone="blue"
        className="pointer-events-none absolute -left-24 -top-28 h-[26rem] w-[26rem] opacity-[0.05]"
      />
      {/* Extra top padding clears the floating glass nav overlapping this section. */}
      <Container className="relative pb-16 pt-32 sm:pb-24 sm:pt-36">
        <div className="max-w-prose">
          {eyebrow ? (
            <Rise>
              <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            </Rise>
          ) : null}
          <Rise delay={60}>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              {title}
            </h1>
          </Rise>
          {intro ? (
            <Rise delay={120}>
              <div className="mt-6 text-lg leading-relaxed text-ink/80">{intro}</div>
            </Rise>
          ) : null}
          {children ? (
            <Rise delay={180}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                {children}
              </div>
            </Rise>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
