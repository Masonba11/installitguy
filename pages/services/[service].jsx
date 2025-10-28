import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import ContextualReviews from "../../components/ContextualReviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import metaData from "../../data/metaData.json";
import { getServiceName, getServiceImages } from "../../utils/serviceImages";

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

export default function ServicePage({ service }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setLoading(false);
    }
  }, [router.isReady]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!service || !services.includes(service)) {
    return <div>Page not found</div>;
  }

  const pageData = metaData.find(
    (page) => page.url === `https://installitguy.com/services/${service}/`
  );

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${getServiceName(service)} Service`,
    description: pageData.meta_description,
    url: pageData.url,
    serviceType: getServiceName(service),
    category: "Home Improvement",
    areaServed: {
      "@type": "Place",
      name: "Shelby, NC",
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
      areaServed: [
        "Shelby, NC",
        "Charlotte, NC",
        "Concord, NC",
        "Rock Hill, SC",
        "Gastonia, NC",
        "Hickory, NC",
        "Lincolnton, NC",
        "Gaffney, SC",
        "Kings Mountain, NC",
        "Forest City, NC",
      ],
    },
    offers: {
      "@type": "Offer",
      price: "99.00",
      priceCurrency: "USD",
      availability: "InStock",
      url: pageData.url,
      description: `Professional ${getServiceName(
        service
      ).toLowerCase()} service`,
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
        name: "Services",
        item: "https://installitguy.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
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
            url: pageData.url,
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
                  text: `We serve Shelby, Charlotte, Concord, Rock Hill, Gastonia, Hickory, Lincolnton, Gaffney, Kings Mountain, Forest City, and surrounding areas in North and South Carolina.`,
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
          {/* Background Video */}
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
                opacity: 0.8,
                zIndex: 1,
                filter: "brightness(0.9) contrast(1.1) saturate(1.1)",
              }}
            >
              {/* High quality source for desktop */}
              <source
                src="/shelby-background-original.mp4"
                type="video/mp4"
                media="(min-width: 1024px)"
              />
              {/* Compressed source for mobile */}
              <source
                src="/shelby-background-compressed.mp4"
                type="video/mp4"
                media="(max-width: 1023px)"
              />
              {/* WebM for better compression and quality */}
              <source src="/shelby-background.webm" type="video/webm" />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert {getServiceName(service)} in Shelby NC
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Professional {getServiceName(service).toLowerCase()} services in
                Shelby NC with 30+ years of local experience and lifetime
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
                    Trusted {getServiceName(service)} Company in Shelby NC
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our family-owned business has been serving Shelby and
                    Cleveland County for over 30 years. We bring expertise,
                    reliability, and a commitment to excellence to every{" "}
                    {getServiceName(service).toLowerCase()} project throughout
                    our community. We also provide{" "}
                    <Link
                      href="/services/ceiling-fan-installation"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      ceiling fan installation
                    </Link>
                    ,{" "}
                    <Link
                      href="/services/lighting-installation"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      lighting installation
                    </Link>
                    , and{" "}
                    <Link
                      href="/services/appliance-installation"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      appliance installation
                    </Link>{" "}
                    services.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    When you choose Install It Guy for{" "}
                    {getServiceName(service).toLowerCase()} in Shelby, you're
                    getting more than just a service provider – you're getting a
                    trusted partner who understands the unique needs of Shelby
                    homeowners. From historic homes in downtown Shelby to newer
                    developments in West Shelby and Kings Mountain, our team
                    knows the local building codes, common home styles, and
                    weather considerations that affect installations throughout
                    Cleveland County.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We believe in transparent communication and fair pricing for
                    Shelby residents. Before we start any{" "}
                    {getServiceName(service).toLowerCase()} project in your
                    Shelby home, we'll explain exactly what we plan to do, how
                    long it will take, and what it will cost. No surprises, no
                    hidden fees – just honest, professional service that you can
                    count on from your local Shelby experts.
                  </p>

                  {/* Service Gallery */}
                  {getServiceImages(service).length > 0 && (
                    <div className="service-gallery">
                      {getServiceImages(service).map((imageSrc) => (
                        <div key={imageSrc} className="service-gallery-item">
                          <Image
                            src={`/images/installit-guy/${imageSrc}`}
                            alt={`${getServiceName(service)} by Install It Guy`}
                            width={900}
                            height={600}
                            className="service-gallery-img"
                          />
                        </div>
                      ))}
                    </div>
                  )}

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
                          30+ Years Serving Shelby
                        </h3>
                        <p className="text-gray-600">
                          Three decades of expertise in{" "}
                          {getServiceName(service).toLowerCase()} throughout
                          Cleveland County with dedication and local knowledge.
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
                          Shelby Local Expertise
                        </h3>
                        <p className="text-gray-600">
                          Deep knowledge of Shelby homes, Cleveland County
                          building codes, and local weather patterns for{" "}
                          {getServiceName(service).toLowerCase()}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Why Choose Us for {getServiceName(service)} in Shelby
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We've been serving Shelby and Cleveland County for over 30
                      years with dedication, integrity, and a commitment to
                      excellence. Our family-owned business brings expertise,
                      reliability, and quality workmanship to every project
                      throughout our community.
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
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete {getServiceName(service)} Solutions in Shelby NC
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive {getServiceName(service).toLowerCase()}{" "}
                services throughout Shelby and Cleveland County.
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
                  installation services across the Carolinas.
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

        {/* Our Other Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Other Services We Offer in Shelby, NC
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive home improvement services throughout
                Shelby, NC and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services
                .filter((s) => s !== service)
                .map((otherService) => (
                  <ServiceCard key={otherService} service={otherService} />
                ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <ContextualReviews
          context={service}
          maxReviews={4}
          showTitle={true}
          title="Customer Reviews"
        />

        {/* Quote Form */}
        <QuoteForm
          title={`Get Your Free ${getServiceName(service)} Quote`}
          subtitle={`Tell us about your ${getServiceName(
            service
          ).toLowerCase()} project and we'll provide a detailed quote within 24 hours`}
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
                {getServiceName(service).toLowerCase()} services.
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
                      How much does {getServiceName(service).toLowerCase()}{" "}
                      cost?
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
                      {getServiceName(service).toLowerCase()} projects. Contact
                      us for a personalized estimate.
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
                      {getServiceName(service).toLowerCase()}. Contact us to
                      check availability and schedule your appointment.
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
  const { service } = context.params;

  return {
    props: {
      service,
    },
  };
}
