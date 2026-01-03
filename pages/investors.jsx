import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import { truncateMetaDescription } from "../utils/metaHelpers";
import Link from "next/link";

export default function Investors() {
  return (
    <>
      <NextSeo
        title="Investor Information | Install It Guy"
        description={truncateMetaDescription(
          "Investment opportunities with Install It Guy - a trusted handyman service with 30+ years of experience serving the Carolinas."
        )}
        canonical="https://installitguy.com/investors"
        openGraph={{
          url: "https://installitguy.com/investors",
          title: "Investor Information | Install It Guy",
          description: truncateMetaDescription(
            "Investment opportunities with Install It Guy - a trusted handyman service with 30+ years of experience serving the Carolinas."
          ),
          siteName: "Install It Guy",
        }}
        noindex={true}
        nofollow={true}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Investor Information | Install It Guy",
            description: truncateMetaDescription(
              "Investment opportunities with Install It Guy - a trusted handyman service with 30+ years of experience serving the Carolinas."
            ),
            url: "https://installitguy.com/investors",
            mainEntity: {
              "@type": "Organization",
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
              foundingDate: "1994",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "10-50",
              },
              areaServed: [
                {
                  "@type": "State",
                  name: "North Carolina",
                },
                {
                  "@type": "State",
                  name: "South Carolina",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "240",
              },
            },
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
                name: "Investors",
                item: "https://installitguy.com/investors",
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        <HeroSection
          className="py-24"
          imageSrc="/images/installit-guy/herohandyman.png"
          imageAlt="Install It Guy handyman services"
          objectPosition="50% 42%"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
              Investment Opportunities
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              <span className="text-[#8BCB6B]">Partner with</span> Install It
              Guy
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Join a proven business model with 30+ years of experience serving
              homeowners across North and South Carolina.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ block: "start" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-[#8BCB6B] px-8 py-4 text-base font-semibold text-[#0f2135] shadow-sm hover:bg-[#7bb65f] transition"
              >
                Get Free Quote
              </a>
              <Link
                href="tel:+17044199799"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Call (704) 419-9799
              </Link>
            </div>
          </div>
        </HeroSection>

        {/* Business Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2135] mb-4">
                Established Business, Proven Track Record
              </h2>
              <p className="text-lg text-gray-600">
                Install It Guy has been serving homeowners in the Carolinas for
                over three decades, building a reputation for quality
                workmanship and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="text-4xl font-bold text-[#8BCB6B] mb-2">
                  30+
                </div>
                <p className="text-gray-600 font-medium">Years in Business</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="text-4xl font-bold text-[#8BCB6B] mb-2">
                  150+
                </div>
                <p className="text-gray-600 font-medium">Projects Per Month</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="text-4xl font-bold text-[#8BCB6B] mb-2">
                  60,000+
                </div>
                <p className="text-gray-600 font-medium">Homes Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2135] mb-6">
                Market Opportunity
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The home services industry continues to grow as homeowners
                  seek reliable, professional help for installations, repairs,
                  and maintenance. Install It Guy is positioned to capitalize on
                  this demand with our established brand and proven service
                  model.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8BCB6B] mt-1">•</span>
                    <span>
                      <strong>Growing Service Area:</strong> Serving 38+ cities
                      across North and South Carolina with expansion potential
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8BCB6B] mt-1">•</span>
                    <span>
                      <strong>Diverse Service Portfolio:</strong> 18+ service
                      categories providing multiple revenue streams
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8BCB6B] mt-1">•</span>
                    <span>
                      <strong>Recurring Revenue Potential:</strong> Home
                      maintenance and seasonal services create ongoing customer
                      relationships
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8BCB6B] mt-1">•</span>
                    <span>
                      <strong>Strong Online Presence:</strong> Modern website
                      with SEO optimization and digital booking capabilities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2135] mb-6">
                Why Invest in Install It Guy
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold text-[#0f2135] mb-3">
                    Established Brand
                  </h3>
                  <p className="text-gray-600">
                    Three decades of local market presence with strong customer
                    loyalty and over 240 Google reviews.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold text-[#0f2135] mb-3">
                    Scalable Operations
                  </h3>
                  <p className="text-gray-600">
                    Proven systems and processes that can support growth and
                    expansion into new markets.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold text-[#0f2135] mb-3">
                    Experienced Team
                  </h3>
                  <p className="text-gray-600">
                    Veteran technicians with deep knowledge of local building
                    codes and customer expectations.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold text-[#0f2135] mb-3">
                    Digital Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Modern booking system, SEO-optimized website, and digital
                    marketing capabilities for continued growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2135] mb-4">
              Interested in Learning More?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We welcome serious inquiries from potential investors and
              partners. Contact us to discuss investment opportunities and learn
              more about our business model.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-[#8BCB6B] px-6 py-3 text-base font-semibold text-[#0f2135] shadow-sm hover:bg-[#7bb65f] transition"
              >
                Contact Us
              </Link>
              <Link
                href="tel:+17044199799"
                className="inline-flex items-center rounded-full border-2 border-[#0f2135] px-6 py-3 text-base font-semibold text-[#0f2135] hover:bg-[#0f2135] hover:text-white transition"
              >
                Call (704) 419-9799
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Interested in learning more?"
          subtitle="Fill out the form below and we'll get back to you within 24 hours"
        />
      </main>

      <Footer />
    </>
  );
}
