import { Building2, Map, MessageCircle, Radar } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { USE_CASES } from "@/lib/constants";

const iconMap = { Building2, Map, MessageCircle, Radar } as const;

export default function UseCases() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <SectionLabel className="mb-6">Escenarios tipo</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Ejemplos de impacto que ya puedes imaginar en tu operativa.
            </h2>
            <p className="mx-auto max-w-xl text-lg text-[#64748B]">
              Casos representativos de ayuntamientos y empresas que necesitan
              reducir carga administrativa y acercarse más a la ciudadanía.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((useCase, i) => {
            const Icon = iconMap[useCase.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={useCase.sector} delay={i * 120}>
                <div className="flex h-full flex-col rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-8">
                  <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-2.5 py-1 text-xs font-medium text-[#94A3B8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                    Escenario de ejemplo
                  </div>

                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B2A4A]">
                      {Icon && <Icon size={18} className="text-white" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {useCase.sector}
                      </div>
                      <div className="mt-0.5 text-xs text-[#64748B]">
                        {useCase.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Situación
                    </div>
                    <p className="text-sm leading-relaxed text-[#0F172A]">
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Solución
                    </div>
                    <p className="text-sm leading-relaxed text-[#64748B]">
                      {useCase.solution}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-[#E2E8F0] pt-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                      <span className="font-mono text-xs font-semibold text-[#2563EB]">
                        {useCase.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
