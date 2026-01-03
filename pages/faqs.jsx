import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const Reviews = dynamic(() => import("../components/Reviews"), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-gray-500">Loading reviews...</div>
  ),
});
import ContextualFAQs from "../components/ContextualFAQs";
import QuoteForm from "../components/QuoteForm";
import HeroSection from "../components/HeroSection";
import { truncateMetaDescription } from "../utils/metaHelpers";
import { useState } from "react";
import {
  simplifiedServices,
  simplifiedServiceSlugs,
} from "../data/simplifiedServices";

// Only use the 8 main services
const mainServiceSlugs = [
  "handyman-services",
  "home-repair",
  "general-installation-services",
  "door-hardware-repair",
  "drywall-repair",
  "deck-fence-repair",
  "flooring-installation",
  "garage-door-opener-services",
];

const serviceNames = mainServiceSlugs.map(
  (slug) => simplifiedServices[slug].name
);

const formatServiceList = (list) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

const serviceSummary = formatServiceList(serviceNames);

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: `We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions. Our services include ${serviceSummary}.`,
    },
    {
      question: "What areas do you serve?",
      answer:
        "Our service area coverage includes, but is not limited to, North Carolina counties of Cabarrus, Cleveland, Mecklenburg, and Union as well as Lancaster, Richland, and York counties in South Carolina.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies depending on the specific service and project requirements. We provide free estimates for all projects. Contact us for a detailed quote based on your needs.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide free estimates for all our services. Contact us to schedule a consultation and receive a detailed quote for your project.",
    },
    {
      question: "How quickly can you complete a project?",
      answer:
        "Project timelines vary depending on the scope of work. Simple installations can often be completed the same day, while larger projects may take a few days. We'll provide a timeline estimate when we give you a quote.",
    },
    {
      question: "Do you provide warranties on your work?",
      answer:
        "Yes! We proudly back our work with a lifetime customer satisfaction guarantee. If you ever have a concern about a repair, installation, or custom project we've completed, we'll make it right. Our goal is to build long-term trust, so you can feel confident choosing us for all your home projects—today and in the future.",
    },
    {
      question: "Can you work with materials I provide?",
      answer:
        "Yes, we can work with materials you provide, though we recommend discussing this during the estimate process to ensure compatibility and proper installation.",
    },
    {
      question:
        "What makes your business different from other handyman services?",
      answer:
        "We combine professional installation, reliable handyman work, preventative maintenance, and custom storage solutions into one trusted service. As a family-owned business serving the Carolinas for over 30 years, homeowners choose us for our attention to detail, honest pricing, and ability to handle a wide range of home projects. We truly feel blessed to get to do what we love and offer a huge thank you to all of our customers for your continued business!",
    },
    {
      question: "What is your service area coverage?",
      answer:
        "Our service area coverage includes, but is not limited to, North Carolina counties of Cabarrus, Cleveland, Mecklenburg, and Union as well as Lancaster, Richland, and York counties in South Carolina.",
    },
    {
      question: "How do you ensure quality workmanship?",
      answer:
        "With over 30 years of experience, we've developed proven processes and techniques for every type of project. We use high-quality materials, proper tools, and follow industry best practices. Our lifetime warranty demonstrates our confidence in our work - if you ever have a concern about any project we've completed, we'll make it right.",
    },
    {
      question: "Can you work with my existing materials and fixtures?",
      answer:
        "Absolutely! We can work with materials you provide, though we recommend discussing this during the estimate process to ensure compatibility and proper installation. We're experienced with all types of materials and can provide guidance on what works best for your specific project and budget.",
    },
  ];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Handyman FAQs",
    description: "Common handyman questions for Shelby NC homeowners",
    url: "https://installitguy.com/faqs",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <NextSeo
        title="Handyman FAQs | Install It Guy Shelby NC"
        description={truncateMetaDescription(
          "Common handyman questions for Shelby NC homeowners. Fast, local answers."
        )}
        canonical="https://installitguy.com/faqs"
        openGraph={{
          url: "https://installitguy.com/faqs",
          title: "Handyman FAQs | Install It Guy Shelby NC",
          description: truncateMetaDescription(
            "Common handyman questions for Shelby NC homeowners. Fast, local answers."
          ),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: "Install It Guy FAQs",
            },
          ],
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
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
                name: "FAQs",
                item: "https://installitguy.com/faqs",
              },
            ],
          }),
        }}
      />

      <Header />

      <HeroSection
        className="py-24"
        imageSrc="/images/installit-guy/herohandyman.png"
        imageAlt="Handyman installing wall paneling"
        objectPosition="50% 42%"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
            Frequently asked questions
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Answers before we visit your home
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Everything you need to know about Install It Guy—services,
            scheduling, coverage, and what to expect from our crew.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("quote-form")
                  ?.scrollIntoView({ block: "start" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#8BCB6B] px-6 py-3 text-sm font-semibold text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+17044199799"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Call (704) 419-9799
            </a>
          </div>
        </div>
      </HeroSection>

      <main className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">
              We’ve gathered the questions homeowners ask before booking. Can’t
              find what you’re looking for? Call (704) 419-9799 or send us a
            </p>
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-4xl mx-auto text-left mb-12">
            <h2 className="text-2xl font-bold text-[#0f2135] mb-4">
              <span className="text-[#8BCB6B]">About</span> Install It Guy
            </h2>
            <p className="text-gray-600 mb-4">
              We're a family-owned business serving the Carolinas for over 30
              years. Founded and operated by Scott Compton, we've grown from a
              small local handyman service to a trusted name throughout North
              and South Carolina.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-[#8BCB6B] mb-2">
                  30+ Years Experience
                </h3>
                <p className="text-gray-600 text-sm">
                  Three decades of serving the Carolinas with expertise and
                  dedication.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#8BCB6B] mb-2">
                  Lifetime Warranty
                </h3>
                <p className="text-gray-600 text-sm">
                  We proudly back our work with a lifetime customer satisfaction
                  guarantee.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#8BCB6B] mb-2">
                  Family Values
                </h3>
                <p className="text-gray-600 text-sm">
                  We work hard to provide for our family while serving yours
                  with care.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-[#0f2135] pr-4">
                    <span className="text-[#8BCB6B]">Q{index + 1}.</span>{" "}
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openFAQ === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-[#0f2135] mb-4">
              <span className="text-[#8BCB6B]">Still Have Questions?</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17044199799" className="btn-primary">
                Call (704) 419-9799
              </a>
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ block: "start" });
                }}
                className="btn-secondary"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free Quote"
          subtitle="Have questions about our services? Get a personalized quote for your project"
        />

        {/* Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reviews />
          </div>
        </section>

        {/* Additional FAQs */}
        <ContextualFAQs
          context="faqs"
          maxFAQs={5}
          showTitle={true}
          title="More Handyman Questions"
        />
      </main>

      <Footer />
    </>
  );
}
