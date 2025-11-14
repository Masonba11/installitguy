/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://installitguy.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Disable static sitemap generation - we use dynamic API route at /api/sitemap
  // which is served via rewrite at /sitemap.xml
  exclude: ["/api/*", "/book-online.html"],
  // Empty paths array to prevent sitemap.xml generation
  // Robots.txt will still be generated
  additionalPaths: async () => {
    // Return empty array to prevent next-sitemap from generating static sitemap.xml
    // We use the dynamic API route at /api/sitemap instead
    return [];
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
