import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";
import metaData from "../../data/metaData.json";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "../../components/HeroSection";
import { generateServiceSchema } from "../../utils/schemaHelpers";
import { truncateMetaDescription } from "../../utils/metaHelpers";
import {
  simplifiedServices,
  simplifiedServiceSlugs,
  CORE_SERVICES,
  MINOR_SERVICE_TO_PARENT,
} from "../../data/simplifiedServices";
import { simplifiedServiceContent } from "../../data/simplifiedServiceContent";
import { PRIMARY_LOCATIONS } from "../../data/simplifiedServices";
import {
  getServiceHeroImage,
  getServiceImages,
} from "../../utils/serviceImages";
import HeroStats from "../../components/HeroStats";

const Reviews = dynamic(() => import("../../components/Reviews"), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-gray-500">Loading reviews...</div>
  ),
});

const ContextualFAQs = dynamic(
  () => import("../../components/ContextualFAQs"),
  {
    loading: () => (
      <div className="py-16 text-center text-gray-500">Loading FAQs...</div>
    ),
  }
);

export default function ServicePage({ service }) {
  // Check if it's a simplified service
  const isSimplifiedService = simplifiedServiceSlugs.includes(service);

  if (!isSimplifiedService) {
    return <div>Page not found</div>;
  }

  const serviceData = simplifiedServiceContent[service];
  const serviceInfo = simplifiedServices[service];

  if (!serviceData || !serviceInfo) {
    return <div>Page not found</div>;
  }

  const pageData = metaData.find(
    (page) => page.url === `https://installitguy.com/services/${service}/`
  );

  const canonicalUrl = `https://installitguy.com/services/${service}/`;

  const fallbackMeta = {
    url: canonicalUrl,
    page_title: `${serviceInfo.name} Charlotte NC | Install It Guy`,
    meta_description: `${serviceData.longDescription} Serving Charlotte and surrounding areas with trusted Install It Guy craftsmanship.`,
    primary_keyword:
      service === "flooring-installation"
        ? "flooring installers charlotte"
        : `${serviceInfo.name.toLowerCase()} charlotte nc`,
  };

  const metaInfo = pageData || fallbackMeta;

  // Check if this is a minor service (not a core service)
  const isMinorService = !CORE_SERVICES.includes(service);
  const parentService = isMinorService
    ? MINOR_SERVICE_TO_PARENT[service]
    : null;
  const parentServiceInfo = parentService
    ? simplifiedServices[parentService]
    : null;

  const heroImage = getServiceHeroImage(service);
  const serviceImages = getServiceImages(service);

  const serviceSchema = generateServiceSchema({
    serviceName: serviceInfo.name,
    description: truncateMetaDescription(metaInfo.meta_description),
    url: metaInfo.url,
    areaServed: "Charlotte, NC and surrounding areas",
    heroImage: heroImage,
  });

  const breadcrumbSchema = {
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
        name: serviceInfo.name,
        item: metaInfo.url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${serviceInfo.name} FAQs`,
    description: `Common questions about ${serviceInfo.name.toLowerCase()} services Charlotte NC`,
    url: metaInfo.url,
    mainEntity: serviceData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <NextSeo
        title={metaInfo.page_title}
        description={truncateMetaDescription(metaInfo.meta_description)}
        canonical={metaInfo.url}
        noindex={isMinorService}
        nofollow={isMinorService}
        openGraph={{
          url: metaInfo.url,
          title: metaInfo.page_title,
          description: truncateMetaDescription(metaInfo.meta_description),
          siteName: "Install It Guy",
          images: [
            {
              url: heroImage
                ? `https://installitguy.com/images/installit-guy/${heroImage}`
                : "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: `${serviceInfo.name} - Install It Guy`,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: metaInfo.primary_keyword,
          },
          ...(isMinorService
            ? [
                {
                  name: "robots",
                  content: "noindex, follow",
                },
              ]
            : []),
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main>
        {isMinorService && parentServiceInfo && (
          <div className="bg-[#8BCB6B]/10 border-b border-[#8BCB6B]/20 py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">{serviceInfo.name}</span> is
                part of our{" "}
                <Link
                  href={`/services/${parentService}`}
                  className="text-[#8BCB6B] hover:text-[#7bb65f] font-semibold underline"
                >
                  {parentServiceInfo.name}
                </Link>{" "}
                offering. View all services included in this category.
              </p>
            </div>
          </div>
        )}
        <HeroSection
          className="py-24"
          imageSrc={
            heroImage
              ? `/images/installit-guy/${heroImage}`
              : "/images/installit-guy/herohandyman.png"
          }
          imageAlt={`${serviceInfo.name} by Install It Guy`}
          objectPosition="50% 42%"
          priority={true}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
                Charlotte handyman service
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-white">
                <span className="text-[#8BCB6B]">{serviceInfo.name}</span>{" "}
                Charlotte, NC done right the first time
              </h1>
              <p className="mt-5 text-lg text-slate-100/90 leading-relaxed">
                {serviceData.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("quote-form")
                      ?.scrollIntoView({ block: "start" });
                  }}
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-[#8BCB6B] text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
                >
                  Get Free Quote
                </a>
                <Link
                  href="tel:+17044199799"
                  className="inline-flex items-center px-5 py-3 rounded-full font-semibold border border-white/60 text-white hover:bg-white/10 transition"
                >
                  Call (704) 419-9799
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-slate-100">
                <h2 className="text-lg font-semibold text-white">
                  What's Included
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {serviceData.included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-[#8BCB6B]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <HeroStats />
            </div>
          </div>
        </HeroSection>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Overview of {serviceInfo.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {serviceData.longDescription}
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What's Included in This Service
            </h2>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {serviceData.included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-primary-600">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Services We Cover
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {serviceData.minorServices.map((minorService) => {
                  // Check if this service has its own dedicated page
                  const serviceLinkMap = {
                    "garbage disposal repair": "garbage-disposal-repair",
                    "faucet repair": "faucet-repair",
                    "toilet repair": "toilet-repair",
                    "minor electrical repairs": "electrical-repairs",
                    "door installation & replacement": "door-installation",
                    "door repair": "door-repair",
                    "ceiling fan installation": "ceiling-fan-installation",
                    "tv mounting": "tv-mounting",
                    "furniture assembly": "furniture-assembly",
                    "mirror & towel bar installation": "mirror-installation",
                    "blinds & curtain rod installation": "blind-installation",
                    "lighting fixture installation": "lighting-installation",
                    "ring doorbell & smart device installation":
                      "security-camera-installation",
                    "deck repair": "deck-repair",
                    "fence repair": "fence-repair",
                    "deck installation": "deck-installation",
                    "fence installation": "fence-installation",
                    "composite decking": "composite-decking-installation",
                    "hardwood flooring": "hardwood-floor-installation",
                    "laminate flooring": "laminate-floor-installation",
                    "vinyl flooring": "vinyl-floor-installation",
                    "tile flooring": "tile-floor-installation",
                    "epoxy flooring": "epoxy-floor-installation",
                    "garage door installation": "garage-door-installation",
                    "garage door repair": "garage-door-repair",
                    "garage door opener installation":
                      "garage-door-opener-installation",
                    "garage door opener repair": "garage-door-opener-repair",
                  };
                  const linkSlug =
                    serviceLinkMap[minorService.toLowerCase()] || null;

                  if (linkSlug && simplifiedServiceSlugs.includes(linkSlug)) {
                    return (
                      <Link
                        key={minorService}
                        href={`/services/${linkSlug}`}
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                      >
                        <h4 className="font-semibold text-gray-900 hover:text-primary-600">
                          {minorService} →
                        </h4>
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={minorService}
                      className="bg-white p-4 rounded-lg border border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900">
                        {minorService}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {serviceData.whyChoose.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span className="mt-1 text-primary-600 text-xl">•</span>
                  <span className="text-lg text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        {/* Project Spotlight - Only for handyman-services and drywall-repair */}
        {(service === "handyman-services" || service === "drywall-repair") && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">
                  Project Spotlight
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Accent wall transformation from sketch to reveal
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  This Charlotte homeowner wanted a dramatic feature wall in the
                  family room. Here's how our crew handled it—from layout and
                  lumber to the final coat of paint.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.1.JPG"
                    alt="Accent wall project photo 1"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.2.JPG"
                    alt="Accent wall project photo 2"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.3.JPG"
                    alt="Accent wall project photo 3"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                  <Image
                    src="/images/installit-guy/project1.4.JPG"
                    alt="Accent wall project photo 4"
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Service Images Gallery */}
        {serviceImages.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent {serviceInfo.name} Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mb-8">
                A look at recent {serviceInfo.name.toLowerCase()} projects
                completed by our team.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {serviceImages.slice(0, 6).map((image, index) => (
                  <div
                    key={`${service}-image-${image}-${index}`}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200"
                  >
                    <Image
                      src={`/images/installit-guy/${image}`}
                      alt={`${serviceInfo.name} project ${index + 1}`}
                      width={640}
                      height={480}
                      className="h-56 w-full object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Services Links Section - Only for handyman-services (Charlotte) */}
        {service === "handyman-services" && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore all of our handyman and home repair services.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "handyman-services",
                  "home-repair",
                  "general-installation-services",
                  "door-hardware-repair",
                  "drywall-repair",
                  "deck-fence-repair",
                  "flooring-installation",
                  "garage-door-opener-services",
                ].map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className={`p-4 rounded-lg border transition ${
                      slug === service
                        ? "bg-primary-50 border-primary-400"
                        : "bg-white border-gray-200 hover:border-primary-400 hover:shadow-md"
                    }`}
                  >
                    <h3
                      className={`font-semibold ${
                        slug === service
                          ? "text-primary-600"
                          : "text-gray-900 hover:text-primary-600"
                      }`}
                    >
                      {simplifiedServices[slug].name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Areas We Serve Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We proudly serve homeowners in the Charlotte metro area and
              surrounding communities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRIMARY_LOCATIONS.map((location) => (
                <Link
                  key={location.slug}
                  href={`/service-areas/${location.slug}`}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">View services →</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-gray-600">
              We also serve surrounding communities in Cabarrus, Cleveland,
              Mecklenburg, and Union counties in North Carolina, and Lancaster,
              Richland, and York counties in South Carolina.{" "}
              <Link
                href="/service-areas/where-we-work"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See all locations we serve
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-gray-50" id="quote-form">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title={`Ready to Get Started with ${serviceInfo.name}?`}
              subtitle="Share your project details and we'll respond with availability and pricing within one business day."
            />
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {serviceData.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Q{index + 1}. {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { service } = context.params;

  // Only allow simplified services (main services + micro services)
  if (!simplifiedServiceSlugs.includes(service)) {
    return { notFound: true };
  }

  return {
    props: {
      service,
    },
  };
}
