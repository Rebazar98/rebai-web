import { Building2, Tractor, BarChart3 } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { USE_CASES } from "@/lib/constants";

const iconMap = { Building2, Tractor, BarChart3 } as const;

export default function UseCases() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6">Escenarios tipo</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              ¿Cómo podría ayudarte RebAI?
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Escenarios representativos del sector técnico y rural de Asturias.
              Cada caso se adapta a tu realidad concreta.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, i) => {
            const Icon = iconMap[useCase.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={useCase.sector} delay={i * 120}>
                <div className="bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] p-8 h-full flex flex-col">
                  {/* Badge escenario */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#94A3B8] text-xs font-medium mb-4 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
                    Escenario de ejemplo
                  </div>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#1B2A4A] flex items-center justify-center shrink-0">
                      {Icon && <Icon size={18} className="text-white" />}
                    </div>
                    <div>
                      <div className="text-[#0F172A] font-semibold text-sm">
                        {useCase.sector}
                      </div>
                      <div className="text-[#64748B] text-xs mt-0.5">
                        {useCase.location}
                      </div>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <div className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-2">
                      Situación
                    </div>
                    <p className="text-[#0F172A] text-sm leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-2">
                      Solución
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="mt-auto pt-4 border-t border-[#E2E8F0]">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span className="text-[#2563EB] font-semibold text-xs font-mono">
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
