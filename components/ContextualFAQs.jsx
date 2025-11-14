import { useState } from "react";
import { servicesContent } from "../data/servicesContent";

export default function ContextualFAQs({
  context = "general",
  cityName = "",
  serviceLabel = "",
  maxFAQs = 5,
  showTitle = true,
  title = "Frequently Asked Questions",
  className = "",
}) {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Comprehensive FAQ database organized by context
  const faqDatabase = {
    "tv-mounting": [
      {
        question: "How much does TV mounting cost?",
        answer:
          "TV mounting typically costs $150-300 depending on TV size, wall type, and complexity. We provide free quotes for all projects.",
      },
      {
        question: "What TV sizes can you mount?",
        answer:
          'We mount all TV sizes from 32" to 85" and larger. Our team has experience with every major brand and model.',
      },
      {
        question: "Do you hide the cables?",
        answer:
          "Yes! We offer cable management services to hide power cords and HDMI cables for a clean, professional look.",
      },
      {
        question: "How long does TV mounting take?",
        answer:
          "Most TV mounting jobs take 1-2 hours, including cable management and cleanup.",
      },
      {
        question: "Can you mount on any wall type?",
        answer:
          "We can mount on drywall, brick, concrete, and other wall types. We'll assess your wall and use appropriate mounting hardware.",
      },
    ],
    "ceiling-fan-installation": [
      {
        question: "How much does ceiling fan installation cost?",
        answer:
          "Ceiling fan installation typically costs $200-400 depending on complexity, electrical work needed, and fan type.",
      },
      {
        question: "Do you install ceiling fans in existing electrical boxes?",
        answer:
          "Yes, we can install in existing boxes when possible, or add new electrical work if needed for proper support.",
      },
      {
        question: "What ceiling heights can you work with?",
        answer:
          "We install ceiling fans in rooms with standard 8-9 foot ceilings, and can work with vaulted or higher ceilings too.",
      },
      {
        question: "Do you provide the ceiling fan?",
        answer:
          "You can purchase your own fan, or we can recommend and source quality fans for your project.",
      },
      {
        question: "How long does ceiling fan installation take?",
        answer:
          "Most ceiling fan installations take 2-4 hours, including electrical work and testing.",
      },
    ],
    "lighting-installation": [
      {
        question: "What types of lighting do you install?",
        answer:
          "We install chandeliers, pendant lights, recessed lighting, track lighting, and all types of fixtures.",
      },
      {
        question: "Do you handle electrical wiring for new fixtures?",
        answer:
          "Yes, we take care of the electrical work including new wiring, switches, and dimmer installations.",
      },
      {
        question: "Can you install outdoor lighting?",
        answer:
          "Absolutely! We install outdoor lighting, security lights, and landscape lighting with proper weatherproofing.",
      },
      {
        question: "How much does lighting installation cost?",
        answer:
          "Lighting installation costs vary by complexity, but typically ranges from $150-500 per fixture.",
      },
      {
        question: "Do you work with smart lighting systems?",
        answer:
          "Yes, we install and configure smart lighting systems including dimmers, timers, and app-controlled fixtures.",
      },
    ],
    "appliance-installation": [
      {
        question: "What appliances do you install?",
        answer:
          "We install washers, dryers, dishwashers, refrigerators, ranges, and most major home appliances.",
      },
      {
        question: "Do you connect water and electrical lines?",
        answer:
          "Yes, we handle all connections including water lines, electrical, gas lines, and drain connections.",
      },
      {
        question: "Do you remove old appliances?",
        answer:
          "We can remove and dispose of old appliances as part of the installation service.",
      },
      {
        question: "How much does appliance installation cost?",
        answer:
          "Appliance installation typically costs $150-400 depending on the appliance type and connection complexity.",
      },
      {
        question: "Do you provide warranty on installations?",
        answer:
          "Yes, we provide a 1-year warranty on all our installation work and connections.",
      },
    ],
    "garage-door-opener-installation": [
      {
        question: "What types of garage door openers do you install?",
        answer:
          "We install chain drive, belt drive, and screw drive openers from all major brands like Chamberlain, LiftMaster, and Genie.",
      },
      {
        question: "How much does garage door opener installation cost?",
        answer:
          "Garage door opener installation typically costs $300-600 including the opener, installation, and programming.",
      },
      {
        question: "Do you program remotes and keypads?",
        answer:
          "Yes, we program all remotes, keypads, and smart home integration as part of the installation.",
      },
      {
        question: "How long does garage door opener installation take?",
        answer:
          "Most garage door opener installations take 2-4 hours including programming and testing.",
      },
      {
        question: "Can you install smart garage door openers?",
        answer:
          "Yes, we install and configure smart garage door openers with WiFi connectivity and smartphone control.",
      },
    ],
    "ring-doorbell-installation": [
      {
        question: "What Ring doorbell models do you install?",
        answer:
          "We install all Ring doorbell models including Video Doorbell, Video Doorbell Pro, and Ring Elite.",
      },
      {
        question: "Do you handle the electrical wiring?",
        answer:
          "Yes, we handle all electrical work including doorbell transformer installation and wiring.",
      },
      {
        question: "How much does Ring doorbell installation cost?",
        answer:
          "Ring doorbell installation typically costs $150-300 including electrical work and setup.",
      },
      {
        question: "Do you set up the Ring app?",
        answer:
          "Yes, we configure the Ring app, WiFi connection, and all smart home features during installation.",
      },
      {
        question: "How long does Ring doorbell installation take?",
        answer:
          "Most Ring doorbell installations take 1-3 hours including electrical work and app setup.",
      },
    ],
    "faucet-toilet-installation": [
      {
        question: "What plumbing fixtures do you install?",
        answer:
          "We install faucets, toilets, sinks, garbage disposals, and most bathroom and kitchen fixtures.",
      },
      {
        question: "Do you handle water line connections?",
        answer:
          "Yes, we handle all water line connections, shut-off valves, and ensure leak-free installations.",
      },
      {
        question: "How much does toilet installation cost?",
        answer:
          "Toilet installation typically costs $200-400 including removal of old toilet and proper sealing.",
      },
      {
        question: "Do you provide warranty on plumbing work?",
        answer:
          "Yes, we provide a 1-year warranty on all plumbing installations and connections.",
      },
      {
        question: "How long does faucet installation take?",
        answer:
          "Most faucet installations take 1-2 hours including testing for leaks and proper operation.",
      },
    ],
    "blinds-installation": [
      {
        question: "What types of window treatments do you install?",
        answer:
          "We install blinds, shades, shutters, curtains, and all types of window coverings.",
      },
      {
        question: "Do you measure windows for custom blinds?",
        answer:
          "Yes, we provide professional measuring services for custom blinds and window treatments.",
      },
      {
        question: "How much does blinds installation cost?",
        answer:
          "Blinds installation typically costs $50-150 per window depending on the type and complexity.",
      },
      {
        question: "Do you install motorized blinds?",
        answer:
          "Yes, we install and configure motorized blinds with smart home integration and remote controls.",
      },
      {
        question: "How long does blinds installation take?",
        answer:
          "Most blinds installations take 30-60 minutes per window, depending on the type of treatment.",
      },
    ],
    "mirror-towel-bar-installation": [
      {
        question: "What bathroom fixtures do you install?",
        answer:
          "We install mirrors, towel bars, toilet paper holders, shower curtain rods, and all bathroom hardware.",
      },
      {
        question: "Do you handle tile drilling?",
        answer:
          "Yes, we have specialized tools for drilling into tile, stone, and other hard surfaces safely.",
      },
      {
        question: "How much does mirror installation cost?",
        answer:
          "Mirror installation typically costs $100-300 depending on size and mounting complexity.",
      },
      {
        question: "Do you provide the hardware?",
        answer:
          "You can provide your own hardware, or we can recommend and source quality mounting hardware.",
      },
      {
        question: "How long does bathroom hardware installation take?",
        answer: "Most bathroom hardware installations take 1-2 hours per room.",
      },
    ],
    "door-installation": [
      {
        question: "What types of doors do you install?",
        answer:
          "We install interior doors, exterior doors, sliding doors, French doors, and all door types.",
      },
      {
        question: "Do you handle door hardware installation?",
        answer:
          "Yes, we install all door hardware including handles, locks, hinges, and door closers.",
      },
      {
        question: "How much does door installation cost?",
        answer:
          "Door installation typically costs $300-800 depending on door type and complexity.",
      },
      {
        question: "Do you provide the doors?",
        answer:
          "You can purchase your own doors, or we can recommend and source quality doors for your project.",
      },
      {
        question: "How long does door installation take?",
        answer:
          "Most door installations take 2-4 hours including hardware installation and adjustments.",
      },
    ],
    "deck-fence-repair": [
      {
        question: "What deck and fence repairs do you handle?",
        answer:
          "We repair deck boards, railings, stairs, fence posts, gates, and all outdoor structures.",
      },
      {
        question: "Do you work with all types of wood?",
        answer:
          "Yes, we work with pressure-treated lumber, cedar, composite decking, and all wood types.",
      },
      {
        question: "How much does deck repair cost?",
        answer:
          "Deck repair costs vary by damage extent, but typically ranges from $200-1000 per project.",
      },
      {
        question: "Do you provide materials?",
        answer:
          "You can provide your own materials, or we can source and supply quality materials for your project.",
      },
      {
        question: "How long does deck repair take?",
        answer:
          "Most deck repairs take 1-3 days depending on the extent of damage and repairs needed.",
      },
    ],
    "garbage-disposal-installation": [
      {
        question: "What garbage disposal models do you install?",
        answer:
          "We install all major garbage disposal brands including InSinkErator, Waste King, and KitchenAid.",
      },
      {
        question: "Do you handle electrical connections?",
        answer:
          "Yes, we handle all electrical connections including wiring and switch installation.",
      },
      {
        question: "How much does garbage disposal installation cost?",
        answer:
          "Garbage disposal installation typically costs $200-400 including the disposal unit and installation.",
      },
      {
        question: "Do you remove old disposals?",
        answer:
          "Yes, we remove and dispose of old garbage disposals as part of the installation service.",
      },
      {
        question: "How long does disposal installation take?",
        answer:
          "Most garbage disposal installations take 1-2 hours including electrical work and testing.",
      },
    ],
    "shelving-installation": [
      {
        question: "What types of shelving do you install?",
        answer:
          "We install closet shelving, garage shelving, floating shelves, bookcases, and custom storage solutions.",
      },
      {
        question: "Do you build custom shelving?",
        answer:
          "Yes, we can build custom shelving to fit your specific space and storage needs.",
      },
      {
        question: "How much does shelving installation cost?",
        answer:
          "Shelving installation typically costs $100-500 depending on complexity and materials.",
      },
      {
        question: "Do you provide the shelving materials?",
        answer:
          "You can provide your own materials, or we can recommend and source quality shelving materials.",
      },
      {
        question: "How long does shelving installation take?",
        answer:
          "Most shelving installations take 2-4 hours depending on the complexity and number of units.",
      },
    ],
    "home-maintenance": [
      {
        question: "What does your home maintenance service include?",
        answer:
          "We handle filter changes, smoke and CO detector checks, gutter cleaning, seasonal inspections, and custom maintenance punch lists.",
      },
      {
        question: "Can I set up recurring maintenance visits?",
        answer:
          "Yes, we offer seasonal and quarterly maintenance plans so your home stays in top shape year-round.",
      },
      {
        question: "Do you provide reports or checklists after each visit?",
        answer:
          "Absolutely. We document the tasks performed, note any issues we find, and share recommended next steps with you.",
      },
      {
        question: "Can you restock filters and batteries for us?",
        answer:
          "Yes, we can purchase and replace HVAC filters, smoke detector batteries, and other consumables for added convenience.",
      },
      {
        question: "How long does a maintenance visit take?",
        answer:
          "Most maintenance visits take 1-2 hours depending on the size of your home and the tasks requested.",
      },
    ],
    "epoxy-flooring": [
      {
        question: "What surfaces can you coat with epoxy?",
        answer:
          "We install epoxy on garage floors, basements, workshops, and utility rooms with proper concrete preparation.",
      },
      {
        question: "How long does the epoxy installation process take?",
        answer:
          "Most epoxy flooring projects take 2-3 days including surface prep, coating, and curing time before you can drive on it.",
      },
      {
        question: "What customization options are available?",
        answer:
          "You can choose color flakes, metallic finishes, high-gloss topcoats, and anti-slip additives to match your style and usage needs.",
      },
      {
        question: "How durable is your epoxy flooring?",
        answer:
          "We use high-quality, industrial-grade epoxy designed to resist hot tire pickup, chemicals, and heavy traffic.",
      },
      {
        question: "Do you repair cracks before coating?",
        answer:
          "Yes, we fill cracks, grind uneven areas, and properly prep the concrete to ensure a long-lasting epoxy bond.",
      },
    ],
    contact: [
      {
        question: "How do I get a quote for my project?",
        answer:
          "Call us at (704) 419-9799 or fill out our contact form for a free, no-obligation quote.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "Our service area coverage includes, but is not limited to, North Carolina counties of Cabarrus, Cleveland, Mecklenburg, and Union as well as Lancaster, Richland, and York counties in South Carolina.",
      },
      {
        question: "Do you provide free estimates?",
        answer:
          "Yes, we provide free estimates for all projects with no obligation to hire us.",
      },
      {
        question: "What are your business hours?",
        answer:
          "We're available Monday-Friday 8AM-6PM and Saturday 9AM-4PM for estimates and service calls.",
      },
    ],
    faqs: [
      {
        question: "Do you provide warranties on your work?",
        answer:
          "Yes, we provide warranties on all our work ranging from 1-3 years depending on the service.",
      },
      {
        question: "Do you clean up after the job?",
        answer:
          "Yes, we always clean up our work area and dispose of any debris from the project.",
      },
      {
        question: "How do I schedule service?",
        answer:
          "Call us at (704) 419-9799 or use our online contact form to schedule your service.",
      },
    ],
    general: [
      {
        question: "What handyman services do you provide?",
        answer:
          "We provide TV mounting, ceiling fan installation, lighting, plumbing, electrical work, and all home improvement services.",
      },
      {
        question: "Are you available for small jobs?",
        answer:
          "Yes, we handle everything from small repairs to major installations - no job is too small.",
      },
      {
        question: "Do you work on weekends?",
        answer:
          "Yes, we offer weekend service for urgent repairs and can schedule weekend installations.",
      },
      {
        question: "What makes you different from other handymen?",
        answer:
          "We're local, reliable, and provide quality work with fair pricing and excellent customer service.",
      },
      {
        question: "How do I know if I need a handyman?",
        answer:
          "If you have home repairs, installations, or improvements that need professional attention, we can help.",
      },
    ],
  };

  // Get FAQs for the specific context
  const getContextualFAQs = (context) => {
    const contextFAQs = faqDatabase[context] || [];
    const generalFAQs = faqDatabase["general"] || [];

    // Combine context-specific and general FAQs, prioritizing context-specific
    const allFAQs = [...contextFAQs, ...generalFAQs];

    // Remove duplicates and limit to maxFAQs
    const uniqueFAQs = allFAQs.filter(
      (faq, index, self) =>
        index === self.findIndex((f) => f.question === faq.question)
    );

    return uniqueFAQs.slice(0, maxFAQs);
  };

  const derivedServiceLabel = serviceLabel
    ? serviceLabel
    : context !== "general" && servicesContent[context]
    ? `${servicesContent[context].name} services`
    : "handyman services";

  const citySentence = cityName
    ? `We support homeowners across ${cityName} with ${derivedServiceLabel}.`
    : "";

  const appendCityDetails = (answer) => {
    if (!citySentence) return answer;
    const trimmed = answer.trim();
    const hasPunctuation = /[.!?]$/.test(trimmed);
    const separator = hasPunctuation ? " " : ". ";
    return `${trimmed}${separator}${citySentence}`;
  };

  const localizeQuestion = (question) => {
    if (!cityName) return question;
    const trimmed = question.trim();
    const lower = trimmed.toLowerCase();
    if (lower.includes(cityName.toLowerCase())) {
      return trimmed;
    }
    return `${trimmed.replace(/\?$/, "")} in ${cityName}?`;
  };

  const faqs = getContextualFAQs(context).map((faq) => ({
    question: localizeQuestion(faq.question),
    answer: appendCityDetails(faq.answer),
  }));

  const displayedFAQs = faqs.slice(0, maxFAQs);

  if (displayedFAQs.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600">
              Common questions about{" "}
              {context === "general"
                ? "our services"
                : `our ${context.replace("-", " ")} services`}
            </p>
          </div>
        )}

        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-gray-500">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
