import { orderedServiceSlugs, servicesContent } from "../data/servicesContent";
import { serviceAreas } from "../data/serviceAreas";

const serviceNames = orderedServiceSlugs.map(
  (slug) => servicesContent[slug].name
);
const areaNames = serviceAreas.map((area) => area.name);

const BASE_LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Install It Guy",
  image:
    "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
  logo: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
  url: "https://installitguy.com",
  telephone: "+1-704-419-9799",
  email: "info@installitguy.com",
  priceRange: "$$",
  slogan: "Quality installs, fast repairs, fair prices",
  foundingDate: "1994",
  numberOfEmployees: "1-10",
  description:
    "Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
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
  sameAs: [
    "https://www.facebook.com/installitguy",
    "https://www.instagram.com/installitguy",
    "https://www.yelp.com/biz/install-it-guy-shelby",
  ],
  areaServed: areaNames.map((name) => ({
    "@type": "City",
    name,
  })),
  serviceType: serviceNames,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "240",
  },
};

export default function LocalBusinessSchema({
  serviceName,
  areaName,
  description,
}) {
  const schema = {
    ...BASE_LOCAL_BUSINESS_SCHEMA,
    description: description || BASE_LOCAL_BUSINESS_SCHEMA.description,
    serviceType: serviceName ? [serviceName] : serviceNames,
    areaServed: areaName
      ? [
          {
            "@type": "City",
            name: areaName,
          },
        ]
      : BASE_LOCAL_BUSINESS_SCHEMA.areaServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
