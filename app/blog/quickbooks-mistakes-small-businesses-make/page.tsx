import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { BLOG_POSTS } from "@/lib/constants";

const post = BLOG_POSTS.find(
  (p) => p.slug === "quickbooks-mistakes-small-businesses-make"
)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Post() {
  return (
    <Article post={post}>
      <p>
        A good share of my cleanup work is fixing QuickBooks files that a business owner
        set up themselves. I want to be clear that this isn&apos;t a knock on anyone.
        QuickBooks is genuinely easy to start using and surprisingly easy to use
        incorrectly, and it rarely tells you when something has gone wrong.
      </p>
      <p>
        Here are the five mistakes I run into most, and how to steer around them.
      </p>

      <h2>1. Categorizing owner draws as expenses</h2>
      <p>
        When you take money out of your own business, that is usually an owner&apos;s
        draw or a distribution, not a business expense. Coded as an expense, it makes
        your business look far less profitable than it is.
      </p>
      <p>
        That matters more than it sounds. Understated profit distorts every decision you
        make, and it can cause real problems when a lender asks to see two years of
        financials.
      </p>

      <h3>What to do instead</h3>
      <p>
        Set up an equity account for draws and code those transfers there. Your profit
        and loss should reflect how the business performed, not how much you paid
        yourself.
      </p>

      <h2>2. Treating loan payments as one expense</h2>
      <p>
        A loan payment is two different things wearing one coat. Part of it pays down
        the principal, which reduces a liability on your balance sheet. Part is
        interest, which is a genuine expense.
      </p>
      <p>
        Coding the whole payment as an expense overstates your costs and leaves the loan
        balance sitting on your books long after you&apos;ve paid it down. Split each
        payment between principal and interest using the amortization schedule from your
        lender.
      </p>

      <h2>3. Using &ldquo;Ask My Accountant&rdquo; as a filing cabinet</h2>
      <p>
        That account exists for the occasional genuinely unclear transaction. It is not
        meant to hold four hundred items. Anything sitting in there is missing from your
        reports, so the more that accumulates, the less your numbers mean.
      </p>
      <p>
        If you&apos;re unsure how to code something, make a note of the actual question
        while it&apos;s fresh. &ldquo;Home Depot, $840, Miller job&rdquo; is easy to
        resolve later. A bare transaction from eight months ago is not.
      </p>

      <h2>4. Reconciling rarely, or never</h2>
      <p>
        Reconciliation is what proves your books match your bank. Skip it and errors
        compound silently: duplicated transactions, missing deposits, payments recorded
        twice. By the time anyone notices, untangling it is a project.
      </p>
      <p>
        Reconcile every account every month. If that isn&apos;t happening, it&apos;s
        the single most valuable thing to fix, and it&apos;s the first thing I check
        when I look at a new file. I go through the whole process on{" "}
        <Link href="/cleanup-bookkeeping">the cleanup page</Link>.
      </p>

      <h2>5. A chart of accounts that grew like a weed</h2>
      <p>
        QuickBooks lets you add accounts freely, so files tend to accumulate them. I
        regularly open books with three similar accounts for the same kind of expense,
        split apart over the years.
      </p>
      <p>
        When the same expense lands in different places depending on who entered it, you
        can&apos;t compare this year to last year in any meaningful way. A smaller, well
        organized chart of accounts is far more useful than an exhaustive one.
      </p>

      <h2>The honest summary</h2>
      <p>
        QuickBooks is a tool, not a bookkeeper. It records exactly what you tell it,
        including the mistakes, and miscategorized transactions mean wrong reports and
        wrong tax numbers.
      </p>
      <p>
        If you enjoy doing your own books and they&apos;re reconciled and current,
        genuinely, carry on. If you&apos;re doing them at 10pm and hoping they&apos;re
        right, that&apos;s worth a conversation. I&apos;m happy to{" "}
        <Link href="/book-a-call">take a look at your file</Link> and tell you what I
        see, even if the answer is that you&apos;re doing fine.
      </p>
    </Article>
  );
}
