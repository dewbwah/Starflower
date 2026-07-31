import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Phase 1 launch routes. Phase 2 stub pages (services, monthly-bookkeeping,
 * virtual-bookkeeping, cfo-advisory, reviews, contact, referrals) are marked
 * noindex and are intentionally left out until they have real content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" },
    { path: "/bookkeeping-for-contractors", priority: 0.9, changeFrequency: "monthly" },
    { path: "/cleanup-bookkeeping", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book-a-call", priority: 0.9, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  const lastModified = new Date("2026-07-30");

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
