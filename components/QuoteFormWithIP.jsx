export default function QuoteFormWithIP({
  title = "Get Your Free Quote",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours",
  className = "",
}) {
  return (
    <section id="quote-form" className={`py-16 bg-white ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-gray-50 rounded-2xl p-8"
          >
            {/* Web3Forms Hidden Fields */}
            <input
              type="hidden"
              name="access_key"
              value="2adab4f6-9c48-42ed-bbbf-760b33772834"
            />
            <input type="hidden" name="from_name" value="Install It Guy" />
            <input type="hidden" name="subject" value="New Lead Submission" />
            <input
              type="hidden"
              name="redirect"
              value="https://www.installitguy.com/thank-you"
            />

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="(704) 419-9799"
                />
              </div>

              <div>
                <label
                  htmlFor="service_area"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Area *
                </label>
                <input
                  type="text"
                  id="service_area"
                  name="service_area"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Enter your city and state (e.g., Charlotte, NC)"
                />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary">
                Get Free Quote
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
