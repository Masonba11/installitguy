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
                      <Link
                        href="/services/additional-services"
                        className="px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-primary-50 hover:text-primary-600 transition-colors font-semibold"
                        onClick={() => {
                          setIsServicesOpen(false);
                        }}
                      >
                        Additional Services
                      </Link>
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
              href="/gallery"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Gallery
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
            <Link
              href="/investors"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Investors
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="tel:+17044199799" className="btn-primary">
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
          <div
            className="md:hidden fixed inset-0 z-50 bg-white/97 backdrop-blur animate-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
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

            <nav className="flex h-[calc(100%-56px)] flex-col overflow-y-auto px-5 py-6 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100">
                {[
                  { label: "Home", href: "/" },
                  { label: "Contact", href: "/contact-us" },
                  { label: "Gallery", href: "/gallery" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-5 py-4 text-lg font-semibold text-gray-900 hover:bg-primary-50 hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <button
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-panel"
                  className="flex w-full items-center justify-between px-5 py-4 text-lg font-semibold text-gray-900"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
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
                <div
                  id="mobile-services-panel"
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isServicesOpen ? "max-h-[420px]" : "max-h-0"
                  }`}
                >
                  <div className="space-y-2 bg-slate-50 px-5 py-4 border-t border-gray-200 overflow-y-auto max-h-[360px] pr-1">
                    {(showAllMobileServices ? services : primaryServices).map(
                      (service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 shadow-sm"
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
                        className="w-full rounded-lg border border-primary-100 bg-white py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50"
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
                      href="/services/additional-services"
                      className="block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 shadow-sm border-2 border-primary-200"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                        setShowAllMobileServices(false);
                      }}
                    >
                      Additional Services
                    </Link>
                    <Link
                      href="/services"
                      className="block text-sm font-semibold text-primary-600 hover:text-primary-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Browse full services page →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <button
                  onClick={toggleServiceAreas}
                  aria-expanded={isServiceAreasOpen}
                  aria-controls="mobile-areas-panel"
                  className="flex w-full items-center justify-between px-5 py-4 text-lg font-semibold text-gray-900"
                >
                  <span>Service Areas</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
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
                <div
                  id="mobile-areas-panel"
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isServiceAreasOpen ? "max-h-[420px]" : "max-h-0"
                  }`}
                >
                  <div className="space-y-2 bg-slate-50 px-5 py-4 border-t border-gray-200 overflow-y-auto max-h-[360px] pr-1">
                    {(showAllMobileAreas ? serviceAreas : primaryAreas).map(
                      (area) => (
                        <Link
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          className="block rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 shadow-sm"
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
                        className="w-full rounded-lg border border-primary-100 bg-white py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50"
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
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100">
                {[
                  { label: "FAQs", href: "/faqs" },
                  { label: "Reviews", href: "/reviews" },
                  { label: "Investors", href: "/investors" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-5 py-4 text-lg font-semibold text-gray-900 hover:bg-primary-50 hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pb-4">
                <Link
                  href="tel:+17044199799"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-accent w-full text-center text-lg font-bold"
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
