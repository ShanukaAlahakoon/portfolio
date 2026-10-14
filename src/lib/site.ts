// Public URL of the deployed site. Used for canonical links, the sitemap,
// Open Graph tags and structured data.
//
// When you buy a custom domain, either change the fallback below or set
// NEXT_PUBLIC_SITE_URL in the Vercel project settings.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://shanukaalahakoon-portfolio.vercel.app"
).replace(/\/$/, "");
