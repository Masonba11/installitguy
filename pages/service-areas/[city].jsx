import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import Reviews from "../../components/Reviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import metaData from "../../data/metaData.json";

const serviceAreas = [
  "charlotte-nc",
  "concord-nc",
  "rock-hill-sc",
  "gastonia-nc",
  "hickory-nc",
  "shelby-nc",
  "lincolnton-nc",
  "gaffney-sc",
  "kings-mountain-nc",
  "forest-city-nc",
];

const services = [
  "tv-mounting",
  "ceiling-fan-installation",
  "lighting-installation",
  "garage-door-opener-installation",
  "ring-doorbell-installation",
  "faucet-toilet-installation",
  "appliance-installation",
  "blinds-installation",
  "mirror-towel-bar-installation",
  "door-installation",
  "deck-fence-repair",
  "water-leak-repair",
  "garbage-disposal-installation",
  "shelving-installation",
  "painting-services",
  "flooring-installation",
  "furniture-assembly",
  "fence-installation",
  "gutter-cleaning",
  "home-maintenance",
  "epoxy-flooring",
];

export default function ServiceAreaPage({ city }) {
  // Get city data from metadata directly
  const cityData = metaData.find(
    (page) => page.url === `https://installitguy.com/service-areas/${city}/`
  );

  if (!city || !serviceAreas.includes(city)) {
    return <div>City not found</div>;
  }

  if (!cityData) {
    return <div>City data not found</div>;
  }

  const getCityName = (citySlug) => {
    const names = {
      "charlotte-nc": "Charlotte, NC",
      "concord-nc": "Concord, NC",
      "rock-hill-sc": "Rock Hill, SC",
      "gastonia-nc": "Gastonia, NC",
      "hickory-nc": "Hickory, NC",
      "shelby-nc": "Shelby, NC",
      "lincolnton-nc": "Lincolnton, NC",
      "gaffney-sc": "Gaffney, SC",
      "kings-mountain-nc": "Kings Mountain, NC",
      "forest-city-nc": "Forest City, NC",
    };
    return names[citySlug] || citySlug;
  };

  const cityBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Install It Guy",
    description: cityData.meta_description,
    url: cityData.url,
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
    serviceType: [
      "TV Mounting",
      "Ceiling Fan Installation",
      "Lighting Installation",
      "Garage Door Opener Installation",
      "Ring Doorbell Installation",
      "Faucet & Toilet Installation",
      "Appliance Installation",
      "Blinds Installation",
      "Mirror & Towel Bar Installation",
      "Door Installation",
      "Deck & Fence Repair",
      "Water Leak Repair",
      "Garbage Disposal Installation",
      "Shelving Installation",
      "Painting Services",
      "Flooring Installation",
      "Furniture Assembly",
      "Fence Installation",
      "Gutter Cleaning",
    ],
  };

  return (
    <>
      <NextSeo
        title={cityData.page_title}
        description={cityData.meta_description}
        canonical={cityData.url}
        openGraph={{
          url: cityData.url,
          title: cityData.page_title,
          description: cityData.meta_description,
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: cityData.primary_keyword,
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
            name: `Handyman Services FAQs in ${getCityName(city)}`,
            description: `Common questions about handyman services in ${getCityName(
              city
            )}`,
            url: cityData.url,
            mainEntity: [
              {
                "@type": "Question",
                name: `What services do you offer in ${getCityName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions in ${getCityName(
                    city
                  )}. Our services include TV mounting, ceiling fan installation, lighting installation, garage door opener installation, Ring doorbell installation, faucet and toilet installation, appliance installation, blinds installation, mirror and towel bar installation, door installation, deck and fence repair, garbage disposal installation, shelving installation, painting services, flooring installation, furniture assembly, fence installation, and gutter cleaning.`,
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
                item: cityData.url,
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden min-h-[80vh] flex items-center justify-center pt-40">
          {/* Background Video for All Cities */}
          <div className="absolute inset-0 hero-video-container">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full hero-video"
              style={{
                opacity: 0.9,
                zIndex: 1,
                filter: "brightness(1.0) contrast(1.0) saturate(1.0)",
              }}
            >
              {/* Ultra high quality source for desktop - 1080p */}
              <source
                src="/shelby-background-hq.mp4"
                type="video/mp4"
                media="(min-width: 1024px)"
              />
              {/* Ultra high quality WebM - 1080p */}
              <source src="/shelby-background-hq.webm" type="video/webm" />
              {/* High quality source for desktop - prioritize original */}
              <source
                src="/shelby-background-original.mp4"
                type="video/mp4"
                media="(min-width: 1024px)"
              />
              {/* WebM for better compression and quality - prioritize this */}
              <source src="/shelby-background.webm" type="video/webm" />
              {/* Compressed source for mobile */}
              <source
                src="/shelby-background-compressed.mp4"
                type="video/mp4"
                media="(max-width: 1023px)"
              />
              {/* Fallback MP4 */}
              <source src="/shelby-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Fallback Background - Always visible */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
            style={{ zIndex: 0 }}
          />

          {/* Enhanced Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

          {/* Additional quality enhancement overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Handyman Services in {getCityName(city)}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Professional handyman services for {getCityName(city)} and
                surrounding areas. Quality work guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+17041234567"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Call (704) 123-4567
                </Link>
                <a
                  href="#quote-form"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get Free Quote
                </a>
              </div>
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
