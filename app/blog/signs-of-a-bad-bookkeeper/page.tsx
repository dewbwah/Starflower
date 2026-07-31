import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find((p) => p.slug === "signs-of-a-bad-bookkeeper")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Post() {
  return (
    <Article post={post}>
      <p>
        Most business owners have no real way to judge whether their bookkeeping is any
        good. That&apos;s not a failing on your part. You hired someone precisely so you
        wouldn&apos;t have to become an expert in it.
      </p>
      <p>
        Still, there are signs you can spot without knowing debits from credits. If a
        few of these sound familiar, it&apos;s worth a closer look. And to be fair to
        the person doing your books, some of these are fixable with a conversation
        rather than a change.
      </p>

      <h2>1. Reports arrive late, or not at all</h2>
      <p>
        You should get a profit and loss and a balance sheet on a predictable schedule,
        without chasing anyone. If reports only appear when you ask twice, the work is
        probably happening in a rush right before you see it.
      </p>

      <h2>2. Your bank balance never matches your books</h2>
      <p>
        Reconciliation is the routine check that your records match reality. If your
        accounting software says one thing and the bank says another, month after month,
        something isn&apos;t being reconciled. Everything downstream of that, including
        your tax return, is built on sand.
      </p>

      <h2>3. Your CPA asks questions nobody can answer</h2>
      <p>
        This one is telling. Your CPA works from your books. If they keep coming back
        with questions your bookkeeper can&apos;t answer, or if they charge you extra
        every year for &ldquo;cleanup,&rdquo; you&apos;re already paying twice for the
        same work.
      </p>

      <h2>4. There&apos;s a growing pile of uncategorized transactions</h2>
      <p>
        Every accounting system has a holding pen for transactions nobody has sorted
        yet. It should be nearly empty. When it holds hundreds of items, your reports
        are missing whatever is sitting in there, which is often a meaningful share of
        your spending.
      </p>

      <h2>5. You have no idea whether you&apos;re profitable</h2>
      <p>
        Not the bank balance. Profit. If you can&apos;t answer that for last month
        without a lot of effort, your books aren&apos;t doing their job. Bookkeeping
        that only satisfies the IRS once a year is a compliance exercise, not a
        management tool.
      </p>

      <h2>6. Nobody has ever flagged a problem</h2>
      <p>
        In any real business, something goes sideways occasionally. A customer stops
        paying, a cost creeps up, a duplicate charge slips through. If the person in
        your numbers every month has never once raised a concern, they may be recording
        rather than reading.
      </p>

      <h2>7. Your industry never comes up</h2>
      <p>
        A contractor&apos;s books need job costing, retainage, and progress billing. A
        restaurant needs food cost tracking. If your bookkeeper treats your business
        like any other, you&apos;ll get technically tidy books that can&apos;t answer
        the questions that matter in your industry. I wrote more about that in{" "}
        <Link href="/blog/job-costing-for-contractors">the job costing article</Link>.
      </p>

      <h2>What to do about it</h2>
      <p>
        Start by asking. A good bookkeeper will welcome the questions: When will I get
        reports? Are all my accounts reconciled through last month? How many
        uncategorized transactions are sitting there? Will you talk to my CPA directly?
      </p>
      <p>
        If the answers are confident and specific, you&apos;re likely in good hands. If
        they&apos;re vague or defensive, get a second opinion. That doesn&apos;t have to
        mean firing anyone. It just means having someone else look.
      </p>
      <p>
        Reviewing books is free on my calendar, and I&apos;ll tell you honestly if
        things look fine. Sometimes they do, and that&apos;s a genuinely good answer to
        walk away with. If you&apos;d rather read first, the{" "}
        <Link href="/faq">FAQ</Link> covers most of what people ask, and{" "}
        <Link href="/cleanup-bookkeeping">the cleanup page</Link> explains what happens
        when things do need fixing.
      </p>
    </Article>
  );
}
