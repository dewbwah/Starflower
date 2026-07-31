import Link from "next/link";
import { FlowerMark } from "./FlowerMark";

/** Header/footer lockup: flower mark + "Starflower Bookkeeping" wordmark. */
export function Logo({
  variant = "dark",
  className = "",
}: {
  /** "dark" = navy text on light bg. "light" = light text on navy bg. */
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-petal-200" : "text-petal-600";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 ${className}`}
      aria-label="Starflower Bookkeeping, home"
    >
      <FlowerMark
        tone={variant === "light" ? "light" : "blue"}
        className="h-9 w-9 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-[30deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-semibold tracking-tight ${wordColor}`}>
          Starflower
        </span>
        <span className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Bookkeeping
        </span>
      </span>
    </Link>
  );
}
