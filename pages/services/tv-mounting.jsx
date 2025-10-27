import { NextSeo } from "next-seo";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import ContextualReviews from "../../components/ContextualReviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";

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
    h1: "Professional TV Wall Mounting in Shelby",
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
    serviceType: "TV Mounting",
    category: "Home Improvement",
    offers: {
      "@type": "Offer",
      description: "Professional TV mounting service",
      availability: "https://schema.org/InStock",
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

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            >
              <source src="/shelby-background.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Subtle Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Content */}
          <div className="relative container-custom section-padding">
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional TV Mounting Services in Shelby NC
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We specialize in secure, professional TV mounting for all sizes
                and wall types. Our experienced technicians ensure your TV is
                mounted safely with clean cable management.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Serving Shelby NC homeowners for over 30 years, we understand
                the unique challenges of mounting TVs in Carolina homes. From
                historic brick walls in downtown Shelby to modern drywall in
                newer developments, our team uses professional-grade tools and
                techniques to ensure your investment is protected.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our commitment to quality means we never cut corners. We use
                stud finders, level lasers, and proper mounting hardware for
                every installation. Whether you're upgrading to a larger screen
                or mounting your first flat-panel TV, we'll make sure the job is
                done right the first time.
              </p>
            </div>
          </div>
        </section>

        {/* TV Mounting Expertise */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Expert TV Wall Mounting in Shelby
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our certified technicians have years of experience mounting
                    TVs of all sizes, from compact 32-inch models to massive
                    85-inch displays. We understand the unique challenges of
                    different wall types and TV weights.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Whether you need a simple tilt mount for your living room or
                    a full-motion articulating mount for your bedroom, we ensure
                    your TV is securely mounted with professional cable
                    management.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our Shelby-based team brings local knowledge to every
                    project. We're familiar with the common wall materials found
                    in Cleveland County homes and know how to work around
                    electrical outlets, HVAC vents, and other obstacles that can
                    complicate TV mounting. This local expertise saves you time
                    and ensures a cleaner installation.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Trust is everything in our business. That's why we provide
                    detailed explanations of our process, show you exactly where
                    we'll mount your TV, and clean up thoroughly when we're
                    done. We also offer our lifetime warranty on all mounting
                    work, giving you peace of mind that your TV installation
                    will last for years to come.
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
                          Secure Wall Assessment
                        </h3>
                        <p className="text-gray-600">
                          We evaluate your wall structure to determine the best
                          mounting solution and hardware requirements.
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
                          Professional Cable Management
                        </h3>
                        <p className="text-gray-600">
                          Hide unsightly cables with our professional cable
                          management solutions for a clean, organized look.
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
                          Optimal Viewing Height
                        </h3>
                        <p className="text-gray-600">
                          We position your TV at the perfect height for
                          comfortable viewing, whether you're sitting or
                          standing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Us for TV Mounting
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've been serving the Carolinas for over 30 years with
                    dedication, integrity, and a commitment to excellence. Our
                    family-owned business brings expertise, reliability, and
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
        </section>

        {/* Wall Types and Compatibility */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  TV Mounting on All Wall Types in Shelby
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Our experienced technicians can mount TVs on any wall surface
                  commonly found in Shelby homes.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We also handle{" "}
                  <Link
                    href="/services/lighting-installation"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    lighting installation
                  </Link>{" "}
                  across{" "}
                  <Link
                    href="/service-areas/gastonia-nc"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Gastonia
                  </Link>{" "}
                  and surrounding areas, making us your one-stop solution for
                  complete home entertainment setups.
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

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free TV Mounting Quote"
          subtitle="Tell us about your TV mounting project and we'll provide a detailed quote within 24 hours"
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
