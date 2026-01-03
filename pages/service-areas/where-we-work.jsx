import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";

export default function WhereWeWork() {
  return (
    <>
      <NextSeo
        title="Where We Work | Service Areas | Install It Guy"
        description="Install It Guy serves homeowners throughout the Charlotte metro area and surrounding communities in North and South Carolina. See all the cities and towns we cover."
        canonical="https://installitguy.com/service-areas/where-we-work"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where we work
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              Proudly serving the Charlotte metro and neighboring communities
            </p>
            <p className="text-gray-600">
              Homeowners call us for projects in both North and South Carolina.
              Whether you're updating a condo in Uptown Charlotte or refreshing a
              lake house in Tega Cay, we're nearby.
            </p>
          </div>
        </section>

        {/* Locations List */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  North Carolina
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Charlotte</li>
                  <li>• Shelby</li>
                  <li>• Kings Mountain</li>
                  <li>• Waxhaw</li>
                  <li>• Monroe</li>
                  <li>• Indian Trail</li>
                  <li>• Concord</li>
                  <li>• Harrisburg</li>
                  <li>• Kannapolis</li>
                  <li>• Gastonia</li>
                  <li>• Matthews</li>
                  <li>• Huntersville</li>
                  <li>• Pineville</li>
                  <li>• Belmont</li>
                  <li>• Mt Holly</li>
                  <li>• Mint Hill</li>
                  <li>• Boiling Springs</li>
                  <li>• Troutman</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  South Carolina
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rock Hill</li>
                  <li>• Fort Mill</li>
                  <li>• York</li>
                  <li>• Clover</li>
                  <li>• Lake Wylie</li>
                  <li>• Gaffney</li>
                  <li>• Tega Cay</li>
                  <li>• Indian Land</li>
                  <li>• Lancaster</li>
                  <li>• Blythewood</li>
                  <li>• Winnsboro</li>
                  <li>• Ridgeway</li>
                  <li>• Camden</li>
                  <li>• Columbia</li>
                  <li>• Blacksburg</li>
                  <li>• Richburg</li>
                  <li>• Great Falls</li>
                  <li>• McConnells</li>
                  <li>• Hickory Grove</li>
                  <li>• Sharon</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need a different town?
              </h3>
              <p className="text-gray-700">
                We routinely travel for repeat clients and referrals. Share your
                address and we'll confirm availability right away.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Primary Service Areas
            </h2>
            <p className="text-gray-600 mb-6">
              We have dedicated pages for our primary service areas with detailed
              information about our services in each location.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/service-areas/charlotte-nc"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">Charlotte, NC</h3>
                <p className="text-sm text-gray-600 mt-1">View services →</p>
              </Link>
              <Link
                href="/service-areas/shelby-nc"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">Shelby, NC</h3>
                <p className="text-sm text-gray-600 mt-1">View services →</p>
              </Link>
              <Link
                href="/service-areas/gastonia-nc"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">Gastonia, NC</h3>
                <p className="text-sm text-gray-600 mt-1">View services →</p>
              </Link>
              <Link
                href="/service-areas/concord-nc"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">Concord, NC</h3>
                <p className="text-sm text-gray-600 mt-1">View services →</p>
              </Link>
              <Link
                href="/service-areas/rock-hill-sc"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">Rock Hill, SC</h3>
                <p className="text-sm text-gray-600 mt-1">View services →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-white" id="quote-form">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm
              title="Ready to Get Started?"
              subtitle="Tell us what you need and we'll share pricing and availability within minutes."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

