import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import QuoteForm from "../components/QuoteForm";
import Link from "next/link";
import Image from "next/image";
// Removed orderedServiceSlugs - only using simplified services now
import {
  serviceAreas as allServiceAreas,
  serviceAreasByState,
} from "../data/serviceAreas";
import {
  simplifiedServices,
  simplifiedServiceSlugs,
  PRIMARY_LOCATIONS,
} from "../data/simplifiedServices";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import { generateLocalBusinessSchema } from "../utils/schemaHelpers";
import { truncateMetaDescription } from "../utils/metaHelpers";

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

// Use only the 8 main simplified services
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

const services = mainServiceSlugs;
const serviceNames = services.map((slug) => simplifiedServices[slug].name);

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

const projectJourney = [
  "project1.1.JPG",
  "project1.2.JPG",
  "project1.3.JPG",
  "project1.4.JPG",
];

export default function Home() {
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
    { value: 30, suffix: "+", label: "years helping homeowners" },
    { value: 150, suffix: "+", label: "projects completed each month" },
    { value: 60000, label: "homes served across the Carolinas" },
    { value: 240, prefix: "Over ", label: "Google reviews" },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    ...generateLocalBusinessSchema({
      type: "global",
      description:
        "Family-owned handyman service in Charlotte NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
    }),
    hasMap: "https://www.google.com/maps/place/Install+It+Guy/",
  };

  return (
    <>
      <NextSeo
        title="Charlotte Handyman & Home Repairs | Install It Guy"
        description={truncateMetaDescription(
          "Family-owned handyman service in Charlotte NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty."
        )}
        canonical="https://installitguy.com"
        openGraph={{
          url: "https://installitguy.com",
          title: "Charlotte Handyman & Home Repairs | Install It Guy",
          description: truncateMetaDescription(
            "Family-owned handyman service in Charlotte NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty."
          ),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: "Install It Guy - Professional Handyman Services",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Charlotte Handyman, handyman charlotte nc, family owned business, 30 years experience, lifetime warranty, home repairs, installations, tv mounting, ceiling fan installation, painting services, flooring installation, furniture assembly",
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
              "Family-owned handyman service in Charlotte NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
            foundingDate: "1994",
            numberOfEmployees: "1-10",
            address: {
              "@type": "PostalAddress",
              streetAddress: "210 Joseph Ct",
              addressLocality: "Charlotte",
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
              "https://www.yelp.com/biz/install-it-guy-charlotte",
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
              "Family-owned handyman service in Charlotte NC for 30+ years. Expert installations, repairs, and home maintenance with lifetime warranty.",
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
              "Common questions about Install It Guy handyman services in Charlotte NC",
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
          imageSrc="/images/installit-guy/herohandyman.png"
          imageAlt="Living room with mounted TV and new ceiling fan"
          priority
          className="py-24"
          objectPosition="50% 42%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                Charlotte handyman experts
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
                Charlotte handyman services for every room in your home
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                Install It Guy is Charlotte's trusted handyman team with 30+
                years of experience. We tackle the punch lists, upgrades, and
                seasonal maintenance that keep Charlotte-area homes feeling
                finished.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("quote-form")
                      ?.scrollIntoView({ block: "start" });
                  }}
                  className="inline-flex justify-center rounded-full bg-[#8BCB6B] px-6 py-3 text-sm font-semibold text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
                >
                  Book Now
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
                    <span className="mt-1 text-[#8BCB6B]">•</span>
                    <span>
                      <span className="font-semibold text-white block">
                        {item.title}
                      </span>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/5 p-8 text-white">
                <div className="stats-box">
                  <div className="stat">
                    <h3>30+</h3>
                    <p>years helping homeowners</p>
                  </div>
                  <div className="stat">
                    <h3>150+</h3>
                    <p>projects completed each month</p>
                  </div>
                  <div className="stat">
                    <h3>60,000+</h3>
                    <p>homes served across the Carolinas</p>
                  </div>
                  <div className="stat">
                    <h3>Over 240</h3>
                    <p>Google reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroSection>

        {/* Why neighbors choose us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0f2135]">
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
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm overflow-hidden">
              <Image
                src="/images/installit-guy/installation112.jpeg"
                alt="Professional handyman installation work"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-start md:justify-between md:gap-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                  Project spotlight
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                  Accent wall transformation from sketch to reveal
                </h2>
                <p className="mt-4 text-slate-200 leading-relaxed">
                  This Charlotte homeowner wanted a dramatic feature wall in the
                  family room. Here’s how our crew handled it—from layout and
                  lumber to the final coat of paint.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projectJourney.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm p-5"
                >
                  <Image
                    src={`/images/installit-guy/${image}`}
                    alt={`Accent wall project photo ${index + 1}`}
                    width={640}
                    height={480}
                    className="h-48 w-full rounded-xl object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-gray-50" id="services">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Services
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Complete Handyman Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From quick installs to multi-room upgrades, choose the services
                you need and we'll take it from there.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mainServiceSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="rounded-xl border-2 border-primary-200 bg-white p-6 hover:border-primary-400 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {simplifiedServices[slug].name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {simplifiedServices[slug].description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Homeowners Count on Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Charlotte handyman process
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                A Charlotte handyman experience that feels organized—not
                automated
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                We plan ahead, communicate clearly, and leave your home ready to
                enjoy. Charlotte homeowners mention our punctual techs, tidy
                workspaces, and reliable follow-through in nearly every review.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* highlights.map((item) => ( */}
              <div
                key="right-sized-visits"
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Right-sized visits
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Schedule a focused install or give us a punch list—we’ll plan
                  the labor, materials, and timing for you.
                </p>
              </div>
              <div
                key="careful-in-every-room"
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Careful in every room
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Floors covered, fixtures protected, and a full cleanup before
                  we leave. Your space feels ready the moment we wrap up.
                </p>
              </div>
              <div
                key="locally-rooted"
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Locally rooted
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Three decades serving the Charlotte area means we know the
                  neighborhoods, builders, and expectations by heart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Service Areas
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Handyman Services in Your City
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Fast repairs, expert installations, and reliable home
                maintenance. Serving homeowners across the Charlotte metro with
                30+ years of experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRIMARY_LOCATIONS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group rounded-xl border-2 border-primary-200 bg-white p-6 hover:border-primary-400 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    Handyman {area.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Fast repairs & installations
                  </p>
                  <span className="mt-4 inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                    View services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <HeroSection className="py-20" imageSrc={null}>
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
                Carolina. Whether you're updating a condo in Uptown Charlotte or
                refreshing a lake house in Tega Cay, we're nearby.
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
                We routinely travel for repeat clients and referrals. Share your
                address and we'll confirm availability right away.
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
          cityName="Charlotte, NC"
          serviceLabel="handyman services"
        />
      </main>

      <Footer />
    </>
  );
}
