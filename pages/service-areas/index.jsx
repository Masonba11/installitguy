import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import QuoteForm from "../../components/QuoteForm";
import {
  orderedServiceSlugs,
  servicesContent,
} from "../../data/servicesContent";
import {
  serviceAreas as allServiceAreas,
  serviceAreasByState,
} from "../../data/serviceAreas";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";
import { generateLocalBusinessSchema } from "../../utils/schemaHelpers";
import { truncateMetaDescription } from "../../utils/metaHelpers";

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

const serviceAreas = allServiceAreas;

const displayServiceAreas = {
  northCarolina: serviceAreasByState.NC.map((area) => area.shortName),
  southCarolina: serviceAreasByState.SC.map((area) => area.shortName),
};

const serviceAreaCoverageText = `We proudly serve North Carolina communities including ${displayServiceAreas.northCarolina.join(
  ", "
)} and South Carolina communities including ${displayServiceAreas.southCarolina.join(
  ", "
)}.`;

export default function ServiceAreasIndex() {
  const serviceAreasSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Service Areas",
    description: serviceAreaCoverageText,
    numberOfItems: serviceAreas.length,
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
        name: area.name,
        url: `https://installitguy.com/service-areas/${area.slug}`,
        containedInPlace: {
          "@type": "State",
          name: area.state === "NC" ? "North Carolina" : "South Carolina",
        },
      },
    })),
  };
  const regionSummaries = [
    {
      name: "North Carolina",
      description:
        "Charlotte metro, Cleveland County, Lake Norman, and surrounding communities.",
      items: serviceAreasByState.NC.map((area) => area.shortName),
    },
    {
      name: "South Carolina",
      description:
        "York, Lancaster, and Richland counties plus nearby lake towns.",
      items: serviceAreasByState.SC.map((area) => area.shortName),
    },
  ];

  return (
    <>
      <NextSeo
        title="Service Areas | Install It Guy"
        description={truncateMetaDescription(
          "Install It Guy proudly serves homeowners across North and South Carolina. Explore the towns and neighborhoods we visit every week."
        )}
        canonical="https://installitguy.com/service-areas"
        openGraph={{
          url: "https://installitguy.com/service-areas",
          title: "Service Areas | Install It Guy",
          description: truncateMetaDescription(serviceAreaCoverageText),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: "Install It Guy Service Areas",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "handyman charlotte nc, handyman shelby nc, handyman rock hill sc, handyman fort mill sc, handyman waxhaw nc, handyman indian trail nc",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...generateLocalBusinessSchema({
              type: "global",
              description: truncateMetaDescription(serviceAreaCoverageText),
            }),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "Service Areas FAQs",
            description:
              "Common questions about our service areas in North and South Carolina",
            url: "https://installitguy.com/service-areas",
            mainEntity: [
              {
                "@type": "Question",
                name: "What areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our service area coverage includes North Carolina communities such as Charlotte, Shelby, Kings Mountain, Waxhaw, Monroe, Indian Trail, Concord, Harrisburg, Kannapolis, Gastonia, Matthews, Huntersville, Pineville, Belmont, Mt Holly, Mint Hill, Boiling Springs, and Troutman along with South Carolina communities including Rock Hill, Fort Mill, York, Clover, Lake Wylie, Gaffney, Tega Cay, Indian Land, Lancaster, Blythewood, Winnsboro, Ridgeway, Camden, Columbia, Blacksburg, Richburg, Great Falls, McConnells, Hickory Grove, and Sharon.",
                },
              },
              {
                "@type": "Question",
                name: "Do you travel to all these areas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we travel throughout our service area to provide handyman services. Our main location is in Shelby, NC, but we regularly serve customers in all listed cities and surrounding communities.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a travel fee for distant locations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide free estimates for all locations within our service area. Any travel considerations are factored into our project quotes, ensuring transparent pricing.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you respond to calls in different areas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We typically respond to calls within the same day across our service area. Response times may vary slightly based on location and current schedule, but we prioritize quick response times for all customers.",
                },
              },
              {
                "@type": "Question",
                name: "Do you know local building codes in different areas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we're familiar with building codes and regulations across our service area. Our 30+ years of experience includes working with various local requirements throughout North and South Carolina.",
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
            ],
          }),
        }}
      />

      <Header />

      <main>
        {/* Hero */}
        <HeroSection
          className="py-24"
          imageSrc="/images/installit-guy/herohandyman.png"
          imageAlt="Install It Guy service areas map"
          objectPosition="50% 42%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                Shelby handyman coverage map
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-white">
                <span className="text-[#8BCB6B]">One team</span> taking care of
                homes across the Carolinas
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                {serviceAreaCoverageText} If you’re close by, we’re happy to
                travel—just ask.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-8 text-slate-100">
              <h2 className="text-xl font-semibold text-white">
                Quick snapshot
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#8BCB6B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    We proudly serve North Carolina communities including
                    Charlotte, Shelby, Kings Mountain, Waxhaw, Monroe, Indian
                    Trail, Concord, Harrisburg, Kannapolis, Gastonia, Matthews,
                    Huntersville, Pineville, Belmont, Mt Holly, Mint Hill,
                    Boiling Springs, and Troutman.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#8BCB6B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    We also serve South Carolina communities including Rock
                    Hill, Fort Mill, York, Clover, Lake Wylie, Gaffney, Tega
                    Cay, Indian Land, Lancaster, Blythewood, Winnsboro,
                    Ridgeway, Camden, Columbia, Blacksburg, Richburg, Great
                    Falls, McConnells, Hickory Grove, and Sharon.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </HeroSection>

        {/* Areas we cover */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Coverage map
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                North and South Carolina communities we visit every week
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We schedule projects in these neighborhoods daily. Don’t see
                your town? Let us know—we frequently expand for existing clients
                and referrals.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {regionSummaries.map((region) => (
                <div
                  key={region.name}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {region.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{region.description}</p>
                  <div className="mt-6 columns-1 sm:columns-2 gap-4 text-sm text-gray-500">
                    {region.items.map((item) => (
                      <div key={item} className="py-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold text-primary-600">
                    {area.state === "NC" ? "NC" : "SC"}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {area.shortName}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-600">
                    View services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How we support each visit */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                White-glove service
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Same crew, clear communication, and predictable schedules
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We manage the full experience—from the first call to the final
                tidy-up. Expect proactive reminders, text updates when we’re on
                the way, and respectful technicians in your home.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                {[
                  "Project snapshots after each visit so you can see progress—even if you’re off-site",
                  "Flexible arrival windows for property managers and out-of-town owners",
                  "Same-day availability reserved for urgent repairs in our core routes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Popular requests in your area
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {services.slice(0, 6).map((service) => (
                  <ServiceCard key={service} service={service} />
                ))}
              </div>
              <div className="mt-6 text-right">
                <Link
                  href="/services"
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  View full services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-gray-50" id="quote-form">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title="Let’s coordinate your visit"
              subtitle="Share your address and project details—we’ll confirm availability and pricing within one business day."
            />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContextualFAQs
              context="general"
              maxFAQs={5}
              showTitle
              title="Service area FAQs"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
