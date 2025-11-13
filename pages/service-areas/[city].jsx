import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";
import metaData from "../../data/metaData.json";
import { buildMetaDescription } from "../../utils/seo";
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
  const metaDescription = buildMetaDescription(
    metaInfo.meta_description,
    `Handyman services in ${cityEntry.name} for installs, repairs, and maintenance.`
  );

  const cityBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Install It Guy",
    description: metaDescription,
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
        )} with ${formatServiceList(
          serviceNames
        )} plus seasonal maintenance and punch list work.`,
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
        description={metaDescription}
        canonical={metaInfo.url}
        openGraph={{
          url: metaInfo.url,
          title: metaInfo.page_title,
          description: metaDescription,
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
        description={metaDescription}
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

      <Header />

      <main>
        <HeroSection className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                Serving {getCityShortName(city)} and nearby neighborhoods
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                Trusted handyman help in {getCityName(city)}
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                From new installs to punch-list repairs, our Shelby-based crew
                travels to {getCityName(city)} every week with 30+ years of
                craftsmanship.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#quote-form"
                  className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                >
                  Request a visit
                </a>
                <Link
                  href="/service-areas"
                  className="inline-flex items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View all coverage
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-8 text-slate-100">
              <h2 className="text-xl font-semibold text-white">
                Why locals call Install It Guy
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Flexible scheduling for installs, repairs, and maintenance",
                  "Protective prep, tidy cleanup, and lifetime workmanship support",
                  "Locally rooted technicians who know Charlotte-area homes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-200">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HeroSection>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                What we handle in {getCityShortName(city)}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                One team for installs, punch lists, and seasonal upkeep
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Choose the projects you want off your plate—TV mounting,
                fixtures, smart upgrades, repairs, or home maintenance. We
                arrive prepared and finish everything on the same visit whenever
                possible.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service}
                  service={service}
                  city={city === "shelby-nc" ? null : city}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Neighborhoods we visit around {getCityShortName(city)}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We’re on the road daily in Mecklenburg and the surrounding
                counties. Share your address and we’ll confirm availability
                right away.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {allServiceAreas
                  .filter((area) => area.slug !== city)
                  .slice(0, 8)
                  .map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 hover:border-primary-200"
                    >
                      {area.name}
                    </Link>
                  ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">
                What to expect on your visit
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  "Tell us about the project and any add-ons you’d like handled",
                  "We confirm timing, materials, and arrival details",
                  "Technicians complete the work, test it, and tidy the space",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" id="quote-form">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title={`Request ${getCityName(city)} handyman help`}
              subtitle="Share the details, and our team will confirm pricing and scheduling within one business day."
            />
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualFAQs
              context="general"
              maxFAQs={5}
              showTitle
              title={`${getCityName(city)} handyman FAQs`}
              cityName={getCityName(city)}
              serviceLabel="handyman services"
            />
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
