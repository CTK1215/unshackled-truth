import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the private eBook PDF is bundled with the download API route when
  // deployed (so the serverless function can read and stream it).
  outputFileTracingIncludes: {
    "/api/download": ["./private/**/*"],
  },
};

export default nextConfig;
