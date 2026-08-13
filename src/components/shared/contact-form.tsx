"use client";

import { useActionState, useState } from "react";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";

import { submitContact, type ContactFormState } from "@/app/actions/contact";
import {
  GENERAL_SERVICE_SLUG,
  type ContactServiceSlug,
  type LeadType,
  type PricingTier,
} from "@/lib/contact";
import { SERVICES } from "@/lib/constants";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

interface ContactFormProps {
  initialServiceSlug: ContactServiceSlug;
  leadType: LeadType;
  pricingTier?: PricingTier;
  sourcePage: string;
  sourceSection: string;
  submitLabel: string;
}

export default function ContactForm({
  initialServiceSlug,
  leadType,
  pricingTier,
  sourcePage,
  sourceSection,
  submitLabel,
}: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const [selectedService, setSelectedService] =
    useState<ContactServiceSlug>(initialServiceSlug);

  const showBopaSituation =
    selectedService === GENERAL_SERVICE_SLUG || selectedService === "bopa";

  if (state.status === "success") {
    return (
      <div className="rounded-[12px] border border-[#BBF7D0] bg-[#F0FDF4] p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A]">
          <CheckCircle size={28} className="text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
          Gracias, ya tenemos tu caso
        </h3>
        <p className="text-[#64748B]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="leadType" value={leadType} />
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="sourceSection" value={sourceSection} />
      {pricingTier ? <input type="hidden" name="pricingTier" value={pricingTier} /> : null}

      <div>
        <label
          htmlFor="serviceSlug"
          className="mb-1.5 block text-sm font-medium text-[#0F172A]"
        >
          Que quieres explorar? <span className="text-[#EA580C]">*</span>
        </label>
        <select
          id="serviceSlug"
          name="serviceSlug"
          value={selectedService}
          required
          disabled={isPending}
          onChange={(event) =>
            setSelectedService(event.target.value as ContactServiceSlug)
          }
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
        >
          <option value={GENERAL_SERVICE_SLUG}>No lo tengo claro todavia</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="mb-1.5 block text-sm font-medium text-[#0F172A]"
          >
            Nombre <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            disabled={isPending}
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="empresa"
            className="mb-1.5 block text-sm font-medium text-[#0F172A]"
          >
            Empresa <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            disabled={isPending}
            placeholder="Empresa, despacho o entidad"
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-[#0F172A]"
          >
            Email <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isPending}
            placeholder="tu@empresa.com"
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="mb-1.5 block text-sm font-medium text-[#0F172A]"
          >
            Telefono <span className="font-normal text-[#94A3B8]">(opcional)</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            disabled={isPending}
            placeholder="+34 600 000 000 si prefieres llamada"
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
          />
        </div>
      </div>

      {showBopaSituation ? (
        <div>
          <label
            htmlFor="situacion"
            className="mb-1.5 block text-sm font-medium text-[#0F172A]"
          >
            Hoy, como controlais las publicaciones que os afectan?{" "}
            <span className="text-[#EA580C]">*</span>
          </label>
          <select
            id="situacion"
            name="situacion"
            required
            disabled={isPending}
            defaultValue=""
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
          >
            <option value="" disabled>
              Selecciona una opcion...
            </option>
            <option value="manual">Lo revisamos a mano</option>
            <option value="delegado">Lo lleva una persona del equipo</option>
            <option value="no-revisamos">
              Llegamos tarde o no lo revisamos de forma estable
            </option>
            <option value="otra-herramienta">
              Usamos otra herramienta o servicio
            </option>
          </select>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="reto"
          className="mb-1.5 block text-sm font-medium text-[#0F172A]"
        >
          Que esta pasando ahora y que te gustaria mejorar?{" "}
          <span className="text-[#EA580C]">*</span>
        </label>
        <textarea
          id="reto"
          name="reto"
          required
          disabled={isPending}
          rows={5}
          placeholder="Por ejemplo: revisamos el BOPA a mano, llegamos tarde a ayudas o cambios normativos, o necesitamos que el equipo tenga un criterio claro para actuar. Si quieres, cuentanos tambien el objetivo que buscais."
          className="w-full resize-none rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:opacity-50"
        />
      </div>

      {state.status === "error" ? (
        <div className="flex items-start gap-3 rounded-lg border border-[#FED7AA] bg-[#FFF7ED] p-4">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-[#EA580C]" />
          <p className="text-sm text-[#EA580C]">{state.message}</p>
        </div>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3.5 font-semibold text-white transition-all duration-150 hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              {submitLabel}
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-[#94A3B8]">
          Al enviar, aceptas nuestra{" "}
          <a href="/politica-de-privacidad" className="text-[#2563EB] hover:underline">
            politica de privacidad
          </a>
          . Sin compromiso. Te responderemos con una recomendacion clara en menos de
          48h.
        </p>
      </div>
    </form>
  );
}
