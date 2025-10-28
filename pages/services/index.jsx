import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import Reviews from "../../components/Reviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";

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

export default function ServicesIndex() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Handyman Services",
    description:
      "Professional handyman services including TV mounting, ceiling fan installation, lighting installation, and more",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        url: `https://installitguy.com/services/${service}`,
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
        },
      },
    })),
  };

  return (
    <>
      <NextSeo
        title="Our Services | Install It Guy"
        description="Professional handyman services including TV mounting, ceiling fan installation, lighting installation, and more. Quality work guaranteed."
        canonical="https://installitguy.com/services"
        openGraph={{
          url: "https://installitguy.com/services",
          title: "Our Services | Install It Guy",
          description:
            "Professional handyman services including TV mounting, ceiling fan installation, lighting installation, and more. Quality work guaranteed.",
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "handyman services, tv mounting, ceiling fan installation, lighting installation, appliance installation",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "Handyman Services FAQs",
            description:
              "Common questions about our handyman services in Shelby NC",
            url: "https://installitguy.com/services",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions. Our services include TV mounting, ceiling fan installation, lighting installation, garage door opener installation, Ring doorbell installation, faucet and toilet installation, appliance installation, blinds installation, mirror and towel bar installation, door installation, deck and fence repair, water leak repair, garbage disposal installation, shelving installation, painting services, flooring installation, furniture assembly, fence installation, and gutter cleaning.",
                },
              },
              {
                "@type": "Question",
                name: "What areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, Lincolnton, Gaffney, Kings Mountain, Forest City, and surrounding areas in North and South Carolina.",
                },
              },
              {
                "@type": "Question",
                name: "How much do your services cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our pricing varies depending on the specific service and project requirements. We provide free estimates for all projects. Contact us for a detailed quote based on your needs.",
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
                name: "Are you licensed and insured?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we are fully licensed and insured. As a family-owned business serving the Carolinas for over 30 years, we maintain all required licenses and comprehensive insurance coverage to protect both you and our team during any project we undertake.",
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
                name: "Services",
                item: "https://installitguy.com/services",
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
                opacity: 0.9,
                zIndex: 1,
                filter: "brightness(1.0) contrast(1.0) saturate(1.0)",
              }}
            >
              {/* High quality source for desktop - prioritize original */}
              <source
                src="/shelby-background-original.mp4"
                type="video/mp4"
                media="(min-width: 1024px)"
              />
              {/* WebM for better compression and quality - prioritize this */}
              <source src="/shelby-background.webm" type="video/webm" />
              {/* Compressed source for mobile */}
              <source
                src="/shelby-background-compressed.mp4"
                type="video/mp4"
                media="(max-width: 1023px)"
              />
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
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Professional handyman services for all your home improvement
                needs. Quality work guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From simple repairs to complex installations, we handle all your
                home improvement needs with professional expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <Reviews />

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free Quote"
          subtitle="Tell us about your project and we'll provide a detailed quote within 24 hours"
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
