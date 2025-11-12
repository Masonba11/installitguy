import Head from "next/head";

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
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.zenbooker.com/widget/latest/zenbooker.css"
        />
        <script src="https://cdn.zenbooker.com/widget/latest/zenbooker.js" defer />
        <style>{ZENBOOKER_STYLES}</style>
      </Head>
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
