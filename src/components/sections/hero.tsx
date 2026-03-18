import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
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
            Automatización para el sector técnico y rural en Asturias
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
            Automatizamos la burocracia que frena a tu empresa{" "}
            <span className="text-[#2563EB]">en Asturias</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mb-10">
            Agentes de IA, análisis del{" "}
            <span className="text-[#0F172A] font-medium">BOPA</span> y
            automatización de procesos para ingenierías, consultoras y
            cooperativas del{" "}
            <span className="text-[#0F172A] font-medium">
              Principado de Asturias
            </span>
            .
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-150 group"
            >
              Solicitar consulta gratuita
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform duration-150"
              />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] hover:border-[#2563EB] text-[#0F172A] hover:text-[#2563EB] font-semibold px-6 py-3.5 rounded-lg transition-all duration-150 group"
            >
              Ver servicios
              <ChevronRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform duration-150"
              />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-[#F1F5F9]">
            {[
              "BOPA automatizado",
              "Subvenciones IDEPA",
              "Sector técnico asturiano",
              "Primera consulta gratuita",
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
