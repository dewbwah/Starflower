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
    // Floating glass bar: translucent navy over a blur, inset from the page top,
    // so content slides underneath it as you scroll.
    // Negative bottom margin equal to the bar's height lets the page's first
    // section slide up behind the glass, so hero backgrounds (and their flower
    // motifs) run all the way to the top of the viewport.
    <header className="pointer-events-none sticky top-0 z-50 -mb-[4.25rem]">
      <Container className="pointer-events-auto">
        <div className="mt-3 rounded-2xl border border-white/15 bg-navy/80 shadow-lift backdrop-blur-md supports-[backdrop-filter]:bg-navy/70">
          <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-5">
            <Logo variant="light" markTone="coral" />

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
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                    active
                      ? "text-coral-400"
                      : "text-petal-100/85 hover:bg-white/10 hover:text-white"
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
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                    active || childActive
                      ? "text-coral-400"
                      : "text-petal-100/85 hover:bg-white/10 hover:text-white"
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
                  <div className="absolute left-1/2 top-full z-50 mt-3 w-[26rem] -translate-x-1/2 rounded-2xl border border-white/15 bg-navy/90 p-2 shadow-lift backdrop-blur-md">
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                    >
                      <span className="text-sm font-semibold text-white">
                        All services
                      </span>
                      <span className="mt-0.5 block text-xs text-petal-200/75">
                        See everything in one place
                      </span>
                    </Link>
                    <div className="my-1 h-px bg-white/10" />
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                      >
                        <span
                          className={`text-sm font-semibold ${
                            isActive(child.href) ? "text-coral-400" : "text-white"
                          }`}
                        >
                          {child.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-petal-200/75">
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 lg:hidden"
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
          </div>

          {/* Mobile menu, expanding inside the same glass card */}
          <div
            id="mobile-menu"
            className={`max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 lg:hidden ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-1 px-3 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-petal-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
                  >
                    {link.label}
                  </Link>
                  {link.children ? (
                    <div className="mb-1 ml-3 border-l border-white/15 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-sm text-petal-200/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
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
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
