import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { Testimonials } from "@/components/Testimonials";

// PHASE 2 STUB — coming soon. Not linked in the nav yet. Noindex until built out.
// Reuses the shared Testimonials block so there's real content here already.
export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What clients say about working with Starflower Bookkeeping. More reviews coming soon.",
  robots: { index: false, follow: true },
};

export default function ReviewsPage() {
  return (
    <ComingSoon
      eyebrow="Reviews"
      title={<>Don&apos;t take my word for it</>}
      paragraph={
        <>
          A full reviews page is coming soon. Until then, here&apos;s what a few of the
          business owners I work with have to say.
        </>
      }
    >
      {/* Testimonials render below the intro via the section slot. */}
      <div className="-mx-6 -my-16 sm:-mx-8 sm:-my-24">
        <Testimonials />
      </div>
    </ComingSoon>
  );
}
