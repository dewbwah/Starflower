import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral-500 text-white shadow-soft hover:bg-coral-600 hover:shadow-lift focus-visible:ring-coral-500 focus-visible:ring-offset-cream",
  secondary:
    "bg-navy text-white hover:bg-navy-900 shadow-soft hover:shadow-lift focus-visible:ring-navy focus-visible:ring-offset-cream",
  ghost:
    "border border-petal-300 bg-white/70 text-navy hover:border-petal-500 hover:bg-white focus-visible:ring-petal-500 focus-visible:ring-offset-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
}
