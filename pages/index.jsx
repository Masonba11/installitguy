import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import QuoteForm from "../components/QuoteForm";
import Link from "next/link";
import { orderedServiceSlugs, servicesContent } from "../data/servicesContent";
import {
  serviceAreas as allServiceAreas,
  serviceAreasByState,
} from "../data/serviceAreas";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";

const Reviews = dynamic(() => import("../components/Reviews"), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-gray-500">Loading reviews...</div>
  ),
});

const ContextualFAQs = dynamic(() => import("../components/ContextualFAQs"), {
  loading: () => (
    <div className="py-16 text-center text-gray-500">Loading FAQs...</div>
  ),
});

const services = orderedServiceSlugs;
const serviceNames = services.map((slug) => servicesContent[slug].name);

const formatServiceList = (list) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

const serviceAreas = allServiceAreas.map(({ name, slug }) => ({ name, slug }));

const displayServiceAreas = {
  northCarolina: serviceAreasByState.NC.map((area) => area.shortName),
  southCarolina: serviceAreasByState.SC.map((area) => area.shortName),
};

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const highlights = [
    {
      title: "Right-sized visits",
      description:
        "Schedule a focused install or give us a punch list—we’ll plan the labor, materials, and timing for you.",
    },
    {
      title: "Careful in every room",
      description:
        "Floors covered, fixtures protected, and a full cleanup before we leave. Your space feels ready the moment we wrap up.",
    },
    {
      title: "Locally rooted",
      description:
        "Three decades serving the Charlotte area means we know the neighborhoods, builders, and expectations by heart.",
    },
  ];
  const stats = [
    { value: "30+", label: "years helping homeowners" },
    { value: "150+", label: "projects completed each year" },
    { value: "0", label: "hidden fees or surprise upsells" },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Install It Guy",
    description:
      "Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.2921",
      longitude: "-81.5357",
    },
    hasMap: "https://www.google.com/maps/place/Install+It+Guy/",
    areaServed: [
      {
        "@type": "City",
        name: "Charlotte, NC",
      },
      {
        "@type": "City",
        name: "Concord, NC",
      },
      {
        "@type": "City",
        name: "Rock Hill, SC",
      },
      {
        "@type": "City",
        name: "Gastonia, NC",
      },
      {
        "@type": "City",
        name: "Hickory, NC",
      },
      {
        "@type": "City",
        name: "Shelby, NC",
      },
      {
        "@type": "City",
        name: "Lincolnton, NC",
      },
      {
        "@type": "City",
        name: "Gaffney, SC",
      },
      {
        "@type": "City",
        name: "Kings Mountain, NC",
      },
      {
        "@type": "City",
        name: "Forest City, NC",
      },
    ],
    serviceType: serviceNames,
    openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "240",
    },
    sameAs: [
      "https://www.facebook.com/installitguy",
      "https://www.instagram.com/installitguy",
      "https://www.yelp.com/biz/install-it-guy-shelby",
    ],
    foundingDate: "1994",
    numberOfEmployees: "1-10",
    slogan: "Quality installs, fast repairs, fair prices",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handyman Services",
      itemListElement: services.map((slug, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: servicesContent[slug].name,
          description: servicesContent[slug].longDescription,
        },
      })),
    },
  };

  return (
    <>
      <NextSeo
        title="Shelby Handyman & Home Repairs | Install It Guy"
        description="Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty."
        canonical="https://installitguy.com"
        openGraph={{
          url: "https://installitguy.com",
          title: "Shelby Handyman & Home Repairs | Install It Guy",
          description:
            "Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "handyman shelby nc, family owned business, 30 years experience, lifetime warranty, home repairs, installations, tv mounting, ceiling fan installation, painting services, flooring installation, furniture assembly",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Install It Guy",
            url: "https://installitguy.com",
            logo: "https://installitguy.com/images/installit-guy/logo3.png",
            description:
              "Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
            foundingDate: "1994",
            numberOfEmployees: "1-10",
            address: {
              "@type": "PostalAddress",
              streetAddress: "210 Joseph Ct",
              addressLocality: "Shelby",
              addressRegion: "NC",
              postalCode: "28152",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-704-419-9799",
              contactType: "customer service",
              email: "info@installitguy.com",
              availableLanguage: "English",
            },
            sameAs: [
              "https://www.facebook.com/installitguy",
              "https://www.instagram.com/installitguy",
              "https://www.yelp.com/biz/install-it-guy-shelby",
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Install It Guy",
            url: "https://installitguy.com",
            description:
              "Family-owned handyman service in Shelby NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
            publisher: {
              "@type": "Organization",
              name: "Install It Guy",
              url: "https://installitguy.com",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://installitguy.com/services?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "Handyman Services FAQs",
            description:
              "Common questions about Install It Guy handyman services in Shelby NC",
            url: "https://installitguy.com",
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

      <Header />

      <main>
        {/* Hero */}
        <HeroSection
          imageSrc="/images/installit-guy/hero-ceiling-fan.webp"
          imageAlt="Installed ceiling fan in living room"
          priority
          className="py-24"
          objectPosition="50% 32%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                Shelby handyman experts
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                Shelby handyman services for every room in your home
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                Install It Guy is Shelby’s family-owned handyman team with 30+
                years of experience. We tackle the punch lists, upgrades, and
                seasonal maintenance that keep Cleveland County homes feeling
                finished.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#quote-form"
                  className="btn-primary inline-flex justify-center"
                >
                  Book your handyman
                </a>
                <span className="text-sm text-slate-200 sm:ml-4">
                  Prefer to talk? Call{" "}
                  <a
                    href="tel:+17044199799"
                    className="font-semibold text-white"
                  >
                    (704) 419-9799
                  </a>
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h2 className="text-xl font-semibold text-white">
                What you can expect every time
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                {highlights.map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-200">•</span>
                    <span>
                      <span className="font-semibold text-white block">
                        {item.title}
                      </span>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HeroSection>

        {/* Why neighbors choose us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Local since 1994
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                A dependable partner for the projects you’d rather not DIY
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                From the first walkthrough to the final wipe-down, our team
                handles the details. You get prompt communication, respectful
                technicians, and workmanship that lasts.
              </p>
            </div>
            <dl className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-gray-50" id="services">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                  Services
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                  Everyday projects we handle start to finish
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  From quick installs to multi-room upgrades, choose the
                  services you need and we’ll take it from there.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View the full services catalog →
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredServices.map((slug) => (
                <ServiceCard key={slug} service={slug} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Homeowners Count on Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Shelby handyman process
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                A Shelby handyman experience that feels organized—not automated
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                We plan ahead, communicate clearly, and leave your home ready to
                enjoy. Shelby homeowners mention our punctual techs, tidy
                workspaces, and reliable follow-through in nearly every review.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <HeroSection
          imageSrc="/images/installit-guy/hero-ceiling-fan.webp"
          imageAlt="Ceiling fan installation"
          className="py-20"
          objectPosition="50% 45%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                Where we work
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Proudly serving the Charlotte metro and neighboring communities
              </h2>
              <p className="mt-4 text-lg text-slate-200 leading-relaxed">
                Homeowners call us for projects in both North and South
                Carolina. Whether you’re updating a condo in Uptown Charlotte or
                refreshing a lake house in Tega Cay, we’re nearby.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 border border-white/20 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white">
                    North Carolina
                  </h3>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                    {displayServiceAreas.northCarolina.join(" • ")}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/20 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white">
                    South Carolina
                  </h3>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                    {displayServiceAreas.southCarolina.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white">
                Need a different town?
              </h3>
              <p className="mt-4 text-slate-200">
                We routinely travel for repeat clients and referrals. Share your address and we’ll confirm availability right away.
              </p>
            </div>
          </div>
        </HeroSection>

        {/* Reviews */}
        <Reviews />

        {/* Quote Form */}
        <section className="py-20 bg-white" id="quote-form">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title="Ready to cross a few projects off your list?"
              subtitle="Tell us what you need and we’ll share pricing and availability within one business day."
            />
          </div>
        </section>

        {/* FAQs */}
        <ContextualFAQs
          context="general"
          maxFAQs={5}
          showTitle
          title="Frequently asked questions"
          cityName="Shelby, NC"
          serviceLabel="handyman services"
        />
      </main>

      <Footer />
    </>
  );
}
