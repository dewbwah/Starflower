import type { MetadataRoute } from "next";
import { SITE_URL, CASE_STUDIES } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  // Case studies stay out of crawl until there are real ones to show.
  const disallow = CASE_STUDIES.length === 0 ? ["/case-studies"] : [];

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(disallow.length > 0 ? { disallow } : {}),
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
