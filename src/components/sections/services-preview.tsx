import Link from "next/link";
import {
  FileText,
  Map,
  MessageCircle,
  Radar,
  Bot,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  FileText,
  Map,
  MessageCircle,
  Radar,
  Bot,
  ShieldCheck,
} as const;

export default function ServicesPreview() {
  const principales = SERVICES.filter((service) => service.category === "principal");
  const adicionales = SERVICES.filter((service) => service.category === "adicional");
  const [bopa, ...rest] = principales;
  const BopaIcon = iconMap[bopa.icon as keyof typeof iconMap];

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <SectionLabel className="mb-6">Servicios</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Cuatro soluciones para que tu ayuntamiento o empresa gane tiempo y control.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#64748B]">
              Desde redactar informes urbanísticos hasta atender al
              ciudadano, vigilar el BOPA o medir la satisfacción ciudadana. El
              objetivo es el mismo: que tu equipo trabaje mejor con menos
              fricción y menos carga manual.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Link
            href={`/servicios/${bopa.slug}`}
            className="group relative mb-6 block overflow-hidden rounded-[16px] bg-[#1B2A4A] p-8 transition-colors duration-200 hover:bg-[#243557] lg:p-10"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#2563EB] opacity-10 blur-[80px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    {BopaIcon && <BopaIcon size={22} className="text-white" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-bold text-white">
                    Solución lista para activar
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-150 group-hover:text-[#93C5FD]">
                  {bopa.name}
                </h3>
                <p className="mb-4 max-w-2xl text-base leading-relaxed text-white/65">
                  {bopa.description}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/30 bg-[#F0FDF4]/10 px-3 py-1.5 font-mono text-sm font-semibold text-[#4ADE80]">
                  {bopa.benefit}
                </div>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-white">
                Ver solución
                <ArrowRight
                  size={16}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {rest.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={service.slug} delay={index * 80}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group flex items-start gap-4 rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-200 hover:border-[#BFDBFE] hover:bg-white"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#BFDBFE] bg-[#EFF6FF]">
                    {Icon && <Icon size={16} className="text-[#2563EB]" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-sm font-semibold text-[#0F172A] transition-colors duration-150 group-hover:text-[#2563EB]">
                      {service.name}
                    </h3>
                    <p className="line-clamp-3 text-xs leading-relaxed text-[#64748B]">
                      {service.tagline}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className="mt-0.5 shrink-0 text-[#94A3B8] transition-colors duration-150 group-hover:text-[#2563EB]"
                  />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        {adicionales.length > 0 ? (
          <AnimatedSection>
            <div className="mt-10 border-t border-[#E2E8F0] pt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">
                Otros servicios
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {adicionales.map((service) => {
                  const Icon = iconMap[service.icon as keyof typeof iconMap];
                  return (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}`}
                      className="group flex items-center gap-3 rounded-[10px] border border-[#E2E8F0] px-4 py-3 transition-colors duration-150 hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"
                    >
                      {Icon && <Icon size={15} className="shrink-0 text-[#94A3B8]" />}
                      <span className="text-sm font-medium text-[#36506F] group-hover:text-[#2563EB]">
                        {service.name}
                      </span>
                      <ChevronRight
                        size={13}
                        className="ml-auto shrink-0 text-[#94A3B8] transition-colors duration-150 group-hover:text-[#2563EB]"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        ) : null}
      </div>
    </section>
  );
}
