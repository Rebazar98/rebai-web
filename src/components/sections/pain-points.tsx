import { Clock, FileWarning, Target } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";

const FIT_CASES = [
  {
    icon: FileWarning,
    title: "Gestionas normativa, boletines o expedientes",
    description:
      "Y no quieres seguir dependiendo de revisiones manuales, búsquedas dispersas o seguimiento artesanal que roba horas al equipo.",
  },
  {
    icon: Clock,
    title: "Tu equipo repite tareas que no aportan valor",
    description:
      "Documentación, clasificaciones, avisos, revisiones o pasos internos que consumen horas cada semana y ralentizan la respuesta.",
  },
  {
    icon: Target,
    title: "Sabes que hay margen de mejora, pero no quieres improvisar",
    description:
      "Necesitas criterio para decidir por qué servicio empezar (urbanismo, atención ciudadana, BOPA o satisfacción vecinal) sin invertir a ciegas.",
  },
] as const;

export default function PainPoints() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <SectionLabel className="mb-6">Encaje</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Normalmente encajamos contigo si tu equipo ya nota alguno de estos
              frenos.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#64748B]">
              No hace falta llegar con la solución definida. Si una de estas
              situaciones te suena, ya hay margen real para mejorar eficiencia,
              tiempos y control operativo.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FIT_CASES.map((point, i) => {
            const Icon = point.icon;
            return (
              <AnimatedSection key={point.title} delay={i * 100}>
                <div className="h-full rounded-[12px] border border-[#E2E8F0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_8px_32px_rgba(0,0,0,0.08)]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF]">
                    <Icon size={22} className="text-[#2563EB]" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
