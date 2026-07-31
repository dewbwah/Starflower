import { CTA } from "@/lib/constants";
import { CTAButton } from "./CTAButton";
import { Container } from "./Section";
import { FlowerMark } from "./FlowerMark";
import { Reveal } from "./Reveal";

/** Full-width closing CTA band that sits above the footer on every page. */
export function CTABand({
  heading = "Not sure your books are telling you the truth?",
  sub = CTA.support,
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Oversized, very low-opacity petal motif */}
      <FlowerMark
        tone="light"
        className="pointer-events-none absolute -right-16 -top-24 h-[28rem] w-[28rem] opacity-[0.06]"
      />
      <Container className="relative py-16 sm:py-20">
        <Reveal className="mx-auto max-w-prose text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-petal-200">{sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={CTA.href} size="lg">
              {CTA.primaryLabel}
            </CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
