import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Configuras tu perfil",
    description:
      "Dinos qué sectores, tipos de ayuda y normativa te afectan. Medio ambiente, urbanismo, subvenciones, contratación pública...",
  },
  {
    number: "02",
    title: "El agente descarga el BOPA",
    description:
      "Cada día, automáticamente. Ninguna publicación se escapa. Sin intervención manual por tu parte.",
  },
  {
    number: "03",
    title: "La IA filtra y resume",
    description:
      "Solo lo relevante para tu empresa, con contexto explicado en lenguaje claro. Sin tecnicismos innecesarios.",
  },
  {
    number: "04",
    title: "Recibes la alerta",
    description:
      "Por email o WhatsApp. Tu equipo actúa, no busca. Tiempo recuperado para proyectos de valor.",
  },
];

export default function SolutionBridge() {
  return (
    <section id="como-funciona" className="bg-[#F8FAFC] py-24 lg:py-32 border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6">Cómo funciona</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              De cero a alertas automáticas en días
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Sin meses de implementación. Sin equipo técnico interno.
              Configuramos todo por ti y te acompañamos en el proceso.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps grid — 2x2 en desktop, 1 col en mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 100}>
              <div className="relative bg-white rounded-[12px] border border-[#E2E8F0] p-6 h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {/* Número */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EFF6FF] border-2 border-[#2563EB] mb-4">
                  <span className="text-[#2563EB] font-bold text-xs font-mono">
                    {step.number}
                  </span>
                </div>
                {/* Conector entre pasos (desktop) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-11 -right-3 w-6 h-0.5 bg-[#BFDBFE] z-10" />
                )}
                <h3 className="text-[#0F172A] font-semibold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
