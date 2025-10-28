import { NextSeo } from "next-seo";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import ContextualReviews from "../../components/ContextualReviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import { getServiceImages, getServiceName } from "../../utils/serviceImages";

export default function TVMountingPage() {
  const service = "tv-mounting";

  const pageData = {
    url: "https://installitguy.com/services/tv-mounting/",
    primary_keyword: "tv mounting shelby nc",
    page_title: "TV Wall Mounting Shelby NC | Install It Guy",
    meta_description:
      "TV mounting in Shelby done right. Clean installs and safe wire concealment.",
  };

  const serviceContent = {
    h1: "Expert TV Wall Mounting in Shelby NC",
    description:
      "Expert TV mounting services with clean cable management and secure installation.",
    h3: "Why Choose Our TV Mounting Service",
    process: [
      "Assessment of wall type and TV specifications",
      "Precise measurement and marking for optimal viewing",
      "Secure mounting with appropriate hardware",
      "Professional cable management and cleanup",
    ],
    benefits: [
      "Clean, professional installation",
      "Secure mounting for all TV sizes",
      "Hidden cable management",
      "Expert wall assessment",
    ],
  };

  const getServiceName = (serviceSlug) => {
    return "TV Mounting";
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TV Wall Mounting Service",
    description:
      "Professional TV mounting services with clean cable management and secure installation in Shelby, NC",
    url: pageData.url,
    serviceType: "TV Mounting",
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
      description: "Professional TV mounting service",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TV Mounting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fixed Wall Mounts",
            description:
              "Perfect for living rooms and bedrooms where you want a clean, flush look against the wall",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tilt Mounts",
            description:
              "Ideal for mounting above fireplaces or in rooms where you need to angle the TV downward",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Motion Mounts",
            description:
              "Extend, tilt, and swivel your TV for the perfect viewing angle from anywhere in the room",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceiling Mounts",
            description:
              "Great for commercial spaces or rooms where wall mounting isn't possible",
          },
        },
      ],
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
        name: "TV Mounting",
        item: pageData.url,
      },
    ],
  };

  return (
    <>
      <NextSeo
        title="Professional TV Mounting Services in Shelby NC | Install It Guy"
        description={pageData.meta_description}
        canonical={pageData.url}
        openGraph={{
          url: pageData.url,
          title:
            "Professional TV Mounting Services in Shelby NC | Install It Guy",
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
            name: "TV Mounting FAQs",
            description:
              "Common questions about TV mounting services in Shelby NC",
            url: pageData.url,
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does TV mounting cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TV mounting typically costs $150-300 depending on TV size, wall type, and complexity. We provide free quotes for all projects.",
                },
              },
              {
                "@type": "Question",
                name: "What TV sizes can you mount?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: 'We mount all TV sizes from 32" to 85" and larger. Our team has experience with every major brand and model.',
                },
              },
              {
                "@type": "Question",
                name: "Do you hide the cables?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer cable management services to hide power cords and HDMI cables for a clean, professional look.",
                },
              },
              {
                "@type": "Question",
                name: "How long does TV mounting take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most TV mounting jobs take 1-2 hours, including cable management and cleanup.",
                },
              },
              {
                "@type": "Question",
                name: "Can you mount on any wall type?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We can mount on drywall, brick, concrete, and other wall types. We'll assess your wall and use appropriate mounting hardware.",
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
                {serviceContent.h1}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                {serviceContent.description}
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

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Trusted TV Mounting Company in Shelby NC
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We specialize in secure, professional TV mounting for all
                    sizes and wall types throughout Shelby and Cleveland County.
                    Our experienced technicians ensure your TV is mounted safely
                    with clean cable management.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Serving Shelby NC homeowners for over 30 years, we
                    understand the unique challenges of mounting TVs in Shelby
                    homes. From historic brick walls in downtown Shelby to
                    modern drywall in West Shelby and Kings Mountain
                    developments, our team uses professional-grade tools and
                    techniques to ensure your investment is protected.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our commitment to quality means we never cut corners. We use
                    stud finders, level lasers, and proper mounting hardware for
                    every installation throughout Cleveland County. Whether
                    you're upgrading to a larger screen or mounting your first
                    flat-panel TV in your Shelby home, we'll make sure the job
                    is done right the first time.
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
                          Three decades of expertise in TV mounting throughout
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
                          We proudly back our TV mounting work with a lifetime
                          customer satisfaction guarantee.
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
                          building codes, and local weather patterns for TV
                          mounting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Why Choose Us for TV Mounting in Shelby
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

        {/* Wall Types and Compatibility */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete TV Mounting Solutions in Shelby NC
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Our experienced Shelby technicians can mount TVs on any wall
                  surface throughout Cleveland County safely and securely.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Drywall
                  </h3>
                  <p className="text-gray-600">
                    Most common wall type in Shelby homes. We use proper anchors
                    and stud finders for secure mounting.
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Brick Walls
                  </h3>
                  <p className="text-gray-600">
                    Common in older Shelby homes. We use masonry anchors and
                    proper drilling techniques.
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Concrete
                  </h3>
                  <p className="text-gray-600">
                    Found in basements and some modern homes. Requires
                    specialized anchors and drilling equipment.
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Stone Veneer
                  </h3>
                  <p className="text-gray-600">
                    Popular in upscale Shelby homes. We use specialized mounting
                    techniques to avoid damaging the stone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our TV Mounting Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure every TV mounting
                project is completed safely and professionally.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceContent.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Step {index + 1}
                  </h3>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Install It Guy for TV Mounting in Shelby?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                We're Shelby's trusted choice for professional TV mounting
                services, with over 30 years of experience serving local
                homeowners and businesses.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our family-owned approach means you're not just another customer
                to us. We take the time to understand your specific needs,
                whether you're mounting a TV above a fireplace, in a corner, or
                creating a home theater setup. Our affordable pricing and
                flexible scheduling make professional TV mounting accessible to
                every Shelby homeowner.
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
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed and insured for your protection. We carry
                  comprehensive liability insurance for all TV mounting
                  projects.
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
                  Same-Day Service
                </h3>
                <p className="text-gray-600">
                  Fast response times across Shelby. Most TV mounting jobs can
                  be completed the same day you call.
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
                  Fair Pricing
                </h3>
                <p className="text-gray-600">
                  Transparent pricing with no hidden fees. We provide detailed
                  quotes before starting any TV mounting project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Home Entertainment Setup in Shelby
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond TV mounting, we offer comprehensive home entertainment
                and smart home services to complete your setup.
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
                  Ceiling Fan Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete your living room setup with professional ceiling fan
                  installation. Perfect for year-round comfort in Shelby's
                  climate.
                </p>
                <Link
                  href="/services/ceiling-fan-installation"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </Link>
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
                  Lighting Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Enhance your TV viewing experience with proper ambient
                  lighting. We install recessed lights, track lighting, and
                  more.
                </p>
                <Link
                  href="/services/lighting-installation"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </Link>
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ring Doorbell Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure your home with smart doorbell installation. Perfect
                  complement to your home entertainment setup.
                </p>
                <Link
                  href="/services/ring-doorbell-installation"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services We Offer */}
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
              <ServiceCard service="ceiling-fan-installation" />
              <ServiceCard service="lighting-installation" />
              <ServiceCard service="garage-door-opener-installation" />
              <ServiceCard service="ring-doorbell-installation" />
              <ServiceCard service="faucet-toilet-installation" />
              <ServiceCard service="appliance-installation" />
              <ServiceCard service="blinds-installation" />
              <ServiceCard service="mirror-towel-bar-installation" />
              <ServiceCard service="door-installation" />
              <ServiceCard service="deck-fence-repair" />
              <ServiceCard service="water-leak-repair" />
              <ServiceCard service="garbage-disposal-installation" />
              <ServiceCard service="shelving-installation" />
              <ServiceCard service="painting-services" />
              <ServiceCard service="flooring-installation" />
              <ServiceCard service="furniture-assembly" />
              <ServiceCard service="fence-installation" />
              <ServiceCard service="gutter-cleaning" />
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free TV Mounting Quote in Shelby NC"
          subtitle="Tell us about your TV mounting project in Shelby and we'll provide a detailed quote within 24 hours"
        />

        {/* Customer Reviews */}
        <ContextualReviews
          context={service}
          maxReviews={3}
          showTitle={true}
          title={`${getServiceName(service)} Reviews`}
        />

        {/* FAQs */}
        <ContextualFAQs
          context={service}
          maxFAQs={5}
          showTitle={true}
          title={`${getServiceName(service)} FAQs`}
        />
      </main>

      <Footer />
    </>
  );
}
