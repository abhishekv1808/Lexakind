import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Baseline security headers (HSTS is set by Vercel).
        // CSP is intentionally omitted — Next.js inline/RSC scripts need a
        // nonce-based policy, which deserves its own implementation pass.
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Justice scroll frames never change — cache them hard.
        source: '/frames/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /index serves a byte-identical copy of / by default — collapse it.
      { source: '/index', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
