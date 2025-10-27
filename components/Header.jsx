import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const servicesRef = useRef(null);
  const serviceAreasRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsServiceAreasOpen(false);
  };

  const toggleServiceAreas = () => {
    setIsServiceAreasOpen(!isServiceAreasOpen);
    setIsServicesOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (
        serviceAreasRef.current &&
        !serviceAreasRef.current.contains(event.target)
      ) {
        setIsServiceAreasOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const services = [
    { name: "TV Mounting", slug: "tv-mounting" },
    { name: "Ceiling Fan Installation", slug: "ceiling-fan-installation" },
    { name: "Lighting Installation", slug: "lighting-installation" },
    {
      name: "Garage Door Opener Installation",
      slug: "garage-door-opener-installation",
    },
    { name: "Ring Doorbell Installation", slug: "ring-doorbell-installation" },
    {
      name: "Faucet & Toilet Installation",
      slug: "faucet-toilet-installation",
    },
    { name: "Appliance Installation", slug: "appliance-installation" },
    { name: "Blinds Installation", slug: "blinds-installation" },
    {
      name: "Mirror & Towel Bar Installation",
      slug: "mirror-towel-bar-installation",
    },
    { name: "Door Installation", slug: "door-installation" },
    { name: "Deck & Fence Repair", slug: "deck-fence-repair" },
    { name: "Water Leak Repair", slug: "water-leak-repair" },
    {
      name: "Garbage Disposal Installation",
      slug: "garbage-disposal-installation",
    },
    { name: "Shelving Installation", slug: "shelving-installation" },
    { name: "Painting Services", slug: "painting-services" },
    { name: "Flooring Installation", slug: "flooring-installation" },
    { name: "Furniture Assembly", slug: "furniture-assembly" },
    { name: "Fence Installation", slug: "fence-installation" },
    { name: "Gutter Cleaning", slug: "gutter-cleaning" },
  ];

  const serviceAreas = [
    { name: "Charlotte, NC", slug: "charlotte-nc" },
    { name: "Concord, NC", slug: "concord-nc" },
    { name: "Rock Hill, SC", slug: "rock-hill-sc" },
    { name: "Gastonia, NC", slug: "gastonia-nc" },
    { name: "Hickory, NC", slug: "hickory-nc" },
    { name: "Shelby, NC", slug: "shelby-nc" },
    { name: "Lincolnton, NC", slug: "lincolnton-nc" },
    { name: "Gaffney, SC", slug: "gaffney-sc" },
    { name: "Kings Mountain, NC", slug: "kings-mountain-nc" },
    { name: "Forest City, NC", slug: "forest-city-nc" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/installit-guy/installitguylogo2.png"
              alt="Install It Guy Co Logo"
              width={64}
              height={64}
              priority
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center space-x-1"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
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
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="max-h-80 overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        onClick={() => {
                          console.log(
                            "Service clicked:",
                            service.slug,
                            "URL:",
                            `/services/${service.slug}`
                          );
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative" ref={serviceAreasRef}>
              <button
                onClick={toggleServiceAreas}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center space-x-1"
              >
                <span>Service Areas</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServiceAreasOpen ? "rotate-180" : ""
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
              {isServiceAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="max-h-80 overflow-y-auto">
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        onClick={() => setIsServiceAreasOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/faqs"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/reviews"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Reviews
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="tel:+17041234567" className="btn-primary">
              Call Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white relative z-50">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center justify-between w-full"
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
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
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-2 px-2 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("Navigating to:", `/services/${service.slug}`);
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                          router.push(`/services/${service.slug}`);
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Dropdown */}
              <div>
                <button
                  onClick={toggleServiceAreas}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center justify-between w-full"
                >
                  <span>Service Areas</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isServiceAreasOpen ? "rotate-180" : ""
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
                {isServiceAreasOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceAreas.map((area) => (
                      <a
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-2 px-2 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("Navigating to:", `/service-areas/${area.slug}`);
                          setIsServiceAreasOpen(false);
                          setIsMenuOpen(false);
                          router.push(`/service-areas/${area.slug}`);
                        }}
                      >
                        {area.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact-us"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Reviews
              </Link>
              <Link href="tel:+17041234567" className="btn-primary text-center">
                Call Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
