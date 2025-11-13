import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

export default function QuoteForm({
  title = "Book Your Service",
  subtitle = "Choose a time that works for you and we'll confirm right away",
  className = "",
}) {
  const sectionRef = useRef(null);
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  const ZenbookEmbed = useMemo(
    () =>
      dynamic(() => import("./ZenbookerEmbed"), {
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    if (shouldLoadWidget) return;

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let triggered = false;

    const triggerLoad = () => {
      if (triggered) return;
      triggered = true;
      setShouldLoadWidget(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerLoad();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(sectionEl);

    const events = ["pointerdown", "keydown", "scroll"]; // first interaction fallbacks
    events.forEach((event) => {
      window.addEventListener(event, triggerLoad, { once: true, passive: true });
    });

    return () => {
      observer.disconnect();
      events.forEach((event) => {
        window.removeEventListener(event, triggerLoad);
      });
    };
  }, [shouldLoadWidget]);

  useEffect(() => {
    if (!shouldLoadWidget) return;
    const cssId = "zenbooker-widget-css";
    if (document.getElementById(cssId)) return;

    const link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.href = "https://cdn.zenbooker.com/widget/latest/zenbooker.css";
    link.media = "print";
    link.onload = () => {
      link.media = "all";
    };
    document.head.appendChild(link);
  }, [shouldLoadWidget]);

  return (
    <section
      ref={sectionRef}
      id="quote-form"
      className={`py-16 bg-white ${className}`.trim()}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        {shouldLoadWidget ? (
          <>
            <Script
              id="zenbooker-script"
              src="https://cdn.zenbooker.com/widget/latest/zenbooker.js"
              strategy="lazyOnload"
              onLoad={() => setScriptReady(true)}
            />
            <ZenbookEmbed ready={scriptReady} />
          </>
        ) : (
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-10 text-slate-500 shadow-sm">
            <div className="flex h-[650px] flex-col items-center justify-center space-y-4 text-center">
              <span className="inline-flex h-10 w-10 animate-spin items-center justify-center rounded-full border-2 border-slate-300 border-t-primary-500" />
              <p className="text-lg font-medium">Booking calendar loads once you reach this section.</p>
              <p className="text-sm text-slate-400">
                Scroll a little further or tap anywhere to load the scheduler.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
