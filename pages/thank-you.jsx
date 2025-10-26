import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

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

  return (
    <>
      <NextSeo
        title="Thank You | Install It Guy"
        description="Thank you for your interest in our handyman services. We'll be in touch soon!"
        noindex={true}
        nofollow={true}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Thank You!
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                We've received your request and will be in touch within 24
                hours.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Happens Next?
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-gray-600 mb-6">
                  For urgent repairs or same-day service, call us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+17044199799"
                    className="btn-primary bg-primary-600 text-white hover:bg-primary-700"
                  >
                    Call Now: (704) 419-9799
                  </Link>
                  <Link
                    href="/"
                    className="btn-primary bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50"
                  >
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
