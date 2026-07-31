"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

/**
 * General-questions contact form (Contact page only). Appointments always go
 * through the Motion embed, never this form.
 *
 * No backend is wired yet. On submit it opens the visitor's mail client via a
 * mailto: link so nothing is lost before a form handler is connected. To wire a
 * real handler (Formspree, Vercel serverless, etc.), replace `handleSubmit`.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website question from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-petal-200 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-petal-500 focus:outline-none focus:ring-2 focus:ring-petal-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          How can I help?
        </label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-coral-500 px-7 py-3 text-base font-semibold text-white shadow-soft transition-all hover:bg-coral-600 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2"
        >
          Send message
        </button>
        {sent ? (
          <p className="text-sm text-ink/70" role="status">
            Thanks. Your email app should have opened. Prefer to book instead? Use the
            calendar on the Book a Call page.
          </p>
        ) : (
          <p className="text-sm text-ink/55">
            For appointments, please book a call instead. This form is for general
            questions.
          </p>
        )}
      </div>
    </form>
  );
}
