import { BUSINESS, BOOKING_URL, CTA } from "@/lib/constants";

/**
 * Motion calendar embed.
 *
 * ▼▼▼ PASTE THE MOTION EMBED HERE ▼▼▼
 * Angie: replace the placeholder block below with the embed snippet Motion
 * gives you. In Motion, open your booking page → Share → Embed, and copy the
 * <iframe …> (or script) it provides. Delete everything between the two
 * ▼/▲ comment markers and paste the real embed in its place.
 *
 * If Motion gives you a plain link instead of an iframe, just set BOOKING_URL
 * in lib/constants.ts and the "Open my calendar" button below will use it.
 * ▲▲▲ PASTE THE MOTION EMBED HERE ▲▲▲
 */
export function MotionEmbed() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* ===================================================================
          MOTION EMBED PLACEHOLDER
          Replace this entire <div> with your Motion <iframe> embed code.
          Recommended iframe attributes for a clean, accessible embed:
            <iframe
              src="YOUR_MOTION_BOOKING_URL"
              title="Book a 15-minute call with Starflower Bookkeeping"
              width="100%"
              height="700"
              style={{ border: 0 }}
              loading="lazy"
            />
          =================================================================== */}
      <div
        className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-petal-300 bg-white p-10 text-center"
        role="note"
        aria-label="Calendar embed placeholder"
      >
        <div className="rounded-full bg-petal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-petal-600">
          Motion calendar goes here
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-navy">
          Pick a time that works for you
        </h2>
        <p className="mt-3 max-w-md text-ink/70">
          {CTA.supportShort} Once the Motion embed is pasted in, your live
          15-minute booking calendar will appear right here.
        </p>
        <a
          href={BOOKING_URL}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-coral-600 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2"
        >
          Open my calendar
        </a>
        <p className="mt-6 text-sm text-ink/60">
          Prefer to talk first? Call{" "}
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="font-semibold text-coral-600 hover:text-coral-700"
          >
            {BUSINESS.phone}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
