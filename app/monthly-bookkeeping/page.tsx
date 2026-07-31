import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

// PHASE 2 STUB — coming soon. Not linked in the nav yet. Noindex until built out.
export const metadata: Metadata = {
  title: "Monthly Bookkeeping",
  description:
    "Ongoing monthly bookkeeping that keeps your books clean, current, and telling you the truth. Coming soon from Starflower Bookkeeping.",
  robots: { index: false, follow: true },
};

export default function MonthlyBookkeepingPage() {
  return (
    <ComingSoon
      eyebrow="Monthly bookkeeping"
      title={<>Clean books every month, with someone actually reading them</>}
      paragraph={
        <>
          A dedicated page on my ongoing monthly service is coming soon: categorizing and
          reconciling every transaction, running payroll if you need it, and delivering
          reports with real context on what they mean. Want the details now? Let&apos;s
          talk.
        </>
      }
    />
  );
}
