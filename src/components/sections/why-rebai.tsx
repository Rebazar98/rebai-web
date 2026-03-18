import { MapPin, Target, Cpu, Handshake } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { DIFFERENTIATORS } from "@/lib/constants";

const iconMap = { MapPin, Target, Cpu, Handshake } as const;

export default function WhyRebAI() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <AnimatedSection direction="left">
            <div>
              <SectionLabel className="mb-6">Por qué RebAI</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-6">
                No somos una agencia genérica.
                <br />
                <span className="text-[#2563EB]">Somos de aquí.</span>
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                Conocemos el BOPA, el IDEPA, las cooperativas lácteas de la
                Costa Occidental y las ingenierías técnicas de Asturias. Eso
                nos permite construir soluciones que realmente encajan con tu
                realidad, no adaptaciones de plantillas genéricas.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-[12px] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[#0F172A] font-semibold text-sm">
                    Asturias, Principado
                  </div>
                  <div className="text-[#64748B] text-xs">
                    Empresa local · Respuesta ágil · Conocimiento regional
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Differentiators grid */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIFFERENTIATORS.map((item, i) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4">
                      {Icon && <Icon size={18} className="text-[#2563EB]" />}
                    </div>
                    <h3 className="text-[#0F172A] font-semibold text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-xs leading-relaxed">
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
