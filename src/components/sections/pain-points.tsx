import { Clock, AlertTriangle, TrendingDown } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { PAIN_POINTS } from "@/lib/constants";

const iconMap = {
  Clock,
  AlertTriangle,
  TrendingDown,
} as const;

export default function PainPoints() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6">El problema</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              ¿Te suena familiar?
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Las empresas técnicas asturianas pierden miles de horas al año en
              tareas que se pueden automatizar.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={point.title} delay={i * 100}>
                <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 h-full shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mb-6">
                    {Icon && <Icon size={22} className="text-[#EA580C]" />}
                  </div>
                  <h3 className="text-[#0F172A] font-semibold text-lg mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
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
