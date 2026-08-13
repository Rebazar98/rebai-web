import Image from "next/image";
import AnimatedSection from "@/components/shared/animated-section";
import SectionLabel from "@/components/shared/section-label";
import { FileText, Map, MessageCircle, Radar, type LucideIcon } from "lucide-react";
import { SERVICES as ALL_SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Map,
  MessageCircle,
  Radar,
};

const SERVICES = ALL_SERVICES.filter((service) => service.category === "principal").map(
  (service) => ({
    title: service.name,
    description: service.description,
    outcome: service.benefit,
    icon: iconMap[service.icon],
  })
);

export default function CapabilitiesShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="pointer-events-none absolute right-[-3%] top-[-3%] hidden h-[430px] w-[58%] lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/services-tech-background.png"
            alt=""
            fill
            className="object-contain object-right-top opacity-[0.3]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.86)_24%,rgba(255,255,255,0.44)_48%,rgba(255,255,255,0.06)_74%,rgba(255,255,255,0)_100%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-14 max-w-3xl">
            <SectionLabel className="mb-6">Beneficios para tu equipo</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Más velocidad en la gestión, menos trabajo repetitivo y mejores
              decisiones.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#64748B]">
              Aplicamos IA y automatización con trazabilidad y protección de
              datos por diseño, para ayuntamientos y empresas privadas. El
              resultado no es más complejidad, sino una operativa más ágil,
              segura y fácil de escalar.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 90}>
                <div className="h-full rounded-[28px] border border-[#D8E7F8] bg-[#F8FBFF]/95 p-7 shadow-[0_18px_48px_rgba(15,23,42,0.05)] backdrop-blur-[2px]">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DBEAFE]">
                      {Icon && <Icon size={20} className="text-[#2563EB]" />}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#0F172A]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[#64748B]">
                    {service.description}
                  </p>

                  <div className="rounded-[18px] border border-[#E2E8F0] bg-white px-4 py-3 text-sm leading-relaxed text-[#36506F]">
                    {service.outcome}
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
