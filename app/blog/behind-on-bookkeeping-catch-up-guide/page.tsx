import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find(
  (p) => p.slug === "behind-on-bookkeeping-catch-up-guide"
)!;

export const metadata: Metadata = {
  // Title tag is deliberately shorter than the on-page H1.
  title: "Behind on Bookkeeping? How to Catch Up Months (or Years)",
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
      name: "I'm two years behind and taxes are unfiled. What order do I do this in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Books first, then taxes. Your tax preparer needs accurate numbers to file, and filing from guesses creates amended-return problems later. A bookkeeper and CPA can work in parallel once the first year's books are done.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get in trouble for being behind on bookkeeping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no penalty for messy books by themselves. The trouble comes from what messy books cause: late or inaccurate tax filings. Catching up is exactly how you get ahead of that.",
      },
    },
    {
      "@type": "Question",
      name: "Can't I just do the catch-up myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're a few months behind with one account and low volume, sure, block a weekend and follow the steps above. If you're a year or more behind, be realistic: the reason you're behind is that this work doesn't fit in your life, and that hasn't changed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a cleanup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often a few weeks from getting full account access, depending on the size of the backlog and how quickly records come in. It's faster than most owners expect once a professional has everything they need.",
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
          If you&apos;re months behind on your books, or you haven&apos;t really
          &ldquo;done books&rdquo; since you opened, take a breath. This is one of the
          most common situations in small business, it&apos;s completely fixable, and
          the fix is more systematic than you&apos;d think. Owners in this spot
          usually feel a mix of dread and embarrassment, and both are unnecessary.
          Bookkeepers see this every week.
        </p>
        <p>
          Here&apos;s what falling behind actually costs you, how a proper catch-up
          works step by step, and how to make sure you never end up here again.
        </p>

        <h2>What being behind actually costs</h2>
        <p>
          The pain isn&apos;t just the eventual cleanup bill. Being behind on your
          books quietly costs you all year:
        </p>
        <ul>
          <li>
            <strong>Missed deductions.</strong> Expenses that never get recorded never
            reduce your taxes. Cash purchases, personal cards used for business,
            mileage, home office costs. Every unrecorded deductible dollar is money
            donated to the IRS.
          </li>
          <li>
            <strong>Tax problems and penalties.</strong> Late or estimated-blind
            filings, underpaid quarterly taxes, and the notices that follow.
          </li>
          <li>
            <strong>No idea if you&apos;re profitable.</strong> You&apos;re pricing
            jobs and making hiring decisions based on your checking account balance,
            which is one of the worst financial signals that exists.
          </li>
          <li>
            <strong>Blocked opportunities.</strong> Loans, lines of credit, equipment
            financing, and bonding all require current financial statements.
            &ldquo;I&apos;ll get you numbers in a few weeks&rdquo; kills deals.
          </li>
          <li>
            <strong>The mental load.</strong> Every owner behind on books carries a
            low-grade background stress about it. That has a cost too.
          </li>
        </ul>

        <h2>How catch-up bookkeeping works, step by step</h2>
        <p>
          A professional catch-up (also called cleanup or historical bookkeeping)
          follows a pretty consistent process:
        </p>
        <ol>
          <li>
            <strong>Scope the mess.</strong> How many months or years? How many bank
            accounts, credit cards, and loans? Is there payroll? Is anything already
            in QuickBooks, and if so, can it be trusted or does it need to be redone?
            An honest bookkeeper scopes before quoting, because &ldquo;a year
            behind&rdquo; can mean 400 transactions or 9,000.
          </li>
          <li>
            <strong>Gather the records.</strong> Bank and credit card statements for
            the full period, loan statements, payroll reports, and access to whatever
            accounting software exists. Most of this comes straight from your online
            banking, so &ldquo;I don&apos;t have receipts for anything&rdquo; is less
            of a crisis than people fear.
          </li>
          <li>
            <strong>Rebuild the transaction history.</strong> Every transaction gets
            imported, categorized, and matched. Business and personal spending get
            separated. Transfers between accounts get identified so they don&apos;t
            double count as income or expense.
          </li>
          <li>
            <strong>Reconcile everything.</strong> Each account gets reconciled to its
            statements, month by month. This is the step that separates real
            bookkeeping from &ldquo;I categorized stuff in QuickBooks.&rdquo;
            Reconciliation is how you know nothing is missing and nothing is
            duplicated.
          </li>
          <li>
            <strong>Handle the special items.</strong> Loan balances split between
            principal and interest. Fixed assets and equipment purchases flagged for
            your CPA to depreciate. Owner draws and contributions sorted out. Sales
            tax and payroll liabilities checked against filings.
          </li>
          <li>
            <strong>Deliver clean financials.</strong> You get an accurate profit and
            loss and balance sheet for the whole period, ready for tax filing, ready
            for lenders, and honestly, often eye-opening. Many owners see their true
            numbers for the first time at this step.
          </li>
          <li>
            <strong>Roll into monthly maintenance.</strong> This is the part that
            matters most. A cleanup without a monthly system afterward is just
            scheduling the next cleanup.
          </li>
        </ol>

        <h2>What catch-up bookkeeping costs</h2>
        <p>
          Pricing depends entirely on volume and messiness, which is why legitimate
          bookkeepers quote after scoping. As a general shape: a straightforward
          catch-up might run a few hundred dollars per month of history for a simple
          business, more when there&apos;s heavy transaction volume, multiple
          accounts, payroll issues, or a previous DIY attempt that has to be untangled
          before real work can start.
        </p>
        <p>
          One thing worth knowing: untangling bad books usually costs more than
          building from nothing. If your QuickBooks file is a disaster, sometimes the
          right move is starting a fresh, clean file rather than paying someone to
          excavate the old one.
        </p>

        <h2>How to never fall behind again</h2>
        <p>
          The owners who stay caught up don&apos;t have more discipline than you. They
          have a system:
        </p>
        <ul>
          <li>
            <strong>Separate accounts, period.</strong> One business checking account,
            one business credit card, and business transactions only. Half of all
            bookkeeping mess comes from mixing personal and business spending.
          </li>
          <li>
            <strong>Connected bank feeds.</strong> Your accounting software should
            pull transactions automatically. Nobody should be typing in transactions
            from statements in this decade.
          </li>
          <li>
            <strong>A monthly close.</strong> Books reconciled and reports produced
            every single month, whether you do it or someone does it for you. Monthly
            is the rhythm that keeps a 30-minute task from becoming a 40-hour
            excavation.
          </li>
          <li>
            <strong>A bookkeeper if you&apos;re honest about not doing it.</strong> If
            the last six months proved you won&apos;t keep up with it yourself,
            believe the evidence. The monthly fee is almost always cheaper than the
            combination of cleanup costs, missed deductions, and bad decisions.
          </li>
        </ul>

        <h2>Frequently asked questions</h2>
        <p>
          <strong>
            I&apos;m two years behind and taxes are unfiled. What order do I do this
            in?
          </strong>{" "}
          Books first, then taxes. Your tax preparer needs accurate numbers to file,
          and filing from guesses creates amended-return problems later. A bookkeeper
          and CPA can work in parallel once the first year&apos;s books are done.
        </p>
        <p>
          <strong>Will I get in trouble for being behind on bookkeeping?</strong>{" "}
          There&apos;s no penalty for messy books by themselves. The trouble comes
          from what messy books cause: late or inaccurate tax filings. Catching up is
          exactly how you get ahead of that.
        </p>
        <p>
          <strong>Can&apos;t I just do the catch-up myself?</strong> If you&apos;re a
          few months behind with one account and low volume, sure, block a weekend and
          follow the steps above. If you&apos;re a year or more behind, be realistic:
          the reason you&apos;re behind is that this work doesn&apos;t fit in your
          life, and that hasn&apos;t changed.
        </p>
        <p>
          <strong>How long does a cleanup take?</strong> Often a few weeks from
          getting full account access, depending on the size of the backlog and how
          quickly records come in. It&apos;s faster than most owners expect once a
          professional has everything they need.
        </p>

        <p>
          <em>
            Starflower Bookkeeping handles{" "}
            <Link href="/cleanup-bookkeeping">
              catch-up and cleanup bookkeeping
            </Link>{" "}
            for construction companies and small businesses nationwide, fully remote.
            If you&apos;re behind, <Link href="/book-a-call">book a call</Link>. No
            judgment, just a plan and a quote.
          </em>
        </p>
      </Article>
    </>
  );
}
