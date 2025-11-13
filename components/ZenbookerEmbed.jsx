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

const ZenbookerEmbed = ({ ready = false }) => {
  useEffect(() => {
    if (!ready) return;

    const attemptRender = () => {
      if (typeof window === "undefined") return false;
      if (!window.ZenbookerWidget) return false;

      const widgetDiv = document.querySelector(".zenbooker-inline-widget");
      if (!widgetDiv || widgetDiv.dataset.zenbookerRendered === "true") {
        return !!widgetDiv;
      }

      try {
        window.ZenbookerWidget.render(widgetDiv);
        widgetDiv.dataset.zenbookerRendered = "true";
        return true;
      } catch (error) {
        console.error("Zenbooker render failed", error);
        return false;
      }
    };

    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
      attempts += 1;
      if (attemptRender() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [ready]);

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
