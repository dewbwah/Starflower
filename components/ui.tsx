import type { ReactNode } from "react";

/**
 * Above-the-fold entrance. Unlike <Reveal> (which is JS/IntersectionObserver
 * driven and starts hidden in SSR), this is a pure-CSS animation that runs on
 * load and is NOT gated on hydration, so the LCP hero text paints immediately.
 * Under prefers-reduced-motion the animation collapses to the final state
 * (handled globally in globals.css), so content is always visible.
 */
export function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-rise-in ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Small uppercase kicker above headings. */
export function Eyebrow({
  children,
  tone = "coral",
  className = "",
}: {
  children: ReactNode;
  tone?: "coral" | "petal";
  className?: string;
}) {
  const color = tone === "coral" ? "text-coral-600" : "text-petal-600";
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${color} ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * The recurring petal/leaf image mask device. Wrap an <Image> or a placeholder
 * in this to tie visuals back to the logo. Pointed top-left and bottom-right,
 * rounded elsewhere.
 */
export function PetalFrame({
  children,
  className = "",
  flip = false,
}: {
  children: ReactNode;
  className?: string;
  /** Mirror the leaf orientation. */
  flip?: boolean;
}) {
  const shape = flip
    ? "rounded-[60%_8%_60%_8%]"
    : "rounded-[8%_60%_8%_60%]";
  return (
    <div className={`relative overflow-hidden ${shape} ${className}`}>
      {children}
    </div>
  );
}

/** A photo placeholder that clearly marks where a real image goes. */
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-petal-100 to-petal-300 ${className}`}
    >
      <span className="px-6 text-center text-sm font-medium text-navy/70">
        {label}
      </span>
    </div>
  );
}
