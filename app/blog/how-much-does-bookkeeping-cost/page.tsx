import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find((p) => p.slug === "how-much-does-bookkeeping-cost")!;

export const metadata: Metadata = {
  // Title tag is deliberately shorter than the on-page H1.
  title: "How Much Does Bookkeeping Cost? (And Why Cheap Costs More)",
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
      name: "How much does bookkeeping cost for a small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most small businesses land somewhere between a few hundred and a thousand dollars a month for professional full-service bookkeeping, depending on volume, accounts, payroll, and industry complexity. Simpler businesses sit at the low end, contractors with job costing sit higher.",
      },
    },
    {
      "@type": "Question",
      name: "Why is construction bookkeeping more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because there's genuinely more of it: costs tracked by job, labor burden allocated, progress billings and retainage managed, and WIP reporting maintained. It's a bigger monthly scope than categorize-and-reconcile.",
      },
    },
    {
      "@type": "Question",
      name: "Is a cheap bookkeeper better than no bookkeeper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes it's worse. No bookkeeper at least tells you the books need doing. Bad books that look done can drive decisions and tax filings for years before anyone discovers they were wrong.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start cheap and upgrade later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, but budget for the transition: books from budget services usually need cleanup before a professional can maintain them, so you often pay for the same months twice. If you can afford to start right, start right.",
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
          Search for bookkeeping prices and you&apos;ll find everything from $75 a
          month to $2,000 a month, which is about as useful as learning that vehicles
          cost between $800 and $80,000. Here&apos;s an honest breakdown of what
          drives bookkeeping pricing, what different tiers actually get you, and the
          uncomfortable math on why bargain bookkeeping so often ends up costing
          multiples of what it saves.
        </p>

        <h2>What actually drives the price</h2>
        <p>
          Bookkeeping is priced on workload and complexity, not on a mysterious rate
          card. The main drivers:
        </p>
        <ul>
          <li>
            <strong>Transaction volume.</strong> A consultant with 60 transactions a
            month is a different job than a contractor with 600.
          </li>
          <li>
            <strong>Number of accounts.</strong> Every additional bank account,
            credit card, loan, and payment processor is another account to categorize
            and reconcile.
          </li>
          <li>
            <strong>Payroll.</strong> Employees add payroll processing or review, tax
            filings to verify, and liabilities to track.
          </li>
          <li>
            <strong>Industry complexity.</strong> Construction is the classic
            example: job costing, progress billing, retainage, and WIP reporting are
            real work that generic bookkeeping simply doesn&apos;t include.
          </li>
          <li>
            <strong>Current condition of the books.</strong> If you&apos;re behind or
            the file is a mess, there&apos;s cleanup before there&apos;s maintenance.
          </li>
          <li>
            <strong>What you get back.</strong> Data entry only? Or reconciled
            accounts, monthly reports, someone who answers questions, and a clean
            handoff to your CPA at year end?
          </li>
        </ul>

        <h2>Rough ranges (with all the usual caveats)</h2>
        <p>
          Every firm prices differently, but as a general shape for small businesses:
        </p>
        <ul>
          <li>
            <strong>DIY software:</strong> roughly $30 to $90 a month for the
            software, plus your hours, plus the error rate nobody audits.
          </li>
          <li>
            <strong>Budget bookkeeping ($75 to $200 a month):</strong> usually
            transaction categorization with minimal review, often offshore or heavily
            automated, little to no industry-specific work, and support measured in
            days, not hours.
          </li>
          <li>
            <strong>
              Professional monthly bookkeeping (a few hundred to around a thousand a
              month):
            </strong>{" "}
            full categorization, every account reconciled monthly, financial
            statements, questions answered, CPA-ready year end. Industry-specific
            reporting like job costing lives here.
          </li>
          <li>
            <strong>Bookkeeping plus controller-level help (four figures monthly):</strong>{" "}
            everything above plus cash flow forecasting, budgeting, and heavier
            advisory. Makes sense as you scale.
          </li>
        </ul>

        <h2>Why the $75 bookkeeper costs more than the $500 one</h2>
        <p>
          Here&apos;s the pattern behind a huge share of{" "}
          <Link href="/blog/behind-on-bookkeeping-catch-up-guide">
            cleanup projects
          </Link>
          . A business owner hires the cheapest option they can find. For a year or
          two, everything seems fine: transactions get categorized, something that
          looks like a P&amp;L exists, the price is great. Then one of these happens:
        </p>
        <ul>
          <li>
            The CPA starts asking questions the books can&apos;t answer, and tax prep
            fees balloon to cover the excavation.
          </li>
          <li>
            A loan or bonding application requires financial statements, and the
            &ldquo;financials&rdquo; don&apos;t reconcile to the bank.
          </li>
          <li>
            The owner finally looks closely and finds duplicated income, loan
            payments booked as expenses, personal spending mixed in, and a balance
            sheet that&apos;s pure fiction.
          </li>
        </ul>
        <p>
          Then they pay a real bookkeeper to redo it. Cleanup on two years of bad
          books routinely costs more than two years of the price difference between
          the cheap option and the professional one, and that&apos;s before counting
          missed deductions and tax notices.
        </p>
        <p>
          The reason is structural, not moral. At $75 a month, the economics only
          work if a human spends almost no time on your file. That means no
          reconciliation worth the name, no review, no one noticing the transaction
          that got categorized as income twice. You&apos;re not buying bookkeeping,
          you&apos;re buying the appearance of bookkeeping, and the difference only
          becomes visible at the worst possible moments: tax season, loan
          applications, and audits.
        </p>
        <p>
          A five-minute test for your current books: ask your bookkeeper for last
          month&apos;s reconciliation reports for every account, plus your balance
          sheet. If reconciliations don&apos;t exist, or the balance sheet has weird
          negative balances and giant &ldquo;ask my accountant&rdquo; style catch-all
          numbers, your books are decorative.
        </p>

        <h2>What good bookkeeping is worth</h2>
        <p>
          Flip the question around. Accurate monthly books are what make the
          following possible:
        </p>
        <ul>
          <li>
            <strong>Every deduction captured,</strong> which alone can cover months
            of fees.
          </li>
          <li>
            <strong>Cheaper, calmer tax prep,</strong> because your CPA receives a
            clean file instead of a project.
          </li>
          <li>
            <strong>Real pricing decisions.</strong> Knowing your true margins, by
            service line or by job, changes what you bid and what you charge.
          </li>
          <li>
            <strong>Fast yes on financing.</strong> Current, credible financials when
            the lender or bonding agent asks.
          </li>
          <li>
            <strong>Your hours back.</strong> Whatever your time is worth per hour,
            multiply by the monthly hours bookkeeping was taking you. For most
            owners, that math alone justifies the fee.
          </li>
        </ul>
        <p>
          For contractors specifically, the gap between generic and specialized
          bookkeeping is even wider, because generic books can be technically
          accurate and still useless: perfectly categorized expenses with zero
          job-level insight, no retainage tracking, and nothing your bonding company
          can use. That&apos;s where{" "}
          <Link href="/blog/job-costing-for-construction-companies">job costing</Link>{" "}
          and construction-specific reporting earn their keep.
        </p>

        <h2>How to choose a bookkeeper (questions that reveal everything)</h2>
        <p>Price-shop last. Ask these first:</p>
        <ol>
          <li>
            <strong>
              &ldquo;Will every account be reconciled monthly, and will I see the
              reconciliation reports?&rdquo;
            </strong>{" "}
            The only acceptable answer is yes.
          </li>
          <li>
            <strong>&ldquo;Have you worked with businesses like mine?&rdquo;</strong>{" "}
            For contractors: ask directly about job costing, retainage, and WIP.
            Vague answers mean no.
          </li>
          <li>
            <strong>&ldquo;What do I get each month and by when?&rdquo;</strong> You
            want specific reports on a specific timeline.
          </li>
          <li>
            <strong>&ldquo;How do you work with my CPA at year end?&rdquo;</strong>{" "}
            Good bookkeepers describe a handoff. Weak ones haven&apos;t thought about
            it.
          </li>
          <li>
            <strong>
              &ldquo;What happens when I have a question mid-month?&rdquo;
            </strong>{" "}
            Response expectations, in writing.
          </li>
        </ol>

        <h2>Frequently asked questions</h2>
        <p>
          <strong>How much does bookkeeping cost for a small business?</strong> Most
          small businesses land somewhere between a few hundred and a thousand
          dollars a month for professional full-service bookkeeping, depending on
          volume, accounts, payroll, and industry complexity. Simpler businesses sit
          at the low end, contractors with job costing sit higher.
        </p>
        <p>
          <strong>Why is construction bookkeeping more expensive?</strong> Because
          there&apos;s genuinely more of it: costs tracked by job, labor burden
          allocated, progress billings and retainage managed, and WIP reporting
          maintained. It&apos;s a bigger monthly scope than
          categorize-and-reconcile.
        </p>
        <p>
          <strong>Is a cheap bookkeeper better than no bookkeeper?</strong> Sometimes
          it&apos;s worse. No bookkeeper at least tells you the books need doing. Bad
          books that look done can drive decisions and tax filings for years before
          anyone discovers they were wrong.
        </p>
        <p>
          <strong>Can I start cheap and upgrade later?</strong> You can, but budget
          for the transition: books from budget services usually need cleanup before
          a professional can maintain them, so you often pay for the same months
          twice. If you can afford to start right, start right.
        </p>

        <p>
          <em>
            Starflower Bookkeeping provides professional, fully remote bookkeeping
            for construction companies and small businesses nationwide, with
            construction-industry accounting experience behind it. If you want to
            know what your books would cost done right,{" "}
            <Link href="/book-a-call">book a call</Link> and we&apos;ll scope it
            honestly.
          </em>
        </p>
      </Article>
    </>
  );
}
