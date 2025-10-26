import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import Reviews from "../../components/Reviews";
import ContextualFAQs from "../../components/ContextualFAQs";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";
import metaData from "../../data/metaData.json";

const serviceAreas = [
  "charlotte-nc",
  "concord-nc",
  "rock-hill-sc",
  "gastonia-nc",
  "hickory-nc",
  "shelby-nc",
  "lincolnton-nc",
  "gaffney-sc",
  "kings-mountain-nc",
  "forest-city-nc",
];

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

export default function ServiceAreaPage() {
  const router = useRouter();
  const { city } = router.query;
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    if (city && serviceAreas.includes(city)) {
      // Get city data from metadata
      const cityMetaData = metaData.find(
        (page) => page.url === `https://installitguy.com/service-areas/${city}/`
      );
      setCityData(cityMetaData);
    }
  }, [city]);

  if (!city || !serviceAreas.includes(city)) {
    return <div>Loading...</div>;
  }

  if (!cityData) {
    return <div>Loading...</div>;
  }

  const getCityName = (citySlug) => {
    const names = {
      "charlotte-nc": "Charlotte, NC",
      "concord-nc": "Concord, NC",
      "rock-hill-sc": "Rock Hill, SC",
      "gastonia-nc": "Gastonia, NC",
      "hickory-nc": "Hickory, NC",
      "shelby-nc": "Shelby, NC",
      "lincolnton-nc": "Lincolnton, NC",
      "gaffney-sc": "Gaffney, SC",
      "kings-mountain-nc": "Kings Mountain, NC",
      "forest-city-nc": "Forest City, NC",
    };
    return names[citySlug] || citySlug;
  };

  return (
    <>
      <NextSeo
        title={cityData.page_title}
        description={cityData.meta_description}
        canonical={cityData.url}
        openGraph={{
          url: cityData.url,
          title: cityData.page_title,
          description: cityData.meta_description,
          siteName: "Install It Guy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: cityData.primary_keyword,
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
                Handyman Services in {getCityName(city)}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Professional handyman services for {getCityName(city)} and
                surrounding areas. Quality work guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+17041234567"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Call (704) 123-4567
                </Link>
                <a
                  href="#quote-form"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Services in {getCityName(city)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From simple repairs to complex installations, we handle all your
                home improvement needs in {getCityName(city)} with professional
                expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service}
                  service={service}
                  city={city === "shelby-nc" ? null : city}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <Reviews />

        {/* Quote Form */}
        <QuoteForm
          title={`Get Your Free Quote for ${getCityName(city)}`}
          subtitle={`Tell us about your project in ${getCityName(
            city
          )} and we'll provide a detailed quote within 24 hours`}
        />

        {/* FAQs */}
        <ContextualFAQs
          context="general"
          maxFAQs={5}
          showTitle={true}
          title={`Handyman Service FAQs for ${getCityName(city)}`}
        />
      </main>

      <Footer />
    </>
  );
}
