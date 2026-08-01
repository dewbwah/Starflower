import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find(
  (p) => p.slug === "monthly-bookkeeping-checklist-small-business"
)!;

export const metadata: Metadata = {
  // Title tag is deliberately shorter than the on-page H1.
  title: "The Monthly Bookkeeping Checklist Every Small Business Needs",
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
      name: "How long should monthly bookkeeping take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a small business with clean systems and weekly habits, the month-end close is often two to four hours. If it's taking a full day or more, something upstream is broken: too many uncategorized transactions, disconnected accounts, or mixed personal spending.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between categorizing and reconciling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Categorizing assigns each transaction to the right account. Reconciling proves your books match reality by tying every account to its statement balance. Lots of DIY books are categorized but never reconciled, which means nobody has verified they're complete.",
      },
    },
    {
      "@type": "Question",
      name: "Which reports should a small business review monthly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profit and loss (month and year to date), balance sheet, and AR aging at minimum. Service businesses with projects should add per-job or per-project profitability.",
      },
    },
    {
      "@type": "Question",
      name: "Is monthly often enough, or should books be done weekly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reconciliation and reporting monthly is the standard rhythm for small businesses. The daily and weekly habits above keep data flowing in between closes. Higher-volume businesses sometimes reconcile more often, but monthly done consistently beats weekly done sporadically.",
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
          Bookkeeping doesn&apos;t fall apart in a day. It falls apart one skipped
          month at a time, until &ldquo;I&apos;ll catch up this weekend&rdquo; turns
          into a{" "}
          <Link href="/blog/behind-on-bookkeeping-catch-up-guide">shoebox era</Link>{" "}
          of your business. The antidote is a monthly close: a fixed routine, done in
          the same order every month, that keeps your books accurate and your reports
          trustworthy.
        </p>
        <p>
          This is the checklist we use. Whether you do your own books or want to
          understand what you&apos;re paying a bookkeeper to do, this is what
          &ldquo;the books are done&rdquo; should actually mean.
        </p>

        <h2>First, the daily and weekly habits that make month-end easy</h2>
        <p>The monthly close goes fast when the basics happen along the way:</p>
        <ul>
          <li>
            <strong>Send invoices immediately.</strong> The day the work is done or
            the milestone hits. Every day an invoice waits is a day added to when you
            get paid.
          </li>
          <li>
            <strong>Capture receipts as they happen.</strong> Snap a photo into your
            accounting app or a shared folder. For contractors, write the job on it.
            Future you will not remember.
          </li>
          <li>
            <strong>Keep business spending on business accounts.</strong> Every
            personal-card business purchase creates cleanup work later.
          </li>
          <li>
            <strong>Glance at your bank feed weekly.</strong> Categorize what&apos;s
            obvious, flag what&apos;s not. Fifteen minutes a week beats four hours at
            month end.
          </li>
        </ul>

        <h2>The monthly close checklist</h2>
        <p>
          Block two to three hours in the first week of the new month and run this
          list in order.
        </p>
        <ol>
          <li>
            <strong>Get every transaction into the books.</strong> Make sure all bank
            feeds have synced and every account is connected: checking, savings,
            every credit card, loan accounts, and payment processors like Stripe or
            Square. Missing accounts are the most common source of wrong books.
          </li>
          <li>
            <strong>Categorize everything.</strong> No transactions left
            uncategorized, and no lazy dumping into &ldquo;Miscellaneous.&rdquo; If
            you don&apos;t know what something is, find out now while it&apos;s
            recent. Ask-my-accountant piles grow teeth with age.
          </li>
          <li>
            <strong>Reconcile every account.</strong> Match your books against each
            bank, credit card, and loan statement so ending balances agree to the
            penny. This is the single most important step on the list. Reconciliation
            is how you catch missing transactions, duplicates, bank errors, and
            fraud. Books that aren&apos;t reconciled aren&apos;t done, no matter how
            tidy they look.
          </li>
          <li>
            <strong>Review accounts receivable.</strong> Pull your open invoice list.
            Who&apos;s past due? Send reminders now, this month, while the amount is
            fresh and the client relationship is warm. Aged receivables die quietly.
          </li>
          <li>
            <strong>Review accounts payable.</strong> What do you owe, and when is it
            due? Schedule payments so you capture any early-pay discounts and avoid
            late fees, and so you&apos;re never surprised by a big due date.
          </li>
          <li>
            <strong>Verify payroll posted correctly.</strong> Wages, taxes, and any
            benefit withholdings recorded and matching your payroll reports. Confirm
            payroll tax payments actually went out.
          </li>
          <li>
            <strong>Check loan and liability balances.</strong> Loan payments split
            between principal and interest, and book balances matching lender
            statements. Sales tax collected and filed if that applies to you.
          </li>
          <li>
            <strong>Look for the weird stuff.</strong> Duplicated transactions,
            negative balances that make no sense, a revenue category that doubled, an
            expense that vanished. Anomalies are cheap to fix in month one and
            expensive to find in month eleven.
          </li>
          <li>
            <strong>Run your reports and actually read them.</strong> At minimum:
            profit and loss for the month and year to date, balance sheet, and AR/AP
            aging. For contractors, add profit by job. Then ask three questions: Did
            I make money this month? Where did it go? What surprised me?
          </li>
          <li>
            <strong>File it and close it.</strong> Save the statements and reports,
            note anything to ask your CPA, and if your software allows it, close the
            period so old months can&apos;t be accidentally changed.
          </li>
        </ol>

        <h2>What to look at in your reports</h2>
        <p>Reports only help if you know what you&apos;re looking for. A quick reading guide:</p>
        <ul>
          <li>
            <strong>Profit and loss:</strong> compare against last month and the same
            month last year. Watch gross margin, not just revenue. Growing sales with
            shrinking margin is a treadmill.
          </li>
          <li>
            <strong>Balance sheet:</strong> cash trend over time, AR growing faster
            than sales (collection problem), credit card balances creeping up
            (spending outpacing cash).
          </li>
          <li>
            <strong>AR aging:</strong> anything past 30 days gets a follow-up,
            anything past 60 gets a phone call, and repeat offenders get new payment
            terms.
          </li>
        </ul>

        <h2>When to hand this off</h2>
        <p>
          Do this checklist honestly for two or three months and you&apos;ll know
          which kind of owner you are. Some genuinely enjoy it and keep it up
          forever. Most discover that the close keeps sliding, first to mid-month,
          then to &ldquo;next weekend,&rdquo; and the whole point of monthly books,
          current information you can act on, disappears.
        </p>
        <p>
          There&apos;s no prize for doing your own bookkeeping. There&apos;s a real
          prize for accurate books you never think about: better decisions, painless
          tax seasons, and hours back every month. If the checklist above sounds like
          a part-time job you don&apos;t want, that&apos;s exactly what it is, and
          it&apos;s one of the easiest jobs in your business to delegate to{" "}
          <Link href="/services">a specialist</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <p>
          <strong>How long should monthly bookkeeping take?</strong> For a small
          business with clean systems and weekly habits, the month-end close is often
          two to four hours. If it&apos;s taking a full day or more, something
          upstream is broken: too many uncategorized transactions, disconnected
          accounts, or mixed personal spending.
        </p>
        <p>
          <strong>What&apos;s the difference between categorizing and
          reconciling?</strong>{" "}
          Categorizing assigns each transaction to the right account. Reconciling
          proves your books match reality by tying every account to its statement
          balance. Lots of DIY books are categorized but never reconciled, which
          means nobody has verified they&apos;re complete.
        </p>
        <p>
          <strong>Which reports should a small business review monthly?</strong>{" "}
          Profit and loss (month and year to date), balance sheet, and AR aging at
          minimum. Service businesses with projects should add per-job or per-project
          profitability.
        </p>
        <p>
          <strong>Is monthly often enough, or should books be done weekly?</strong>{" "}
          Reconciliation and reporting monthly is the standard rhythm for small
          businesses. The daily and weekly habits above keep data flowing in between
          closes. Higher-volume businesses sometimes reconcile more often, but
          monthly done consistently beats weekly done sporadically.
        </p>

        <p>
          <em>
            Starflower Bookkeeping runs this exact close, every month, for
            construction companies and small businesses nationwide. If you&apos;d
            rather read the reports than build them,{" "}
            <Link href="/book-a-call">book a call</Link>.
          </em>
        </p>
      </Article>
    </>
  );
}
