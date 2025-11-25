import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import QuoteForm from "../../components/QuoteForm";
import { truncateMetaDescription } from "../../utils/metaHelpers";
import Link from "next/link";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";

const additionalServices = [
  {
    name: "Storm Door Installation",
    description:
      "We install storm doors to protect your entryway from the elements while improving energy efficiency. Our installation ensures proper fit, weatherstripping, and hardware for long-lasting performance.",
    features: [
      "Proper fit and alignment",
      "Weatherstripping installation",
      "Hardware setup and adjustment",
      "Energy efficiency improvements",
    ],
  },
  {
    name: "Microwave Installation",
    description:
      "Professional microwave installation for over-the-range and countertop models. We handle mounting, electrical connections, and venting to ensure safe and proper operation.",
    features: [
      "Over-the-range mounting",
      "Countertop placement",
      "Electrical connections",
      "Vent system setup",
    ],
  },
  {
    name: "Wire Concealment",
    description:
      "Hide unsightly wires and cables for a clean, professional look. We route cables through walls, install outlets, and organize wiring for TVs, computers, and home entertainment systems.",
    features: [
      "In-wall cable routing",
      "Outlet installation",
      "Cable management",
      "Clean, organized appearance",
    ],
  },
  {
    name: "Picture & Art Installation",
    description:
      "Hang pictures, artwork, and wall decor with precision and care. We ensure proper placement, secure mounting, and level installation for a polished gallery look.",
    features: [
      "Precise placement and leveling",
      "Secure mounting hardware",
      "Gallery wall arrangements",
      "Heavy item support",
    ],
  },
  {
    name: "Curved Shower Rod Installation",
    description:
      "Install curved shower rods to maximize shower space and add a modern touch to your bathroom. We ensure secure mounting and proper clearance for comfortable use.",
    features: [
      "Secure wall mounting",
      "Proper clearance and spacing",
      "Weight capacity support",
      "Modern bathroom upgrade",
    ],
  },
  {
    name: "Chandelier Installation",
    description:
      "Expert chandelier installation with attention to electrical safety, proper support, and balanced hanging. We handle everything from wiring to final positioning for a stunning centerpiece.",
    features: [
      "Electrical wiring and connections",
      "Ceiling support installation",
      "Proper height and positioning",
      "Balanced hanging and adjustment",
    ],
  },
];

export default function AdditionalServices() {
  return (
    <>
      <NextSeo
        title="Additional Services | Install It Guy | Shelby, NC"
        description={truncateMetaDescription(
          "Additional handyman services including storm door installation, microwave installation, wire concealment, picture hanging, curved shower rods, and chandelier installation."
        )}
        canonical="https://installitguy.com/services/additional-services"
        openGraph={{
          url: "https://installitguy.com/services/additional-services",
          title: "Additional Services | Install It Guy",
          description: truncateMetaDescription(
            "Professional installation services for storm doors, microwaves, wire concealment, picture hanging, curved shower rods, and chandeliers."
          ),
          siteName: "Install It Guy",
        }}
      />

      <LocalBusinessSchema />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Additional Handyman Services",
            description: truncateMetaDescription(
              "Professional installation services including storm doors, microwaves, wire concealment, picture hanging, curved shower rods, and chandeliers."
            ),
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
            areaServed: {
              "@type": "State",
              name: ["North Carolina", "South Carolina"],
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
                name: "Services",
                item: "https://installitguy.com/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Additional Services",
                item: "https://installitguy.com/services/additional-services",
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        {/* Hero */}
        <HeroSection
          className="py-24"
          imageSrc="/images/installit-guy/hero-home.webp"
          imageAlt="Install It Guy additional services"
          objectPosition="50% 42%"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                Additional Services
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-white">
                <span className="text-[#8BCB6B]">More services</span> to
                complete your home projects
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                From storm doors to chandeliers, we handle specialized
                installations with the same attention to detail and quality
                workmanship you expect from Install It Guy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="tel:+17044199799"
                  className="inline-flex items-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Call (704) 419-9799
                </Link>
              </div>
            </div>
          </div>
        </HeroSection>

        {/* Services List */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8BCB6B]">
                Services
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0f2135]">
                <span className="text-[#8BCB6B]">
                  Specialized installations
                </span>{" "}
                for your home
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Each service includes professional installation, cleanup, and
                our lifetime satisfaction guarantee.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-semibold text-[#0f2135] mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-[#8BCB6B] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2135] mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your project online or give us a call to discuss your needs.
              We'll provide a free estimate and work around your schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+17044199799"
                className="inline-flex items-center rounded-full border-2 border-[#0f2135] px-6 py-3 text-base font-semibold text-[#0f2135] hover:bg-[#0f2135] hover:text-white transition"
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
                className="inline-flex items-center rounded-full bg-[#8BCB6B] px-6 py-3 text-base font-semibold text-[#0f2135] shadow-sm hover:bg-[#7bb65f] transition"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Ready to get started?"
          subtitle="Fill out the form below and we'll get back to you within 24 hours"
        />
      </main>

      <Footer />
    </>
  );
}
