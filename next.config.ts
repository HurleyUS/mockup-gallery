/**
 * Next.config public module surface.
 */
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT || "mockup-gallery",
  silent: true,
});
// Force Vercel rebuild Sat Mar 28 09:38:32 PM EDT 2026
