import type { CSSProperties } from "react";

/**
 * The Starflower six-petal mark, recreated from the logo PNGs as inline SVG so
 * it stays crisp at any size. Six leaf-shaped petals on 60-degree spokes, each
 * split down a center vein into a lighter and a darker half (the folded-paper
 * look from the originals), with a small round center.
 *
 * `tone`:
 *  - "blue"   duotone petal blues on transparent (default header / on-light use)
 *  - "light"  pale petals for use on the navy background
 *  - "coral"  accent version
 *  - "solid"  single flat color (pass `color`) for favicons / masks
 */
type Tone = "blue" | "light" | "coral" | "solid";

const PALETTES: Record<
  Exclude<Tone, "solid">,
  { light: string; dark: string; center: string }
> = {
  blue: { light: "#B9D6EE", dark: "#2F6EA8", center: "#FBF9F6" },
  light: { light: "#EAF3FB", dark: "#94BFE0", center: "#FBF9F6" },
  coral: { light: "#F7B7A9", dark: "#E8402A", center: "#FBF9F6" },
};

// One upward petal, split into left (light) and right (dark) halves.
const LEFT_HALF = "M0 0 C -34 -40 -22 -86 0 -100 L 0 0 Z";
const RIGHT_HALF = "M0 0 C 34 -40 22 -86 0 -100 L 0 0 Z";
const ANGLES = [0, 60, 120, 180, 240, 300];

export function FlowerMark({
  className,
  tone = "blue",
  color,
  title,
  style,
}: {
  className?: string;
  tone?: Tone;
  /** Used when tone="solid". */
  color?: string;
  /** Accessible label. Omit to render decorative (aria-hidden). */
  title?: string;
  style?: CSSProperties;
}) {
  const solid = tone === "solid";
  const p = solid ? null : PALETTES[tone];

  return (
    <svg
      viewBox="-118 -118 236 236"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {ANGLES.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d={LEFT_HALF} fill={solid ? color : p!.light} />
          <path d={RIGHT_HALF} fill={solid ? color : p!.dark} />
        </g>
      ))}
      <circle cx="0" cy="0" r="8" fill={solid ? "#FBF9F6" : p!.center} />
    </svg>
  );
}
