import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContextualReviews from "../components/ContextualReviews";
import ContextualFAQs from "../components/ContextualFAQs";
import QuoteForm from "../components/QuoteForm";
import ZenbookerEmbed from "../components/ZenbookerEmbed";

export default function ContactUs() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Install It Guy",
    description:
      "Reach Install It Guy in Shelby NC. Call or message for fast handyman service.",
    url: "https://installitguy.com/contact-us",
    mainEntity: {
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
  };

  return (
    <>
      <NextSeo
        title="Contact Install It Guy | Shelby Handyman Services"
        description="Reach Install It Guy in Shelby NC. Call or message for fast handyman service."
        canonical="https://installitguy.com/contact-us"
        openGraph={{
          url: "https://installitguy.com/contact-us",
          title: "Contact Install It Guy | Shelby Handyman Services",
          description:
            "Reach Install It Guy in Shelby NC. Call or message for fast handyman service.",
          siteName: "Install It Guy",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "Contact FAQs",
            description:
              "Common questions about contacting Install It Guy for handyman services",
            url: "https://installitguy.com/contact-us",
            mainEntity: [
              {
                "@type": "Question",
                name: "How can I contact Install It Guy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact us by phone at (704) 419-9799, email at info@installitguy.com, or by filling out our contact form on this page. We typically respond within the same day.",
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
                name: "What information should I include when contacting you?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Please include details about your project, your location, preferred contact method, and any specific requirements or questions you have. The more details you provide, the better we can assist you.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly do you respond to inquiries?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We typically respond to phone calls and emails within the same day. For urgent projects, we prioritize quick response times to help you get started as soon as possible.",
                },
              },
              {
                "@type": "Question",
                name: "Can I schedule a consultation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer free consultations for all projects. Contact us to schedule a convenient time for us to visit your location and discuss your project needs.",
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
                name: "Contact Us",
                item: "https://installitguy.com/contact-us",
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Install It Guy
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Ready to get started on your next project? We're here to help!
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Install It Guy?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      30+ Years Experience
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Three decades of serving the Carolinas with expertise and
                      dedication.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Lifetime Warranty
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We proudly back our work with a lifetime customer
                      satisfaction guarantee.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Family-Owned Business
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We work hard to provide for our family while serving yours
                      with care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Phone
                      </h3>
                      <p className="text-gray-600">(704) 419-9799</p>
                      <a
                        href="tel:+17044199799"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Email
                      </h3>
                      <p className="text-gray-600">info@installitguy.com</p>
                      <a
                        href="mailto:info@installitguy.com"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Service Areas
                      </h3>
                      <p className="text-gray-600">
                        210 Joseph Ct, Shelby, NC 28152
                      </p>
                      <p className="text-gray-600">
                        Serving Charlotte, Concord, Rock Hill, Gastonia,
                        Hickory, Shelby, Lincolnton, Gaffney, Kings Mountain,
                        Forest City
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                      <p className="text-gray-600">Emergency calls available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                                <ZenbookerEmbed />
              </div>
            </div>
          </div>
        </div>

        {/* About Our Company */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  About Install It Guy
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A family-owned business serving the Carolinas for over 30
                  years with dedication, integrity, and a commitment to
                  excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Founded and operated by Scott Compton, Install It Guy has
                    grown from a small local handyman service to a trusted name
                    throughout North and South Carolina. We've grown over the
                    years to now include comprehensive services specializing in
                    skilled home maintenance and customized storage &
                    organization solutions while still staying true to our roots
                    with our handyman and repair services.
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          30+ Years of Experience
                        </h4>
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Lifetime Warranty
                        </h4>
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Family Values
                        </h4>
                        <p className="text-gray-600">
                          We work hard to provide for our family while serving
                          yours with care and attention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Service Areas
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We proudly serve multiple cities across North and South
                    Carolina, bringing our expertise and family values to your
                    neighborhood.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        North Carolina
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Charlotte</li>
                        <li>• Concord</li>
                        <li>• Gastonia</li>
                        <li>• Hickory</li>
                        <li>• Shelby</li>
                        <li>• Lincolnton</li>
                        <li>• Kings Mountain</li>
                        <li>• Forest City</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        South Carolina
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Rock Hill</li>
                        <li>• Gaffney</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      <strong>Business Address:</strong>
                      <br />
                      210 Joseph Ct, Shelby, NC 28152
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Phone:</strong> (704) 419-9799
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free Quote"
          subtitle="Fill out the form below and we'll get back to you within 24 hours"
        />

        {/* Customer Reviews */}
        <ContextualReviews
          context="contact"
          maxReviews={4}
          showTitle={true}
          title="What Our Customers Say"
        />

        {/* FAQs */}
        <ContextualFAQs
          context="contact"
          maxFAQs={5}
          showTitle={true}
          title="Contact & Service FAQs"
        />
      </main>

      <Footer />
    </>
  );
}
