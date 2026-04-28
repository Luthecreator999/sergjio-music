import type { NextConfig } from "next";

const isGhPages = process.env.GH_PAGES === "true";
// Set to "/REPO_NAME" when deploying to https://USER.github.io/REPO_NAME
// Set to "" when deploying to a root domain or USER.github.io
const basePath = process.env.BASE_PATH ?? (isGhPages ? "/sergjio-music" : "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
