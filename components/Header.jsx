import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { orderedServiceSlugs, servicesContent } from "../data/servicesContent";
import { serviceAreas as allServiceAreas } from "../data/serviceAreas";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const [showAllMobileServices, setShowAllMobileServices] = useState(false);
  const [showAllMobileAreas, setShowAllMobileAreas] = useState(false);
  const servicesRef = useRef(null);
  const serviceAreasRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesOpen(false);
      setIsServiceAreasOpen(false);
      setShowAllMobileServices(false);
      setShowAllMobileAreas(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsServiceAreasOpen(false);
    setShowAllMobileServices(false);
  };

  const toggleServiceAreas = () => {
    setIsServiceAreasOpen(!isServiceAreasOpen);
    setIsServicesOpen(false);
    setShowAllMobileAreas(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle desktop dropdowns, not mobile menu
      if (window.innerWidth >= 768) {
        if (
          servicesRef.current &&
          !servicesRef.current.contains(event.target)
        ) {
          setIsServicesOpen(false);
        }
        if (
          serviceAreasRef.current &&
          !serviceAreasRef.current.contains(event.target)
        ) {
          setIsServiceAreasOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      setIsServiceAreasOpen(false);
      setShowAllMobileServices(false);
      setShowAllMobileAreas(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const services = orderedServiceSlugs.map((slug) => ({
    slug,
    name: servicesContent[slug]?.name || slug,
  }));

  const serviceAreas = allServiceAreas.map(({ name, slug }) => ({
    name,
    slug,
  }));

  const PRIMARY_SERVICE_COUNT = 6;
  const PRIMARY_AREA_COUNT = 8;

  const primaryServices = services.slice(0, PRIMARY_SERVICE_COUNT);
  const remainingServices = services.slice(PRIMARY_SERVICE_COUNT);

  const primaryAreas = serviceAreas.slice(0, PRIMARY_AREA_COUNT);
  const remainingAreas = serviceAreas.slice(PRIMARY_AREA_COUNT);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png"
              alt="Install It Guy Logo"
              width={72}
              height={72}
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
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50">
                  <div className="max-h-80 overflow-y-auto px-2">
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          onClick={() => {
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 border-t border-gray-100 pt-2 text-center">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View all services →
                    </Link>
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
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-lg shadow-lg border border-gray-200 py-3 z-50">
                  <div className="max-h-80 overflow-y-auto px-2">
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          className="px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          onClick={() => setIsServiceAreasOpen(false)}
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 border-t border-gray-100 pt-2 text-center">
                    <Link
                      href="/service-areas"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsServiceAreasOpen(false)}
                    >
                      View all service areas →
                    </Link>
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
          <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-6 space-y-6">
              <div className="space-y-2 text-center">
                <Link
                  href="/"
                  className="block text-lg font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/contact-us"
                  className="block text-lg font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Services Dropdown */}
              <div className="space-y-3 text-center">
                <button
                  onClick={toggleServices}
                  className="flex w-full items-center justify-center gap-2 text-lg font-semibold text-gray-900"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
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
                  <div className="space-y-2">
                    {(showAllMobileServices ? services : primaryServices).map(
                      (service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                            setShowAllMobileServices(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      )
                    )}
                    {remainingServices.length > 0 && (
                      <button
                        type="button"
                        className="w-full text-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                        onClick={() =>
                          setShowAllMobileServices(!showAllMobileServices)
                        }
                      >
                        {showAllMobileServices
                          ? "Show fewer services"
                          : `View all ${services.length} services`}
                      </button>
                    )}
                    <Link
                      href="/services"
                      className="block text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Browse full services page →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Dropdown */}
              <div className="space-y-3 text-center">
                <button
                  onClick={toggleServiceAreas}
                  className="flex w-full items-center justify-center gap-2 text-lg font-semibold text-gray-900"
                >
                  <span>Service Areas</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
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
                  <div className="space-y-2">
                    {(showAllMobileAreas ? serviceAreas : primaryAreas).map(
                      (area) => (
                        <Link
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          className="block rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServiceAreasOpen(false);
                            setShowAllMobileAreas(false);
                          }}
                        >
                          {area.name}
                        </Link>
                      )
                    )}
                    {remainingAreas.length > 0 && (
                      <button
                        type="button"
                        className="w-full text-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                        onClick={() =>
                          setShowAllMobileAreas(!showAllMobileAreas)
                        }
                      >
                        {showAllMobileAreas
                          ? "Show fewer locations"
                          : `View all ${serviceAreas.length} locations`}
                      </button>
                    )}
                    <Link
                      href="/service-areas"
                      className="block text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View coverage map →
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-3 text-center">
                <Link
                  href="/faqs"
                  className="block text-lg font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/reviews"
                  className="block text-lg font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="tel:+17041234567"
                  className="btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
