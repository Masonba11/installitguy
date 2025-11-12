import { NextSeo } from "next-seo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Reviews from "../../../components/Reviews";
import QuoteForm from "../../../components/QuoteForm";
import ContextualFAQs from "../../../components/ContextualFAQs";
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
    "Licensed, insured, and background-checked team",
    "Straightforward quotes without surprise add-ons",
    "Careful prep, respectful cleanup, and lifetime workmanship support",
  ];
  const otherServices = services.filter((slug) => slug !== service);

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
        <section className="hero-background text-white py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
              {cityFullName}
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              {getServiceName(service)} for homes in {cityFullName}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-200 leading-relaxed">
              {serviceOverview?.longDescription ||
                `Professional ${getServiceName(
                  service
                ).toLowerCase()} services delivered by a local crew who knows ${cityFullName} neighborhoods inside and out.`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote-form"
                className="btn-secondary inline-flex justify-center"
              >
                Plan your visit
              </a>
              <span className="text-sm text-slate-200 sm:ml-4">
                Prefer to talk? Call{" "}
                <a href="tel:+17044199799" className="font-semibold text-white">
                  (704) 419-9799
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700">
            {serviceOverview && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  What we handle in {cityFullName}
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  {serviceOverview.shortDescription}
                </p>
                <p className="mt-4 text-gray-600">
                  {serviceOverview.longDescription}
                </p>
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                How the appointment flows
              </h3>
              <ol className="mt-4 space-y-3 text-gray-600">
                {processSteps.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Every project includes
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                {standardAssurances.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Need other help while we’re there?
            </h2>
            <p className="mt-4 text-gray-600">
              We can bundle additional services into the same visit so
              everything is handled at once.
            </p>
            <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
              {otherServices.map((slug) => (
                <li
                  key={slug}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:border-primary-200 hover:shadow-md"
                >
                  <Link
                    href={`/service-areas/${city}/${slug}`}
                    className="block"
                  >
                    <span className="font-semibold text-gray-900">
                      {servicesContent[slug]?.name || getServiceName(slug)}
                    </span>
                    <span className="block text-sm text-gray-500 mt-1">
                      {servicesContent[slug]?.shortDescription}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
