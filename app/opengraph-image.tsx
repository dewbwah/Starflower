/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
// This file renders with Satori (next/og), where next/image is unavailable and
// plain <img> is the correct, supported element. Alt text is not meaningful for
// an OG image composite, so the lint rules are disabled here intentionally.
import { ImageResponse } from "next/og";

export const alt =
  "Starflower Bookkeeping — CFO-level bookkeeping for contractors and small businesses nationwide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Flower mark as a data-URI SVG (Satori renders <img> reliably).
const FLOWER = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='-118 -118 236 236'>${[0, 60, 120, 180, 240, 300]
    .map(
      (a) =>
        `<g transform='rotate(${a})'><path d='M0 0 C -34 -40 -22 -86 0 -100 L 0 0 Z' fill='#EAF3FB'/><path d='M0 0 C 34 -40 22 -86 0 -100 L 0 0 Z' fill='#94BFE0'/></g>`
    )
    .join("")}<circle cx='0' cy='0' r='8' fill='#FBF9F6'/></svg>`
)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E2E5C",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Oversized low-opacity petal motif */}
        <img
          src={FLOWER}
          width={620}
          height={620}
          style={{
            position: "absolute",
            right: -140,
            top: -120,
            opacity: 0.08,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={FLOWER} width={72} height={72} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ color: "white", fontSize: 34, fontWeight: 700 }}>
              Starflower
            </span>
            <span
              style={{
                color: "#B9D6EE",
                fontSize: 18,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Bookkeeping
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <span style={{ color: "#F26B54", fontSize: 22, fontWeight: 600, letterSpacing: 2 }}>
            CFO-LEVEL BOOKKEEPING
          </span>
          <span
            style={{
              color: "white",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.08,
              marginTop: 20,
            }}
          >
            For contractors and small businesses nationwide.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#B9D6EE", fontSize: 24 }}>
            Based in Liberty, Missouri. Working with clients everywhere.
          </span>
          <span
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: 600,
              background: "#E8402A",
              padding: "14px 28px",
              borderRadius: 999,
            }}
          >
            Book a Call
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
