"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { Container } from "./Section";
import { CTA, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Close everything on route change.
  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!menu) return;
    function onDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenu(null);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenu(null);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="sticky top-0 z-50 border-b border-petal-100 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav
          ref={navRef}
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 ${
                    active ? "text-coral-600" : "text-ink/80 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            const expanded = menu === link.href;
            // A service page is "under" Services for highlighting purposes.
            const childActive = link.children.some((c) => isActive(c.href));

            return (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  onClick={() => setMenu(expanded ? null : link.href)}
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 ${
                    active || childActive
                      ? "text-coral-600"
                      : "text-ink/80 hover:text-navy"
                  }`}
                >
                  {link.label}
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      expanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {expanded ? (
                  <div className="absolute left-1/2 top-full z-50 mt-2 w-[26rem] -translate-x-1/2 rounded-2xl border border-petal-100 bg-white p-2 shadow-lift">
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-petal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
                    >
                      <span className="text-sm font-semibold text-navy">
                        All services
                      </span>
                      <span className="mt-0.5 block text-xs text-ink/60">
                        See everything in one place
                      </span>
                    </Link>
                    <div className="my-1 h-px bg-petal-100" />
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-petal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
                      >
                        <span
                          className={`text-sm font-semibold ${
                            isActive(child.href) ? "text-coral-600" : "text-navy"
                          }`}
                        >
                          {child.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink/60">
                          {child.summary}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton href={CTA.href} className="hidden sm:inline-flex">
            {CTA.headerLabel}
          </CTAButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-colors hover:bg-petal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-petal-100 bg-cream lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink/90 transition-colors hover:bg-petal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
              >
                {link.label}
              </Link>
              {link.children ? (
                <div className="mb-1 ml-3 border-l border-petal-200 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2.5 text-sm text-ink/75 transition-colors hover:bg-petal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <CTAButton href={CTA.href} size="lg" className="mt-3">
            {CTA.headerLabel}
          </CTAButton>
        </Container>
      </div>
    </header>
  );
}
