import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { SectionHeading } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bookkeeping Advice for Small Businesses & Contractors",
  description:
    "Plain-English bookkeeping articles for small business owners and contractors: job costing, QuickBooks mistakes, and how to tell whether your books are in good hands.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Straight answers about the money side of your business</>}
        intro={
          <>
            No jargon and nothing designed to make you feel behind. Just the things I
            explain to clients often enough that they seemed worth writing down.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="Latest" title="Recent articles" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <article className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-petal-100 bg-cream p-8 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
                  >
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-petal-100 px-3 py-1 font-semibold uppercase tracking-[0.12em] text-petal-600">
                        {post.category}
                      </span>
                      <span className="text-ink/50">{post.readingTime}</span>
                    </div>
                    <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-navy">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                      {post.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral-600">
                      Read it{" "}
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand heading="Rather just ask me directly?" />
    </>
  );
}
