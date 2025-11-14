import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import HeroSection from "../components/HeroSection";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Track the lead conversion
    if (typeof window !== "undefined") {
      // Google Analytics tracking
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with your actual conversion ID
        });
      }

      // Facebook Pixel tracking
      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      // Custom tracking - you can add your own tracking code here
      console.log("Lead conversion tracked:", {
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        url: window.location.href,
      });
    }
  }, []);

  const thankYouPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Thank You - Install It Guy",
    description:
      "Thank you for your interest in our handyman services. We'll be in touch soon!",
    url: "https://installitguy.com/thank-you",
    mainEntity: {
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: "35.2921",
        longitude: "-81.5357",
      },
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
      makesOffer: [
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
        "Garbage Disposal Installation",
        "Shelving Installation",
        "Painting Services",
        "Flooring Installation",
        "Furniture Assembly",
        "Home Maintenance",
        "Epoxy Flooring",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: name,
        },
      })),
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
    },
  };

  return (
    <>
      <NextSeo
        title="Thank You | Install It Guy"
        description="Thank you for your interest in our handyman services. We'll be in touch soon!"
        noindex={true}
        nofollow={true}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thankYouPageSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        <HeroSection
          className="py-24"
          imageSrc="/images/installit-guy/hero-home.webp"
          imageAlt="Install It Guy handshake with homeowner"
          objectPosition="50% 42%"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <svg
                className="h-8 w-8 text-[#8BCB6B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
              Request received
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Thank you! We’ll be in touch within 24 hours.
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              In the meantime, feel free to call us for immediate assistance or
              browse the latest projects below.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="tel:+17044199799"
                className="inline-flex items-center rounded-full bg-[#8BCB6B] px-6 py-3 text-sm font-semibold text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
              >
                Call (704) 419-9799
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View recent projects
              </Link>
            </div>
          </div>
        </HeroSection>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-[#0f2135] mb-6">
                  <span className="text-[#8BCB6B]">What Happens Next?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Review Your Request
                    </h3>
                    <p className="text-gray-600">
                      Our team will review your project details and prepare a
                      personalized quote.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Contact You
                    </h3>
                    <p className="text-gray-600">
                      We'll call you within 24 hours to discuss your project and
                      answer any questions.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Schedule Service
                    </h3>
                    <p className="text-gray-600">
                      Once you approve the quote, we'll schedule your service at
                      your convenience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#0f2135] mb-4">
                  <span className="text-[#8BCB6B]">
                    Need Immediate Assistance?
                  </span>
                </h2>
                <p className="text-gray-600 mb-6">
                  For urgent repairs or same-day service, call us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="tel:+17044199799" className="btn-primary">
                    Call Now: (704) 419-9799
                  </Link>
                  <Link href="/" className="btn-secondary">
                    Back to Homepage
                  </Link>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Install It Guy?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        30+ Years Experience
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Family-Owned Business
                      </h3>
                      <p className="text-gray-600">
                        We work hard to provide for our family while serving
                        yours with care.
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Professional, reliable service you can trust for all
                        your home needs.
                      </p>
                    </div>
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
