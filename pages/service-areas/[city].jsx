import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import Reviews from "../../components/Reviews";
import ContextualFAQs from "../../components/ContextualFAQs";
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
} from "../../data/serviceAreas";

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
            mainEntity: [
              {
                "@type": "Question",
                name: `What services do you offer in ${getCityName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions in ${getCityName(
                    city
                  )}. Our services include ${services
                    .map((slug) => servicesContent[slug].name)
                    .join(", ")}.`,
                },
              },
              {
                "@type": "Question",
                name: `How much do your services cost in ${getCityName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our pricing varies depending on the specific service and project requirements. We provide free estimates for all projects in ${getCityName(
                    city
                  )}. Contact us for a detailed quote based on your needs.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you provide free estimates in ${getCityName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, we provide free estimates for all our services in ${getCityName(
                    city
                  )}. Contact us to schedule a consultation and receive a detailed quote for your project.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you provide warranties on your work in ${getCityName(
                  city
                )}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes! We proudly back our work with a lifetime customer satisfaction guarantee. If you ever have a concern about any project we've completed in ${getCityName(
                    city
                  )}, we'll make it right.`,
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: getCityName(city),
                item: metaInfo.url,
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="hero-background text-white py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                Serving {getCityShortName(city)}
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold">
                Reliable handyman support in {getCityName(city)}
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                From installations to seasonal upkeep, we bring 30+ years of
                craftsmanship to homes throughout {getCityName(city)} and the
                surrounding neighborhoods.
              </p>
              <div className="mt-8">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center rounded-lg border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Request a visit
                </a>
              </div>
            </div>
            <div className="rounded-2xl brand-overlay-card p-8">
              <h2 className="text-xl font-semibold text-white">
                What local homeowners schedule most
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "TV mounting, lighting, and smart device installs",
                  "Ceiling fans, fixtures, and custom hardware",
                  "Seasonal maintenance checks and small repairs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-200">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Services in {getCityName(city)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                From simple repairs to complex installations, we handle all your
                home improvement needs in {getCityName(city)} with professional
                expertise.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
                As a family-owned business serving {getCityName(city)} for over
                30 years, we've built our reputation on reliability, quality
                workmanship, and fair pricing. Our local team understands the
                unique characteristics of homes in this area, from historic
                properties to modern developments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        {/* Customer Reviews */}
        <Reviews />

        {/* Quote Form */}
        <QuoteForm
          title={`Get Your Free Quote for ${getCityName(city)}`}
          subtitle={`Tell us about your project in ${getCityName(
            city
          )} and we'll provide a detailed quote within 24 hours`}
        />

        {/* FAQs */}
        <ContextualFAQs
          context="general"
          maxFAQs={5}
          showTitle={true}
          title={`Handyman Service FAQs for ${getCityName(city)}`}
          cityName={getCityName(city)}
          serviceLabel="handyman services"
        />
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { city } = context.params;

  return {
    props: {
      city,
    },
  };
}
