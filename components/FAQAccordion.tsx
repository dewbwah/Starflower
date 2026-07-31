"use client";

import Link from "next/link";
import { useState } from "react";
import { FAQS } from "@/lib/constants";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-petal-100 rounded-2xl border border-petal-100 bg-white shadow-soft">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={faq.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-petal-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-coral-500"
              >
                <span className="font-display text-lg font-semibold text-navy">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-petal-300 text-navy transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-45 border-coral-400 text-coral-600" : ""
                  }`}
                >
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-6 pb-6 -mt-1"
            >
              <p className="max-w-prose text-[0.975rem] leading-relaxed text-ink/80">
                {faq.answer}
              </p>
              {faq.link ? (
                <Link
                  href={faq.link.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral-600 hover:text-coral-700"
                >
                  {faq.link.label}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
