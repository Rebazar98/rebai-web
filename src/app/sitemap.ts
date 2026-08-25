import { MetadataRoute } from "next";

import { SERVICES, SITE } from "@/lib/constants";

const BASE_URL = SITE.url;

// Fechas de última modificación real de contenido (no la fecha de build).
// Actualizar la fecha correspondiente cuando se edite el contenido de esa página.
const LAST_MODIFIED = {
  home: new Date("2026-08-24"),
  servicios: new Date("2026-08-24"),
  // Contenido de todos los servicios vive en src/lib/constants.ts
  servicio: new Date("2026-08-24"),
  casosDeUso: new Date("2026-08-24"),
  alfabetizacionIa: new Date("2026-08-14"),
  sobreNosotros: new Date("2026-08-24"),
  contacto: new Date("2026-08-25"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES.map((service) => ({
    url: `${BASE_URL}/servicios/${service.slug}`,
    lastModified: LAST_MODIFIED.servicio,
    changeFrequency: "monthly" as const,
    priority: service.category === "principal" ? 0.8 : 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: LAST_MODIFIED.servicios,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: `${BASE_URL}/casos-de-uso`,
      lastModified: LAST_MODIFIED.casosDeUso,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/alfabetizacion-ia`,
      lastModified: LAST_MODIFIED.alfabetizacionIa,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/sobre-nosotros`,
      lastModified: LAST_MODIFIED.sobreNosotros,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: LAST_MODIFIED.contacto,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
