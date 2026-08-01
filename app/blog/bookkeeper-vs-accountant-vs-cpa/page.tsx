import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find((p) => p.slug === "bookkeeper-vs-accountant-vs-cpa")!;

export const metadata: Metadata = {
  // Title tag is deliberately shorter than the on-page H1.
  title: "Bookkeeper vs Accountant vs CPA: Who Does Your Business Need?",
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
      name: "Does my small business need a bookkeeper if I have QuickBooks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QuickBooks is a tool, not a bookkeeper. It records what someone tells it and happily lets you miscategorize everything. If you have the time and knowledge to keep it accurate and reconciled every month, you can do it yourself. Most owners have neither, and the software quietly drifts into a mess.",
      },
    },
    {
      "@type": "Question",
      name: "Can a bookkeeper file my taxes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally you want a CPA or enrolled agent preparing and filing business tax returns. Your bookkeeper's job is to make that filing easy and accurate by delivering clean books.",
      },
    },
    {
      "@type": "Question",
      name: "When should I hire a bookkeeper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The honest trigger points: you're behind on your books, you dread tax season, you can't answer basic questions about your margins, or the hours you spend on bookkeeping would be worth more spent on billable work and sales. For most trades businesses, that point arrives much earlier than owners expect.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need someone local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bookkeeping is done in cloud software now, so a remote bookkeeper can serve you anywhere in the country. What matters is responsiveness, accuracy, and whether they understand your industry, not their zip code.",
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
          Business owners use &ldquo;bookkeeper,&rdquo; &ldquo;accountant,&rdquo; and
          &ldquo;CPA&rdquo; almost interchangeably, and it costs them money in both
          directions. Some pay CPA rates for work a bookkeeper should be doing every
          month. Others hand a bookkeeper responsibilities that really belong with a
          tax professional. Here&apos;s how the roles actually break down, and how to
          build the right team without overpaying.
        </p>

        <h2>What a bookkeeper does</h2>
        <p>
          A bookkeeper handles the ongoing, month-in-month-out financial recordkeeping
          of your business:
        </p>
        <ul>
          <li>Recording and categorizing every transaction</li>
          <li>Reconciling bank, credit card, and loan accounts</li>
          <li>Managing invoicing and accounts receivable (who owes you)</li>
          <li>Managing bills and accounts payable (who you owe)</li>
          <li>Running or supporting payroll</li>
          <li>
            Producing monthly financial statements: profit and loss, balance sheet,
            and ideally reports tailored to your business, like job costing for
            contractors
          </li>
        </ul>
        <p>
          Think of your bookkeeper as the person who keeps the financial record of
          your business accurate, current, and organized all year. Everything else in
          your financial life sits on top of that foundation. When the books are
          wrong, your tax return is wrong, your loan applications look bad, and every
          decision you make is based on bad information.
        </p>

        <h2>What an accountant does</h2>
        <p>
          &ldquo;Accountant&rdquo; is the broadest term of the three. An accountant
          typically takes the records a bookkeeper maintains and works at a higher
          level:
        </p>
        <ul>
          <li>Adjusting entries, depreciation, and accruals</li>
          <li>Preparing formal financial statements</li>
          <li>Analyzing performance and advising on financial decisions</li>
          <li>Budgeting and forecasting</li>
        </ul>
        <p>
          In many small businesses there&apos;s no separate &ldquo;accountant&rdquo;
          at all. A strong bookkeeper covers the monthly work, and a CPA covers taxes
          and high-level advice. The accountant layer matters more as you grow.
        </p>

        <h2>What a CPA does</h2>
        <p>
          A CPA (Certified Public Accountant) is a licensed professional who has
          passed a rigorous exam and meets ongoing state requirements. For small
          businesses, CPAs mostly handle:
        </p>
        <ul>
          <li>Preparing and filing business and personal tax returns</li>
          <li>
            Tax planning and strategy (entity selection, S corp elections, timing of
            purchases)
          </li>
          <li>Representing you before the IRS if there&apos;s ever an audit or notice</li>
          <li>
            Reviewed or audited financial statements when a bank or bonding company
            requires them
          </li>
        </ul>
        <p>
          That last one matters for contractors. If you pursue bonding for larger
          jobs, the surety will want financial statements, and clean books all year
          are what make that process painless instead of expensive.
        </p>

        <h2>The mistake that costs the most</h2>
        <p>
          The most expensive setup I see is the business owner who has a CPA and no
          bookkeeper. They hand the CPA a mess every spring: a year of uncategorized
          transactions, missing statements, personal and business expenses tangled
          together. The CPA&apos;s team does a rushed cleanup at CPA rates, files the
          return, and nobody looks at the numbers again until next spring.
        </p>
        <p>
          That owner pays a premium for cleanup, gets zero useful information during
          the year, and misses tax planning opportunities because the books
          weren&apos;t current when planning decisions had to be made. Deductions get
          missed for the simplest reason imaginable: nobody recorded them.
        </p>
        <p>
          The second most expensive setup is the reverse: expecting a bookkeeper to be
          a tax strategist. A good bookkeeper works hand in hand with your CPA and
          gets them clean books, but tax filings and tax strategy belong with the tax
          professional.
        </p>

        <h2>The setup that works for most small businesses</h2>
        <p>
          For most small businesses, including construction companies, the right team
          looks like this:
        </p>
        <p>
          <strong>A monthly bookkeeper</strong> who keeps everything reconciled,
          current, and organized, and who understands your industry well enough to
          give you reports that actually mean something.
        </p>
        <p>
          <strong>A CPA</strong> who files your returns, does proactive tax planning,
          and answers the big strategic questions once or twice a year.
        </p>
        <p>
          The two should talk to each other. When your bookkeeper sends your CPA a
          clean year-end file with everything reconciled and documented, your tax prep
          gets cheaper, faster, and more accurate. Many CPAs quietly price returns
          based on how messy the books are. Clean books pay for themselves partly
          through that alone.
        </p>

        <h2>What this should cost</h2>
        <p>Rough ranges, because every business is different:</p>
        <ul>
          <li>
            <strong>Monthly bookkeeping:</strong> commonly a few hundred dollars a
            month for a small business, scaling with transaction volume, number of
            accounts, payroll, and complexity like job costing. Be skeptical of
            rock-bottom flat rates; there&apos;s a reason{" "}
            <Link href="/blog/behind-on-bookkeeping-catch-up-guide">
              cleanup work is a whole category of bookkeeping service
            </Link>
            , and it&apos;s usually cleaning up after the cheapest option.
          </li>
          <li>
            <strong>CPA tax prep:</strong> typically anywhere from several hundred to
            a few thousand dollars per year depending on your entity type and
            complexity.
          </li>
        </ul>
        <p>
          Compare that against what messy books cost: missed deductions, tax notices,
          overdraft and late fees, bad pricing decisions made on bad data, and the
          hours you spend doing financial archaeology instead of running your
          business.
        </p>

        <h2>Frequently asked questions</h2>
        <p>
          <strong>
            Does my small business need a bookkeeper if I have QuickBooks?
          </strong>{" "}
          QuickBooks is a tool, not a bookkeeper. It records what someone tells it and
          happily lets you miscategorize everything. If you have the time and
          knowledge to keep it accurate and reconciled every month, you can do it
          yourself. Most owners have neither, and the software quietly drifts into a
          mess.
        </p>
        <p>
          <strong>Can a bookkeeper file my taxes?</strong> Generally you want a CPA or
          enrolled agent preparing and filing business tax returns. Your
          bookkeeper&apos;s job is to make that filing easy and accurate by delivering
          clean books.
        </p>
        <p>
          <strong>When should I hire a bookkeeper?</strong> The honest trigger points:
          you&apos;re behind on your books, you dread tax season, you can&apos;t
          answer basic questions about your margins, or the hours you spend on
          bookkeeping would be worth more spent on billable work and sales. For most
          trades businesses, that point arrives much earlier than owners expect.
        </p>
        <p>
          <strong>Do I need someone local?</strong> No. Bookkeeping is done in cloud
          software now, so a remote bookkeeper can serve you anywhere in the country.
          What matters is responsiveness, accuracy, and whether they understand your
          industry, not their zip code.
        </p>

        <p>
          <em>
            Starflower Bookkeeping is a{" "}
            <Link href="/services">
              remote bookkeeping firm serving construction companies and small
              businesses
            </Link>{" "}
            nationwide from Kansas City. If you&apos;re not sure what your business
            needs, <Link href="/book-a-call">book a short call</Link> and we&apos;ll
            tell you honestly, even if the answer isn&apos;t us.
          </em>
        </p>
      </Article>
    </>
  );
}
