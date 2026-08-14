import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Bot,
  CheckCircle,
  FileText,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import type { Service } from "@/lib/constants";
import { buildServiceContactHref } from "@/lib/contact";

const iconMap = { FileText, Bot, Banknote, ShieldCheck, GraduationCap } as const;

const BOPA_AGENT_CAPABILITIES = [
  {
    title: "Filtra solo lo relevante",
    description:
      "Separa lo que de verdad afecta a tu actividad del ruido que no requiere revision ni movimiento del equipo.",
  },
  {
    title: "Resume con contexto util",
    description:
      "Convierte cada publicacion en una lectura mucho mas clara para que el equipo entienda rapido que ha salido y por que importa.",
  },
  {
    title: "Responde sobre el documento",
    description:
      "Consulta la base documental para responder sobre requisitos, plazos, encaje, impacto y puntos que conviene validar.",
  },
  {
    title: "Ayuda a decidir antes",
    description:
      "No se queda en la alerta: ayuda a convertir cada publicacion en una decision mas util y un siguiente paso mas claro.",
  },
] as const;

const BOPA_CHAT_EXAMPLES = [
  {
    question: "Esta publicacion aplica a una actividad como la nuestra?",
    answer:
      "El agente te dice si encaja, por que encaja y que aspectos conviene revisar antes de mover nada.",
  },
  {
    question: "Que requisitos, plazos o cambios aparecen aqui?",
    answer:
      "Extrae lo importante del documento y te orienta sobre que revisar con mas detalle en vez de empezar desde cero.",
  },
  {
    question: "Cual deberia ser el siguiente paso?",
    answer:
      "Sugiere un siguiente paso razonable para que la publicacion no se quede en lectura pasiva, sino en accion util para el equipo.",
  },
] as const;

const BOPA_AGENT_DEMO_SUMMARY = [
  "Convocatoria alineada con explotaciones agrarias y proyectos de modernizacion del sector.",
  "Plazo abierto y requisitos tecnicos que conviene validar antes de preparar la solicitud.",
  "Relevante para equipos que gestionan ayudas o asesoran a clientes que pueden optar a esta linea.",
] as const;

const BOPA_DAY_TO_DAY_IMPACT = [
  "Menos tiempo perdido revisando publicaciones que no aplican",
  "Mas rapidez para detectar ayudas, cambios y convocatorias que si importan",
  "Mas criterio para decidir que revisar, que mover y que descartar",
] as const;

const BOPA_FAQS = [
  {
    question: "BOPA Inteligente sustituye revisar el BOPA por completo?",
    answer:
      "Reduce muchisimo la revision manual y el ruido, pero no pretende esconder el documento oficial. Lo que hace es llevarte antes a lo importante, con un resumen util y un agente que ayuda a revisar impacto, requisitos y siguiente paso.",
  },
  {
    question: "Como decide si una publicacion encaja con nuestra actividad?",
    answer:
      "Trabaja con criterios y fuentes ajustados a tu caso, combinando reglas, contexto y clasificacion asistida. Asi separa mejor lo que afecta a tu actividad de lo que no requiere movimiento del equipo.",
  },
  {
    question: "Que pasa si la publicacion o el PDF es muy largo?",
    answer:
      "El sistema no se queda en el titular. Guarda y consulta el contenido documental para que el agente pueda resumir, recuperar contexto y responder preguntas utiles incluso cuando la publicacion es larga.",
  },
  {
    question: "Que puede preguntarle el equipo al agente?",
    answer:
      "Puede preguntar si una publicacion aplica, que requisitos o plazos aparecen, que cambia respecto a la situacion anterior o que siguiente paso conviene valorar. La idea es ayudar a procesar la publicacion, no solo leerla.",
  },
  {
    question: "Encaja mejor para una sola persona o para varios usuarios?",
    answer:
      "Encaja en ambos casos. Pro esta pensado para un responsable principal que quiere dejar de revisar el boletin a mano. Equipo y Empresa encajan mejor cuando varias personas necesitan compartir seguimiento, consulta y criterio.",
  },
] as const;

const BOPA_TARGET_CLIENTS = [
  "Ingenierias, consultoras y asesorias con seguimiento normativo recurrente",
  "Empresas que no pueden permitirse perder ayudas, cambios o convocatorias",
  "Equipos que necesitan procesar publicaciones sin abrir el boletin completo cada dia",
  "Responsables tecnicos que quieren mas contexto antes de mover un expediente o una solicitud",
] as const;

const BOPA_FEATURES = [
  "Revision automatica diaria del BOPA segun tus criterios",
  "Resumen claro de cada publicacion relevante para tu actividad",
  "Agente con base RAG sobre publicaciones y documentos asociados",
  "Chat web para consultar impacto, requisitos, plazos o encaje",
  "Alerta diaria por email con lo importante para tu equipo",
  "Historico consultable y exportable de publicaciones detectadas",
] as const;

const BOPA_HOW_IT_WORKS = [
  {
    step: 1,
    title: "Definimos que debe vigilar el sistema",
    description:
      "Configuramos contigo que tipos de publicacion, palabras clave, organismos o criterios deben activar el seguimiento.",
  },
  {
    step: 2,
    title: "Filtra, prioriza y resume",
    description:
      "BOPA Inteligente revisa el boletin, detecta lo importante y lo convierte en una salida mucho mas clara para el equipo.",
  },
  {
    step: 3,
    title: "Tu equipo consulta y decide",
    description:
      "El equipo recibe alertas, consulta al agente, revisa el historial y decide el siguiente paso con mas criterio y menos tiempo perdido.",
  },
] as const;

type ServicePageProps = {
  service: Service;
};

export default function ServicePage({ service }: ServicePageProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const isBopa = service.slug === "bopa";
  const ctaHref = buildServiceContactHref(service);
  const ctaLabel = isBopa
    ? "Quiero ver el agente en accion"
    : service.defaultLeadType === "demo"
      ? "Solicitar demo"
      : "Solicitar diagnostico";

  const heroSupport = isBopa
    ? "BOPA Inteligente revisa el boletin cada dia, detecta las publicaciones que encajan con tus criterios y se las devuelve a tu equipo ya filtradas, resumidas y listas para consultar con un agente de IA."
    : "Pensado para equipos que necesitan menos carga manual, mas trazabilidad y una forma mas rapida de mover expedientes, documentacion o decisiones operativas.";

  const resolutionTitle = isBopa ? "Lo que hace el agente por tu equipo" : "Que resuelve";
  const featuresTitle = isBopa ? "Lo que recibe tu equipo" : "Incluye";
  const processTitle = isBopa ? "Como trabaja BOPA Inteligente" : "Como se implanta";
  const ctaTitle = isBopa
    ? "Quieres ver como encaja en tu actividad?"
    : "Quieres ver si encaja con tu operativa?";
  const ctaBody = isBopa
    ? "Te ensenamos como BOPA Inteligente puede detectar, resumir y ayudarte a procesar publicaciones de interes sin revisar el boletin a mano."
    : "Cuentanos que proceso, expediente o carga administrativa quieres mejorar. Te diremos si tiene sentido empezar por este servicio y cual seria el siguiente paso mas razonable.";
  const displayTagline = isBopa
    ? "El agente de IA que detecta lo importante en el BOPA y ayuda a tu equipo a decidir que hacer"
    : service.tagline;
  const displayDescription = isBopa
    ? "No se limita a enviar alertas. Filtra ayudas, convocatorias y cambios relevantes, resume el contenido clave de cada publicacion y deja a tu equipo un agente con base documental para preguntar por encaje, plazos, requisitos y siguiente paso."
    : service.description;
  const displayFeatures = isBopa ? BOPA_FEATURES : service.features;
  const displayTargetClients = isBopa ? BOPA_TARGET_CLIENTS : service.targetClients;
  const displayHowItWorks = isBopa ? BOPA_HOW_IT_WORKS : service.howItWorks;

  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">Servicio</SectionLabel>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B2A4A]">
                {Icon ? <Icon size={26} className="text-white" /> : null}
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
                  {service.name}
                </h1>
              </div>
            </div>

            <p className="mb-6 text-xl leading-relaxed text-[#64748B]">{displayTagline}</p>
            <p className="max-w-2xl text-base leading-relaxed text-[#36506F]">
              {heroSupport}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-[#F0FDF4] px-3 py-1.5 text-sm font-semibold text-[#16A34A]">
              <CheckCircle size={14} />
              {service.benefit}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <AnimatedSection direction="left">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#0F172A]">{resolutionTitle}</h2>
                <p className="mb-8 text-lg leading-relaxed text-[#64748B]">
                  {displayDescription}
                </p>

                <h3 className="mb-4 text-base font-semibold text-[#0F172A]">
                  Encaja especialmente si...
                </h3>
                <ul className="space-y-2">
                  {displayTargetClients.map((client) => (
                    <li
                      key={client}
                      className="flex items-start gap-2.5 text-sm text-[#64748B]"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-8">
                <h3 className="mb-6 text-base font-semibold text-[#0F172A]">
                  {featuresTitle}
                </h3>
                <ul className="space-y-3">
                  {displayFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF]">
                        <CheckCircle size={11} className="text-[#2563EB]" />
                      </div>
                      <span className="text-sm leading-relaxed text-[#64748B]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {isBopa ? (
        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <AnimatedSection direction="left">
                <div>
                  <SectionLabel className="mb-4">Agente de IA</SectionLabel>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A]">
                    Convierte cada publicacion en contexto util para actuar antes
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-[#64748B]">
                    La diferencia no esta en recibir un aviso. Esta en entender rapido si
                    una publicacion aplica, que cambia, que requisitos trae y que deberia
                    hacer ahora el equipo responsable.
                  </p>

                  <div className="space-y-4">
                    {BOPA_AGENT_CAPABILITIES.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[16px] border border-[#D9E6F6] bg-white p-5"
                      >
                        <h3 className="mb-2 text-base font-semibold text-[#0F172A]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#64748B]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="rounded-[24px] border border-[#1B2A4A]/10 bg-[#0F172A] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
                        Demo del agente
                      </p>
                      <h3 className="text-2xl font-semibold text-white">
                        Asi convierte una publicacion en una decision mas clara
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                      chat web + RAG
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[20px] border border-white/10 bg-white p-5 text-[#0F172A]">
                      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                        <FileText size={14} className="text-[#2563EB]" />
                        Publicacion detectada para tu perfil
                      </div>
                      <p className="mb-3 text-lg font-semibold">
                        Nueva ayuda para modernizacion de explotaciones agrarias
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
                          Convocatoria
                        </span>
                        <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#C2410C]">
                          Prioridad alta
                        </span>
                        <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#64748B]">
                          Encaja con el perfil definido
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-[#2563EB]/20 bg-[#2563EB]/10 p-5">
                      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#93C5FD]">
                        <Bot size={14} className="text-[#93C5FD]" />
                        Resumen del agente
                      </div>
                      <ul className="space-y-2">
                        {BOPA_AGENT_DEMO_SUMMARY.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#60A5FA]" />
                            <span className="text-sm leading-relaxed text-white/88">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 rounded-[20px] border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#93C5FD]">
                        <Bot size={14} className="text-[#93C5FD]" />
                        Conversacion con el agente
                      </div>

                      {BOPA_CHAT_EXAMPLES.map((item) => (
                        <div key={item.question} className="space-y-2">
                          <div className="ml-auto max-w-[92%] rounded-[16px] rounded-br-[6px] bg-[#2563EB] px-4 py-3 text-sm font-medium leading-relaxed text-white">
                            {item.question}
                          </div>
                          <div className="max-w-[96%] rounded-[16px] rounded-bl-[6px] border border-white/10 bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/82">
                            {item.answer}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                        En el dia a dia
                      </p>
                      <ul className="space-y-2">
                        {BOPA_DAY_TO_DAY_IMPACT.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#60A5FA]" />
                            <span className="text-sm leading-relaxed text-white/85">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-14 text-center">
              <SectionLabel className="mb-4">Proceso</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                {processTitle}
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            {displayHowItWorks.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 120}>
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#2563EB] bg-white shadow-sm">
                    <span className="font-mono text-sm font-bold text-[#2563EB]">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {isBopa ? (
        <section className="border-b border-[#E2E8F0] bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <AnimatedSection>
              <div className="mb-12 max-w-3xl">
                <SectionLabel className="mb-4">FAQ de BOPA Inteligente</SectionLabel>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A]">
                  Lo que mas suelen preguntarnos antes de empezar
                </h2>
                <p className="text-lg leading-relaxed text-[#64748B]">
                  Estas son las dudas mas habituales cuando un equipo quiere dejar de
                  revisar el BOPA a mano, pero necesita entender bien como ayuda el
                  agente y que puede esperar de la solucion.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {BOPA_FAQS.map((faq, index) => (
                <AnimatedSection key={faq.question} delay={index * 80}>
                  <div className="h-full rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                    <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">
                      {faq.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#64748B]">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A]">
                {ctaTitle}
              </h2>
              <p className="mb-8 text-lg text-[#64748B]">{ctaBody}</p>
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition-all duration-150 hover:bg-[#1D4ED8]"
              >
                {ctaLabel}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
