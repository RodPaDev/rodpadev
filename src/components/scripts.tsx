"use client";

import { GA_TRACKING_ID } from "./analytics";

export default function Scripts() {
  const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
  if (!cloudflareAnalyticsToken && process.env.NODE_ENV !== "development") {
    throw new Error("CLOUDFLARE_ANALYTICS_TOKEN is not defined");
  }
  return (
    <>
      <script async src={`https://ping.hashnode.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script async src={`https://static.cloudflareinsights.com/beacon.min.js`} data-cf-beacon={`{"token": "${cloudflareAnalyticsToken}"}`} />
    </>
  );
}
