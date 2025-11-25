import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";
import metaData from "../../data/metaData.json";
import Image from "next/image";
import {
  getServiceName,
  getServiceImages,
  getServiceHeroImage,
} from "../../utils/serviceImages";
import {
  orderedServiceSlugs,
  servicesContent,
} from "../../data/servicesContent";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";
import { generateServiceSchema } from "../../utils/schemaHelpers";
import { truncateMetaDescription } from "../../utils/metaHelpers";

const ContextualReviews = dynamic(
  () => import("../../components/ContextualReviews"),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-gray-500">Loading reviews...</div>
    ),
  }
);

const ContextualFAQs = dynamic(
  () => import("../../components/ContextualFAQs"),
  {
    loading: () => (
      <div className="py-16 text-center text-gray-500">Loading FAQs...</div>
    ),
  }
);

const services = orderedServiceSlugs;

export default function ServicePage({ service }) {
  if (!service || !services.includes(service)) {
    return <div>Page not found</div>;
  }

  const pageData = metaData.find(
    (page) => page.url === `https://installitguy.com/services/${service}/`
  );

  const canonicalUrl = `https://installitguy.com/services/${service}/`;
  const fallbackMeta = servicesContent[service]
    ? {
        url: canonicalUrl,
        page_title: `${servicesContent[service].name} in Shelby NC | Install It Guy`,
        meta_description: servicesContent[service].longDescription,
        primary_keyword: `${servicesContent[
          service
        ].name.toLowerCase()} shelby nc`,
      }
    : null;

  const metaInfo = pageData || fallbackMeta;

  if (!metaInfo) {
    return <div>Page not found</div>;
  }

  const serviceOverview = servicesContent[service];
  const standardAssurances = [
    "Veteran technicians focused on precision work",
    "Straightforward quotes before we begin",
    "Protective prep, tidy cleanup, and lifetime satisfaction support",
  ];
  const processSteps = [
    "Share a few details about the space and desired finish",
    "We confirm measurements, materials, and schedule",
    "Our Shelby crew completes the install, tests it, and tidies up",
  ];
  const relatedServices = services
    .filter((slug) => slug !== service)
    .slice(0, 6);
  const shortDescription =
    serviceOverview?.shortDescription ||
    `Professional ${getServiceName(
      service
    ).toLowerCase()} services handled by a local crew with 30 years of experience.`;
  const longDescription =
    serviceOverview?.longDescription ||
    `Every project begins with a quick check-in so we understand the hardware, finish, and placement you want. We arrive with the right anchors, fasteners, and protective gear, then double-check alignment before final cleanup—always with Shelby homes and building styles in mind.`;
  const serviceImages = getServiceImages(service).slice(0, 3);
  const heroImage = getServiceHeroImage(service);

  // Service description should reference Shelby NC
  const fullDescription = metaInfo.meta_description.includes("Shelby")
    ? metaInfo.meta_description
    : `${getServiceName(service)} services in Shelby NC. ${
        metaInfo.meta_description
      }`;
  const serviceDescription = truncateMetaDescription(fullDescription);

  const serviceSchema = generateServiceSchema({
    serviceName: getServiceName(service),
    description: serviceDescription,
    url: metaInfo.url,
    areaServed: "Shelby, NC",
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
        name: "Services",
        item: "https://installitguy.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
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
                : "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: `${getServiceName(service)} - Install It Guy`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            name: `${getServiceName(service)} FAQs`,
            description: `Common questions about ${getServiceName(
              service
            ).toLowerCase()} services in Shelby NC`,
            url: metaInfo.url,
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does ${getServiceName(
                  service
                ).toLowerCase()} cost?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our ${getServiceName(
                    service
                  ).toLowerCase()} pricing varies based on the specific project requirements. We provide free, detailed quotes for all projects. Contact us for a personalized estimate.`,
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
                  ).toLowerCase()}. Contact us to check availability and schedule your appointment.`,
                },
              },
              {
                "@type": "Question",
                name: `What areas do you serve for ${getServiceName(
                  service
                ).toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our service area coverage includes, but is not limited to, North Carolina counties of Cabarrus, Cleveland, Mecklenburg, and Union as well as Lancaster, Richland, and York counties in South Carolina.`,
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
              : "/images/installit-guy/hero-home.webp"
          }
          imageAlt={`${getServiceName(service)} by Install It Guy`}
          objectPosition="50% 42%"
          priority={true}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                Shelby handyman service
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-white">
                <span className="text-[#8BCB6B]">
                  {getServiceName(service)}
                </span>{" "}
                in Shelby, NC done right the first time
              </h1>
              <p className="mt-5 text-lg text-slate-100/90 leading-relaxed">
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
                  Book Now
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
                  How the visit flows
                </h2>
                <ol className="mt-4 space-y-3 text-sm text-slate-200">
                  {processSteps.map((item, idx) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#8BCB6B] text-[#0f2135] text-sm font-semibold">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-slate-100">
                <h2 className="text-lg font-semibold text-white">
                  Every appointment includes
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {standardAssurances.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-[#8BCB6B]">•</span>
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
                Recent {getServiceName(service)} work in the Shelby area
              </h2>
              <p className="mt-2 text-slate-600 max-w-3xl">
                A quick look at a few {getServiceName(service).toLowerCase()}{" "}
                projects completed by our crew. Every visit receives the same
                careful prep, alignment checks, and tidy finish you see here.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {serviceImages.map((image, index) => (
                  <div
                    key={`${service}-primary-image-${image}-${index}`}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200"
                  >
                    <Image
                      src={`/images/installit-guy/${image}`}
                      alt={`${getServiceName(
                        service
                      )} project by Install It Guy`}
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

        {/* Service overview */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-700">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                What’s included when we handle {getServiceName(service)}
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {servicesContent[service]?.longDescription}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                How the visit flows
              </h3>
              <ol className="mt-4 space-y-3 text-gray-600">
                {processSteps.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Every appointment includes
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

        {/* Related services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Shelby clients often pair this with
            </h2>
            <p className="mt-4 text-gray-600">
              Need help with a few more items? We can add them to the same visit
              so everything is handled at once and keep your Shelby project
              moving.
            </p>
            <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
              {relatedServices.map((slug) => (
                <li
                  key={slug}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Link href={`/services/${slug}`} className="block">
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

        {/* Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualReviews
              context={service}
              maxReviews={6}
              showTitle
              title={`${getServiceName(service)} client feedback`}
            />
          </div>
        </section>

        {/* Quote form */}
        <section className="py-20 bg-gray-50" id="quote-form">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title={`Ready to schedule ${getServiceName(
                service
              ).toLowerCase()} in Shelby?`}
              subtitle="Share the details and we’ll respond with availability and pricing within one business day."
            />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualFAQs
              context={service}
              maxFAQs={5}
              showTitle
              title={`${getServiceName(service)} FAQs`}
              cityName="Shelby, NC"
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
  const { service } = context.params;

  return {
    props: {
      service,
    },
  };
}
