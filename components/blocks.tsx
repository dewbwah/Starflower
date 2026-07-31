import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";
import { CheckIcon } from "./icons";
import { FlowerMark } from "./FlowerMark";

/** Section heading block, optionally centered. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  /** "dark" for use on the navy background. */
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={center ? "mx-auto max-w-prose text-center" : "max-w-prose"}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "dark" ? "petal" : "coral"} className="mb-3">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <div
          className={`mt-5 text-lg leading-relaxed ${
            tone === "dark" ? "text-petal-100" : "text-ink/75"
          }`}
        >
          {intro}
        </div>
      ) : null}
    </Reveal>
  );
}

export type Feature = {
  icon?: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

/** Grid of icon + title + body cards. */
export function FeatureCards({
  items,
  columns = 3,
  tone = "cream",
}: {
  items: Feature[];
  columns?: 2 | 3;
  /** Card surface, chosen to contrast with the section behind it. */
  tone?: "cream" | "white";
}) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  const surface =
    tone === "white"
      ? "bg-white border-petal-100"
      : "bg-cream border-petal-100";
  return (
    <div className={`mt-12 grid gap-6 ${cols}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 80}>
          <div
            className={`flex h-full flex-col rounded-2xl border p-7 shadow-soft ${surface}`}
          >
            {item.icon ? (
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-petal-100">
                <item.icon />
              </span>
            ) : null}
            <h3
              className={`font-display text-lg font-semibold text-navy ${
                item.icon ? "mt-5" : ""
              }`}
            >
              {item.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Coral check-mark list, for "what's included" style content. */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span className="text-ink/85">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered process steps on the navy background. */
export function ProcessSteps({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) {
  return (
    <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.n} delay={i * 90}>
          <div className="relative flex h-full flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <span className="font-display text-2xl font-semibold text-white/25">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-petal-100/85">
              {s.body}
            </p>
            {i < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-petal-400/50 lg:block"
              >
                &rarr;
              </span>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Navy pull-out panel used to make a single point land. */
export function NavyPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white sm:p-14">
        <FlowerMark
          tone="light"
          className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 opacity-[0.06]"
        />
        <div className="relative max-w-2xl">
          {eyebrow ? (
            <Eyebrow tone="petal" className="mb-4">
              {eyebrow}
            </Eyebrow>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-petal-100">
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** "Related pages" links, so every page passes traffic onward. */
export function RelatedLinks({
  items,
  heading = "Where to next",
}: {
  items: { href: string; label: string; summary: string }[];
  heading?: string;
}) {
  return (
    <Section tone="petal">
      <Container>
        <SectionHeading eyebrow="Keep reading" title={heading} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((card, i) => (
            <Reveal key={card.href} delay={i * 80}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-petal-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
              >
                <h3 className="font-display text-xl font-semibold text-navy">
                  {card.label}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                  {card.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral-600">
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
  );
}
