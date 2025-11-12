import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import Reviews from "../../components/Reviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import {
  orderedServiceSlugs,
  servicesContent,
} from "../../data/servicesContent";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";

const services = orderedServiceSlugs;
const serviceNames = services.map((slug) => servicesContent[slug].name);

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
        name: servicesContent[service].name,
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
        title="Handyman Services in Shelby, NC | Install It Guy"
        description="Explore our full list of handyman services in Shelby NC. From installations to repairs, Install It Guy delivers professional results."
        canonical="https://installitguy.com/services"
        openGraph={{
          url: "https://installitguy.com/services",
          title: "Our Services | Install It Guy",
          description:
            "Professional handyman services including TV mounting, ceiling fan installation, lighting installation, epoxy flooring, and more. Quality work guaranteed.",
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "handyman services, tv mounting, ceiling fan installation, lighting installation, appliance installation",
          },
        ]}
      />

      <LocalBusinessSchema />

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
              "Common questions about our handyman services in Shelby NC",
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
        <section className="hero-background text-white py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                What we handle
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold">
                Professional installs, repairs, and upkeep in one place
              </h1>
              <p className="mt-6 text-lg text-slate-200 leading-relaxed">
                Choose the services you need and we’ll coordinate the rest. No
                juggling vendors—just one reliable crew handling the details
                with care.
              </p>
            </div>
            <div className="rounded-2xl brand-overlay-card p-8">
              <h2 className="text-xl font-semibold text-white">
                Most-requested services
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  "Share your project or punch list",
                  "Pick a visit window",
                  "We arrive prepared and leave things tidy",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-500/20 text-primary-200 font-semibold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#quote-form"
                  className="btn-primary inline-flex justify-center"
                >
                  Plan your project
                </a>
                <span className="text-sm text-slate-200 sm:ml-4">
                  Prefer to talk? Call{" "}
                  <a
                    href="tel:+17044199799"
                    className="underline hover:text-slate-100"
                  >
                    (704) 419-9799
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Service menu
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Every service is performed by our in-house team—no outsourcing
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
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Built for real homes
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Spruce up one room—or schedule a whole-home punch list
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
              title="Tell us what you need"
              subtitle="Share your project list and we’ll send back availability and pricing within one business day."
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
