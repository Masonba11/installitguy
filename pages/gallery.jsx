import fs from "fs";
import path from "path";
import { useEffect, useRef, useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import { truncateMetaDescription } from "../utils/metaHelpers";

export default function Gallery({ images }) {
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      setCanScroll(track.scrollWidth > track.clientWidth + 8);
    };

    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [images.length]);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.clientWidth * 0.8;
    track.scrollBy({ left: direction * cardWidth, block: "start" });
  };

  return (
    <>
      <NextSeo
        title="Project Gallery | Install It Guy"
        description={truncateMetaDescription(
          "Browse real Install It Guy projects across the Charlotte region. View completed installs, repairs, and upgrades captured on site."
        )}
        canonical="https://installitguy.com/gallery"
        openGraph={{
          url: "https://installitguy.com/gallery",
          title: "Project Gallery | Install It Guy",
          description: truncateMetaDescription(
            "Browse real Install It Guy projects across the Charlotte region. View completed installs, repairs, and upgrades captured on site."
          ),
          siteName: "Install It Guy",
          images: [
            {
              url: "https://installitguy.com/images/installit-guy/Screenshot%202025-11-12%20at%2012.46.13%E2%80%AFAM.png",
              width: 1200,
              height: 630,
              alt: "Install It Guy Project Gallery",
            },
          ],
        }}
      />

      <Header />

      <HeroSection
        className="py-24"
        imageSrc="/images/installit-guy/herohandyman.png"
        imageAlt="Install It Guy project collage"
        objectPosition="50% 42%"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8BCB6B]">
            Project gallery
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Real Install It Guy projects across the Carolinas
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Swipe through accent walls, installs, repairs, and maintenance
            finished by our crew. Every photo is from a real home we've helped.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("quote-form")
                  ?.scrollIntoView({ block: "start" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#8BCB6B] px-6 py-3 text-sm font-semibold text-[#0f2135] shadow hover:bg-[#7bb65f] transition"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+17044199799"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Call (704) 419-9799
            </a>
          </div>
        </div>
      </HeroSection>

      <main className="bg-gray-50">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div
                ref={trackRef}
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none" }}
              >
                {images.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative flex-shrink-0 w-[min(85vw,420px)] h-64 snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                    style={{ WebkitOverflowScrolling: "touch" }}
                  >
                    <Image
                      src={src}
                      alt="Install It Guy project photo"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 85vw"
                      priority={index < 4}
                    />
                  </div>
                ))}
              </div>

              {canScroll && (
                <>
                  <button
                    type="button"
                    onClick={() => scrollTrack(-1)}
                    aria-label="Scroll gallery left"
                    className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 w-11 h-11 text-gray-700 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 0 1 0 1.06L8.56 10l4.23 3.71a.75.75 0 1 1-1 1.12l-4.75-4.16a.75.75 0 0 1 0-1.12l4.75-4.16a.75.75 0 0 1 1-.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollTrack(1)}
                    aria-label="Scroll gallery right"
                    className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 w-11 h-11 text-gray-700 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 0 1 0-1.06L11.44 10 7.2 6.29a.75.75 0 0 1 1-1.12l4.75 4.16c.34.3.34.82 0 1.12l-4.75 4.16a.75.75 0 0 1-1-.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </>
              )}

              <p className="mt-6 text-sm text-gray-500 md:hidden">
                <span className="font-semibold text-[#8BCB6B]">Tip:</span> Swipe
                left or right to flip through projects.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm
          title="Ready to start your project?"
          subtitle="Fill out the form below and we'll contact you within minutes"
        />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "images",
    "installit-guy"
  );
  const allowedExtensions = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".svg",
    ".gif",
    ".bmp",
    ".heic",
  ]);

  const files = fs
    .readdirSync(imagesDir)
    .filter((file) => allowedExtensions.has(path.extname(file).toLowerCase()))
    .filter((file) => {
      const lower = file.toLowerCase();
      return (
        !lower.includes("logo") &&
        !lower.includes("familypicture") &&
        !lower.includes("family")
      );
    })
    .map((filename) => {
      const normalizedBase = filename
        .toLowerCase()
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-z0-9]+/g, "");

      return {
        filename,
        src: `/images/installit-guy/${encodeURIComponent(filename).replace(
          /%20/g,
          "%20"
        )}`,
        base: normalizedBase,
      };
    })
    .reduce(
      (acc, file) => {
        if (!acc.bases.has(file.base)) {
          acc.bases.add(file.base);
          acc.list.push(file.src);
        }
        return acc;
      },
      { bases: new Set(), list: [] }
    )
    .list.sort((a, b) => a.localeCompare(b));

  return {
    props: {
      images: files,
    },
  };
}
