import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Target, Cpu } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import CTABanner from "@/components/sections/cta-banner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "RebAI es una empresa asturiana especializada en automatización de procesos con IA para el sector técnico y rural del Principado de Asturias.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        {/* Header */}
        <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel className="mb-6">Sobre nosotros</SectionLabel>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-6">
                Somos de Asturias.
                <br />
                <span className="text-[#2563EB]">Construimos para Asturias.</span>
              </h1>
              <p className="text-[#64748B] text-xl leading-relaxed">
                RebAI nació de una convicción clara: las empresas técnicas y
                rurales asturianas merecen herramientas de automatización que
                entiendan su realidad, no soluciones genéricas adaptadas a la
                fuerza.
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                      Por qué existimos
                    </h2>
                    <p className="text-[#64748B] leading-relaxed mb-4">
                      El tejido empresarial técnico del Principado —
                      ingenierías, consultoras, cooperativas ganaderas y
                      agrícolas — convive a diario con una carga burocrática
                      enorme: el BOPA, las convocatorias del IDEPA, la
                      normativa ambiental, los expedientes de contratación
                      pública.
                    </p>
                    <p className="text-[#64748B] leading-relaxed mb-4">
                      Estas empresas no necesitan grandes presupuestos de
                      transformación digital ni consultoras que vendan
                      estrategias de cinco años. Necesitan herramientas que
                      funcionen mañana y que entiendan qué es el BOPA y cómo
                      afecta a un proyecto de ingeniería ambiental en el
                      occidente de Asturias.
                    </p>
                    <p className="text-[#64748B] leading-relaxed">
                      Para eso existe RebAI. Empresa local. Conocimiento
                      regional. Tecnología que trabaja.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                      Nuestro enfoque
                    </h2>
                    <p className="text-[#64748B] leading-relaxed">
                      Cada proyecto empieza con una pregunta simple: ¿qué
                      proceso consume más tiempo a tu equipo y menos valor
                      genera? A partir de ahí, construimos la automatización
                      mínima necesaria para resolver ese problema — sin
                      sobrediseñar, sin prometidas transformaciones totales.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: "Especialización asturiana",
                      description:
                        "Conocemos el BOPA, el IDEPA, el SADEI y el tejido empresarial del Principado. No adaptamos plantillas — construimos desde el conocimiento local.",
                    },
                    {
                      icon: Target,
                      title: "Resultados concretos primero",
                      description:
                        "No empezamos por la tecnología. Empezamos por el problema y las métricas de éxito. ¿Cuántas horas se pueden ahorrar? ¿Cuántos documentos automatizar?",
                    },
                    {
                      icon: Cpu,
                      title: "IA donde aporta valor",
                      description:
                        "Usamos inteligencia artificial donde tiene sentido real, no para impresionar. Si la solución óptima es más simple, es la que construimos.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-6 bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <h3 className="text-[#0F172A] font-semibold text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#64748B] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="p-6 bg-[#1B2A4A] rounded-[12px] text-white">
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Ubicación
                    </div>
                    <div className="font-semibold">{SITE.location}</div>
                    <div className="text-white/60 text-sm mt-1">
                      Empresa 100% asturiana
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                  Sectores con los que trabajamos
                </h2>
                <p className="text-[#64748B]">
                  Del BOPA a los boletines estatales, de las cooperativas a las
                  ingenierías técnicas.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Ingenierías técnicas",
                "Consultoras ambientales",
                "Cooperativas agrícolas",
                "Cooperativas ganaderas",
                "Empresas forestales",
                "Constructoras",
                "Despachos jurídicos",
                "Administraciones locales",
              ].map((sector, i) => (
                <AnimatedSection key={sector} delay={i * 50}>
                  <div className="bg-white rounded-lg border border-[#E2E8F0] px-4 py-3 text-center text-[#0F172A] text-sm font-medium">
                    {sector}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                ¿Hablamos?
              </h2>
              <p className="text-[#64748B] text-lg mb-8 max-w-xl mx-auto">
                Primera consulta gratuita. Sin compromiso. Te respondemos en
                menos de 48 horas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 group"
              >
                Contactar con RebAI
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform duration-150"
                />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
