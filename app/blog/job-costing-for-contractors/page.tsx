import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find((p) => p.slug === "job-costing-for-contractors")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Post() {
  return (
    <Article post={post}>
      <p>
        If you run a construction business and someone asks which of your jobs made
        money last year, you should be able to answer in about ten seconds. Most
        contractors I meet can&apos;t, and it&apos;s almost never because they&apos;re
        careless. It&apos;s because their books were set up to answer a different
        question.
      </p>

      <h2>What job costing actually is</h2>
      <p>
        Job costing means every dollar you spend gets attached to the job it was spent
        on. Labor, materials, equipment, subcontractors, permits, and a fair share of
        overhead. When it&apos;s done properly, you can pull up any project and see what
        you billed, what it cost you, and what you kept.
      </p>
      <p>
        Standard bookkeeping tracks money by <strong>month</strong>. Job costing tracks
        it by <strong>project</strong>. Construction needs both, because your jobs
        don&apos;t politely start and finish inside a calendar month.
      </p>

      <h2>Why a healthy P&amp;L can still hide a problem</h2>
      <p>
        Here&apos;s the situation I see constantly. A contractor finishes the year with
        a profit and feels reasonably good. But that single number is every job blended
        together. Inside it, two or three projects carried the whole business while
        several others quietly lost money.
      </p>
      <p>
        Without job costing you can&apos;t see that. So next year you bid the same way,
        take on more of the work that loses money, and grow yourself into a tighter
        spot. Growth built on bad numbers is genuinely how profitable-looking companies
        get into trouble.
      </p>
      <blockquote>
        <p>
          A busy year and a profitable year are not the same thing, and job costing is
          how you tell them apart.
        </p>
      </blockquote>

      <h2>What to track on every job</h2>
      <ul>
        <li>
          <strong>Direct labor.</strong> Hours worked on that job, at real loaded cost.
          Not just the wage, but payroll taxes, workers comp, and benefits.
        </li>
        <li>
          <strong>Materials.</strong> Coded to the job when purchased, not lumped into a
          general supplies bucket at the end of the month.
        </li>
        <li>
          <strong>Subcontractors.</strong> What each sub billed, tied to the job and to
          their 1099 for the year.
        </li>
        <li>
          <strong>Equipment.</strong> Rental costs, or an internal rate if you own the
          machine. Owned equipment isn&apos;t free just because there&apos;s no invoice.
        </li>
        <li>
          <strong>Overhead allocation.</strong> A consistent share of the costs that
          keep the doors open. Your office, insurance, and truck payments are real, and
          jobs need to carry them.
        </li>
      </ul>

      <h3>The one people skip: loaded labor cost</h3>
      <p>
        If you pay someone $25 an hour, that person does not cost you $25 an hour. Add
        payroll taxes, workers comp (which is not cheap in construction), and any
        benefits, and the real number is often closer to $33 to $38. Costing jobs at the
        raw wage makes every job look better than it is, and the gap compounds across a
        year.
      </p>

      <h2>Getting started without overhauling everything</h2>
      <ol>
        <li>
          <strong>Set up a job list.</strong> Every active project gets an identity in
          your accounting software before work begins, not after.
        </li>
        <li>
          <strong>Code as you go.</strong> Every bill, receipt, and timesheet gets a job
          attached at entry. Reconstructing this later is the expensive way.
        </li>
        <li>
          <strong>Get labor flowing in.</strong> Connect payroll so hours land on jobs
          automatically. This is usually the biggest single improvement.
        </li>
        <li>
          <strong>Review monthly.</strong> Look at margin per job while the job is still
          running. A project going sideways in month two is fixable. Finding out in
          month six is a post-mortem.
        </li>
        <li>
          <strong>Feed it back into bidding.</strong> Your own cost history is the best
          estimating tool you will ever own.
        </li>
      </ol>

      <h2>What changes once you have it</h2>
      <p>
        The first month is usually uncomfortable, because a job you were proud of turns
        out to have been thin. That discomfort is the whole point. After that, bidding
        stops being a guess, you can say no to the kind of work that never paid, and
        conversations with your banker or bonding company get a lot easier.
      </p>
      <p>
        This is the core of what I do on the{" "}
        <Link href="/bookkeeping-for-contractors">contractor side of my practice</Link>,
        and it&apos;s the same work I do as CFO of a foundation repair company. If your
        books can&apos;t tell you which jobs pay,{" "}
        <Link href="/book-a-call">bring me one job</Link> and we&apos;ll cost it out
        together.
      </p>
    </Article>
  );
}
