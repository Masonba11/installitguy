/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://installitguy.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Completely disable static sitemap generation - we use dynamic API route at /api/sitemap
  // which is served via rewrite at /sitemap.xml
  // Exclude ALL pages to prevent next-sitemap from generating sitemap.xml
  exclude: [
    "/api/*",
    "/book-online.html",
    "/*", // Exclude all pages - we use dynamic sitemap instead
  ],
  // Transform function that returns null to prevent any sitemap generation
  transform: async (config, path) => {
    // Return null to skip all pages from sitemap generation
    // We only want robots.txt, not sitemap.xml
    return null;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // Reference our dynamic sitemap API route
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://installitguy.com"}/sitemap.xml`,
    ],
  },
};
