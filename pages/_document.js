import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const logoUrl =
    "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png";

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1c2d3f" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Install It Guy",
              url: "https://installitguy.com",
              logo: logoUrl,
              image: logoUrl,
              sameAs: [
                "https://www.facebook.com/installitguy",
                "https://www.instagram.com/installitguy",
                "https://www.yelp.com/biz/install-it-guy-shelby",
              ],
            }),
          }}
        />

        {/* OpenGraph Logo Meta Tags */}
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
