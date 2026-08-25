import Image from "next/image";
import { Bot, CheckCircle, Database, FileSearch, Mail } from "lucide-react";

import AnimatedSection from "@/components/shared/animated-section";
import SectionLabel from "@/components/shared/section-label";

const WORKFLOW_STEPS = [
  {
    number: "01",
    icon: FileSearch,
    title: "Revisa el boletín oficial cada día por ti",
    description:
      "El sistema detecta nuevas publicaciones, convocatorias y cambios para que tu equipo no tenga que abrir y revisar el boletín completo a mano.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Filtra y prioriza según tus criterios",
    description:
      "Combina reglas, contexto y clasificación asistida para separar lo que afecta a tu actividad del ruido que no requiere movimiento.",
  },
  {
    number: "03",
    icon: Mail,
    title: "Resume lo relevante y lo deja listo",
    description:
      "Cada publicación importante llega con un resumen claro, más contexto para entender el impacto, los requisitos y el siguiente paso.",
  },
  {
    number: "04",
    icon: Bot,
    title: "Tu equipo consulta al agente y decide",
    description:
      "El agente con base documental permite preguntar por encaje, plazos, requisitos o cambios sin empezar cada vez desde cero.",
  },
] as const;

const SUPPORT_POINTS = [
  {
    icon: Database,
    title: "Base documental consultable",
    description:
      "Las publicaciones y documentos detectados se guardan para que el equipo pueda volver a ellos con contexto.",
  },
  {
    icon: Bot,
    title: "Agente con RAG",
    description:
      "No se limita a mandar alertas. Ayuda a procesar la publicación y a responder preguntas útiles para actuar antes.",
  },
  {
    icon: CheckCircle,
    title: "Salidas accionables",
    description:
      "El objetivo no es leer más. Es decidir antes qué hacer con cada ayuda, cambio o convocatoria relevante.",
  },
] as const;

export default function SolutionBridge() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden border-t border-[#E2E8F0] bg-[#F8FAFC] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <SectionLabel className="mb-6">Cómo funciona</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Boletín Inteligente convierte publicaciones oficiales en decisiones más
              rápidas para tu equipo.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#64748B]">
              No se queda en una alerta. Revisa el boletín, filtra lo que encaja con tus
              criterios, resume cada publicación relevante y pone a tu equipo un agente de
              IA para consultar impacto, requisitos, plazos y siguiente paso.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative mb-14 hidden overflow-hidden rounded-[28px] border border-[#DCE8F5] bg-white/70 lg:mx-[-1.5%] lg:block">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.82)_0%,rgba(248,250,252,0.48)_45%,rgba(248,250,252,0.82)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.92)_0%,rgba(248,250,252,0.56)_10%,rgba(248,250,252,0.14)_24%,rgba(248,250,252,0.08)_76%,rgba(248,250,252,0.44)_90%,rgba(248,250,252,0.86)_100%)]" />
            <div className="relative h-[250px] w-full">
              <Image
                src="/workflow-tech-background.png"
                alt=""
                fill
                className="scale-[1.04] object-cover object-center opacity-[0.4]"
              />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STEPS.map((step, i) => {
            const Icon = step.icon;

            return (
              <AnimatedSection key={step.number} delay={i * 100}>
                <div className="relative h-full rounded-[12px] border border-[#E2E8F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2563EB] bg-[#EFF6FF]">
                      <span className="font-mono text-xs font-bold text-[#2563EB]">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B2A4A] text-white">
                      <Icon size={18} />
                    </div>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="absolute top-11 -right-3 z-10 hidden h-0.5 w-6 bg-[#BFDBFE] lg:block" />
                  )}
                  <h3 className="mb-2 text-base font-semibold text-[#0F172A]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SUPPORT_POINTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="rounded-[18px] border border-[#DCE8F5] bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
