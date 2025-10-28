import { useState } from "react";
import { useRouter } from "next/router";
import { WEB3FORMS_CONFIG } from "../config/web3forms";

export default function QuoteForm({
  title = "Get Your Free Quote",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours",
  className = "",
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceArea: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to both Web3Forms accounts
      const submissions = await Promise.allSettled([
        // Submit to Mason's account
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_CONFIG.mason.accessKey,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            serviceArea: formData.serviceArea,
            service: formData.service,
            message: formData.message,
            to: WEB3FORMS_CONFIG.mason.email,
            subject: WEB3FORMS_CONFIG.subjects.quote,
            from_name: formData.name,
            reply_to: formData.email,
            ip_address: true,
            form_name: "Quote Request",
            website: "Install It Guy",
          }),
        }),
        // Submit to Scott's account
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_CONFIG.scott.accessKey,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            serviceArea: formData.serviceArea,
            service: formData.service,
            message: formData.message,
            to: WEB3FORMS_CONFIG.scott.email,
            subject: WEB3FORMS_CONFIG.subjects.quote,
            from_name: formData.name,
            reply_to: formData.email,
            ip_address: true,
            form_name: "Quote Request",
            website: "Install It Guy",
          }),
        }),
      ]);

      // Check if at least one submission succeeded
      const successfulSubmissions = submissions.filter(result => result.status === 'fulfilled' && result.value.ok);
      
      if (successfulSubmissions.length > 0) {
        // Redirect to thank you page for lead tracking
        router.push("/thank-you");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still redirect to thank you page even if submission fails
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className={`py-16 bg-white ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="(704) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceArea"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Area *
                </label>
                <select
                  id="serviceArea"
                  name="serviceArea"
                  required
                  value={formData.serviceArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select your area</option>
                  <option value="Charlotte, NC">Charlotte, NC</option>
                  <option value="Concord, NC">Concord, NC</option>
                  <option value="Rock Hill, SC">Rock Hill, SC</option>
                  <option value="Gastonia, NC">Gastonia, NC</option>
                  <option value="Hickory, NC">Hickory, NC</option>
                  <option value="Shelby, NC">Shelby, NC</option>
                  <option value="Lincolnton, NC">Lincolnton, NC</option>
                  <option value="Gaffney, SC">Gaffney, SC</option>
                  <option value="Kings Mountain, NC">Kings Mountain, NC</option>
                  <option value="Forest City, NC">Forest City, NC</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="tv-mounting">TV Mounting</option>
                  <option value="ceiling-fan-installation">
                    Ceiling Fan Installation
                  </option>
                  <option value="lighting-installation">
                    Lighting Installation
                  </option>
                  <option value="garage-door-opener-installation">
                    Garage Door Opener Installation
                  </option>
                  <option value="ring-doorbell-installation">
                    Ring Doorbell Installation
                  </option>
                  <option value="faucet-toilet-installation">
                    Faucet & Toilet Installation
                  </option>
                  <option value="appliance-installation">
                    Appliance Installation
                  </option>
                  <option value="blinds-installation">
                    Blinds Installation
                  </option>
                  <option value="mirror-towel-bar-installation">
                    Mirror & Towel Bar Installation
                  </option>
                  <option value="door-installation">Door Installation</option>
                  <option value="deck-fence-repair">Deck & Fence Repair</option>
                  <option value="water-leak-repair">Water Leak Repair</option>
                  <option value="garbage-disposal-installation">
                    Garbage Disposal Installation
                  </option>
                  <option value="shelving-installation">
                    Shelving Installation
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Get Free Quote"
                )}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We'll contact you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
