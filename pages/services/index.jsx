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
