import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; the optimizer negotiates per request.
    formats: ["image/avif", "image/webp"],
    // Allow optimizing the YouTube thumbnail posters used in the embed facades.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  // Static security headers (safe subset). A full CSP is intentionally deferred:
  // it needs 'unsafe-inline' for JSON-LD + Tailwind and the youtube/soundcloud
  // frame origins, and must be validated against a live deploy.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
