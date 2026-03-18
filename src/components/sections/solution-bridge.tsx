import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { SOLUTION_STEPS } from "@/lib/constants";

export default function SolutionBridge() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel className="mb-6">Cómo lo resolvemos</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
                Automatización que entiende tu sector
              </h2>
              <p className="text-[#64748B] text-lg">
                Combinamos inteligencia artificial con conocimiento profundo del
                sector técnico y rural asturiano para construir herramientas que
                trabajan por ti.
              </p>
            </div>
          </AnimatedSection>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0">
            {SOLUTION_STEPS.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 150} className="flex-1">
                <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                  <div className="flex-1 text-center md:text-left px-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EFF6FF] border-2 border-[#2563EB] mb-4">
                      <span className="text-[#2563EB] font-bold text-sm font-mono">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[#0F172A] font-semibold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < SOLUTION_STEPS.length - 1 && (
                    <div className="hidden md:flex items-start pt-5 text-[#E2E8F0]">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
