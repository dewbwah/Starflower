import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

// PHASE 2 STUB — coming soon. Not linked in the nav yet. Noindex until built out.
export const metadata: Metadata = {
  title: "Virtual & Remote Bookkeeping",
  description:
    "Fully remote, virtual bookkeeping for businesses anywhere in the country. Coming soon from Starflower Bookkeeping.",
  robots: { index: false, follow: true },
};

export default function VirtualBookkeepingPage() {
  return (
    <ComingSoon
      eyebrow="Virtual bookkeeping"
      title={<>Remote bookkeeping that feels like having someone down the hall</>}
      paragraph={
        <>
          I work with clients all over the country, fully remote and completely secure. A
          full page on how virtual bookkeeping works with me is coming soon. For now, the
          easiest first step is a 15-minute call.
        </>
      }
    />
  );
}
