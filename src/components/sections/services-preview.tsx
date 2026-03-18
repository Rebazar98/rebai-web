import Link from "next/link";
import { FileText, Bot, Banknote, ShieldCheck, ChevronRight, ArrowRight } from "lucide-react";
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
  const [bopa, ...rest] = SERVICES;
  const BopaIcon = iconMap[bopa.icon as keyof typeof iconMap];

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6">Soluciones</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              BOPA automatizado es el núcleo.
              <br className="hidden sm:block" /> El resto son extensiones.
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Empieza con el BOPA. Cuando veas el valor, amplía con subvenciones,
              cumplimiento o agentes a medida.
            </p>
          </div>
        </AnimatedSection>

        {/* BOPA — card destacada */}
        <AnimatedSection>
          <Link
            href={`/servicios/${bopa.slug}`}
            className="group block bg-[#1B2A4A] rounded-[16px] p-8 lg:p-10 mb-6 hover:bg-[#243557] transition-colors duration-200 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB] opacity-10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {BopaIcon && <BopaIcon size={22} className="text-white" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-bold">
                    ⭐ Producto principal
                  </span>
                </div>
                <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-[#93C5FD] transition-colors duration-150">
                  {bopa.name}
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-4 max-w-2xl">
                  {bopa.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4]/10 border border-[#22C55E]/30 text-[#4ADE80] text-sm font-semibold font-mono">
                  {bopa.benefit}
                </div>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm whitespace-nowrap">
                Ver cómo funciona
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Otros servicios — grid compacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={service.slug} delay={i * 80}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group flex items-start gap-4 bg-[#F8FAFC] hover:bg-white rounded-[12px] border border-[#E2E8F0] hover:border-[#BFDBFE] p-5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                    {Icon && <Icon size={16} className="text-[#2563EB]" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0F172A] font-semibold text-sm mb-1 group-hover:text-[#2563EB] transition-colors duration-150">
                      {service.shortName}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>
                  <ChevronRight size={14} className="text-[#94A3B8] group-hover:text-[#2563EB] shrink-0 mt-0.5 transition-colors duration-150" />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
