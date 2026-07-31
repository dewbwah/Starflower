import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Phase 2 stubs are also noindex at the page level; blocking here keeps
      // them out of crawl until they launch.
      disallow: [
        "/services",
        "/monthly-bookkeeping",
        "/virtual-bookkeeping",
        "/cfo-advisory",
        "/reviews",
        "/contact",
        "/referrals",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
