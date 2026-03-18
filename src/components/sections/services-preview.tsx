import Link from "next/link";
import { FileText, Bot, Banknote, ShieldCheck, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  FileText,
  Bot,
  Banknote,
  ShieldCheck,
} as const;

export default function ServicesPreview() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6">Nuestros servicios</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              Herramientas reales para problemas reales
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              No prometemos tecnología futura. Todo lo que ofrecemos está
              operativo y adaptado al tejido empresarial asturiano.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={service.slug} delay={i * 100}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group block bg-white rounded-[12px] border border-[#E2E8F0] p-8 h-full shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                      {Icon && <Icon size={22} className="text-[#2563EB]" />}
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#16A34A] text-xs font-semibold font-mono">
                      {service.benefit}
                    </div>
                  </div>

                  <h3 className="text-[#0F172A] font-bold text-xl mb-2 group-hover:text-[#2563EB] transition-colors duration-150">
                    {service.name}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1 text-[#2563EB] text-sm font-semibold">
                    Saber más
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform duration-150"
                    />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:text-[#1D4ED8] transition-colors duration-150 group"
            >
              Ver todos los servicios
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-150"
              />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
