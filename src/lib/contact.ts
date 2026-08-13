import { SERVICES, type Service } from "@/lib/constants";

export const GENERAL_SERVICE_SLUG = "general" as const;

export type ContactServiceSlug = Service["slug"] | typeof GENERAL_SERVICE_SLUG;
export type ContactPageType = "demo" | "contacto";
export type LeadType = "demo" | "contacto" | "pricing" | "interest";
export type PricingTier = "basico" | "profesional" | "empresa";

const SERVICE_MAP = new Map(SERVICES.map((service) => [service.slug, service]));
const PRICING_TIER_LABELS: Record<PricingTier, string> = {
  basico: "Pro",
  profesional: "Equipo",
  empresa: "Empresa",
};

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function normalizeServiceSlug(
  value: string | string[] | undefined,
  fallback: ContactServiceSlug = GENERAL_SERVICE_SLUG
): ContactServiceSlug {
  const candidate = firstValue(value)?.trim();

  if (candidate === GENERAL_SERVICE_SLUG) {
    return GENERAL_SERVICE_SLUG;
  }

  if (candidate && SERVICE_MAP.has(candidate)) {
    return candidate as Service["slug"];
  }

  return fallback;
}

export function normalizeContactPageType(
  value: string | string[] | undefined
): ContactPageType {
  return firstValue(value) === "demo" ? "demo" : "contacto";
}

export function normalizeLeadType(
  value: string | string[] | undefined,
  fallback: LeadType = "contacto"
): LeadType {
  const candidate = firstValue(value);
  if (
    candidate === "demo" ||
    candidate === "contacto" ||
    candidate === "pricing" ||
    candidate === "interest"
  ) {
    return candidate;
  }
  return fallback;
}

export function normalizePricingTier(
  value: string | string[] | undefined
): PricingTier | undefined {
  const candidate = firstValue(value);
  if (
    candidate === "basico" ||
    candidate === "profesional" ||
    candidate === "empresa"
  ) {
    return candidate;
  }
  return undefined;
}

export function getServiceBySlug(slug: ContactServiceSlug): Service | undefined {
  if (slug === GENERAL_SERVICE_SLUG) {
    return undefined;
  }

  return SERVICE_MAP.get(slug);
}

export function getServiceLabel(slug: ContactServiceSlug): string {
  return getServiceBySlug(slug)?.name ?? "Consulta general";
}

export function getPricingTierLabel(tier?: PricingTier): string | undefined {
  return tier ? PRICING_TIER_LABELS[tier] : undefined;
}

export function buildContactHref({
  servicio,
  tipo,
  tier,
}: {
  servicio?: ContactServiceSlug;
  tipo?: ContactPageType;
  tier?: PricingTier;
} = {}): string {
  const params = new URLSearchParams();

  if (servicio && servicio !== GENERAL_SERVICE_SLUG) {
    params.set("servicio", servicio);
  }

  if (tipo === "demo") {
    params.set("tipo", "demo");
  } else if (tipo === "contacto" && tier) {
    params.set("tipo", "contacto");
  }

  if (tier) {
    params.set("tier", tier);
  }

  const query = params.toString();
  return query ? `/contacto?${query}` : "/contacto";
}

export function buildServiceContactHref(service: Service): string {
  return buildContactHref({
    servicio: service.slug,
    tipo: service.defaultLeadType === "demo" ? "demo" : undefined,
  });
}

export function getContactLeadType({
  tipo,
  tier,
}: {
  tipo?: ContactPageType;
  tier?: PricingTier;
}): LeadType {
  if (tier) {
    return "pricing";
  }

  if (tipo === "demo") {
    return "demo";
  }

  return "contacto";
}

export function getContactDefaultService({
  tipo,
  tier,
}: {
  tipo?: ContactPageType;
  tier?: PricingTier;
}): ContactServiceSlug {
  return tipo === "demo" || tier ? "bopa" : GENERAL_SERVICE_SLUG;
}
