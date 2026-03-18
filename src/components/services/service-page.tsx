import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FileText, Bot, Banknote, ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import type { Service } from "@/lib/constants";

const iconMap = { FileText, Bot, Banknote, ShieldCheck } as const;

interface ServicePageProps {
  service: Service;
}

export default function ServicePage({ service }: ServicePageProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">Servicio</SectionLabel>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#1B2A4A] flex items-center justify-center">
                {Icon && <Icon size={26} className="text-white" />}
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
                  {service.name}
                </h1>
              </div>
            </div>
            <p className="text-xl text-[#64748B] leading-relaxed mb-6">
              {service.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#16A34A] text-sm font-semibold font-mono">
              <CheckCircle size={14} />
              {service.benefit}
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                  Qué hace
                </h2>
                <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <h3 className="text-base font-semibold text-[#0F172A] mb-4">
                  ¿Para quién es?
                </h3>
                <ul className="space-y-2">
                  {service.targetClients.map((client) => (
                    <li key={client} className="flex items-start gap-2.5 text-[#64748B] text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] p-8">
                <h3 className="text-base font-semibold text-[#0F172A] mb-6">
                  Incluye
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={11} className="text-[#2563EB]" />
                      </div>
                      <span className="text-[#64748B] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel className="mb-4">Proceso</SectionLabel>
              <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">
                Cómo funciona
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {service.howItWorks.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 120}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <span className="text-[#2563EB] font-bold text-sm font-mono">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[#0F172A] font-semibold text-base mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-4">
                ¿Crees que puede encajar con tu empresa?
              </h2>
              <p className="text-[#64748B] text-lg mb-8">
                Cuéntanos tu caso. Primera consulta gratuita y sin compromiso.
                Respondemos en menos de 48 horas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 group text-base"
              >
                Hablar con nosotros
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform duration-150"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
