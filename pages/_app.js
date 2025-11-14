import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Track page views on route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "G-T6M0TF24N3", {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-T6M0TF24N3"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T6M0TF24N3', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
