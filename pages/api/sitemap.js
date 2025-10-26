import { getServerSideProps as getSitemapServerSideProps } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  return await getSitemapServerSideProps(ctx, {
    siteUrl: "https://installitguy.com",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/api/*"],
  });
};

export default function Sitemap() {
  return null;
}
