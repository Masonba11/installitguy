import { NextSeo } from "next-seo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import QuoteForm from "../../../components/QuoteForm";
import Link from "next/link";
import Image from "next/image";
import metaData from "../../../data/metaData.json";
import {
  getServiceName,
  getServiceImages,
  getServiceHeroImage,
} from "../../../utils/serviceImages";
import {
  orderedServiceSlugs,
  servicesContent,
} from "../../../data/servicesContent";
import {
  serviceAreaSlugs,
  cityNameMap,
  cityShortNameMap,
  resolveCitySlug,
} from "../../../data/serviceAreas";
import dynamic from "next/dynamic";
import HeroSection from "../../../components/HeroSection";
import { generateServiceSchema } from "../../../utils/schemaHelpers";
import { truncateMetaDescription } from "../../../utils/metaHelpers";

const ContextualReviews = dynamic(
  () => import("../../../components/ContextualReviews"),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-gray-500">Loading reviews...</div>
    ),
  }
);

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
  const serviceImages = getServiceImages(service).slice(0, 3);
  const heroImage = getServiceHeroImage(service);
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
        meta_description: truncateMetaDescription(
          `${servicesContent[service].longDescription} Serving ${cityFullName} and nearby communities with trusted Install It Guy craftsmanship.`
        ),
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

  const cityServiceSchema = generateServiceSchema({
    serviceName: getServiceName(service),
    description: truncateMetaDescription(metaInfo.meta_description),
    url: metaInfo.url,
    areaServed: cityFullName,
    heroImage: heroImage,
  });

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
        description={truncateMetaDescription(metaInfo.meta_description)}
        canonical={metaInfo.url}
        openGraph={{
          url: metaInfo.url,
          title: metaInfo.page_title,
          description: truncateMetaDescription(metaInfo.meta_description),
          siteName: "Install It Guy",
          images: [
            {
              url: heroImage
                ? `https://installitguy.com/images/installit-guy/${heroImage}`
                : "https://installitguy.com/images/installit-guy/herohandyman.png",
              width: 1200,
              height: 630,
              alt: `${getServiceName(
                service
              )} in ${cityFullName} - Install It Guy`,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: metaInfo.primary_keyword,
          },
        ]}
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
          className="py-24"
          imageSrc={
            heroImage
              ? `/images/installit-guy/${heroImage}`
              : serviceImages.length > 0
              ? `/images/installit-guy/${serviceImages[0]}`
              : "/images/installit-guy/herohandyman.png"
          }
          imageAlt={`${getServiceName(service)} in ${cityFullName}`}
          objectPosition="50% 42%"
          priority={true}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
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
                  href="/book-online.html"
                  className="inline-flex items-center rounded-full bg-[#8BCB6B] px-5 py-3 text-sm font-semibold text-[#0f2135] shadow-sm hover:bg-[#7bb65f] transition"
                >
                  Book this service
                </Link>
                <Link
                  href="tel:+17044199799"
                  className="inline-flex items-center px-5 py-3 rounded-full font-semibold border border-white/60 text-white hover:bg-white/10 transition"
                >
                  Call (704) 419-9799
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

        {serviceImages.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                Recent {getServiceName(service)} work in {cityName}
              </h2>
              <p className="mt-2 text-slate-600 max-w-3xl">
                Here’s a look at a few {getServiceName(service).toLowerCase()}{" "}
                projects we’ve completed nearby. Every install gets the same
                careful prep, alignment checks, and tidy finish you see below.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {serviceImages.map((image, index) => (
                  <div
                    key={`${service}-image-${image}-${index}`}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200"
                  >
                    <Image
                      src={`/images/installit-guy/${image}`}
                      alt={`${getServiceName(service)} project in ${cityName}`}
                      width={640}
                      height={480}
                      className="h-56 w-full object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                What we do in {cityFullName}
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                {longDescription}
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-gray-50 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  What’s included when we handle {getServiceName(service)}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {servicesContent[service]?.longDescription}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="bg-white rounded-xl border border-slate-200 p-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                      Add-ons available
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      {service === "ceiling-fan-installation"
                        ? "Remote controls, light kits, and fresh wiring for vaulted ceilings."
                        : service === "tv-mounting"
                        ? "Cable concealment, in-wall power kits, and sound bar setup."
                        : service === "garbage-disposal-installation"
                        ? "Switch installation, drain adjustments, and old unit haul-away."
                        : `Custom upgrades tailored to your ${cityName} project.`}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                      Ideal for
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      {service === "ceiling-fan-installation"
                        ? `Bedrooms, bonus rooms, porches, and outdoor living spaces around ${cityName}.`
                        : service === "tv-mounting"
                        ? "Living rooms, media dens, and outdoor patios that need a clean, secure install."
                        : service === "garbage-disposal-installation"
                        ? "Kitchen upgrades, home flips, and busy households wanting faster cleanup."
                        : `Homes and businesses in ${cityName} looking for reliable ${getServiceName(
                            service
                          ).toLowerCase()} support.`}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                      Why locals choose us
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      {service === "ceiling-fan-installation"
                        ? "We balance every blade, test every control, and leave the space spotless."
                        : service === "tv-mounting"
                        ? "We arrive with anchors for any wall type and hide wires so the room looks finished."
                        : service === "garbage-disposal-installation"
                        ? "We handle plumbing and electrical checks so your new disposal runs quietly and safely."
                        : "We show up prepared, protect your home, and stay until everything works perfectly."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Need another service?</h3>
              <p className="mt-3 text-slate-200 text-sm leading-relaxed">
                We bring the same crew to handle multiple punch list items while
                we’re in {cityName}. Bundle tasks and we’ll map the visit around
                your priorities.
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
            <ContextualReviews
              context={service}
              maxReviews={6}
              showTitle
              title={`${getServiceName(service)} reviews in ${cityName}`}
            />
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

        <section className="py-20 bg-gray-50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Other services we offer in {cityFullName}
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Need help with something else while we’re in {cityName}? Explore
              more ways we support homeowners in the area and keep projects
              moving without calling another crew.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((slug) => (
                <Link
                  key={slug}
                  href={`/service-areas/${city}/${slug}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-primary-600 hover:border-primary-200 hover:text-primary-500 transition"
                >
                  <span>
                    {getServiceName(slug)} in {cityName}
                  </span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { city, service } = context.params;
  const resolvedCity = resolveCitySlug(city);

  if (!serviceAreaSlugs.includes(resolvedCity) || !services.includes(service)) {
    return { notFound: true };
  }

  // Redirect Shelby city-service pages to main service pages
  if (resolvedCity === "shelby-nc") {
    return {
      redirect: {
        destination: `/services/${service}`,
        permanent: true,
      },
    };
  }

  if (resolvedCity !== city) {
    return {
      redirect: {
        destination: `/service-areas/${resolvedCity}/${service}`,
        permanent: true,
      },
    };
  }

  return {
    props: {
      city: resolvedCity,
      service,
    },
  };
}
