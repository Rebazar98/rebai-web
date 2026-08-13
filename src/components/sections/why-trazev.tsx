import { Clock3, Mail, MapPin, Phone, Target, Cpu, Handshake, Lock, Landmark } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { DIFFERENTIATORS, SITE } from "@/lib/constants";

const iconMap = { MapPin, Target, Cpu, Handshake, Lock, Landmark } as const;

const SERIOUSNESS_SIGNALS = [
  { icon: Mail, label: "Email profesional", value: SITE.email },
  { icon: Phone, label: "Teléfono directo", value: SITE.phone },
  { icon: MapPin, label: "Ubicación", value: SITE.location },
  { icon: Clock3, label: "Respuesta", value: "Menos de 48 horas" },
] as const;

export default function WhyTrazev() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <div>
              <SectionLabel className="mb-6">Seriedad y método</SectionLabel>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Tecnología con criterio, trato directo y una forma clara de avanzar.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-[#64748B]">
                No necesitas venir con la solución decidida. Analizamos el caso, vemos si
                encaja y proponemos el siguiente paso con sentido. Sin humo, sin promesas
                infladas y sin obligarte a montar un equipo técnico propio.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SERIOUSNESS_SIGNALS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                        <Icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm font-medium text-[#0F172A]">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DIFFERENTIATORS.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div
                    key={item.title}
                    className="rounded-[12px] border border-[#E2E8F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF]">
                      {Icon && <Icon size={18} className="text-[#2563EB]" />}
                    </div>
                    <h3 className="mb-2 text-sm font-semibold text-[#0F172A]">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
