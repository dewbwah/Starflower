import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

// PHASE 2 STUB — coming soon. Not linked in the nav yet. Noindex until it has
// full content. Overview of all services: accounting, general bookkeeping,
// historical cleanups, monthly transaction management, profitability analysis,
// payroll, sales tax, HR consulting, business consulting.
export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service bookkeeping and business support from Starflower Bookkeeping, coming soon.",
  robots: { index: false, follow: true },
};

export default function ServicesPage() {
  return (
    <ComingSoon
      eyebrow="Services"
      title={<>Everything your books, and your business, need in one place</>}
      paragraph={
        <>
          A full overview of what I offer is on its way: general bookkeeping, historical
          cleanups, monthly transaction management, profitability analysis, payroll, sales
          tax, and business and HR consulting. In the meantime, the fastest way to see if
          I&apos;m a fit is a quick call.
        </>
      }
    />
  );
}
