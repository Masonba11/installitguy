import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not Found | Install It Guy"
        description="The page you're looking for doesn't exist. Find the handyman services you need with Install It Guy."
        noindex={true}
        nofollow={true}
      />

      <Header />

      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <div className="text-6xl font-bold text-primary-600 mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/" className="btn-primary block w-full text-center">
              Go Back Home
            </Link>

            <Link
              href="/services"
              className="btn-secondary block w-full text-center"
            >
              Browse Our Services
            </Link>

            <Link
              href="/contact-us"
              className="btn-secondary block w-full text-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Popular Services
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link
                href="/services/tv-mounting"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                TV Mounting
              </Link>
              <Link
                href="/services/ceiling-fan-installation"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Ceiling Fan Installation
              </Link>
              <Link
                href="/services/appliance-installation"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Appliance Installation
              </Link>
              <Link
                href="/services/painting-services"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Painting Services
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? Call us at{" "}
              <a
                href="tel:+17044199799"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                (704) 419-9799
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
