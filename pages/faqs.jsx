import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContextualReviews from "../components/ContextualReviews";
import ContextualFAQs from "../components/ContextualFAQs";
import QuoteForm from "../components/QuoteForm";
import { useState } from "react";

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide expert home installation, handyman repairs, home maintenance, and custom storage solutions. Our services include TV mounting, ceiling fan installation, lighting installation, garage door opener installation, Ring doorbell installation, faucet and toilet installation, appliance installation, blinds installation, mirror and towel bar installation, door installation, deck and fence repair, water leak repair, garbage disposal installation, shelving installation, painting services, flooring installation, furniture assembly, fence installation, and gutter cleaning.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, Lincolnton, Gaffney, Kings Mountain, Forest City, and surrounding areas in North and South Carolina.",
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
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed and insured. As a family-owned business serving the Carolinas for over 30 years, we maintain all required licenses and comprehensive insurance coverage to protect both you and our team during any project we undertake.",
    },
    {
      question: "How quickly can you complete a project?",
      answer:
        "Project timelines vary depending on the scope of work. Simple installations can often be completed the same day, while larger projects may take a few days. We'll provide a timeline estimate when we give you a quote.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we offer emergency services for urgent repairs like water leaks and other critical issues. Contact us for emergency situations.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, check, and major credit cards. Payment is typically due upon completion of the work, unless other arrangements are made in advance.",
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
      question: "Do you provide emergency services?",
      answer:
        "Yes, we offer emergency services for urgent repairs like water leaks and other critical issues. As a family-owned business, we understand that emergencies don't wait for business hours. Contact us for emergency situations and we'll do our best to respond quickly to help resolve your urgent home repair needs.",
    },
    {
      question: "What is your service area coverage?",
      answer:
        "We proudly serve Charlotte, Concord, Rock Hill, Gastonia, Hickory, Shelby, Lincolnton, Gaffney, Kings Mountain, Forest City, and surrounding areas in North and South Carolina. Our main business location is at 210 Joseph Ct, Shelby, NC 28152, but we travel throughout the region to serve our customers.",
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
    mainEntity: faqs.map(faq => ({
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
        description="Common handyman questions for Shelby NC homeowners. Fast, local answers."
        canonical="https://installitguy.com/faqs"
        openGraph={{
          url: "https://installitguy.com/faqs",
          title: "Handyman FAQs | Install It Guy Shelby NC",
          description:
            "Common handyman questions for Shelby NC homeowners. Fast, local answers.",
          siteName: "Install It Guy",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Get answers to common questions about our handyman services.
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Install It Guy
                </h2>
                <p className="text-gray-600 mb-4">
                  We're a family-owned business serving the Carolinas for over
                  30 years. Founded and operated by Scott Compton, we've grown
                  from a small local handyman service to a trusted name
                  throughout North and South Carolina.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      30+ Years Experience
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Three decades of serving the Carolinas with expertise and
                      dedication.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Lifetime Warranty
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We proudly back our work with a lifetime customer
                      satisfaction guarantee.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Family Values
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We work hard to provide for our family while serving yours
                      with care.
                    </p>
                  </div>
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
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+17044199799" className="btn-primary">
                  Call (704) 419-9799
                </a>
                <a href="#quote-form" className="btn-secondary">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <QuoteForm
          title="Get Your Free Quote"
          subtitle="Have questions about our services? Get a personalized quote for your project"
        />

        {/* Customer Reviews */}
        <ContextualReviews
          context="faqs"
          maxReviews={3}
          showTitle={true}
          title="Customer Testimonials"
        />

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
