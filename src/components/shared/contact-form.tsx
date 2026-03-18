"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[#16A34A] flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-white" />
        </div>
        <h3 className="text-[#0F172A] font-bold text-xl mb-2">
          Consulta enviada
        </h3>
        <p className="text-[#64748B]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Nombre <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            disabled={isPending}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-150 disabled:opacity-50"
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Empresa <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            disabled={isPending}
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-150 disabled:opacity-50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Email <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isPending}
            placeholder="tu@empresa.com"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-150 disabled:opacity-50"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-[#0F172A] mb-1.5">
            Teléfono{" "}
            <span className="text-[#94A3B8] font-normal">(opcional)</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            disabled={isPending}
            placeholder="+34 600 000 000"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-150 disabled:opacity-50"
          />
        </div>
      </div>

      {/* Situación actual con el BOPA */}
      <div>
        <label htmlFor="situacion" className="block text-sm font-medium text-[#0F172A] mb-1.5">
          ¿Cómo gestionáis el BOPA ahora? <span className="text-[#EA580C]">*</span>
        </label>
        <select
          id="situacion"
          name="situacion"
          required
          disabled={isPending}
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-150 disabled:opacity-50"
        >
          <option value="" disabled>Selecciona una opción...</option>
          <option value="manual">Lo revisamos manualmente</option>
          <option value="delegado">Tenemos a alguien que lo hace</option>
          <option value="no-revisamos">No lo revisamos habitualmente</option>
          <option value="otra-herramienta">Usamos otra herramienta</option>
        </select>
      </div>

      {/* Reto */}
      <div>
        <label htmlFor="reto" className="block text-sm font-medium text-[#0F172A] mb-1.5">
          ¿Cuál es tu principal reto? <span className="text-[#EA580C]">*</span>
        </label>
        <textarea
          id="reto"
          name="reto"
          required
          disabled={isPending}
          rows={5}
          placeholder="Cuéntanos qué proceso te consume más tiempo, qué problema administrativo quieres resolver o qué herramienta necesitarías. Cuanto más detalle, mejor podremos ayudarte."
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-150 disabled:opacity-50 resize-none"
        />
      </div>

      {/* Error message */}
      {state.status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-[#FFF7ED] border border-[#FED7AA] rounded-lg">
          <AlertCircle size={18} className="text-[#EA580C] shrink-0 mt-0.5" />
          <p className="text-[#EA580C] text-sm">{state.message}</p>
        </div>
      )}

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-150"
        >
          {isPending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar consulta
            </>
          )}
        </button>
        <p className="text-[#94A3B8] text-xs text-center mt-3">
          Al enviar, aceptas nuestra{" "}
          <a href="/politica-de-privacidad" className="text-[#2563EB] hover:underline">
            política de privacidad
          </a>
          . Sin compromiso. Respondemos en menos de 48h.
        </p>
      </div>
    </form>
  );
}
