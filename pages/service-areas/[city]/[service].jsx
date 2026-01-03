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
// Removed orderedServiceSlugs - only using simplified services now
import {
  simplifiedServices,
  simplifiedServiceSlugs,
  PRIMARY_LOCATIONS,
  CORE_SERVICES,
  MINOR_SERVICE_TO_PARENT,
} from "../../../data/simplifiedServices";
import { simplifiedServiceContent } from "../../../data/simplifiedServiceContent";
import {
  serviceAreaSlugs,
  cityNameMap,
  cityShortNameMap,
  resolveCitySlug,
} from "../../../data/serviceAreas";
import dynamic from "next/dynamic";
import HeroSection from "../../../components/HeroSection";
import HeroStats from "../../../components/HeroStats";
import { generateServiceSchema } from "../../../utils/schemaHelpers";
import { truncateMetaDescription } from "../../../utils/metaHelpers";

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

// Check if it's a simplified service or old service
const services = simplifiedServiceSlugs;

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
  // Check if it's a simplified service
  const isSimplifiedService = simplifiedServiceSlugs.includes(service);
  const isPrimaryLocation = PRIMARY_LOCATIONS.some((loc) => loc.slug === city);

  // Get page data from metadata directly
  const pageData = metaData.find(
    (item) =>
      item.url === `https://installitguy.com/service-areas/${city}/${service}/`
  );

  const canonicalUrl = `https://installitguy.com/service-areas/${city}/${service}/`;
  const cityName = getCityShortName(city);
  const cityFullName = getCityFullName(city);

  // Use simplified service content
  const serviceData = simplifiedServiceContent[service];
  const serviceInfo = simplifiedServices[service];

  // Get service name
  const getServiceDisplayName = () => {
    if (isSimplifiedService) return serviceInfo.name;
    return getServiceName(service);
  };

  const serviceDisplayName = getServiceDisplayName();
  const processSteps = [
    "Share your project details and any add-ons you want handled during the same visit",
    "We confirm timing, access, and materials so the crew arrives fully prepared",
    "Technicians complete the work, test everything, and tidy the space before leaving",
  ];
  const otherServices = simplifiedServiceSlugs.filter(
    (slug) => slug !== service
  );
  const serviceImages = isSimplifiedService
    ? getServiceImages(service).slice(0, 6)
    : getServiceImages(service).slice(0, 3);
  const heroImage = getServiceHeroImage(service);

  const shortDescription = isSimplifiedService
    ? serviceData?.shortDescription ||
      `Professional ${serviceDisplayName.toLowerCase()} for homeowners ${cityFullName}.`
    : serviceOverview?.shortDescription ||
      `Reliable ${serviceDisplayName.toLowerCase()} for homeowners ${cityFullName}.`;

  const longDescription = isSimplifiedService
    ? serviceData?.longDescription ||
      `We provide expert ${serviceDisplayName.toLowerCase()} for ${cityFullName} homeowners.`
    : serviceOverview?.longDescription ||
      `We combine careful prep, precise installation, and a detailed walkthrough so ${cityFullName} homeowners can trust the finished result.`;

  const fallbackMeta = isSimplifiedService
    ? {
        url: canonicalUrl,
        page_title: `${serviceDisplayName} ${cityFullName} | Install It Guy`,
        meta_description: truncateMetaDescription(
          `${
            serviceData?.longDescription || ""
          } Serving ${cityFullName} and nearby communities with trusted Install It Guy craftsmanship.`
        ),
        primary_keyword: `${serviceDisplayName.toLowerCase()} ${cityName.toLowerCase()}`,
      }
    : serviceOverview
    ? {
        url: canonicalUrl,
        page_title: `${serviceDisplayName} ${cityFullName} | Install It Guy`,
        meta_description: truncateMetaDescription(
          `${serviceOverview.longDescription} Serving ${cityFullName} and nearby communities with trusted Install It Guy craftsmanship.`
        ),
        primary_keyword: `${serviceDisplayName.toLowerCase()} ${cityName.toLowerCase()}`,
      }
    : null;

  const metaInfo = pageData || fallbackMeta;

  if (
    !metaInfo ||
    !serviceAreaList.includes(city) ||
    !simplifiedServiceSlugs.includes(service)
  ) {
    return <div>Page not found</div>;
  }

  // Check if this is a minor service (not a core service)
  const isMinorService = !CORE_SERVICES.includes(service);
  const parentService = isMinorService
    ? MINOR_SERVICE_TO_PARENT[service]
    : null;
  const parentServiceInfo = parentService
    ? simplifiedServices[parentService]
    : null;

  const cityServiceSchema = generateServiceSchema({
    serviceName: serviceDisplayName,
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
        name: serviceDisplayName,
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
        noindex={isMinorService}
        nofollow={isMinorService}
        openGraph={{
          url: metaInfo.url,
          title: metaInfo.page_title,
          description: truncateMetaDescription(metaInfo.meta_description),
          siteName: "Install It Guy",
          images: [
            {
              url: heroImage
                ? `https://installitguy.com/images/installit-guy/${heroImage}`
                : "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: `${serviceDisplayName} ${cityFullName} - Install It Guy`,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: metaInfo.primary_keyword,
          },
          ...(isMinorService
            ? [
                {
                  name: "robots",
                  content: "noindex, follow",
                },
              ]
            : []),
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
            name: `${serviceDisplayName} FAQs ${getCityFullName(city)}`,
            description: `Common questions about ${serviceDisplayName.toLowerCase()} services ${getCityFullName(
              city
            )}`,
            url: metaInfo.url,
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does ${serviceDisplayName.toLowerCase()} cost ${getCityFullName(
                  city
                )}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our pricing varies based on the specific project requirements. We provide free, detailed quotes for all ${serviceDisplayName.toLowerCase()} projects ${getCityFullName(
                    city
                  )}. Contact us for a personalized estimate.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you offer same-day service for ${serviceDisplayName.toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, we often provide same-day service for ${serviceDisplayName.toLowerCase()} ${getCityFullName(
                    city
                  )}. Contact us to check availability and schedule your appointment.`,
                },
              },
              {
                "@type": "Question",
                name: `What services do you offer for ${serviceDisplayName} ${getCityFullName(
                  city
                )}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We provide expert ${serviceDisplayName.toLowerCase()} services ${getCityFullName(
                    city
                  )} along with ${formatServiceList(
                    isSimplifiedService
                      ? simplifiedServiceSlugs
                          .filter((slug) => slug !== service)
                          .map((slug) => simplifiedServices[slug].name)
                      : services
                          .filter((slug) => slug !== service)
                          .map(
                            (slug) =>
                              simplifiedServices[slug]?.name ||
                              getServiceName(slug)
                          )
                  )}.`,
                },
              },
              {
                "@type": "Question",
                name: `What areas do you serve for ${serviceDisplayName.toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We serve ${getCityFullName(
                    city
                  )} and surrounding counties including Cabarrus, Cleveland, Mecklenburg, and Union in North Carolina along with Lancaster, Richland, and York counties in South Carolina.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you provide warranties on ${serviceDisplayName.toLowerCase()} work?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes! We proudly back our ${serviceDisplayName.toLowerCase()} work with a lifetime customer satisfaction guarantee. If you ever have a concern about our work, we'll make it right.`,
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        {isMinorService && (
          <div className="bg-[#8BCB6B]/10 border-b border-[#8BCB6B]/20 py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-700 mb-2">
                <Link
                  href={`/service-areas/${city}`}
                  className="text-[#8BCB6B] hover:text-[#7bb65f] font-semibold underline"
                >
                  ← Back to {cityFullName} services
                </Link>
              </p>
              {parentServiceInfo && (
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{serviceDisplayName}</span> is
                  part of our{" "}
                  <Link
                    href={`/services/${parentService}`}
                    className="text-[#8BCB6B] hover:text-[#7bb65f] font-semibold underline"
                  >
                    {parentServiceInfo.name}
                  </Link>{" "}
                  offering. View all services included in this category.
                </p>
              )}
            </div>
          </div>
        )}
        <HeroSection
          className="py-24"
          imageSrc={
            heroImage
              ? `/images/installit-guy/${heroImage}`
              : serviceImages.length > 0
              ? `/images/installit-guy/${serviceImages[0]}`
              : "/images/installit-guy/herohandyman.png"
          }
          imageAlt={`${serviceDisplayName} ${cityFullName}`}
          objectPosition="50% 42%"
          priority={true}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                {cityFullName} {serviceDisplayName.toLowerCase()}
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                {serviceDisplayName} {cityFullName} done right the first time
              </h1>
              <p className="mt-5 text-lg text-slate-100/90 max-w-2xl">
                {shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("quote-form")
                      ?.scrollIntoView({ block: "start" });
                  }}
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-[#8BCB6B] text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
                >
                  Get Free Quote
                </a>
                <Link
                  href="tel:+17044199799"
                  className="inline-flex items-center px-5 py-3 rounded-full font-semibold border border-white/60 text-white hover:bg-white/10 transition"
                >
                  Call (704) 419-9799
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              {isSimplifiedService && serviceData?.included && (
                <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-slate-100">
                  <h2 className="text-lg font-semibold text-white">
                    What's Included
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {serviceData.included.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-[#8BCB6B]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <HeroStats />
            </div>
          </div>
        </HeroSection>

        {/* Overview Section - Only for simplified services */}
        {isSimplifiedService && serviceData && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Overview of {serviceDisplayName}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {serviceData.longDescription}
              </p>
            </div>
          </section>
        )}

        {/* What's Included Section - Only for simplified services */}
        {isSimplifiedService && serviceData && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included in This Service
              </h2>
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                {serviceData.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-primary-600">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Services We Cover
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {serviceData.minorServices.map((minorService) => {
                    const serviceLinkMap = {
                      "garbage disposal repair": "garbage-disposal-repair",
                      "faucet repair": "faucet-repair",
                      "toilet repair": "toilet-repair",
                      "minor electrical repairs": "electrical-repairs",
                      "door installation & replacement": "door-installation",
                      "door repair": "door-repair",
                      "ceiling fan installation": "ceiling-fan-installation",
                      "tv mounting": "tv-mounting",
                      "furniture assembly": "furniture-assembly",
                      "mirror & towel bar installation": "mirror-installation",
                      "blinds & curtain rod installation": "blind-installation",
                      "lighting fixture installation": "lighting-installation",
                      "ring doorbell & smart device installation":
                        "security-camera-installation",
                      "deck repair": "deck-repair",
                      "fence repair": "fence-repair",
                      "deck installation": "deck-installation",
                      "fence installation": "fence-installation",
                      "composite decking": "composite-decking-installation",
                      "hardwood flooring": "hardwood-floor-installation",
                      "laminate flooring": "laminate-floor-installation",
                      "vinyl flooring": "vinyl-floor-installation",
                      "tile flooring": "tile-floor-installation",
                      "epoxy flooring": "epoxy-floor-installation",
                      "garage door installation": "garage-door-installation",
                      "garage door repair": "garage-door-repair",
                      "garage door opener installation":
                        "garage-door-opener-installation",
                      "garage door opener repair": "garage-door-opener-repair",
                    };
                    const linkSlug =
                      serviceLinkMap[minorService.toLowerCase()] || null;

                    if (linkSlug && simplifiedServiceSlugs.includes(linkSlug)) {
                      return (
                        <Link
                          key={minorService}
                          href={`/service-areas/${city}/${linkSlug}`}
                          className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                        >
                          <h4 className="font-semibold text-gray-900 hover:text-primary-600">
                            {minorService} →
                          </h4>
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={minorService}
                        className="bg-white p-4 rounded-lg border border-gray-200"
                      >
                        <h4 className="font-semibold text-gray-900">
                          {minorService}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section - Only for simplified services */}
        {isSimplifiedService && serviceData && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {serviceData.whyChoose.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <span className="mt-1 text-primary-600 text-xl">•</span>
                    <span className="text-lg text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Areas We Serve Section - Only for simplified services */}
        {isSimplifiedService && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Areas We Serve
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We proudly serve homeowners in the Charlotte metro area and
                surrounding communities.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PRIMARY_LOCATIONS.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/service-areas/${location.slug}/${service}`}
                    className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      View services →
                    </p>
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-gray-600">
                We also serve surrounding communities in Cabarrus, Cleveland,
                Mecklenburg, and Union counties in North Carolina, and
                Lancaster, Richland, and York counties in South Carolina.
              </p>
            </div>
          </section>
        )}

        {/* Project Spotlight - Only for handyman-services and drywall-repair */}
        {(service === "handyman-services" || service === "drywall-repair") && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">
                  Project Spotlight
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Accent wall transformation from sketch to reveal
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  This Charlotte homeowner wanted a dramatic feature wall in the
                  family room. Here's how our crew handled it—from layout and
                  lumber to the final coat of paint.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.1.JPG"
                    alt="Accent wall project photo 1"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.2.JPG"
                    alt="Accent wall project photo 2"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.3.JPG"
                    alt="Accent wall project photo 3"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.4.JPG"
                    alt="Accent wall project photo 4"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Service Images Gallery - Moved lower on page */}
        {serviceImages.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent {serviceDisplayName} work {cityName}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mb-8">
                Here's a look at a few {serviceDisplayName.toLowerCase()}{" "}
                projects we've completed nearby. Every install gets the same
                careful prep, alignment checks, and tidy finish you see below.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {serviceImages.map((image, index) => (
                  <div
                    key={`${service}-image-${image}-${index}`}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200"
                  >
                    <Image
                      src={`/images/installit-guy/${image}`}
                      alt={`${serviceDisplayName} project ${cityName}`}
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

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        <section className="py-20 bg-gray-50" id="quote-form">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title={`Request ${serviceDisplayName.toLowerCase()} ${cityFullName}`}
              subtitle="Tell us what you need and we'll share pricing and availability within minutes."
            />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualFAQs
              context={service}
              maxFAQs={5}
              showTitle
              title={`${serviceDisplayName} FAQs for ${cityFullName}`}
              cityName={cityFullName}
              serviceLabel={`${serviceDisplayName} services`}
            />
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 p-6 rounded-2xl bg-primary-600 text-white">
              <h2 className="text-2xl font-bold mb-3">
                Need Complete Handyman Services {cityFullName}?
              </h2>
              <p className="text-white/90 mb-4">
                Our main handyman page covers all your home repair and
                installation needs in one place. Get fast quotes, see all
                services, and schedule your visit.
              </p>
              <Link
                href={`/service-areas/${city}`}
                className="inline-flex items-center font-bold text-white hover:text-emerald-200 text-lg"
              >
                View Handyman Services {cityFullName} →
              </Link>
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

  // Only allow primary locations
  const primaryLocationSlugs = PRIMARY_LOCATIONS.map((loc) => loc.slug);

  // Only allow simplified services (main services + micro services)
  const isValidService = simplifiedServiceSlugs.includes(service);

  if (
    !serviceAreaSlugs.includes(resolvedCity) ||
    !primaryLocationSlugs.includes(resolvedCity) ||
    !isValidService
  ) {
    return { notFound: true };
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
