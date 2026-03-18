"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { captureEmail } from "@/app/actions/email-capture";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    const result = await captureEmail(email);
    setStatus(result.ok ? "success" : "error");
    if (result.ok) {
      setEmail("");
      // Scroll suave a cómo funciona
      setTimeout(() => {
        document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
      }, 800);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1B2A4A 1px, transparent 1px), linear-gradient(to right, #1B2A4A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2563EB] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#1B2A4A] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block animate-pulse" />
            Monitorización automática del BOPA · Alertas en 24h
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
            Nunca más pierdas una ayuda o normativa del{" "}
            <span className="text-[#2563EB]">BOPA de Asturias</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mb-10">
            Tu equipo recibe cada mañana un resumen inteligente con lo que les
            afecta. Sin horas de búsqueda manual. Sin sorpresas regulatorias.
          </p>

          {/* Email capture */}
          {status === "success" ? (
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-[#F0FDF4] border border-[#16A34A]/20 mb-4 max-w-lg">
              <div className="w-6 h-6 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#15803D] text-sm font-medium">
                ¡Perfecto! Échale un vistazo a cómo funciona más abajo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4 max-w-lg">
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@empresa.com"
                  required
                  disabled={status === "loading"}
                  className="w-full pl-9 pr-4 py-3.5 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] text-sm placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-[#93C5FD] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-150 whitespace-nowrap group"
              >
                {status === "loading" ? "Enviando..." : "Quiero verlo"}
                {status !== "loading" && (
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-[#DC2626] text-sm mb-4">Ha ocurrido un error. Escríbenos a hola@rebai.es</p>
          )}

          <p className="text-[#94A3B8] text-xs mb-10">
            Sin compromiso · Respondemos en 24h · Empresa asturiana
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-[#F1F5F9]">
            {[
              "BOPA analizado cada día",
              "Alertas por email/WhatsApp",
              "Filtrado por expediente",
              "Sin permanencia",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#F0FDF4] border border-[#16A34A] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                </div>
                <span className="text-[#64748B] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
