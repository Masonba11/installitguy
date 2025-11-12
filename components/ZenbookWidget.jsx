import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";
import ZenbookerEmbed from "./ZenbookerEmbed";

const ZENBOOK_STYLESHEET_ID = "zenbooker-widget-css";

const ensureStylesheet = () => {
  if (typeof document === "undefined") return;
  if (document.getElementById(ZENBOOK_STYLESHEET_ID)) return;

  const link = document.createElement("link");
  link.id = ZENBOOK_STYLESHEET_ID;
  link.rel = "stylesheet";
  link.href = "https://cdn.zenbooker.com/widget/latest/zenbooker.css";
  link.media = "print";
  link.onload = () => {
    link.media = "all";
  };
  document.head.appendChild(link);
};

export default function ZenbookWidget({
  loadStrategy = "lazy",
  observerMargin = "200px 0px",
  placeholder = null,
  wrapperClassName = "",
  onWidgetReady,
}) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(loadStrategy === "immediate");
  const [scriptReady, setScriptReady] = useState(false);

  const loadScript = useMemo(
    () =>
      () => {
        ensureStylesheet();
        setShouldLoad(true);
      },
    []
  );

  useEffect(() => {
    if (loadStrategy !== "lazy" || shouldLoad) return;

    const element = containerRef.current;
    if (!element) return;

    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      loadScript();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) trigger();
        });
      },
      { rootMargin: observerMargin }
    );

    observer.observe(element);

    const events = ["pointerdown", "keydown", "scroll", "mousemove"]; // early interaction fallbacks
    events.forEach((event) => {
      window.addEventListener(event, trigger, {
        once: true,
        passive: true,
      });
    });

    return () => {
      observer.disconnect();
      events.forEach((event) => {
        window.removeEventListener(event, trigger);
      });
    };
  }, [loadStrategy, shouldLoad, observerMargin, loadScript]);

  useEffect(() => {
    if (!shouldLoad) return;
    ensureStylesheet();
  }, [shouldLoad]);

  useEffect(() => {
    if (!scriptReady || !onWidgetReady) return;
    onWidgetReady();
  }, [scriptReady, onWidgetReady]);

  return (
    <div ref={containerRef} className={wrapperClassName}>
      {shouldLoad ? (
        <>
          <Script
            id="zenbooker-script"
            src="https://cdn.zenbooker.com/widget/latest/zenbooker.js"
            strategy="lazyOnload"
            onLoad={() => setScriptReady(true)}
          />
          <ZenbookerEmbed ready={scriptReady} />
        </>
      ) : (
        placeholder
      )}
    </div>
  );
}
