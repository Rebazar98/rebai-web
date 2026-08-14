import type { Metadata } from "next";
import { CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/shared/contact-form";
import {
  buildContactHref,
  getContactDefaultService,
  getContactLeadType,
  getPricingTierLabel,
  getServiceBySlug,
  normalizeContactPageType,
  normalizePricingTier,
  normalizeServiceSlug,
} from "@/lib/contact";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con TRAZEV y cuentanos donde hoy pierdes tiempo o contexto. Te respondemos en menos de 48 horas con una recomendacion clara y el siguiente paso mas sensato.",
  // Esta pagina genera variantes por parametros (?servicio=...&tier=...&tipo=demo) para
  // adaptar el formulario segun de donde venga el usuario, pero todas son la misma pagina
  // a efectos de SEO -- la canonical evita que Google indexe cada variante por separado
  // (ej. /contacto?servicio=bopa&tier=empresa) en vez de la URL limpia.
  alternates: {
    canonical: "/contacto",
  },
};

function asString(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function buildCalendlyUrl(url: string): string {
  try {
    const calendlyUrl = new URL(url);
    calendlyUrl.searchParams.set("hide_gdpr_banner", "1");
    calendlyUrl.searchParams.set("hide_event_type_details", "1");
    return calendlyUrl.toString();
  } catch {
    return url;
  }
}

export default async function ContactoPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = searchParams ? await searchParams : {};
  const pageType = normalizeContactPageType(params.tipo);
  const pricingTier = normalizePricingTier(params.tier);
  const initialServiceSlug = normalizeServiceSlug(
    params.servicio,
    getContactDefaultService({ tipo: pageType, tier: pricingTier })
  );
  const leadType = getContactLeadType({ tipo: pageType, tier: pricingTier });
  const service = getServiceBySlug(initialServiceSlug);
  const serviceName = service?.name ?? "TRAZEV";
  const pricingTierLabel = getPricingTierLabel(pricingTier);
  const calendlyUrl = asString(process.env.NEXT_PUBLIC_CALENDLY_URL);

  const submitLabel =
    leadType === "demo"
      ? "Quiero ver si encaja"
      : leadType === "pricing"
        ? "Quiero validar este plan"
        : "Quiero una orientacion clara";

  const sourceSection =
    leadType === "demo"
      ? "demo-contact-form"
      : leadType === "pricing"
        ? "pricing-contact-form"
        : "contact-form";

  const title =
    leadType === "demo"
      ? `Veamos si ${serviceName} encaja en tu operativa`
      : leadType === "pricing" && pricingTierLabel
        ? `Veamos si el plan ${pricingTierLabel} es el correcto para tu equipo`
        : "Cuentanos donde se atasca hoy tu operativa";

  const description =
    leadType === "demo"
      ? `En una demo corta te ensenamos como encaja ${serviceName} en tu operativa, donde puedes reducir revision manual y que valor tendria para tu equipo desde el principio.`
      : leadType === "pricing" && pricingTierLabel
        ? `Revisamos contigo el nivel de uso, los perfiles y la operativa real para decirte si el plan ${pricingTierLabel} te compensa de verdad o si conviene otro enfoque.`
        : "Sin compromiso. Si nos das un poco de contexto, te diremos donde puedes ganar tiempo, reducir carga manual y empezar con una solucion realista.";

  const steps =
    leadType === "demo"
      ? [
          "Nos cuentas en dos minutos que proceso, expediente o seguimiento quieres mejorar.",
          "Te mostramos el producto con ejemplos cercanos a tu operativa real.",
          "Sales con una recomendacion clara sobre si encaja y por donde empezar.",
        ]
      : leadType === "pricing"
        ? [
            "Revisamos tu operativa, tu equipo y el nivel de uso que esperas.",
            "Te decimos si este plan es suficiente o si conviene otro enfoque.",
            "Si encaja, te proponemos un siguiente paso claro y realista.",
          ]
        : [
            "Leemos tu caso y detectamos donde puedes ganar tiempo o reducir revision manual.",
            "Te respondemos con una orientacion clara y, si hace falta, con una pregunta corta para afinar.",
            "Si encaja, te proponemos demo, plan o solucion a medida.",
          ];

  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
    leadType === "demo"
      ? `Demo ${serviceName}`
      : leadType === "pricing" && pricingTierLabel
        ? `Plan ${pricingTierLabel} TRAZEV`
        : `Consulta ${serviceName}`
  )}`;
  const phoneHref = `tel:${SITE.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${SITE.phone.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-white pb-32 pt-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              {leadType === "demo"
                ? "Demo guiada"
                : leadType === "pricing"
                  ? "Plan y propuesta"
                  : "Hablemos de tu caso"}
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#64748B]">{description}</p>
            {service ? (
              <p className="mt-4 text-sm font-semibold text-[#2563EB]">
                Servicio seleccionado: {service.name}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <h2 className="mb-4 text-base font-semibold text-[#0F172A]">
                  Que pasa despues
                </h2>
                <ol className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-[#64748B]">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-3 rounded-[12px] border border-[#E2E8F0] bg-white p-4 transition-colors duration-150 hover:border-[#2563EB]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">Email directo</div>
                    <div className="font-mono text-sm font-medium text-[#2563EB] group-hover:underline">
                      {SITE.email}
                    </div>
                    <div className="mt-1 text-xs text-[#64748B]">
                      Respuesta humana y aterrizada a tu caso
                    </div>
                  </div>
                </a>

                <a
                  href={phoneHref}
                  className="group flex items-center gap-3 rounded-[12px] border border-[#E2E8F0] bg-white p-4 transition-colors duration-150 hover:border-[#2563EB]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Phone size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">Telefono y WhatsApp</div>
                    <div className="text-sm font-medium text-[#0F172A] group-hover:text-[#2563EB]">
                      {SITE.phone}
                    </div>
                    <div className="mt-1 text-xs text-[#64748B]">
                      Para resolver dudas rapido antes de decidir
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-[12px] border border-[#E2E8F0] bg-white p-4 transition-colors duration-150 hover:border-[#2563EB]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Phone size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">WhatsApp directo</div>
                    <div className="text-sm font-medium text-[#2563EB] group-hover:underline">
                      Escribir por WhatsApp
                    </div>
                    <div className="mt-1 text-xs text-[#64748B]">
                      Si prefieres una conversacion corta y directa
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-[12px] border border-[#E2E8F0] bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Clock size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">Tiempo de respuesta</div>
                    <div className="text-sm font-medium text-[#0F172A]">
                      {leadType === "demo"
                        ? "Reserva inmediata o respuesta en 24h"
                        : "Menos de 48 horas"}
                    </div>
                    <div className="mt-1 text-xs text-[#64748B]">
                      Respuesta humana, contextual y sin mensajes genericos
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-[12px] border border-[#E2E8F0] bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <MapPin size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">Ubicacion</div>
                    <div className="text-sm font-medium text-[#0F172A]">{SITE.location}</div>
                    <div className="mt-1 text-xs text-[#64748B]">
                      Proximidad y contexto real en todo el territorio nacional
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-3">
              <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
                <ContactForm
                  initialServiceSlug={initialServiceSlug}
                  leadType={leadType}
                  pricingTier={pricingTier}
                  sourcePage={buildContactHref({
                    servicio: initialServiceSlug,
                    tipo: pageType === "demo" ? "demo" : undefined,
                    tier: pricingTier,
                  })}
                  sourceSection={sourceSection}
                  submitLabel={submitLabel}
                />
              </div>

              {leadType === "demo" ? (
                <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                      <CalendarDays size={18} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-[#0F172A]">
                        Reserva tu demo
                      </h2>
                      <p className="mt-1 text-sm text-[#64748B]">
                        Si te viene bien, puedes dejar ya la demo cerrada sin esperar a
                        nuestra respuesta.
                      </p>
                    </div>
                  </div>

                  {calendlyUrl ? (
                    <div className="space-y-4">
                      <div className="overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white">
                        <iframe
                          src={buildCalendlyUrl(calendlyUrl)}
                          title="Reserva una demo con TRAZEV"
                          className="min-h-[760px] w-full"
                        />
                      </div>
                      <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:underline"
                      >
                        Abrir Calendly en una ventana nueva
                      </a>
                    </div>
                  ) : (
                    <div className="rounded-[12px] border border-dashed border-[#BFDBFE] bg-white p-6">
                      <p className="mb-4 text-sm text-[#64748B]">
                        El calendario embebido no esta configurado todavia. Si prefieres,
                        puedes reservar la demo por email y te proponemos huecos.
                      </p>
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8]"
                      >
                        Reservar demo por email
                      </a>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
