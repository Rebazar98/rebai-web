import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";

export default function ProductPreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <AnimatedSection direction="left">
            <SectionLabel className="mb-6">El producto</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              Así es la alerta que recibe tu equipo
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Cada mañana, un resumen inteligente del BOPA en tu bandeja de
              entrada. Solo lo que afecta a tu empresa, explicado en lenguaje
              claro. Ninguna convocatoria se escapa.
            </p>
            <ul className="space-y-3">
              {[
                "Convocatorias de subvenciones con plazo y dotación",
                "Cambios normativos con impacto en tus proyectos activos",
                "Resumen ejecutivo generado por IA, sin tecnicismos",
                "Enlace directo al texto oficial del BOPA",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  </div>
                  <span className="text-[#0F172A] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right: email mockup */}
          <AnimatedSection direction="right">
            <div className="relative">
              {/* Glow detrás */}
              <div className="absolute -inset-4 bg-[#2563EB] opacity-[0.06] rounded-[24px] blur-[32px]" />

              {/* Email card */}
              <div className="relative bg-white rounded-[16px] border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Header del email */}
                <div className="bg-[#1B2A4A] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Resumen BOPA · RebAI</div>
                      <div className="text-white/50 text-xs">noreply@rebai.es</div>
                    </div>
                  </div>
                  <div className="text-white/40 text-xs">Hoy, 07:30</div>
                </div>

                {/* Subject line */}
                <div className="px-6 py-3 border-b border-[#F1F5F9] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-semibold">
                      ⚡ 2 alertas
                    </span>
                    <span className="text-[#0F172A] text-sm font-medium">
                      BOPA del martes — Ayudas y normativa relevante
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  {/* Alert 1 */}
                  <div className="rounded-[10px] border border-[#FED7AA] bg-[#FFF7ED] p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="inline-flex items-center gap-1 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
                          🟡 Convocatoria — IDEPA
                        </span>
                      </div>
                      <span className="text-[#EA580C] text-xs font-mono font-bold whitespace-nowrap">
                        Plazo: 15 abr
                      </span>
                    </div>
                    <p className="text-[#431407] text-sm font-semibold mb-1">
                      Ayudas modernización explotaciones agrícolas 2026
                    </p>
                    <p className="text-[#7C2D12] text-xs leading-relaxed mb-3">
                      Dotación: 2.000.000 € · Hasta 40% subvencionable ·
                      Aplicable a tu sector según perfil configurado
                    </p>
                    <button className="text-[#EA580C] text-xs font-semibold hover:underline">
                      Ver detalle completo →
                    </button>
                  </div>

                  {/* Alert 2 */}
                  <div className="rounded-[10px] border border-[#BFDBFE] bg-[#EFF6FF] p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="inline-flex items-center gap-1 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
                        🔵 Normativa — Medio Ambiente
                      </span>
                    </div>
                    <p className="text-[#1E3A5F] text-sm font-semibold mb-1">
                      Modificación Ley de Residuos — entrada en vigor 1 mayo
                    </p>
                    <p className="text-[#1E40AF] text-xs leading-relaxed mb-3">
                      Afecta a proyectos activos con gestión de residuos de
                      construcción. Revisar expedientes nº 234, 891 y 1.102.
                    </p>
                    <button className="text-[#1D4ED8] text-xs font-semibold hover:underline">
                      Leer resumen IA →
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[#94A3B8] text-xs">
                      Próximo resumen mañana a las 7:30
                    </span>
                    <span className="text-[#94A3B8] text-xs">rebai.es</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
