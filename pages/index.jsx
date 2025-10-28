import { NextSeo } from "next-seo";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Reviews from "../components/Reviews";
import ContextualFAQs from "../components/ContextualFAQs";
import QuoteForm from "../components/QuoteForm";
import Link from "next/link";

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
];

const serviceAreas = [
  { name: "Charlotte, NC", slug: "charlotte-nc" },
  { name: "Concord, NC", slug: "concord-nc" },
  { name: "Rock Hill, SC", slug: "rock-hill-sc" },
  { name: "Gastonia, NC", slug: "gastonia-nc" },
  { name: "Hickory, NC", slug: "hickory-nc" },
  { name: "Shelby, NC", slug: "shelby-nc" },
  { name: "Lincolnton, NC", slug: "lincolnton-nc" },
  { name: "Gaffney, SC", slug: "gaffney-sc" },
  { name: "Kings Mountain, NC", slug: "kings-mountain-nc" },
  { name: "Forest City, NC", slug: "forest-city-nc" },
];

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
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
    openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
    paymentAccepted: "Cash, CreditCard, Check",
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
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          description: `Professional ${service.replace(/-/g, " ")} services`,
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
                  text: "We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions. Our services include TV mounting, ceiling fan installation, lighting installation, garage door opener installation, Ring doorbell installation, faucet and toilet installation, appliance installation, blinds installation, mirror and towel bar installation, door installation, deck and fence repair, water leak repair, garbage disposal installation, shelving installation, painting services, flooring installation, furniture assembly, fence installation, and gutter cleaning.",
                },
              },
              {
                "@type": "Question",
                name: "What areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, Lincolnton, Gaffney, Kings Mountain, Forest City, and surrounding areas in North and South Carolina.",
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
              {
                "@type": "Question",
                name: "Are you licensed and insured?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we are fully licensed and insured. As a family-owned business serving the Carolinas for over 30 years, we maintain all required licenses and comprehensive insurance coverage to protect both you and our team during any project we undertake.",
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden min-h-[80vh] flex items-center justify-center pt-40">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: videoLoaded ? 0.8 : 0,
                zIndex: 1,
              }}
              onLoadStart={() => console.log("Video loading started")}
              onLoadedData={() => {
                console.log("Video loaded successfully");
                setVideoLoaded(true);
              }}
              onError={(e) => {
                console.log("Video error:", e);
                console.log("Video src:", "/shelby-background.mp4");
                console.log("Falling back to gradient background");
              }}
              onCanPlay={() => {
                console.log("Video can play");
                setVideoLoaded(true);
              }}
              onPlay={() => console.log("Video started playing")}
            >
              <source src="/shelby-background.mp4" type="video/mp4" />
              <source src="/shelby-background.webm" type="video/webm" />
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

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Shelby's Family-Owned Handyman Team
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
                Serving the Carolinas for 30+ years with expert installations,
                repairs, and home maintenance. All work backed by our lifetime
                warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="tel:+17044199799"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  Call Now: (704) 419-9799
                </Link>
                <a
                  href="#quote-form"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Our Company */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    A Family-Owned Business You Can Trust
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    For over 30 years, Install It Guy has been serving the
                    Carolinas with dedication, integrity, and a commitment to
                    excellence that only comes from a family-owned business.
                    Founded and operated by Scott Compton, we've grown from a
                    small local handyman service to a trusted name throughout
                    North and South Carolina.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    We work hard to provide for our family while staying
                    dedicated to providing affordable, efficient, and reliable
                    services with a smile for all your home needs. If you have
                    pets, we will show them attention too. We truly feel blessed
                    to get to do what we love and offer a huge thank you to all
                    of our customers for your continued business!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          30+ Years of Experience
                        </h3>
                        <p className="text-gray-600">
                          Three decades of serving the Carolinas with expertise
                          and dedication.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Lifetime Warranty
                        </h3>
                        <p className="text-gray-600">
                          We proudly back our work with a lifetime customer
                          satisfaction guarantee.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Family Values
                        </h3>
                        <p className="text-gray-600">
                          We work hard to provide for our family while serving
                          yours with care and attention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Service Areas
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We proudly serve multiple cities across North and South
                    Carolina, bringing our expertise and family values to your
                    neighborhood.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">
                        North Carolina
                      </h4>
                      <p className="text-sm text-gray-600">
                        Charlotte, Concord, Gastonia, Hickory, Shelby,
                        Lincolnton, Kings Mountain, Forest City
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">
                        South Carolina
                      </h4>
                      <p className="text-sm text-gray-600">
                        Rock Hill, Gaffney
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      <strong>Address:</strong> 210 Joseph Ct, Shelby, NC 28152
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Phone:</strong> (704) 419-9799
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Home Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From TV mounting to appliance installation, we handle all your
                home improvement needs with professional expertise and a
                lifetime warranty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service} service={service} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Services Breakdown */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Do Best
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive range of services covers every aspect of home
                improvement, maintenance, and installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  TV & Electronics Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional TV mounting, security camera installation, and
                  smart home setup. We ensure secure mounting with proper cable
                  management and optimal viewing angles.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• TV Wall Mounting</li>
                  <li>• Security Camera Installation</li>
                  <li>• Ring Doorbell Setup</li>
                  <li>• Smart Home Integration</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Lighting & Electrical
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete lighting installation, ceiling fan setup, and
                  electrical repairs. We handle everything from simple fixture
                  changes to complex electrical work.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Ceiling Fan Installation</li>
                  <li>• Light Fixture Installation</li>
                  <li>• Electrical Outlet Repair</li>
                  <li>• Switch Installation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Appliance Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert installation of dishwashers, garbage disposals, and
                  other appliances. We ensure proper connections and safe
                  operation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Dishwasher Installation</li>
                  <li>• Garbage Disposal Setup</li>
                  <li>• Washer & Dryer Installation</li>
                  <li>• Microwave Installation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Home Repairs & Maintenance
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive repair services for doors, windows, drywall, and
                  general maintenance. We fix what's broken and keep your home
                  running smoothly.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Door & Window Repair</li>
                  <li>• Drywall Patching</li>
                  <li>• Deck & Fence Repair</li>
                  <li>• Water Leak Repair</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Painting & Flooring
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional painting services and flooring installation. We
                  transform your spaces with quality materials and expert
                  craftsmanship.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Interior & Exterior Painting</li>
                  <li>• Flooring Installation</li>
                  <li>• Color Consultation</li>
                  <li>• Surface Preparation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Organization & Storage
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom storage solutions and organization systems. We maximize
                  your space with shelving, cabinets, and organizational
                  systems.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom Shelving</li>
                  <li>• Garage Organization</li>
                  <li>• Closet Systems</li>
                  <li>• Furniture Assembly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly serve multiple cities across North and South Carolina
                with reliable handyman services.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="card text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-primary-600 group-hover:text-primary-700 font-semibold">
                    {area.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/service-areas" className="btn-primary">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Family-Owned Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For over 30 years, we've been serving the Carolinas with
                dedication, integrity, and a commitment to excellence that only
                comes from a family-owned business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  30+ Years Experience
                </h3>
                <p className="text-gray-600">
                  Three decades of expertise serving the Carolinas. We've seen
                  it all and know how to do it all with precision and care.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lifetime Warranty
                </h3>
                <p className="text-gray-600">
                  We proudly back our work with a lifetime customer satisfaction
                  guarantee. If you ever have a concern, we'll make it right.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Family Values
                </h3>
                <p className="text-gray-600">
                  We work hard to provide for our family while staying dedicated
                  to providing affordable, efficient, and reliable services with
                  a smile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <Reviews />

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free Handyman Quote"
          subtitle="Tell us about your project and we'll provide a detailed quote within 24 hours"
        />

        {/* FAQs */}
        <ContextualFAQs
          context="general"
          maxFAQs={5}
          showTitle={true}
          title="Frequently Asked Questions"
        />
      </main>

      <Footer />
    </>
  );
}
