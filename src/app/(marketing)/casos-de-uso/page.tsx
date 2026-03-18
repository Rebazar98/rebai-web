import type { Metadata } from "next";
import { Building2, Tractor, BarChart3 } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import CTABanner from "@/components/sections/cta-banner";
import { USE_CASES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Casos de uso",
  description:
    "Escenarios reales de automatización con IA para ingenierías, cooperativas y consultoras técnicas en Asturias. Resultados concretos y medibles.",
};

const iconMap = { Building2, Tractor, BarChart3 } as const;

export default function CasosDeUsoPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        {/* Header */}
        <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <SectionLabel className="mb-6">Casos de uso</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-6">
              Asturias. Sector técnico. Resultados reales.
            </h1>
            <p className="text-[#64748B] text-xl max-w-2xl mx-auto">
              No vendemos tecnología de escaparate. Estos son los escenarios
              reales en los que RebAI ya está generando valor para empresas del
              Principado.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {USE_CASES.map((useCase, i) => {
                const Icon = iconMap[useCase.icon as keyof typeof iconMap];
                return (
                  <AnimatedSection key={useCase.sector} delay={i * 80}>
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[12px] border border-[#E2E8F0] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]`}
                    >
                      {/* Left: Context */}
                      <div className="bg-[#1B2A4A] p-10 lg:p-12 text-white">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            {Icon && <Icon size={20} className="text-white" />}
                          </div>
                          <div>
                            <div className="font-semibold text-sm">
                              {useCase.sector}
                            </div>
                            <div className="text-white/50 text-xs">
                              {useCase.location}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                            Situación antes
                          </div>
                          <p className="text-white/90 text-base leading-relaxed">
                            {useCase.problem}
                          </p>
                        </div>

                        <div>
                          <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                            Solución implementada
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {useCase.solution}
                          </p>
                        </div>
                      </div>

                      {/* Right: Result */}
                      <div className="bg-white p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                          <div className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-3">
                            Resultado
                          </div>
                          <p className="text-[#0F172A] text-base leading-relaxed mb-8">
                            {useCase.result}
                          </p>
                        </div>

                        <div>
                          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                            <span className="text-[#2563EB] font-bold text-base font-mono">
                              {useCase.metric}
                            </span>
                          </div>

                          <div className="pt-6 border-t border-[#F1F5F9]">
                            <Link
                              href="/contacto"
                              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-sm hover:text-[#1D4ED8] transition-colors duration-150 group"
                            >
                              ¿Encaja con tu empresa? Hablamos
                              <ArrowRight
                                size={14}
                                className="group-hover:translate-x-0.5 transition-transform duration-150"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <CTABanner />
    </>
  );
}
