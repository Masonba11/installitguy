import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import ContextualFAQs from "../components/ContextualFAQs";
import Link from "next/link";

export default function ReviewsPage() {
  const reviewsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Customer Reviews",
    description:
      "See real reviews from Shelby NC homeowners who trust Install It Guy for quality handyman services",
    url: "https://installitguy.com/reviews",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
  };

  return (
    <>
      <NextSeo
        title="Customer Reviews | Install It Guy Shelby NC"
        description="See real reviews from Shelby NC homeowners who trust Install It Guy for quality handyman services, TV mounting, and home repairs."
        canonical="https://installitguy.com/reviews"
        openGraph={{
          url: "https://installitguy.com/reviews",
          title: "Customer Reviews | Install It Guy Shelby NC",
          description:
            "See real reviews from Shelby NC homeowners who trust Install It Guy for quality handyman services, TV mounting, and home repairs.",
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "install it guy reviews, handyman reviews shelby nc, tv mounting reviews, home repair reviews",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }}
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
                name: "Reviews",
                item: "https://installitguy.com/reviews",
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Customer Reviews
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                See what our customers say about Install It Guy's handyman
                services in Shelby and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="tel:+17041234567" className="btn-secondary">
                  Call (704) 123-4567
                </Link>
                <Link
                  href="/contact-us"
                  className="btn-secondary bg-white text-brand-primary border-white hover:bg-brand-primary hover:text-white"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Component */}
        <Reviews />

        {/* Why Customers Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Customers Choose Install It Guy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to quality and customer satisfaction shows in
                every review.
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
                  Quality Workmanship
                </h3>
                <p className="text-gray-600">
                  Every project is completed to the highest standards with
                  attention to detail and professional craftsmanship.
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
                  Fast Service
                </h3>
                <p className="text-gray-600">
                  Quick response times and efficient work to get your projects
                  completed on schedule.
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
                  Competitive pricing with no hidden fees. We believe in honest,
                  transparent pricing for all our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <ContextualFAQs
          context="general"
          maxFAQs={5}
          showTitle={true}
          title="Handyman Service FAQs"
        />
      </main>

      <Footer />
    </>
  );
}
