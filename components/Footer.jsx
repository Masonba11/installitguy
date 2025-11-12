import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary-600 text-white p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold">Install It Guy</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Shelby's trusted handyman team. Quality installs, fast repairs,
                fair prices. Serving Cabarrus, Cleveland, Mecklenburg, and Union counties in North Carolina plus Lancaster, Richland, and York counties in South Carolina.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+17044199799"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (704) 419-9799
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-400 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-gray-300">
                    <div>210 Joseph Ct</div>
                    <div>Shelby, NC 28152</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@installitguy.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@installitguy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/service-areas/charlotte-nc"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Charlotte, NC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/concord-nc"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Concord, NC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/rock-hill-sc"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Rock Hill, SC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/gastonia-nc"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Gastonia, NC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/shelby-nc"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Shelby, NC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    View All Areas →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Install It Guy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
