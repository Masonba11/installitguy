import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";
import metaData from "../../data/metaData.json";
import {
  orderedServiceSlugs,
  servicesContent,
} from "../../data/servicesContent";
import {
  serviceAreas as allServiceAreas,
  serviceAreaSlugs,
  cityNameMap,
  cityShortNameMap,
  resolveCitySlug,
} from "../../data/serviceAreas";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";

const Reviews = dynamic(() => import("../../components/Reviews"), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-gray-500">Loading reviews...</div>
  ),
});

const ContextualFAQs = dynamic(
  () => import("../../components/ContextualFAQs"),
  {
    loading: () => (
      <div className="py-16 text-center text-gray-500">Loading FAQs...</div>
    ),
  }
);

const services = orderedServiceSlugs;

const serviceAreaList = serviceAreaSlugs;

const formatServiceList = (list) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

const serviceNames = services.map((slug) => servicesContent[slug].name);

const getCityName = (citySlug) => cityNameMap[citySlug] || citySlug;

const getCityShortName = (citySlug) =>
  cityShortNameMap[citySlug] || getCityName(citySlug);

export default function ServiceAreaPage({ city }) {
  // Get city data from metadata directly
  const cityData = metaData.find(
    (page) => page.url === `https://installitguy.com/service-areas/${city}/`
  );

  const cityEntry = allServiceAreas.find((area) => area.slug === city);

  if (!cityEntry || !serviceAreaList.includes(city)) {
    return <div>City not found</div>;
  }

  const canonicalUrl = `https://installitguy.com/service-areas/${city}/`;

  const fallbackMeta = {
    url: canonicalUrl,
    page_title: `Handyman Services in ${cityEntry.name} | Install It Guy`,
    meta_description: `Professional handyman services in ${
      cityEntry.name
    }. We provide ${formatServiceList(
      serviceNames
    )} with 30+ years of experience and a lifetime warranty.`,
    primary_keyword: `handyman services ${cityEntry.shortName.toLowerCase()} ${cityEntry.state.toLowerCase()}`,
  };

  const metaInfo = cityData || fallbackMeta;

  const cityBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Install It Guy",
    description: metaInfo.meta_description,
    url: metaInfo.url,
    telephone: "+17044199799",
    email: "info@installitguy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "210 Joseph Ct",
      addressLocality: "Shelby",
      addressRegion: "NC",
      postalCode: "28152",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: getCityName(city),
    },
    serviceType: services.map((slug) => servicesContent[slug].name),
  };

  const faqEntities = [
    {
      "@type": "Question",
      name: `What services do you offer in ${getCityName(city)}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `We regularly help homeowners in ${getCityName(
          city
        )} with ${formatServiceList(serviceNames)} plus seasonal maintenance and punch list work.`,
      },
    },
    {
      "@type": "Question",
      name: `Do you work in nearby neighborhoods around ${getCityName(city)}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. Our routes cover Cabarrus, Cleveland, Mecklenburg, and Union counties in North Carolina as well as Lancaster, Richland, and York counties in South Carolina, so scheduling around ${getCityName(
          city
        )} is easy.`,
      },
    },
    {
      "@type": "Question",
      name: `How quickly can you schedule a visit in ${getCityName(city)}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Most projects are booked within a week. Let us know your timeline and we'll share the first available openings for our ${getCityName(
          city
        )} route.`,
      },
    },
    {
      "@type": "Question",
      name: `Can I bundle multiple projects during one appointment?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Absolutely. Share your full list when you request service and we'll price, schedule, and complete the tasks while we're at your ${getCityName(
          city
        )} home.`,
      },
    },
  ];

  return (
    <>
      <NextSeo
        title={metaInfo.page_title}
        description={metaInfo.meta_description}
        canonical={metaInfo.url}
        openGraph={{
          url: metaInfo.url,
          title: metaInfo.page_title,
          description: metaInfo.meta_description,
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: metaInfo.primary_keyword,
          },
        ]}
      />

      <LocalBusinessSchema
        areaName={getCityName(city)}
        description={metaInfo.meta_description}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBusinessSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: `Handyman Services FAQs in ${getCityName(city)}`,
            description: `Common questions about handyman services in ${getCityName(
              city
            )}`,
            url: metaInfo.url,
            mainEntity: faqEntities,
          }),
        }}
      />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { city } = params || {};
  const resolvedSlug = resolveCitySlug(city);

  if (!serviceAreaSlugs.includes(resolvedSlug)) {
    return { notFound: true };
  }

  if (resolvedSlug !== city) {
    return {
      redirect: {
        destination: `/service-areas/${resolvedSlug}`,
        permanent: true,
      },
    };
  }

  return {
    props: {
      city: resolvedSlug,
    },
  };
}