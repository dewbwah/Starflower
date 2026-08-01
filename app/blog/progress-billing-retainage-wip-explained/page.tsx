import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find(
  (p) => p.slug === "progress-billing-retainage-wip-explained"
)!;

export const metadata: Metadata = {
  // Title tag is deliberately shorter than the on-page H1.
  title: "Progress Billing, Retainage & WIP Explained for Contractors",
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
};

// FAQPage schema for this post only. Text mirrors the visible FAQ section below.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is retainage the same as a deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, they're opposites. A deposit is money you receive before work. Retainage is money withheld from you after work is done, released when the project is accepted.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a WIP report if I'm a small residential contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your jobs run days or a couple of weeks, a simple job-costing review may be enough. Once you're running multiple jobs that span months, take draws, or want bonding or bank financing, a WIP becomes essential.",
      },
    },
    {
      "@type": "Question",
      name: "What does overbilled mean, and is it bad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Overbilled means your billings exceed the portion of the job you've completed. It's good for cash flow and normal in moderation. It's dangerous when you spend that cash without realizing part of it is spoken for by unfinished work.",
      },
    },
    {
      "@type": "Question",
      name: "Who should prepare my WIP schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically your bookkeeper builds and maintains it from your job costing data, and your CPA uses it at year end for revenue recognition and tax work. It only works if the underlying books are current and job-costed.",
      },
    },
  ],
};

export default function Post() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Article post={post}>
        <p>
          Construction has its own financial language, and nobody hands you a
          translation guide when you start your company. Then one day a GC&apos;s
          contract mentions 10 percent retainage, your banker asks for a WIP
          schedule, and your cash flow makes no sense even though you&apos;re busy.
        </p>
        <p>
          This guide explains the three concepts that trip up more contractors than
          anything else: progress billing, retainage, and work in progress. Plain
          English, with what each one means for your books and your cash.
        </p>

        <h2>Progress billing: getting paid as you go</h2>
        <p>
          On small, short jobs you might bill once at the end, or take a deposit and
          a final payment. On bigger projects, that model will bankrupt you, because
          you&apos;d be fronting labor and materials for months.
        </p>
        <p>
          Progress billing means invoicing in stages as work is completed. Two common
          flavors:
        </p>
        <ul>
          <li>
            <strong>Milestone billing:</strong> fixed amounts tied to stages.
            Foundation complete, rough-in complete, and so on.
          </li>
          <li>
            <strong>Percentage of completion billing:</strong> you bill for the
            percentage of the contract completed during the period, often against a
            schedule of values that breaks the contract price into line items.
            Commercial GCs usually require this format, sometimes on AIA-style forms
            (G702/G703 style applications for payment).
          </li>
        </ul>
        <p>
          Why it matters for your books: progress invoices, deposits, and draws
          aren&apos;t the same thing as earned income in any given moment, and
          treating every deposit as spendable profit is how contractors get ahead of
          themselves. Good books track what you&apos;ve billed on each job against
          what the job has actually cost so far, so you can see whether a project is
          truly ahead or you&apos;re just holding the customer&apos;s money.
        </p>
        <p>Practical tips:</p>
        <ul>
          <li>
            Never let the work get far ahead of the billing. Bill on schedule, every
            time, even when you&apos;re slammed. Unbilled work is an interest-free
            loan to your customer.
          </li>
          <li>
            Front-load your schedule of values within reason, so early draws cover
            your real early costs like mobilization and materials.
          </li>
          <li>Put your billing schedule in the contract and stick to it.</li>
        </ul>

        <h2>Retainage: the 5 to 10 percent you don&apos;t get yet</h2>
        <p>
          Retainage (also called retention) is a percentage of each progress payment,
          commonly 5 to 10 percent, that the customer or GC holds back until the
          project, or your portion of it, is complete and accepted. It exists to
          guarantee you finish and fix punch-list items.
        </p>
        <p>
          Retainage is one of the biggest silent cash flow killers in construction,
          especially for subcontractors. Work a $200,000 contract at 10 percent
          retainage and you&apos;ll have $20,000 of your money sitting in someone
          else&apos;s account, sometimes for months after your crews left the site.
        </p>
        <p>Why it matters for your books:</p>
        <ul>
          <li>
            <strong>Retainage receivable should be tracked separately</strong> from
            regular accounts receivable. It&apos;s money you&apos;ve earned but
            can&apos;t collect yet, and mixing it into regular AR makes both numbers
            useless.
          </li>
          <li>
            <strong>Track retainage by job,</strong> with expected release conditions
            and dates, and invoice for it the moment you&apos;re contractually
            entitled to it. An enormous amount of retainage simply never gets
            collected because nobody was tracking it.
          </li>
          <li>
            <strong>Price for it.</strong> If retainage will strain your cash for
            months, that&apos;s a financing cost, and your margins need to cover it.
          </li>
        </ul>
        <p>
          Also know your state&apos;s rules. Many states cap retainage percentages or
          set deadlines for release, and those laws vary a lot. It&apos;s worth
          knowing the rules where you work.
        </p>

        <h2>WIP: the report that tells the truth about your jobs</h2>
        <p>
          A work in progress (WIP) schedule lists every open job and compares three
          things: the contract value, the costs incurred so far, and the amount
          billed so far. From those, it shows whether each job is overbilled or
          underbilled relative to how complete it is.
        </p>
        <ul>
          <li>
            <strong>Overbilled</strong> means you&apos;ve billed ahead of the work.
            That&apos;s cash in hand, but some of it belongs to work you still owe.
            Treating it as profit is the classic way busy contractors end up broke:
            the cash from job B quietly finishes job A, forever, until the music
            stops.
          </li>
          <li>
            <strong>Underbilled</strong> means you&apos;ve done work you haven&apos;t
            invoiced yet. Sometimes that&apos;s just timing. Chronically, it means
            slow billing, unapproved change orders, or a job losing money that nobody
            has admitted yet.
          </li>
        </ul>
        <p>
          Your banker and your bonding agent read WIP schedules like a doctor reads
          bloodwork, because a WIP exposes what a profit and loss hides. A P&amp;L
          can look great in a month where you billed heavily, even if the underlying
          jobs are in trouble.
        </p>
        <p>
          You can&apos;t build a WIP without job costing. Costs incurred per job is a
          third of the report. If your books don&apos;t track costs by job, start
          there. Our{" "}
          <Link href="/blog/job-costing-for-construction-companies">
            job costing guide
          </Link>{" "}
          covers exactly how.
        </p>

        <h2>How these three fit together</h2>
        <p>
          Here&apos;s the whole picture in one paragraph. Progress billing keeps cash
          flowing in during the job. Retainage means a slice of every payment is
          delayed, so you track it separately and chase it deliberately. The WIP
          schedule ties it together, showing whether your billings are keeping pace
          with your actual work and costs across every open job. A contractor with
          clean job costing, disciplined progress billing, tracked retainage, and a
          monthly WIP review has a level of control that maybe one in ten small
          construction companies actually has. It shows up in their bank balance.
        </p>

        <h2>Frequently asked questions</h2>
        <p>
          <strong>Is retainage the same as a deposit?</strong> No, they&apos;re
          opposites. A deposit is money you receive before work. Retainage is money
          withheld from you after work is done, released when the project is
          accepted.
        </p>
        <p>
          <strong>Do I need a WIP report if I&apos;m a small residential
          contractor?</strong>{" "}
          If your jobs run days or a couple of weeks, a simple job-costing review may
          be enough. Once you&apos;re running multiple jobs that span months, take
          draws, or want bonding or bank financing, a WIP becomes essential.
        </p>
        <p>
          <strong>What does overbilled mean, and is it bad?</strong> Overbilled means
          your billings exceed the portion of the job you&apos;ve completed.
          It&apos;s good for cash flow and normal in moderation. It&apos;s dangerous
          when you spend that cash without realizing part of it is spoken for by
          unfinished work.
        </p>
        <p>
          <strong>Who should prepare my WIP schedule?</strong> Typically your
          bookkeeper builds and maintains it from your job costing data, and your CPA
          uses it at year end for revenue recognition and tax work. It only works if
          the underlying books are current and job-costed.
        </p>

        <p>
          <em>
            Starflower Bookkeeping specializes in{" "}
            <Link href="/bookkeeping-for-contractors">
              construction bookkeeping
            </Link>
            , including job costing, retainage tracking, and WIP reporting, for
            contractors nationwide. If any of this article described your company a
            little too accurately, <Link href="/book-a-call">book a call</Link>.
          </em>
        </p>
      </Article>
    </>
  );
}
