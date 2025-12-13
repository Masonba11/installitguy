import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

function ErrorPage({ statusCode }) {
  const title =
    statusCode === 404
      ? "Page Not Found"
      : statusCode === 500
      ? "Server Error"
      : "An Error Occurred";

  const message =
    statusCode === 404
      ? "The page you're looking for doesn't exist."
      : statusCode === 500
      ? "Something went wrong on our end. Please try again later."
      : "An unexpected error occurred.";

  return (
    <>
      <NextSeo
        title={`${title} | Install It Guy`}
        noindex={true}
        nofollow={true}
      />
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <div className="text-6xl font-bold text-primary-600 mb-4">
              {statusCode || "Error"}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{message}</p>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;
