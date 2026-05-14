/**
 * App Layout public module surface.
 */
import type { Metadata } from "next";
import { PostHogProvider } from "@/providers/posthog-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Design Portfolio - HurleyUS",
  description:
    "10 industry-specific web design mockups. Modern, conversion-focused designs for real estate, automotive, SaaS, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
