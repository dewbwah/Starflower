import type { MetadataRoute } from "next";
import { SITE_URL, BLOG_POSTS, CASE_STUDIES } from "@/lib/constants";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Entry[] = [
    // Phase 1: launch set
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" },
    { path: "/bookkeeping-for-contractors", priority: 0.9, changeFrequency: "monthly" },
    { path: "/cleanup-bookkeeping", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book-a-call", priority: 0.9, changeFrequency: "yearly" },

    // Phase 2: core
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/monthly-bookkeeping", priority: 0.8, changeFrequency: "monthly" },
    { path: "/virtual-bookkeeping", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cfo-advisory", priority: 0.8, changeFrequency: "monthly" },
    { path: "/payroll", priority: 0.7, changeFrequency: "monthly" },
    { path: "/reviews", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },

    // Phase 3: growth
    { path: "/bookkeeping-for-trades", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "monthly" },
    { path: "/referrals", priority: 0.5, changeFrequency: "yearly" },
    { path: "/trusted-partners", priority: 0.5, changeFrequency: "monthly" },

    // Local
    { path: "/bookkeeper-liberty-mo", priority: 0.7, changeFrequency: "monthly" },
    { path: "/bookkeeper-kansas-city", priority: 0.7, changeFrequency: "monthly" },
    { path: "/bookkeeper-north-kansas-city", priority: 0.6, changeFrequency: "monthly" },

    // Legal
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookie-settings", priority: 0.2, changeFrequency: "yearly" },
  ];

  // Blog posts.
  for (const post of BLOG_POSTS) {
    routes.push({
      path: `/blog/${post.slug}`,
      priority: 0.6,
      changeFrequency: "yearly",
    });
  }

  // Case studies only enter the sitemap once real ones are published.
  if (CASE_STUDIES.length > 0) {
    routes.push({ path: "/case-studies", priority: 0.6, changeFrequency: "monthly" });
  }

  const lastModified = new Date("2026-07-30");

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
