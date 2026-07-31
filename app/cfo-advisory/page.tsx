import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

// PHASE 2 STUB — coming soon. Not linked in the nav yet. Noindex until built out.
export const metadata: Metadata = {
  title: "CFO Advisory",
  description:
    "CFO-level advisory for small businesses: profitability analysis, cash flow, and the guidance most bookkeepers can't give. Coming soon from Starflower Bookkeeping.",
  robots: { index: false, follow: true },
};

export default function CfoAdvisoryPage() {
  return (
    <ComingSoon
      eyebrow="CFO advisory"
      title={<>The strategic layer most small businesses never get to afford</>}
      paragraph={
        <>
          Beyond clean books, I help owners read their numbers and make decisions:
          profitability by job or product, cash flow planning, and what&apos;s coming
          before it hits. A full CFO advisory page is on the way. Curious what this looks
          like for your business? Let&apos;s talk.
        </>
      }
    />
  );
}
