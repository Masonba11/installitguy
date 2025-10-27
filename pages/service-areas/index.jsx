import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContextualReviews from "../../components/ContextualReviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";

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

export default function ServiceAreasIndex() {
  const serviceAreasSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Service Areas",
    description:
      "We proudly serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, and surrounding areas in North and South Carolina",
    numberOfItems: serviceAreas.length,
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
        name: area.name,
        url: `https://installitguy.com/service-areas/${area.slug}`,
        containedInPlace: {
          "@type": "State",
          name: area.name.includes("NC") ? "North Carolina" : "South Carolina",
        },
      },
    })),
  };

  return (
    <>
      <NextSeo
        title="Service Areas | Install It Guy"
        description="We proudly serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, and surrounding areas in North and South Carolina."
        canonical="https://installitguy.com/service-areas"
        openGraph={{
          url: "https://installitguy.com/service-areas",
          title: "Service Areas | Install It Guy",
          description:
            "We proudly serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, and surrounding areas in North and South Carolina.",
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "handyman charlotte nc, handyman concord nc, handyman rock hill sc, handyman gastonia nc, handyman hickory nc, handyman shelby nc",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Service Areas
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                We proudly serve multiple cities across North and South Carolina
                with reliable handyman services.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Where We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive handyman services to residents and
                businesses across North and South Carolina.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="card text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-primary-600 group-hover:text-primary-700 font-semibold text-lg">
                    {area.name}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Click to view services
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Install It Guy?
              </h2>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  We know the Carolinas and understand the unique needs of local
                  homeowners and businesses.
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
                  Quick Response
                </h3>
                <p className="text-gray-600">
                  Fast response times across all our service areas. We're here
                  when you need us most.
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600">
                  We stand behind our work with warranties and satisfaction
                  guarantees for all projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free Quote"
          subtitle="Tell us about your project and we'll provide a detailed quote within 24 hours"
        />

        {/* Customer Reviews */}
        <ContextualReviews
          context="general"
          maxReviews={4}
          showTitle={true}
          title="Customer Reviews"
        />

        {/* FAQs */}
        <ContextualFAQs
          context="general"
          maxFAQs={5}
          showTitle={true}
          title="Service Area FAQs"
        />
      </main>

      <Footer />
    </>
  );
}
