import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";
import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";
import Image from "next/image";
import metaData from "../../data/metaData.json";
// Removed orderedServiceSlugs - only using simplified services now
import {
  simplifiedServices,
  simplifiedServiceSlugs,
  PRIMARY_LOCATIONS,
} from "../../data/simplifiedServices";
import { simplifiedServiceContent } from "../../data/simplifiedServiceContent";
import {
  getServiceHeroImage,
  getServiceImages,
} from "../../utils/serviceImages";
import {
  serviceAreas as allServiceAreas,
  serviceAreaSlugs,
  cityNameMap,
  cityShortNameMap,
  resolveCitySlug,
} from "../../data/serviceAreas";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";
import { generateLocalBusinessSchema } from "../../utils/schemaHelpers";
import { truncateMetaDescription } from "../../utils/metaHelpers";
import HeroStats from "../../components/HeroStats";

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

// Use only the 8 core services for city pages
const coreServices = [
  "handyman-services",
  "home-repair",
  "general-installation-services",
  "door-hardware-repair",
  "drywall-repair",
  "deck-fence-repair",
  "flooring-installation",
  "garage-door-opener-services",
];
const services = coreServices;
const serviceAreaList = serviceAreaSlugs;

const projectJourney = [
  "project1.1.JPG",
  "project1.2.JPG",
  "project1.3.JPG",
  "project1.4.JPG",
];

const formatServiceList = (list) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

const serviceNames = services.map((slug) => simplifiedServices[slug].name);

const getCityName = (citySlug) => cityNameMap[citySlug] || citySlug;

const getCityShortName = (citySlug) =>
  cityShortNameMap[citySlug] || getCityName(citySlug);

export default function ServiceAreaPage({ city }) {
  // Get city data from metadata directly
  const cityData = metaData.find(
    (page) => page.url === `https://installitguy.com/service-areas/${city}/`
  );

  const cityEntry = allServiceAreas.find((area) => area.slug === city);

  // Check if city is in PRIMARY_LOCATIONS
  const primaryLocationSlugs = PRIMARY_LOCATIONS.map((loc) => loc.slug);
  const isPrimaryLocation = primaryLocationSlugs.includes(city);

  if (!cityEntry || !serviceAreaList.includes(city) || !isPrimaryLocation) {
    return <div>City not found</div>;
  }

  const canonicalUrl = `https://installitguy.com/service-areas/${city}/`;

  // Cities that should NOT have "in" in titles
  const citiesWithoutIn = ["gastonia-nc", "concord-nc"];
  const shouldRemoveIn = citiesWithoutIn.includes(city);

  // Format: "Handyman {City}, {State} | Fast Repairs & Installations" (or "Handyman in {City}, {State}" for others)
  const cityState = `${cityEntry.shortName}, ${cityEntry.state}`;

  const fallbackMeta = {
    url: canonicalUrl,
    page_title: isPrimaryLocation
      ? shouldRemoveIn
        ? `Handyman ${cityState} | Fast Repairs & Installations`
        : `Handyman in ${cityState} | Fast Repairs & Installations`
      : `Handyman Services ${cityEntry.name} | Install It Guy`,
    meta_description: `Professional handyman services ${
      cityEntry.name
    }. We provide ${formatServiceList(
      serviceNames
    )} with 30+ years of experience and a lifetime warranty.`,
    primary_keyword: `handyman services ${cityEntry.shortName.toLowerCase()} ${cityEntry.state.toLowerCase()}`,
  };

  const metaInfo = cityData || fallbackMeta;

  const cityBusinessSchema = {
    "@context": "https://schema.org",
    ...generateLocalBusinessSchema({
      type: "city",
      cityName: getCityName(city),
      description: truncateMetaDescription(metaInfo.meta_description),
    }),
    url: metaInfo.url,
  };

  const cityNameForFAQs = getCityName(city);
  const faqEntities = [
    {
      "@type": "Question",
      name: `What services do you offer ${cityNameForFAQs}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `We regularly help homeowners ${cityNameForFAQs} with ${formatServiceList(
          serviceNames
        )} plus seasonal maintenance and punch list work.`,
      },
    },
    {
      "@type": "Question",
      name: shouldRemoveIn
        ? `Do you work nearby neighborhoods around ${cityNameForFAQs}?`
        : `Do you work in nearby neighborhoods around ${cityNameForFAQs}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. Our routes cover Cabarrus, Cleveland, Mecklenburg, and Union counties in North Carolina as well as Lancaster, Richland, and York counties in South Carolina, so scheduling ${
          shouldRemoveIn
            ? `around ${cityNameForFAQs}`
            : `in nearby neighborhoods around ${cityNameForFAQs}`
        } is easy.`,
      },
    },
    {
      "@type": "Question",
      name: shouldRemoveIn
        ? `How quickly can you schedule a visit ${cityNameForFAQs}?`
        : `How quickly can you schedule a visit in ${cityNameForFAQs}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Most projects are booked within a week. Let us know your timeline and we'll share the first available openings for our ${cityNameForFAQs} route.`,
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
        description={truncateMetaDescription(metaInfo.meta_description)}
        canonical={metaInfo.url}
        openGraph={{
          url: metaInfo.url,
          title: metaInfo.page_title,
          description: truncateMetaDescription(metaInfo.meta_description),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: `Install It Guy Handyman Services ${getCityName(city)}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBusinessSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: `Handyman Services FAQs ${getCityName(city)}`,
            description: shouldRemoveIn
              ? `Common questions about handyman services ${getCityName(city)}`
              : `Common questions about handyman services in ${getCityName(
                  city
                )}`,
            url: metaInfo.url,
            mainEntity: faqEntities,
          }),
        }}
      />

      <Header />

      <main>
        <HeroSection
          className="py-24"
          imageSrc="/images/installit-guy/herohandyman.png"
          imageAlt={`Install It Guy serving ${getCityName(city)}`}
          objectPosition="50% 42%"
          priority={true}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                {getCityName(city)} handyman service
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-white">
                <span className="text-[#8BCB6B]">Handyman Services</span>{" "}
                {cityState} done right the first time
              </h1>
              <p className="mt-5 text-lg text-slate-100/90 leading-relaxed">
                Complete handyman solutions for all your home repair and
                installation needs.
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
              <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-slate-100">
                <h2 className="text-lg font-semibold text-white">
                  What's Included
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Comprehensive project assessment",
                    "Material sourcing and recommendations",
                    "Professional installation and repair",
                    "Cleanup and disposal of old materials",
                    "Quality inspection and testing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-[#8BCB6B]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <HeroStats />
            </div>
          </div>
        </HeroSection>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Overview of Handyman Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {simplifiedServiceContent["handyman-services"].longDescription}
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What's Included in This Service
            </h2>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {simplifiedServiceContent["handyman-services"].included.map(
                (item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-primary-600">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                )
              )}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Services We Cover
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {simplifiedServiceContent[
                  "handyman-services"
                ].minorServices.map((minorService) => (
                  <div
                    key={minorService}
                    className="bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900">
                      {minorService}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {simplifiedServiceContent["handyman-services"].whyChoose.map(
                (reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <span className="mt-1 text-primary-600 text-xl">•</span>
                    <span className="text-lg text-gray-700">{reason}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        {/* Project Spotlight */}
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

        {/* Main Services Links Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore all of our handyman and home repair services.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "handyman-services",
                "home-repair",
                "general-installation-services",
                "door-hardware-repair",
                "drywall-repair",
                "deck-fence-repair",
                "flooring-installation",
                "garage-door-opener-services",
              ].map((slug) => (
                <Link
                  key={slug}
                  href={`/service-areas/${city}/${slug}`}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900 hover:text-primary-600">
                    {simplifiedServices[slug].name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
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
                  href={`/service-areas/${location.slug}`}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">View services →</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-gray-600">
              We also serve surrounding communities in Cabarrus, Cleveland,
              Mecklenburg, and Union counties in North Carolina, and Lancaster,
              Richland, and York counties in South Carolina.{" "}
              <Link
                href="/service-areas/where-we-work"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See all locations we serve
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-gray-50" id="quote-form">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title="Ready to Get Started with Handyman Services?"
              subtitle="Share your project details and we'll respond with availability and pricing within one business day."
            />
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {simplifiedServiceContent["handyman-services"].faqs.map(
                (faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Q{index + 1}. {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { city } = params || {};
  const resolvedSlug = resolveCitySlug(city);

  // Only allow primary locations
  const primaryLocationSlugs = PRIMARY_LOCATIONS.map((loc) => loc.slug);

  if (
    !serviceAreaSlugs.includes(resolvedSlug) ||
    !primaryLocationSlugs.includes(resolvedSlug)
  ) {
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
