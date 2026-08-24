import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Target, Cpu } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "TRAZEV es una empresa especializada en automatización, IA aplicada y trazabilidad para ayuntamientos y empresas privadas en toda España.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel className="mb-6">Sobre nosotros</SectionLabel>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
                Automatización con criterio.
                <br />
                <span className="text-[#2563EB]">Para ayuntamientos y empresas de toda España.</span>
              </h1>
              <p className="text-xl leading-relaxed text-[#64748B]">
                TRAZEV nace de una convicción clara: las administraciones
                públicas y las empresas que trabajan con ellas merecen
                soluciones que reduzcan carga administrativa y mejoren la
                operativa, no herramientas genéricas adaptadas a la fuerza.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <AnimatedSection direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-[#0F172A]">
                      Por qué existimos
                    </h2>
                    <p className="mb-4 leading-relaxed text-[#64748B]">
                      Los ayuntamientos y las empresas que dependen de la
                      administración pública conviven a diario con una carga
                      burocrática enorme: boletines oficiales, licitaciones,
                      expedientes urbanísticos, atención al ciudadano y
                      procesos que deberían estar más automatizados.
                    </p>
                    <p className="mb-4 leading-relaxed text-[#64748B]">
                      Estas organizaciones no necesitan grandes presupuestos de
                      transformación digital ni consultoras que vendan
                      estrategias de cinco años. Necesitan herramientas que
                      funcionen pronto, encajen en su operativa y entiendan qué
                      impacto tiene un cambio normativo o un cuello de botella
                      administrativo en el trabajo de cada semana.
                    </p>
                    <p className="leading-relaxed text-[#64748B]">
                      Para eso existe TRAZEV: criterio técnico, trazabilidad y
                      tecnología orientada a ahorrar tiempo y mejorar
                      decisiones, tanto en administración pública como en
                      empresa privada.
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-[#0F172A]">
                      Nuestro enfoque
                    </h2>
                    <p className="leading-relaxed text-[#64748B]">
                      Cada proyecto empieza con una pregunta simple: ¿qué
                      proceso consume más tiempo, genera más fricción o retrasa
                      más al equipo? A partir de ahí, construimos la mejora
                      mínima necesaria para obtener impacto real, sin
                      sobrediseñar ni prometer transformaciones irreales.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="space-y-4">
                  {[
                    {
                      icon: Landmark,
                      title: "Especialización en administración pública y empresa técnica",
                      description:
                        "Conocemos los boletines oficiales, la operativa municipal y los procesos administrativos de ingenierías y asesorías. No adaptamos plantillas genéricas: construimos desde el conocimiento real del sector.",
                    },
                    {
                      icon: Target,
                      title: "Resultados concretos primero",
                      description:
                        "No empezamos por la tecnología. Empezamos por el problema y las métricas de éxito: cuánto tiempo se puede ahorrar y cuántos pasos se pueden automatizar.",
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
                      className="flex gap-4 rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#BFDBFE] bg-[#EFF6FF]">
                        <item.icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-[#0F172A]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#64748B]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-[12px] bg-[#1B2A4A] p-6 text-white">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                      Cobertura
                    </div>
                    <div className="font-semibold">{SITE.location}</div>
                    <div className="mt-1 text-sm text-white/60">
                      Ayuntamientos y empresas en todo el territorio nacional
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#0F172A]">
                  Sectores con los que trabajamos
                </h2>
                <p className="text-[#64748B]">
                  De la administración local a las empresas que trabajan con
                  ella cada día.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "Ayuntamientos y entidades locales",
                "Mancomunidades y consorcios",
                "Oficinas técnicas de urbanismo",
                "Ingenierías técnicas",
                "Asesorías y consultoras",
                "Empresas constructoras",
                "Despachos jurídicos",
                "Empresas con licitación pública",
              ].map((sector, i) => (
                <AnimatedSection key={sector} delay={i * 50}>
                  <div className="rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-center text-sm font-medium text-[#0F172A]">
                    {sector}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 text-center lg:px-8">
            <AnimatedSection>
              <h2 className="mb-4 text-3xl font-bold text-[#0F172A]">
                ¿Hablamos?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-[#64748B]">
                Primera consulta gratuita. Sin compromiso. Te respondemos en
                menos de 48 horas.
              </p>
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 font-semibold text-white transition-all duration-150 hover:bg-[#1D4ED8]"
              >
                Contactar con TRAZEV
                <ArrowRight
                  size={18}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
