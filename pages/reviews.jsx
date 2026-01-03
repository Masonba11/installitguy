import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import ContextualFAQs from "../components/ContextualFAQs";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import { truncateMetaDescription } from "../utils/metaHelpers";
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
        description={truncateMetaDescription(
          "See real reviews from Shelby NC homeowners who trust Install It Guy for quality handyman services, TV mounting, and home repairs."
        )}
        canonical="https://installitguy.com/reviews"
        openGraph={{
          url: "https://installitguy.com/reviews",
          title: "Customer Reviews | Install It Guy Shelby NC",
          description: truncateMetaDescription(
            "See real reviews from Shelby NC homeowners who trust Install It Guy for quality handyman services, TV mounting, and home repairs."
          ),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: "Install It Guy Customer Reviews",
            },
          ],
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
        <HeroSection
          className="py-24"
          imageSrc="/images/installit-guy/herohandyman.png"
          imageAlt="Handyman finishing a living room project"
          objectPosition="50% 42%"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
              4.9-star service
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">
              See what our customers say about Install It Guy
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Homeowners across Shelby and the greater Charlotte region trust us
              for installs, repairs, and maintenance that actually last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="tel:+17044199799"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#0f2135] bg-[#8BCB6B] shadow hover:bg-[#7bb65f] transition"
              >
                Call (704) 419-9799
              </Link>
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ block: "start" });
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#0f2135] bg-[#8BCB6B] shadow hover:bg-[#7bb65f] transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </HeroSection>

        {/* Google Reviews Component */}
        <Reviews />

        {/* Why Customers Choose Us */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2135]">
                <span className="text-[#8BCB6B]">What our customers</span>{" "}
                highlight
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to quality and customer satisfaction shows in
                every review.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              {[
                {
                  title: "Respectful crews",
                  description:
                    "Boot covers, floor protection, and a tidy workspace from start to finish—it's mentioned in almost every review.",
                },
                {
                  title: "Transparent pricing",
                  description:
                    "Customers appreciate clear estimates, options for add-ons, and zero surprise fees when the job wraps.",
                },
                {
                  title: "Work that lasts",
                  description:
                    "A lifetime workmanship guarantee means we come back if something isn't perfect—no arguments, no hassles.",
                },
              ].map((item) => (
                <div key={item.title} className="card text-left">
                  <h3 className="text-xl font-semibold text-[#8BCB6B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Ready to work with us?"
          subtitle="Fill out the form below and we'll contact you within minutes"
        />

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
