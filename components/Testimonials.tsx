import { TESTIMONIALS } from "@/lib/constants";
import { Container, Section } from "./Section";
import { Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-coral-500" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({
  tone = "white",
}: {
  tone?: "white" | "cream" | "petal";
}) {
  // Cards sit on cream by default; on a cream or petal band they flip to white
  // so they still read as cards.
  const cardBg = tone === "white" ? "bg-cream" : "bg-white";
  return (
    <Section tone={tone}>
      <Container>
        <Reveal className="mx-auto max-w-prose text-center">
          <Eyebrow className="mb-3">In their words</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Kind words from people I get to work with
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Real reviews from business owners I work with every month.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className={`flex h-full flex-col rounded-2xl border border-petal-100 ${cardBg} p-7 shadow-soft`}>
                <Stars />
                <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-petal-100 pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-ink/55">Verified Google review</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
