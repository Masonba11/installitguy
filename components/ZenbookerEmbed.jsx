import { useEffect, useRef } from "react";

const ZenbookerEmbed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    let widgetLoaded = false;

    const renderWidget = () => {
      if (!target) return;

      target.innerHTML = `
        <div class="zenbooker-inline-widget"
             data-appearance="inline"
             data-options='{"theme":"default"}'>
        </div>
      `;

      if (
        typeof window !== "undefined" &&
        window.ZenbookerWidget &&
        typeof window.ZenbookerWidget.render === "function"
      ) {
        const widgetDiv = target.querySelector(".zenbooker-inline-widget");
        try {
          window.ZenbookerWidget.render(widgetDiv);
        } catch (error) {
          console.error("Zenbooker render failed", error);
        }
      }
    };

    const loadWidget = () => {
      if (widgetLoaded) return;
      widgetLoaded = true;

      if (!document.querySelector('link[data-zenbooker-style="true"]')) {
        const zenCSS = document.createElement("link");
        zenCSS.rel = "stylesheet";
        zenCSS.href = "https://cdn.zenbooker.com/widget/latest/zenbooker.css";
        zenCSS.dataset.zenbookerStyle = "true";
        document.head.appendChild(zenCSS);
      }

      const existingScript = document.querySelector(
        'script[data-zenbooker-script="true"]'
      );

      if (
        typeof window !== "undefined" &&
        window.ZenbookerWidget &&
        typeof window.ZenbookerWidget.render === "function"
      ) {
        renderWidget();
        return;
      }

      if (existingScript) {
        if (existingScript.dataset.loaded === "true") {
          renderWidget();
        } else {
          existingScript.addEventListener("load", renderWidget, { once: true });
        }
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.zenbooker.com/widget/latest/zenbooker.js";
      script.async = true;
      script.dataset.zenbookerScript = "true";
      script.onload = () => {
        script.dataset.loaded = "true";
        renderWidget();
      };
      script.onerror = () => {
        widgetLoaded = false;
        target.innerHTML = `
          <div style="width:100%;height:600px;display:flex;align-items:center;justify-content:center;">
            <p style="font-size:16px;color:#b91c1c;">Unable to load scheduler. Please refresh the page.</p>
          </div>
        `;
      };

      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadWidget();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="zenbooker-container"
      ref={containerRef}
      style={{ minHeight: "600px" }}
    >
      <div
        id="zen-placeholder"
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "16px", color: "#555" }}>Loading scheduling...</p>
      </div>
    </div>
  );
};

export default ZenbookerEmbed;
