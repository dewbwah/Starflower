import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section } from "./Section";
import { CTABand } from "./CTABand";
import { CTAButton } from "./CTAButton";
import { FlowerMark } from "./FlowerMark";
import { Rise } from "./ui";
import { CTA, BLOG_POSTS, type BlogPost } from "@/lib/constants";

/** Shared shell for a blog post: hero, prose column, and closing CTA. */
export function Article({
  post,
  children,
}: {
  post: BlogPost;
  children: ReactNode;
}) {
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <FlowerMark
          tone="blue"
          className="pointer-events-none absolute -left-24 -top-28 h-[26rem] w-[26rem] opacity-[0.05]"
        />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-prose">
            <Rise>
              <div className="flex items-center gap-3 text-xs">
                <Link
                  href="/blog"
                  className="rounded-full bg-petal-100 px-3 py-1 font-semibold uppercase tracking-[0.12em] text-petal-600 transition-colors hover:bg-petal-200"
                >
                  {post.category}
                </Link>
                <span className="text-ink/50">{post.date}</span>
                <span className="text-ink/50">{post.readingTime}</span>
              </div>
            </Rise>
            <Rise delay={60}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl">
                {post.title}
              </h1>
            </Rise>
            <Rise delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                {post.description}
              </p>
            </Rise>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <Container>
          <div className="article mx-auto max-w-prose">{children}</div>

          <div className="mx-auto mt-16 max-w-prose rounded-2xl border border-petal-100 bg-cream p-8 text-center shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-navy">
              Questions about your own books?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink/70">{CTA.supportShort}</p>
            <div className="mt-6">
              <CTAButton href={CTA.href} size="lg">
                {CTA.primaryLabel}
              </CTAButton>
            </div>
          </div>

          {others.length > 0 ? (
            <div className="mx-auto mt-16 max-w-prose">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-petal-600">
                Read next
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-2xl border border-petal-100 bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0"
                  >
                    <h3 className="font-display text-lg font-semibold leading-snug text-navy">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral-600">
                      Read it{" "}
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
