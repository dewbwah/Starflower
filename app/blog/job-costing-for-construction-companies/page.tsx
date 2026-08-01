import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find(
  (p) => p.slug === "job-costing-for-construction-companies"
)!;

export const metadata: Metadata = {
  title: post.title,
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
      name: "Do I need special construction software for job costing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not usually. Most contractors under a few million in revenue do fine with QuickBooks Online set up properly, sometimes with a time-tracking app added. Dedicated construction platforms make sense at larger scale or with heavy commercial work.",
      },
    },
    {
      "@type": "Question",
      name: "What's a good gross profit margin for a construction job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by trade, but many residential contractors target 30 to 50 percent gross margin per job so there's enough left to cover overhead and still earn a real net profit. If you don't know your current margins, that's the first thing to fix.",
      },
    },
    {
      "@type": "Question",
      name: "Can I set up job costing myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, and this guide gives you the framework. The honest answer is that most owners don't have the time to build it and keep it maintained, and a half-maintained system gives you numbers you can't trust. That's usually where a bookkeeper who knows construction earns their fee many times over.",
      },
    },
    {
      "@type": "Question",
      name: "How far back should I go to fix my job costing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the current year. Cleaning up the year in progress gives you usable reports quickly, and your tax pro will thank you.",
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
          If you run a construction company and you can&apos;t tell me, job by job,
          which projects made you money and which ones quietly ate your profit,
          you&apos;re not alone. Most contractors are flying blind. Their bank account
          looks fine in busy months, terrifying in slow ones, and they genuinely
          don&apos;t know which types of work are worth bidding on.
        </p>
        <p>
          Job costing fixes that. It&apos;s the single most valuable thing your
          bookkeeping can do for you as a contractor, and it&apos;s the thing cheap,
          generic bookkeepers almost never set up correctly.
        </p>

        <h2>What is job costing?</h2>
        <p>
          Job costing means tracking every dollar of income and every dollar of cost
          against the specific job it belongs to. Instead of one big bucket called
          &ldquo;materials expense,&rdquo; you know that the Henderson remodel used
          $14,200 in materials, the Oak Street addition used $9,800, and so on.
        </p>
        <p>When it&apos;s set up right, you can pull a report for any job and see:</p>
        <ul>
          <li>What you billed the customer</li>
          <li>
            Direct labor for that job (including payroll taxes and workers comp, not
            just wages)
          </li>
          <li>Materials and supplies</li>
          <li>Subcontractor costs</li>
          <li>Equipment and rental costs</li>
          <li>Permits, dump fees, and other job-specific costs</li>
          <li>The gross profit left over</li>
        </ul>
        <p>
          That last line is the whole point. Gross profit per job tells you what your
          estimating, your crews, and your pricing are actually doing.
        </p>

        <h2>Why most contractors get this wrong</h2>
        <p>
          The pattern I see over and over: the business owner or a general bookkeeper
          sets up QuickBooks, dumps everything into broad expense categories, and
          reconciles the bank account. The books are &ldquo;done&rdquo; every month,
          taxes get filed, and nobody notices that the company&apos;s bread-and-butter
          service line loses money on every single job.
        </p>
        <p>The usual culprits:</p>
        <p>
          <strong>Labor isn&apos;t burdened.</strong> Wages get tracked, but payroll
          taxes, workers comp, and benefits don&apos;t get allocated to jobs. On a
          construction crew, labor burden can add 20 to 35 percent on top of wages. If
          your job costing ignores it, every job looks more profitable than it is.
        </p>
        <p>
          <strong>Material receipts don&apos;t get coded to jobs.</strong> Someone runs
          to the supply house, the charge hits the credit card, and it lands in
          &ldquo;Materials&rdquo; with no job attached. Three of those a week and your
          job reports are fiction.
        </p>
        <p>
          <strong>Overhead gets mixed into job costs, or ignored entirely.</strong>{" "}
          Your truck payments, insurance, office, and your own salary have to be
          covered by the gross profit your jobs generate. You need to know your
          overhead number so you know what gross margin your bids must hit.
        </p>
        <p>
          <strong>Change orders never make it into the books.</strong> Extra work gets
          done, sometimes billed, sometimes forgotten. Unbilled change orders are one
          of the most common ways contractors leak money.
        </p>

        <h2>How to set up job costing (the practical version)</h2>
        <p>
          You don&apos;t need fancy construction software to start. QuickBooks Online
          (Plus or Advanced) handles job costing well for most small and mid-size
          contractors when it&apos;s configured correctly.
        </p>
        <ol>
          <li>
            <strong>Turn on projects.</strong> In QuickBooks Online, each job becomes a
            Project tied to a customer. Every invoice, bill, timesheet, and expense
            gets tagged to its project.
          </li>
          <li>
            <strong>Build a construction-specific chart of accounts.</strong> Separate
            your direct costs (Cost of Goods Sold) from overhead. Direct labor,
            materials, subs, equipment, and permits belong in COGS. Rent, office
            staff, marketing, and your salary belong in overhead. This split is what
            makes gross margin per job meaningful.
          </li>
          <li>
            <strong>Burden your labor.</strong> Either use a payroll integration that
            allocates taxes and workers comp to jobs, or apply a labor burden
            percentage so job reports reflect the true cost of an hour on site.
          </li>
          <li>
            <strong>Create a receipt discipline.</strong> Every purchase gets a job
            name on it before it gets spent, not weeks later from memory. A shared
            note, a code on the receipt photo, whatever your crews will actually do.
            Your bookkeeper can&apos;t code what nobody captured.
          </li>
          <li>
            <strong>Track change orders like mini contracts.</strong> Written scope,
            price, customer approval, then invoiced. Every time.
          </li>
          <li>
            <strong>Review job reports monthly.</strong> A profit and loss by project,
            jobs in progress and jobs closed, reviewed while the information is fresh
            enough to act on.
          </li>
        </ol>

        <h2>What good job costing tells you</h2>
        <p>Once the data is clean, patterns show up fast:</p>
        <ul>
          <li>
            <strong>Which services to push and which to drop.</strong> Maybe your
            decks run 42 percent gross margin and your bathroom remodels run 11. That
            changes what you advertise and what you bid.
          </li>
          <li>
            <strong>Which estimates are off.</strong> If actual costs consistently run
            15 percent over estimate on a certain job type, your estimating template
            needs updating, not your crew yelled at.
          </li>
          <li>
            <strong>Which customers are worth keeping.</strong> Some clients generate
            endless change-order-free work. Others nickel and dime every invoice. Now
            you&apos;ll know by the numbers.
          </li>
          <li>
            <strong>When to raise prices.</strong> If your gross margins can&apos;t
            cover overhead plus a real profit, your prices are the problem, and
            you&apos;ll have the data to prove it to yourself.
          </li>
        </ul>

        <h2>Job costing and taxes</h2>
        <p>
          Clean job costing also makes tax time dramatically easier. Your CPA gets a
          tidy, construction-appropriate set of books instead of a shoebox, which
          usually means a lower tax prep bill and better planning conversations. If
          you&apos;re doing longer projects, your accountant may also need
          work-in-progress numbers to handle revenue correctly, and that&apos;s only
          possible if job costs are tracked all year.
        </p>

        <h2>Frequently asked questions</h2>
        <p>
          <strong>Do I need special construction software for job costing?</strong>{" "}
          Not usually. Most contractors under a few million in revenue do fine with
          QuickBooks Online set up properly, sometimes with a time-tracking app added.
          Dedicated construction platforms make sense at larger scale or with heavy
          commercial work.
        </p>
        <p>
          <strong>What&apos;s a good gross profit margin for a construction job?</strong>{" "}
          It varies by trade, but many residential contractors target 30 to 50 percent
          gross margin per job so there&apos;s enough left to cover overhead and still
          earn a real net profit. If you don&apos;t know your current margins,
          that&apos;s the first thing to fix.
        </p>
        <p>
          <strong>Can I set up job costing myself?</strong> You can, and this guide
          gives you the framework. The honest answer is that most owners don&apos;t
          have the time to build it and keep it maintained, and a half-maintained
          system gives you numbers you can&apos;t trust. That&apos;s usually where a
          bookkeeper who knows construction earns their fee many times over.
        </p>
        <p>
          <strong>How far back should I go to fix my job costing?</strong> Start with
          the current year. Cleaning up the year in progress gives you usable reports
          quickly, and your tax pro will thank you.
        </p>

        <p>
          <em>
            Starflower Bookkeeping provides{" "}
            <Link href="/services">
              remote bookkeeping for construction companies and small businesses
            </Link>{" "}
            nationwide, led by a bookkeeper with hands-on experience managing
            accounting inside the construction industry. If you want job-level clarity
            on your numbers, <Link href="/book-a-call">book a call</Link> and
            let&apos;s look at your books together.
          </em>
        </p>
      </Article>
    </>
  );
}
