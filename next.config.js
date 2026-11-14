/**
 * GITHUB_PAGES=true builds a static export served from /casestudy/ on GitHub Pages.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/casestudy" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isGithubPages && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

module.exports = nextConfig;
