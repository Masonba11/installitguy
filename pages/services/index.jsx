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

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom section-padding">
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
