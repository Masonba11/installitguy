import { NextSeo } from "next-seo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import QuoteForm from "../../../components/QuoteForm";
import Link from "next/link";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import metaData from "../../../data/metaData.json";
import { getServiceName } from "../../../utils/serviceImages";
import {
  orderedServiceSlugs,
  servicesContent,
} from "../../../data/servicesContent";
import {
  serviceAreaSlugs,
  cityNameMap,
  cityShortNameMap,
} from "../../../data/serviceAreas";
import dynamic from "next/dynamic";
import HeroSection from "../../../components/HeroSection";

const Reviews = dynamic(() => import("../../../components/Reviews"), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-gray-500">Loading reviews...</div>
  ),
});

const ContextualFAQs = dynamic(
  () => import("../../../components/ContextualFAQs"),
  {
    loading: () => (
      <div className="py-16 text-center text-gray-500">Loading FAQs...</div>
    ),
  }
);

const serviceAreaList = serviceAreaSlugs;

const services = orderedServiceSlugs;

const formatServiceList = (list) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

const getCityShortName = (citySlug) =>
  cityShortNameMap[citySlug] ||
  citySlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

const getCityFullName = (citySlug) =>
  cityNameMap[citySlug] || getCityShortName(citySlug);

export default function ServiceAreaServicePage({ city, service }) {
  // Get page data from metadata directly
  const pageData = metaData.find(
    (item) =>
      item.url === `https://installitguy.com/service-areas/${city}/${service}/`
  );

  const canonicalUrl = `https://installitguy.com/service-areas/${city}/${service}/`;
  const cityName = getCityShortName(city);
  const cityFullName = getCityFullName(city);
  const serviceOverview = servicesContent[service];
  const processSteps = [
    "Share your project details and any add-ons you want handled during the same visit",
    "We confirm timing, access, and materials so the crew arrives fully prepared",
    "Technicians complete the work, test everything, and tidy the space before leaving",
  ];
  const standardAssurances = [
    "Veteran technicians focused on precision work",
    "Straightforward quotes before we begin",
    "Protective prep, tidy cleanup, and lifetime satisfaction support",
  ];
  const otherServices = services.filter((slug) => slug !== service);
  const shortDescription =
    serviceOverview?.shortDescription ||
    `Reliable ${getServiceName(
      service
    ).toLowerCase()} for homeowners in ${cityFullName}.`;
  const longDescription =
    serviceOverview?.longDescription ||
    `We combine careful prep, precise installation, and a detailed walkthrough so ${cityFullName} homeowners can trust the finished result.`;

  const fallbackMeta = serviceOverview
    ? {
        url: canonicalUrl,
        page_title: `${servicesContent[service].name} in ${cityFullName} | Install It Guy`,
        meta_description: `${servicesContent[service].longDescription} Serving ${cityFullName} and nearby communities with trusted Install It Guy craftsmanship.`,
        primary_keyword: `${servicesContent[
          service
        ].name.toLowerCase()} ${cityName.toLowerCase()}`,
      }
    : null;

  const metaInfo = pageData || fallbackMeta;

  if (
    !metaInfo ||
    !serviceAreaList.includes(city) ||
    !services.includes(service)
  ) {
    return <div>Page not found</div>;
  }

  const cityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${getServiceName(service)} in ${cityFullName}`,
    description: metaInfo.meta_description,
    url: metaInfo.url,
    serviceType: getServiceName(service),
    category: "Home Improvement",
    areaServed: {
      "@type": "Place",
      name: cityFullName,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Install It Guy",
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
      areaServed: {
        "@type": "City",
        name: cityFullName,
      },
    },
    offers: {
      "@type": "Offer",
      price: "99.00",
      priceCurrency: "USD",
      availability: "InStock",
      url: metaInfo.url,
      description: servicesContent[service]?.longDescription,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://installitguy.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://installitguy.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: getCityFullName(city),
        item: `https://installitguy.com/service-areas/${city}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: getServiceName(service),
        item: metaInfo.url,
      },
    ],
  };

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
        serviceName={getServiceName(service)}
        areaName={cityFullName}
        description={metaInfo.meta_description}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: `${getServiceName(service)} FAQs in ${getCityFullName(city)}`,
            description: `Common questions about ${getServiceName(
              service
            ).toLowerCase()} services in ${getCityFullName(city)}`,
            url: metaInfo.url,
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does ${getServiceName(
                  service
                ).toLowerCase()} cost in ${getCityFullName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our pricing varies based on the specific project requirements. We provide free, detailed quotes for all ${getServiceName(
                    service
                  ).toLowerCase()} projects in ${getCityFullName(
                    city
                  )}. Contact us for a personalized estimate.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you offer same-day service for ${getServiceName(
                  service
                ).toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, we often provide same-day service for ${getServiceName(
                    service
                  ).toLowerCase()} in ${getCityFullName(
                    city
                  )}. Contact us to check availability and schedule your appointment.`,
                },
              },
              {
                "@type": "Question",
                name: `What services do you offer for ${getServiceName(
                  service
                )} in ${getCityFullName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We provide expert ${getServiceName(
                    service
                  ).toLowerCase()} services in ${getCityFullName(
                    city
                  )} along with ${formatServiceList(
                    services
                      .filter((slug) => slug !== service)
                      .map((slug) => servicesContent[slug].name)
                  )}.`,
                },
              },
              {
                "@type": "Question",
                name: `What areas do you serve for ${getServiceName(
                  service
                ).toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We serve ${getCityFullName(
                    city
                  )} and surrounding counties including Cabarrus, Cleveland, Mecklenburg, and Union in North Carolina along with Lancaster, Richland, and York counties in South Carolina.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you provide warranties on ${getServiceName(
                  service
                ).toLowerCase()} work?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes! We proudly back our ${getServiceName(
                    service
                  ).toLowerCase()} work with a lifetime customer satisfaction guarantee. If you ever have a concern about our work, we'll make it right.`,
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        <HeroSection
          imageSrc="/images/installit-guy/hero-ceiling-fan.webp"
          imageAlt={`${getServiceName(service)} in ${cityFullName}`}
          priority
          className="py-24"
          objectPosition="50% 38%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                {cityFullName} {getServiceName(service).toLowerCase()}
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                {getServiceName(service)} in {cityFullName}
              </h1>
              <p className="mt-5 text-lg text-slate-100/90 max-w-2xl">
                {shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#quote-form"
                  className="inline-flex items-center px-5 py-3 rounded-lg font-semibold bg-white text-slate-900 shadow-md hover:bg-slate-100 transition-colors"
                >
                  Get a fast quote
                </Link>
                <Link
                  href="tel:+17044199799"
                  className="inline-flex items-center px-5 py-3 rounded-lg font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Call 704-419-9799
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-slate-100">
                <h2 className="text-lg font-semibold text-white">
                  How this visit works
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {processSteps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="mt-1 text-primary-200">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-slate-100">
                <h2 className="text-lg font-semibold text-white">
                  What every project includes
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {standardAssurances.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-primary-200">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </HeroSection>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                What we do in {cityFullName}
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                {longDescription}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {otherServices.slice(0, 6).map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/service-areas/${city}/${slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-500 font-medium"
                    >
                      {getServiceName(slug)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Need another service?</h3>
              <p className="mt-3 text-slate-200 text-sm leading-relaxed">
                We bring the same crew to handle multiple punch list items while we’re in {cityName}. Bundle tasks and we’ll map the visit around your priorities.
              </p>
              <div className="mt-5">
                <Link
                  href={`/service-areas/${city}`}
                  className="inline-flex items-center font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  View all services in {cityName}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        <section className="py-20 bg-gray-50" id="quote-form">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title={`Request ${getServiceName(
                service
              ).toLowerCase()} in ${cityFullName}`}
              subtitle="Share the details and our team will confirm pricing and scheduling within one business day."
            />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualFAQs
              context={service}
              maxFAQs={5}
              showTitle
              title={`${getServiceName(service)} FAQs for ${cityFullName}`}
              cityName={cityFullName}
              serviceLabel={`${getServiceName(service)} services`}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { city, service } = context.params;

  return {
    props: {
      city,
      service,
    },
  };
}
