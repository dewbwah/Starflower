import type { Metadata } from "next";
import { Container } from "@/components/Section";
import { MotionEmbed } from "@/components/MotionEmbed";
import { FlowerMark } from "@/components/FlowerMark";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Rise } from "@/components/ui";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Call | Get a Second Opinion on Your Books",
  description:
    "Book a free 15-minute call with Starflower Bookkeeping. Bring your questions or just your suspicion that something's off. No prep needed, no obligation.",
  alternates: { canonical: "/book-a-call" },
};

// Distraction-free booking page: just the headline, one reassurance line, and
// the Motion calendar embed. No mid-page marketing sections.
export default function BookACallPage() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <FlowerMark
        tone="blue"
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] opacity-[0.05]"
      />
      <Container className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Rise>
            <Eyebrow className="mb-4">Book a call</Eyebrow>
          </Rise>
          <Rise delay={60}>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              Get a Second Opinion on Your Books
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
              {CTA.support}
            </p>
          </Rise>
        </div>

        <Reveal delay={180} className="mt-12">
          <MotionEmbed />
        </Reveal>
      </Container>
    </section>
  );
}
