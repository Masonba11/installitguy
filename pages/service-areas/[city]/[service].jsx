import { NextSeo } from "next-seo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServiceCard from "../../../components/ServiceCard";
import Reviews from "../../../components/Reviews";
import QuoteForm from "../../../components/QuoteForm";
import Link from "next/link";
import Image from "next/image";
import metaData from "../../../data/metaData.json";
import { getServiceImages, getServiceName } from "../../../utils/serviceImages";

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
];

export default function ServiceAreaServicePage({ city, service }) {
  // Get page data from metadata directly
  const pageData = metaData.find(
    (item) =>
      item.url === `https://installitguy.com/service-areas/${city}/${service}/`
  );

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const getCityName = (citySlug) => {
    const cityMap = {
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
    return cityMap[citySlug] || citySlug;
  };

  const getServiceName = (serviceSlug) => {
    const serviceMap = {
      "tv-mounting": "TV Mounting",
      "ceiling-fan-installation": "Ceiling Fan Installation",
      "lighting-installation": "Lighting Installation",
      "garage-door-opener-installation": "Garage Door Opener Installation",
      "ring-doorbell-installation": "Ring Doorbell Installation",
      "faucet-toilet-installation": "Faucet & Toilet Installation",
      "appliance-installation": "Appliance Installation",
      "blinds-installation": "Blinds Installation",
      "mirror-towel-bar-installation": "Mirror & Towel Bar Installation",
      "door-installation": "Door Installation",
      "deck-fence-repair": "Deck & Fence Repair",
      "water-leak-repair": "Water Leak Repair",
      "garbage-disposal-installation": "Garbage Disposal Installation",
      "shelving-installation": "Shelving Installation",
      "painting-services": "Painting Services",
      "flooring-installation": "Flooring Installation",
      "furniture-assembly": "Furniture Assembly",
      "fence-installation": "Fence Installation",
      "gutter-cleaning": "Gutter Cleaning",
    };
    return serviceMap[serviceSlug] || serviceSlug;
  };

  const cityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${getServiceName(service)} in ${getCityName(city)}`,
    description: pageData.meta_description,
    url: pageData.url,
    serviceType: getServiceName(service),
    category: "Home Improvement",
    areaServed: {
      "@type": "Place",
      name: getCityName(city),
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Install It Guy",
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
      areaServed: {
        "@type": "City",
        name: getCityName(city),
      },
    },
    offers: {
      "@type": "Offer",
      price: "99.00",
      priceCurrency: "USD",
      availability: "InStock",
      url: pageData.url,
      description: `Professional ${getServiceName(
        service
      ).toLowerCase()} service in ${getCityName(city)}`,
    },
  };

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
        name: "Service Areas",
        item: "https://installitguy.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: getCityName(city),
        item: `https://installitguy.com/service-areas/${city}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: getServiceName(service),
        item: pageData.url,
      },
    ],
  };

  return (
    <>
      <NextSeo
        title={pageData.page_title}
        description={pageData.meta_description}
        canonical={pageData.url}
        openGraph={{
          url: pageData.url,
          title: pageData.page_title,
          description: pageData.meta_description,
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: pageData.primary_keyword,
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }}
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
            name: `${getServiceName(service)} FAQs in ${getCityName(city)}`,
            description: `Common questions about ${getServiceName(
              service
            ).toLowerCase()} services in ${getCityName(city)}`,
            url: pageData.url,
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does ${getServiceName(
                  service
                ).toLowerCase()} cost in ${getCityName(city)}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our pricing varies based on the specific project requirements. We provide free, detailed quotes for all ${getServiceName(
                    service
                  ).toLowerCase()} projects in ${getCityName(
                    city
                  )}. Contact us for a personalized estimate.`,
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
                  ).toLowerCase()} in ${getCityName(
                    city
                  )}. Contact us to check availability and schedule your appointment.`,
                },
              },
              {
                "@type": "Question",
                name: `Are you licensed and insured for ${getServiceName(
                  service
                ).toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, we are fully licensed and insured for all ${getServiceName(
                    service
                  ).toLowerCase()} projects. We carry comprehensive liability insurance for your protection.`,
                },
              },
              {
                "@type": "Question",
                name: `What areas do you serve for ${getServiceName(
                  service
                ).toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We serve ${getCityName(
                    city
                  )} and surrounding areas including Shelby, Charlotte, Concord, Rock Hill, Gastonia, Hickory, Lincolnton, Gaffney, Kings Mountain, Forest City, and other communities in North and South Carolina.`,
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

          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {getServiceName(service)} in {getCityName(city)}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Professional {getServiceName(service).toLowerCase()} services in{" "}
                {getCityName(city)} with 30+ years of experience and lifetime
                warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+17044199799"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Call Now: (704) 419-9799
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

        {/* About Our Company */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Professional {getServiceName(service)} in{" "}
                    {getCityName(city)}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our family-owned business has been serving{" "}
                    {getCityName(city)} and surrounding areas for over 30 years.
                    We bring expertise, reliability, and a commitment to
                    excellence to every project.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    When you choose Install It Guy for{" "}
                    {getServiceName(service).toLowerCase()} in{" "}
                    {getCityName(city)}, you're getting more than just a service
                    provider. Our local team understands the specific challenges
                    and opportunities that come with working in this area, from
                    weather considerations to local building codes and common
                    home styles.
                  </p>

                  {/* Service Images Gallery */}
                  {(() => {
                    const images = getServiceImages(service);
                    if (images.length === 0) return null;

                    return (
                      <div className="service-gallery">
                        {images.map((src) => (
                          <div key={src} className="service-gallery-item">
                            <Image
                              src={`/images/installit-guy/${src}`}
                              alt={`${getServiceName(service)} in ${getCityName(
                                city
                              )} by Install It Guy`}
                              width={900}
                              height={600}
                              className="service-gallery-img"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We believe in building lasting relationships with our{" "}
                    {getCityName(city)} neighbors. That's why we offer
                    transparent pricing, detailed explanations of our work, and
                    our signature lifetime warranty. Whether you're updating an
                    older home or working on a new construction project, we'll
                    treat your property with the same care we'd give our own.
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
                          30+ Years Experience
                        </h3>
                        <p className="text-gray-600">
                          Three decades of expertise serving {getCityName(city)}{" "}
                          with dedication and skill.
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
                          We proudly back our{" "}
                          {getServiceName(service).toLowerCase()} work with a
                          lifetime customer satisfaction guarantee.
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
                          Local Expertise
                        </h3>
                        <p className="text-gray-600">
                          Deep knowledge of {getCityName(city)} homes and local
                          building codes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Us for {getServiceName(service)} in{" "}
                    {getCityName(city)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've been serving {getCityName(city)} for over 30 years
                    with dedication, integrity, and a commitment to excellence.
                    Our family-owned business brings expertise, reliability, and
                    quality workmanship to every project.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-700">
                        Licensed and insured professionals
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-700">
                        Same-day service available
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-700">
                        Competitive pricing with no hidden fees
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-700">
                        Clean, professional work every time
                      </span>
                    </div>
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
                Our {getServiceName(service)} Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                We offer comprehensive {getServiceName(service).toLowerCase()}{" "}
                services in {getCityName(city)} and surrounding areas.
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {getServiceName(service)} Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional {getServiceName(service).toLowerCase()}{" "}
                  installation services in {getCityName(city)}.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Expert installation</li>
                  <li>• Quality materials</li>
                  <li>• Lifetime warranty</li>
                  <li>• Local expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our {getServiceName(service)} Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven process to ensure quality results and
                customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Free Consultation
                </h3>
                <p className="text-gray-600">
                  We assess your needs and provide a detailed quote with no
                  obligation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Professional Installation
                </h3>
                <p className="text-gray-600">
                  Our experienced team handles the installation with precision
                  and care.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Inspection
                </h3>
                <p className="text-gray-600">
                  We thoroughly test and inspect our work to ensure everything
                  meets our standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lifetime Warranty
                </h3>
                <p className="text-gray-600">
                  We stand behind our work with a lifetime customer satisfaction
                  guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services in This City */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Other Services We Offer in {getCityName(city)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive home improvement services throughout{" "}
                {getCityName(city)} and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services
                .filter((serviceName) => serviceName !== service)
                .map((serviceName) => (
                  <ServiceCard
                    key={serviceName}
                    service={serviceName}
                    city={city}
                  />
                ))}
            </div>

            <div className="text-center mt-12">
              <Link href={`/service-areas/${city}`} className="btn-primary">
                View All Services in {getCityName(city)}
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <Reviews />

        {/* Quote Form */}
        <QuoteForm
          title={`Get Your Free ${getServiceName(service)} Quote`}
          subtitle={`Tell us about your ${getServiceName(
            service
          ).toLowerCase()} project in ${getCityName(
            city
          )} and we'll provide a detailed quote within 24 hours`}
        />

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about our{" "}
                {getServiceName(service).toLowerCase()} services in{" "}
                {getCityName(city)}.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const faqElement = document.getElementById("faq-1");
                      if (faqElement) {
                        faqElement.classList.toggle("hidden");
                      }
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      How much does {getServiceName(service).toLowerCase()} cost
                      in {getCityName(city)}?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 transform transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div id="faq-1" className="px-6 pb-4 text-gray-600 hidden">
                    <p>
                      Our pricing varies based on the specific project
                      requirements. We provide free, detailed quotes for all{" "}
                      {getServiceName(service).toLowerCase()} projects in{" "}
                      {getCityName(city)}. Contact us for a personalized
                      estimate.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const faqElement = document.getElementById("faq-2");
                      if (faqElement) {
                        faqElement.classList.toggle("hidden");
                      }
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      Do you offer same-day service for{" "}
                      {getServiceName(service).toLowerCase()}?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 transform transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div id="faq-2" className="px-6 pb-4 text-gray-600 hidden">
                    <p>
                      Yes, we often provide same-day service for{" "}
                      {getServiceName(service).toLowerCase()} in{" "}
                      {getCityName(city)}. Contact us to check availability and
                      schedule your appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { city, service } = context.params;

  return {
    props: {
      city,
      service,
    },
  };
}
