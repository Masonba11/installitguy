import NextError from "next/error";

function ErrorPage({ statusCode }) {
  return <NextError statusCode={statusCode} />;
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;
