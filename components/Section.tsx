import type { ReactNode } from "react";

/** Constrains content to the site's max width with consistent horizontal padding. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** A vertical rhythm block. `tone` sets the background band. */
export function Section({
  children,
  tone = "cream",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "cream" | "white" | "navy" | "petal";
  className?: string;
  id?: string;
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream text-ink",
    white: "bg-white text-ink",
    navy: "bg-navy text-white",
    petal: "bg-petal-50 text-ink",
  };
  return (
    <section id={id} className={`py-16 sm:py-24 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}
