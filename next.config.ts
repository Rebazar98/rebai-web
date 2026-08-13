import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is for the self-hosted Docker/VPS build; Vercel has its own
  // output handling and this setting breaks public/ asset serving there.
  output: process.env.VERCEL ? undefined : "standalone",
  poweredByHeader: false,
  async redirects() {
    // Servicios eliminados en el rebrand a Trazev (2026-08-13): siguen indexados en
    // Google desde antes, así que redirigen (301) al listado general en vez de dar 404,
    // para no perder el valor SEO que ya tuvieran esas URLs.
    return [
      { source: "/servicios/agentes-ia", destination: "/servicios", permanent: true },
      { source: "/servicios/cumplimiento", destination: "/servicios", permanent: true },
      { source: "/servicios/subvenciones", destination: "/servicios", permanent: true },
    ];
  },
};

export default nextConfig;
