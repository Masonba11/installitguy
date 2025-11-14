import { serviceAreas } from "../data/serviceAreas";
import { orderedServiceSlugs, servicesContent } from "../data/servicesContent";

// Base LocalBusiness properties
const BASE_BUSINESS = {
  "@type": "LocalBusiness",
  name: "Install It Guy",
  image: "https://installitguy.com/images/installit-guy/herohandyman.png",
  logo: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
  url: "https://installitguy.com",
  telephone: "+1-704-419-9799",
  email: "info@installitguy.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 Joseph Ct",
    addressLocality: "Shelby",
    addressRegion: "NC",
    postalCode: "28152",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "35.2921",
    longitude: "-81.5357",
  },
  openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "240",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/installitguy",
    "https://www.instagram.com/installitguy",
    "https://www.yelp.com/biz/install-it-guy-shelby",
  ],
  foundingDate: "1994",
  numberOfEmployees: "1-10",
  slogan: "Quality installs, fast repairs, fair prices",
};

// All cities for global schema
const ALL_CITIES = serviceAreas.map((area) => ({
  "@type": "City",
  name: area.name,
}));

// All service names
const ALL_SERVICE_NAMES = orderedServiceSlugs.map(
  (slug) => servicesContent[slug].name
);

/**
 * Generate LocalBusiness schema based on route type
 * @param {Object} options
 * @param {string} options.type - 'global' | 'city' | 'service-shelby' | 'city-service'
 * @param {string} options.cityName - City name (for city/city-service types)
 * @param {string} options.serviceName - Service name (for service-shelby/city-service types)
 * @param {string} options.heroImage - Hero image URL (optional, for service pages)
 * @param {string} options.description - Custom description (optional)
 * @returns {Object} LocalBusiness schema
 */
export function generateLocalBusinessSchema({
  type,
  cityName = null,
  serviceName = null,
  heroImage = null,
  description = null,
}) {
  const schema = { ...BASE_BUSINESS };

  // Set description
  if (description) {
    schema.description = description;
  } else {
    schema.description =
      "Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.";
  }

  // Set image for service pages
  if (heroImage) {
    schema.image = `https://installitguy.com/images/installit-guy/${heroImage}`;
  }

  // Set areaServed based on type
  if (type === "global") {
    // Homepage, /services, /service-areas - all cities
    schema.areaServed = ALL_CITIES;
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Handyman Services",
      itemListElement: orderedServiceSlugs.map((slug) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: servicesContent[slug].name,
          description: servicesContent[slug].longDescription,
        },
      })),
    };
  } else if (type === "city") {
    // /service-areas/{city} - single city only
    schema.areaServed = {
      "@type": "City",
      name: cityName,
    };
    // No makesOffer, no OfferCatalog for city pages
  } else if (type === "service-shelby") {
    // /services/{service} - Shelby NC only
    schema.areaServed = {
      "@type": "City",
      name: "Shelby, NC",
    };
    // Only the one service in makesOffer
    if (serviceName) {
      schema.makesOffer = [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        },
      ];
    }
    // NO OfferCatalog
  } else if (type === "city-service") {
    // /service-areas/{city}/{service} - single city only
    schema.areaServed = {
      "@type": "City",
      name: cityName,
    };
    // Only the one service in makesOffer
    if (serviceName) {
      schema.makesOffer = [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        },
      ];
    }
    // NO OfferCatalog
  }

  return schema;
}

/**
 * Generate Service schema
 * @param {Object} options
 * @param {string} options.serviceName - Service name
 * @param {string} options.description - Service description
 * @param {string} options.url - Service URL
 * @param {string} options.areaServed - Area served (e.g., "Shelby, NC" or "Charlotte, NC")
 * @param {string} options.heroImage - Hero image (optional)
 * @returns {Object} Service schema
 */
export function generateServiceSchema({
  serviceName,
  description,
  url,
  areaServed,
  heroImage = null,
}) {
  const providerSchema = generateLocalBusinessSchema({
    type: areaServed === "Shelby, NC" ? "service-shelby" : "city-service",
    cityName: areaServed !== "Shelby, NC" ? areaServed : null,
    serviceName: serviceName,
    heroImage: heroImage,
  });

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} Service`,
    description: description,
    url: url,
    category: "Home Improvement",
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    provider: providerSchema,
    offers: {
      "@type": "Offer",
      price: "99.00",
      priceCurrency: "USD",
      availability: "InStock",
      url: url,
      description: description,
    },
  };
}
