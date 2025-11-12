import { useEffect } from "react";

const ZENBOOKER_STYLES = `
.zen-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border: 1px solid #e2e2e2;
  overflow: hidden;
}
@media (max-width: 768px) {
  .zen-wrapper {
    max-width: 100%;
    border: none;
    box-shadow: none;
  }
}
`;

const ZenbookerEmbed = () => {
  useEffect(() => {
    const cssId = "zenbooker-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://cdn.zenbooker.com/widget/latest/zenbooker.css";
      document.head.appendChild(link);
    }

    const loadZenbookerScript = () => {
      if (typeof window === "undefined") return Promise.resolve();

      if (window.__zenbookerReady) {
        return Promise.resolve();
      }

      if (!window.__zenbookerScriptPromise) {
        window.__zenbookerScriptPromise = new Promise((resolve, reject) => {
          const existing = document.getElementById("zenbooker-script");

          const handleReady = () => {
            window.__zenbookerReady = true;
            resolve();
          };

          if (existing) {
            if (existing.getAttribute("data-loaded") === "true") {
              handleReady();
            } else {
              existing.addEventListener("load", handleReady, { once: true });
              existing.addEventListener("error", reject, { once: true });
            }
          } else {
            const script = document.createElement("script");
            script.id = "zenbooker-script";
            script.src = "https://cdn.zenbooker.com/widget/latest/zenbooker.js";
            script.async = true;
            script.onload = () => {
              script.setAttribute("data-loaded", "true");
              handleReady();
            };
            script.onerror = reject;
            document.body.appendChild(script);
          }
        });
      }

      return window.__zenbookerScriptPromise;
    };

    let isCancelled = false;

    const initializeWidget = () => {
      if (isCancelled || !window.Zenbooker) return;
      const api = window.Zenbooker;
      if (typeof api.load === "function") {
        api.load();
      } else if (typeof api.init === "function") {
        api.init();
      } else if (typeof api.render === "function") {
        api.render();
      }
    };

    loadZenbookerScript()
      .then(() => {
        if (isCancelled) return;
        // Give the script a tick to attach helpers
        setTimeout(initializeWidget, 0);
      })
      .catch((error) => {
        console.error("Zenbooker script failed to load", error);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <style jsx global>
        {ZENBOOKER_STYLES}
      </style>
      <div className="zen-wrapper">
        <div
          className="zenbooker-inline-widget"
          data-url="https://widget.zenbooker.com/book/1762828052989x774414621567917300?embed=true"
          style={{
            minWidth: "320px",
            height: "650px",
            border: 0,
            verticalAlign: "bottom",
            borderRadius: "8px",
          }}
        />
      </div>
    </>
  );
};

export default ZenbookerEmbed;
