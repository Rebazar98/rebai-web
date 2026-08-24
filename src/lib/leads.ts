import { EMAIL_DEFAULTS, SITE } from "@/lib/constants";
import {
  GENERAL_SERVICE_SLUG,
  getContactDefaultService,
  getServiceLabel,
  normalizeLeadType,
  normalizePricingTier,
  normalizeServiceSlug,
  type ContactPageType,
  type ContactServiceSlug,
  type LeadType,
  type PricingTier,
} from "@/lib/contact";

type LeadDeliveryStatus = "sent" | "skipped" | "failed";

export interface LeadPayload {
  serviceSlug: ContactServiceSlug;
  leadType: LeadType;
  pricingTier?: PricingTier;
  sourcePage: string;
  sourceSection: string;
  nombre?: string;
  empresa?: string;
  email: string;
  telefono?: string;
  challenge?: string;
  currentBopaSituation?: string;
  createdAt: string;
}

export interface LeadSubmissionInput {
  serviceSlug?: unknown;
  servicio?: unknown;
  leadType?: unknown;
  tipo?: unknown;
  pricingTier?: unknown;
  tier?: unknown;
  sourcePage?: unknown;
  page?: unknown;
  sourceSection?: unknown;
  section?: unknown;
  origen?: unknown;
  nombre?: unknown;
  empresa?: unknown;
  email?: unknown;
  telefono?: unknown;
  challenge?: unknown;
  reto?: unknown;
  currentBopaSituation?: unknown;
  situacion?: unknown;
  situacion_bopa?: unknown;
  createdAt?: unknown;
}

export interface LeadDeliveryResult {
  status: LeadDeliveryStatus;
  detail?: string;
}

export interface LeadSubmissionResult {
  ok: boolean;
  lead: LeadPayload;
  delivery: {
    n8n: LeadDeliveryResult;
    resend: LeadDeliveryResult;
  };
}

export class LeadValidationError extends Error {
  issues: string[];

  constructor(issues: string[]) {
    super(issues[0] ?? "Lead validation error");
    this.name = "LeadValidationError";
    this.issues = issues;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value.trim() || undefined : undefined;
}

function normalizeCreatedAt(value: unknown): string {
  const candidate = asString(value);
  if (!candidate) {
    return new Date().toISOString();
  }

  const parsed = new Date(candidate);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function formatLeadDisplayDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  const parts = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(parsed);

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${getPart("day")}/${getPart("month")}/${getPart("year")} ${getPart("hour")}:${getPart(
    "minute"
  )}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function resolveLeadType(input: LeadSubmissionInput): {
  leadType: LeadType;
  pricingTier?: PricingTier;
  pageType?: ContactPageType;
} {
  const pricingTier = normalizePricingTier(
    asString(input.pricingTier) ?? asString(input.tier)
  );
  const pageType =
    asString(input.tipo) === "demo"
      ? "demo"
      : asString(input.tipo) === "contacto"
        ? "contacto"
        : undefined;
  const fallback = pricingTier ? "pricing" : pageType === "demo" ? "demo" : "contacto";
  const leadType = normalizeLeadType(
    asString(input.leadType) ?? asString(input.tipo),
    fallback
  );

  return {
    leadType: pricingTier && leadType === "contacto" ? "pricing" : leadType,
    pricingTier,
    pageType,
  };
}

function normalizeLead(input: LeadSubmissionInput): LeadPayload {
  const { leadType, pricingTier, pageType } = resolveLeadType(input);
  const serviceFallback = getContactDefaultService({
    tipo: pageType,
    tier: pricingTier,
  });

  const lead: LeadPayload = {
    serviceSlug: normalizeServiceSlug(
      asString(input.serviceSlug) ?? asString(input.servicio),
      leadType === "interest" ? GENERAL_SERVICE_SLUG : serviceFallback
    ),
    leadType,
    pricingTier,
    sourcePage: asString(input.sourcePage ?? input.page) ?? (leadType === "interest" ? "/" : "/contacto"),
    sourceSection:
      asString(input.sourceSection ?? input.section ?? input.origen) ??
      (leadType === "interest" ? "hero" : "contact-form"),
    nombre: asString(input.nombre),
    empresa: asString(input.empresa),
    email: asString(input.email) ?? "",
    telefono: asString(input.telefono),
    challenge: asString(input.challenge ?? input.reto),
    currentBopaSituation: asString(
      input.currentBopaSituation ?? input.situacion ?? input.situacion_bopa
    ),
    createdAt: normalizeCreatedAt(input.createdAt),
  };

  const issues: string[] = [];
  if (!lead.email || !EMAIL_REGEX.test(lead.email)) {
    issues.push("Por favor introduce un email valido.");
  }

  if (lead.leadType !== "interest") {
    if (!lead.nombre) issues.push("El nombre es obligatorio.");
    if (!lead.empresa) issues.push("La empresa es obligatoria.");
    if (!lead.challenge) issues.push("El reto principal es obligatorio.");
  }

  if (issues.length > 0) {
    throw new LeadValidationError(issues);
  }

  return lead;
}

function buildLeadEmailHtml(lead: LeadPayload): string {
  const serviceLabel = getServiceLabel(lead.serviceSlug);
  const rows = [
    ["Servicio", serviceLabel],
    ["Tipo de lead", lead.leadType],
    ["Plan", lead.pricingTier ?? "-"],
    ["Nombre", lead.nombre ?? "-"],
    ["Empresa", lead.empresa ?? "-"],
    ["Email", lead.email],
    ["Teléfono", lead.telefono ?? "-"],
    ["Página", lead.sourcePage],
    ["Sección", lead.sourceSection],
    ["Situación boletín oficial", lead.currentBopaSituation ?? "-"],
    ["Fecha", formatLeadDisplayDate(lead.createdAt)],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;border-bottom:1px solid #E2E8F0;color:#64748B;font-size:13px;width:160px;">${escapeHtml(
          label
        )}</td><td style="padding:8px 0;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:14px;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  const challenge = lead.challenge ? escapeHtml(lead.challenge).replace(/\n/g, "<br>") : "Sin detalle";

  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#F8FAFC;border-radius:12px;">
      <div style="background:#1B2A4A;padding:20px 24px;border-radius:10px;margin-bottom:20px;">
        <h1 style="margin:0;color:#FFFFFF;font-size:20px;">Nuevo lead TRAZEV</h1>
        <p style="margin:6px 0 0;color:#CBD5E1;font-size:13px;">${escapeHtml(serviceLabel)} · ${escapeHtml(
          lead.leadType
        )}</p>
      </div>
      <div style="background:#FFFFFF;padding:20px 24px;border:1px solid #E2E8F0;border-radius:10px;">
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
      <div style="background:#FFFFFF;padding:20px 24px;border:1px solid #E2E8F0;border-left:4px solid #2563EB;border-radius:10px;margin-top:16px;">
        <div style="color:#64748B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px;">Reto principal</div>
        <p style="margin:0;color:#0F172A;font-size:15px;line-height:1.6;">${challenge}</p>
      </div>
    </div>
  `;
}

async function deliverToN8N(lead: LeadPayload): Promise<LeadDeliveryResult> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      status: "skipped",
      detail: "N8N_WEBHOOK_URL no configurado",
    };
  }

  const payload = {
    ...lead,
    serviceName: getServiceLabel(lead.serviceSlug),
    reto: lead.challenge ?? "",
    situacion: lead.currentBopaSituation ?? "",
    situacion_bopa: lead.currentBopaSituation ?? "",
    origen: lead.sourceSection,
    source: SITE.url,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        status: "failed",
        detail: `n8n responded with ${response.status}`,
      };
    }

    return { status: "sent" };
  } catch (error) {
    return {
      status: "failed",
      detail: error instanceof Error ? error.message : "Error enviando a n8n",
    };
  }
}

async function deliverToResend(lead: LeadPayload): Promise<LeadDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() || EMAIL_DEFAULTS.transactionalFrom;
  const replyToEmail =
    process.env.RESEND_REPLY_TO_EMAIL?.trim() || EMAIL_DEFAULTS.transactionalReplyTo;
  const notificationEmail =
    process.env.LEAD_NOTIFICATION_EMAIL?.trim() || SITE.email;

  if (!apiKey) {
    return {
      status: "skipped",
      detail: "RESEND_API_KEY no configurado",
    };
  }

  try {
    const payload = {
      from: fromEmail,
      to: [notificationEmail],
      subject: `Nuevo lead ${lead.leadType} · ${getServiceLabel(lead.serviceSlug)}`,
      html: buildLeadEmailHtml(lead),
      reply_to: replyToEmail,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        status: "failed",
        detail: `Resend responded with ${response.status}`,
      };
    }

    return { status: "sent" };
  } catch (error) {
    return {
      status: "failed",
      detail: error instanceof Error ? error.message : "Error enviando con Resend",
    };
  }
}

export async function submitLead(
  input: LeadSubmissionInput
): Promise<LeadSubmissionResult> {
  const lead = normalizeLead(input);
  const [n8n, resend] = await Promise.all([
    deliverToN8N(lead),
    deliverToResend(lead),
  ]);

  return {
    ok: n8n.status === "sent" || resend.status === "sent",
    lead,
    delivery: {
      n8n,
      resend,
    },
  };
}
