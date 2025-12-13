import { serviceAreaSlugs } from "../../data/serviceAreas";
import {
  simplifiedServiceSlugs,
  PRIMARY_LOCATIONS,
  CORE_SERVICES,
} from "../../data/simplifiedServices";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://installitguy.com";

function getPriority(url) {
  // Remove SITE_URL prefix for matching
  const path = url.replace(SITE_URL, "");

  // 1. Homepage
  if (path === "/") {
    return "1.0";
  }

  // 2. Base service pages (/services/{service})
  // Check if path starts with /services/ and has exactly 3 segments (/, services, {service})
  if (path.startsWith("/services/")) {
    const segments = path.split("/").filter((seg) => seg.length > 0);
    if (segments.length === 2 && segments[0] === "services") {
      return "0.95";
    }
  }

  // 3. City pages (/service-areas/{city})
  // Check if path starts with /service-areas/ and has exactly 3 segments (/, service-areas, {city})
  if (path.startsWith("/service-areas/")) {
    const segments = path.split("/").filter((seg) => seg.length > 0);
    if (segments.length === 2 && segments[0] === "service-areas") {
      return "0.90";
    }
    // 4. City + service pages (/service-areas/{city}/{service})
    // Check if path has exactly 4 segments (/, service-areas, {city}, {service})
    if (segments.length === 3 && segments[0] === "service-areas") {
      return "0.75";
    }
  }

  // 5. General supporting pages (index pages and utility pages)
  return "0.70";
}

function generateSitemap() {
  const sitemap = [];

  // 1. Homepage
  const homepageUrl = `${SITE_URL}/`;
  sitemap.push({
    loc: homepageUrl,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: getPriority(homepageUrl),
  });

  // 2. Base service pages (/services/{service}) - Only CORE services
  CORE_SERVICES.forEach((service) => {
    const serviceUrl = `${SITE_URL}/services/${service}`;
    sitemap.push({
      loc: serviceUrl,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: getPriority(serviceUrl),
    });
  });

  // 3. Main services index page
  const servicesUrl = `${SITE_URL}/services`;
  sitemap.push({
    loc: servicesUrl,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: getPriority(servicesUrl),
  });

  // 4. Main service areas index page
  const serviceAreasUrl = `${SITE_URL}/service-areas`;
  sitemap.push({
    loc: serviceAreasUrl,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: getPriority(serviceAreasUrl),
  });

  // 5. City pages (/service-areas/{city}) - Only primary locations
  const primaryLocationSlugs = PRIMARY_LOCATIONS.map((loc) => loc.slug);
  primaryLocationSlugs.forEach((city) => {
    const cityUrl = `${SITE_URL}/service-areas/${city}`;
    sitemap.push({
      loc: cityUrl,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: getPriority(cityUrl),
    });

    // 6. City-service combination pages (/service-areas/{city}/{service})
    // Only include CORE services (optional city handyman pages)
    // For now, only include handyman-services for each city
    const cityServiceUrl = `${SITE_URL}/service-areas/${city}/handyman-services`;
    sitemap.push({
      loc: cityServiceUrl,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: getPriority(cityServiceUrl),
    });
  });

  // 7. Where We Work page
  const whereWeWorkUrl = `${SITE_URL}/service-areas/where-we-work`;
  sitemap.push({
    loc: whereWeWorkUrl,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: "0.60",
  });

  // 8. Utility pages (reviews, contact-us, faqs, gallery, thank-you, investors)
  const utilityPages = [
    "reviews",
    "contact-us",
    "faqs",
    "gallery",
    "thank-you",
    "investors",
  ];
  utilityPages.forEach((page) => {
    const utilityUrl = `${SITE_URL}/${page}`;
    sitemap.push({
      loc: utilityUrl,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: getPriority(utilityUrl),
    });
  });

  return sitemap;
}

export default function handler(req, res) {
  const sitemap = generateSitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate"
  );
  res.status(200).send(xml);
}
