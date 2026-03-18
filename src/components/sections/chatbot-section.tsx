import Link from "next/link";
import { ArrowRight, MessageSquare, Search, FileText, Zap } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";

const EXAMPLES = [
  {
    question: "¿Hay alguna ayuda del IDEPA para modernización de maquinaria agrícola este año?",
    answer:
      "Sí. El IDEPA publicó el 14 de marzo la convocatoria de ayudas para modernización de explotaciones agrícolas 2026. Plazo: 15 de abril. Dotación: 2M€. Hasta 40% subvencionable. ¿Quieres que prepare el borrador de solicitud?",
  },
  {
    question: "¿Qué cambios ha habido en la normativa de residuos de construcción en Asturias?",
    answer:
      "El BOPA del 18 de marzo publicó la modificación de la Ley de Residuos que afecta a obras de más de 500m². Entrada en vigor: 1 de mayo. Tus expedientes nº 234 y 891 podrían verse afectados.",
  },
];

const FEATURES = [
  {
    icon: Search,
    title: "Búsqueda semántica",
    description: "Pregunta en lenguaje natural. El sistema entiende el contexto de tu empresa.",
  },
  {
    icon: FileText,
    title: "Acceso al histórico",
    description: "Consulta disposiciones de los últimos 5 años del BOPA de Asturias.",
  },
  {
    icon: Zap,
    title: "Respuesta inmediata",
    description: "Sin esperar a que un técnico revise el boletín. La respuesta en segundos.",
  },
];

export default function ChatbotSection() {
  return (
    <section className="bg-[#0F172A] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] opacity-[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1B2A4A] opacity-40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6 border-white/10 bg-white/5 text-[#60A5FA]">
              Diferenciador clave
            </SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Consulta el BOPA como si hablaras con un experto
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Además de las alertas automáticas, tienes un asistente que conoce
              todo el BOPA de Asturias. Pregúntale lo que necesites.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: chat mockup */}
          <AnimatedSection direction="left">
            <div className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden">
              {/* Chat header */}
              <div className="bg-white/10 px-5 py-3 flex items-center gap-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center">
                  <MessageSquare size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Asistente BOPA</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    <span className="text-white/40 text-xs">En línea</span>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-4">
                {EXAMPLES.map((ex, i) => (
                  <div key={i} className="space-y-2">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-[#2563EB] text-white text-sm rounded-[12px] rounded-tr-[4px] px-4 py-2.5 max-w-[85%] leading-relaxed">
                        {ex.question}
                      </div>
                    </div>
                    {/* Bot response */}
                    <div className="flex justify-start">
                      <div className="bg-white/10 text-white/90 text-sm rounded-[12px] rounded-tl-[4px] px-4 py-2.5 max-w-[85%] leading-relaxed">
                        {ex.answer}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Input */}
                <div className="flex items-center gap-2 mt-4 bg-white/5 border border-white/10 rounded-[10px] px-4 py-2.5">
                  <span className="text-white/30 text-sm flex-1">Pregunta sobre el BOPA...</span>
                  <button className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
                    <ArrowRight size={13} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: features */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-4 border-t border-white/10">
                <p className="text-white/40 text-sm mb-6">
                  Incluido en todos los planes. Sin límite de consultas.
                </p>
                <Link
                  href="/contacto?tipo=demo"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 group text-sm"
                >
                  Ver el asistente en acción
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
