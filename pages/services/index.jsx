import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import QuoteForm from "../../components/QuoteForm";
import {
  simplifiedServices,
  simplifiedServiceSlugs,
} from "../../data/simplifiedServices";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";
import Link from "next/link";
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

// Only show the 8 main simplified services
const mainServiceSlugs = [
  "handyman-services",
  "home-repair",
  "general-installation-services",
  "door-hardware-repair",
  "drywall-repair",
  "deck-fence-repair",
  "flooring-installation",
  "garage-door-opener-services",
];

const services = mainServiceSlugs.filter((slug) => simplifiedServices[slug]);
const serviceNames = services.map(
  (slug) => simplifiedServices[slug]?.name || slug
);

const formatServiceList = (list) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

export default function ServicesIndex() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Handyman Services",
    description:
      "Professional handyman services including TV mounting, ceiling fan installation, lighting installation, epoxy flooring, and more",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: simplifiedServices[service]?.name || service,
        url: `https://installitguy.com/services/${service}`,
        provider: {
          "@type": "LocalBusiness",
          name: "Install It Guy",
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
        },
      },
    })),
  };
  const serviceHighlights = [
    {
      title: "Installations that stay put",
      description:
        "Mounting TVs, hanging fixtures, wiring smart devices—we make sure everything is centered, secure, and code compliant.",
      items: [
        "TV mounting & cable concealment",
        "Ceiling fans & lighting",
        "Smart home & appliance setup",
      ],
    },
    {
      title: "Refresh & repair projects",
      description:
        "Tackle the nagging tasks in one visit. We handle drywall touch-ups, hardware swaps, painting, and detailed finish work.",
      items: [
        "Trim & drywall repairs",
        "Mirror, blind, and hardware installs",
        "Interior painting touch-ups",
      ],
    },
    {
      title: "Whole-home upkeep",
      description:
        "Seasonal maintenance keeps your home ready for anything—filters, detectors, exterior checks, and more.",
      items: [
        "Filter & detector maintenance",
        "Deck & exterior repairs",
        "Preventative home inspections",
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="Handyman Services in Charlotte, NC | Install It Guy"
        description={truncateMetaDescription(
          "Explore our full list of handyman services in Charlotte NC. From installations to repairs, Install It Guy delivers professional results."
        )}
        canonical="https://installitguy.com/services"
        openGraph={{
          url: "https://installitguy.com/services",
          title: "Our Services | Install It Guy",
          description: truncateMetaDescription(
            "Professional handyman services including TV mounting, ceiling fan installation, lighting installation, epoxy flooring, and more. Quality work guaranteed."
          ),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: "Install It Guy Services",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "handyman services, tv mounting, ceiling fan installation, lighting installation, appliance installation",
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
              description:
                "Professional handyman services including TV mounting, ceiling fan installation, lighting installation, epoxy flooring, and more. Quality work guaranteed.",
            }),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "Handyman Services FAQs",
            description:
              "Common questions about our handyman services in Charlotte NC",
            url: "https://installitguy.com/services",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions. Our services include ${formatServiceList(
                    serviceNames
                  )}.`,
                },
              },
              {
                "@type": "Question",
                name: "What areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our service area coverage includes, but is not limited to, North Carolina counties of Cabarrus, Cleveland, Mecklenburg, and Union as well as Lancaster, Richland, and York counties in South Carolina.",
                },
              },
              {
                "@type": "Question",
                name: "How much do your services cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our pricing varies depending on the specific service and project requirements. We provide free estimates for all projects. Contact us for a detailed quote based on your needs.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide free estimates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide free estimates for all our services. Contact us to schedule a consultation and receive a detailed quote for your project.",
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
                name: "Services",
                item: "https://installitguy.com/services",
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
          imageSrc="/images/installit-guy/hero-home.webp"
          imageAlt="Install It Guy handyman services collage"
          objectPosition="50% 42%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                Installations • Repairs • Maintenance
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-white">
                <span className="text-[#8BCB6B]">Handyman services</span> built
                around your punch list
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                From single installs to multi-room refresh projects, we plan the
                labor, materials, and schedule so you get polished results with
                no surprises.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("quote-form")
                      ?.scrollIntoView({ block: "start" });
                  }}
                  className="inline-flex items-center rounded-full bg-[#8BCB6B] px-6 py-3 text-sm font-semibold text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
                >
                  Get Free Quote
                </a>
                <Link
                  href="tel:+17044199799"
                  className="inline-flex items-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Call (704) 419-9799
                </Link>
              </div>
            </div>
          </div>
        </HeroSection>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8BCB6B]">
                Services
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0f2135]">
                <span className="text-[#8BCB6B]">Everyday projects</span> we
                handle start to finish
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Browse the full list below or filter down to the project you
                have in mind. All services include prep, cleanup, and a lifetime
                satisfaction guarantee.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8BCB6B]">
                North and South Carolina communities we visit every week
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0f2135]">
                <span className="text-[#8BCB6B]">Why homeowners</span> call
                Install It Guy
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Mix and match the services that make sense. We can dedicate an
                afternoon to a single install or spend the day handling your
                priority list.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {serviceHighlights.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    {group.items.join(" • ")}
                  </p>
                </div>
              ))}
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
              title="Ready to cross a few projects off your list?"
              subtitle="Tell us what you need and we'll share pricing and availability within minutes."
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
              title="Handyman service FAQs"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
