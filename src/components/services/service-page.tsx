import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Bot,
  CheckCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import StructuredData from "@/components/shared/structured-data";
import type { Service } from "@/lib/constants";
import { SITE } from "@/lib/constants";
import { buildServiceContactHref } from "@/lib/contact";

const iconMap = { FileText, Bot, Banknote, ShieldCheck } as const;

const BOPA_AGENT_CAPABILITIES = [
  {
    title: "Filtra solo lo relevante",
    description:
      "Separa lo que de verdad afecta a tu actividad del ruido que no requiere revisión ni movimiento del equipo.",
  },
  {
    title: "Resume con contexto útil",
    description:
      "Convierte cada publicación en una lectura mucho más clara para que el equipo entienda rápido qué ha salido y por qué importa.",
  },
  {
    title: "Responde sobre el documento",
    description:
      "Consulta la base documental para responder sobre requisitos, plazos, encaje, impacto y puntos que conviene validar.",
  },
  {
    title: "Ayuda a decidir antes",
    description:
      "No se queda en la alerta: ayuda a convertir cada publicación en una decisión más útil y un siguiente paso más claro.",
  },
] as const;

const BOPA_CHAT_EXAMPLES = [
  {
    question: "¿Esta publicación aplica a una actividad como la nuestra?",
    answer:
      "El agente te dice si encaja, por qué encaja y qué aspectos conviene revisar antes de mover nada.",
  },
  {
    question: "¿Qué requisitos, plazos o cambios aparecen aquí?",
    answer:
      "Extrae lo importante del documento y te orienta sobre qué revisar con más detalle en vez de empezar desde cero.",
  },
  {
    question: "¿Cuál debería ser el siguiente paso?",
    answer:
      "Sugiere un siguiente paso razonable para que la publicación no se quede en lectura pasiva, sino en acción útil para el equipo.",
  },
] as const;

const BOPA_AGENT_DEMO_SUMMARY = [
  "Convocatoria alineada con explotaciones agrarias y proyectos de modernización del sector.",
  "Plazo abierto y requisitos técnicos que conviene validar antes de preparar la solicitud.",
  "Relevante para equipos que gestionan ayudas o asesoran a clientes que pueden optar a esta línea.",
] as const;

const BOPA_DAY_TO_DAY_IMPACT = [
  "Menos tiempo perdido revisando publicaciones que no aplican",
  "Más rapidez para detectar ayudas, cambios y convocatorias que sí importan",
  "Más criterio para decidir qué revisar, qué mover y qué descartar",
] as const;

const BOPA_FAQS = [
  {
    question: "¿Boletín Inteligente sustituye revisar el boletín oficial por completo?",
    answer:
      "Reduce muchísimo la revisión manual y el ruido, pero no pretende esconder el documento oficial. Lo que hace es llevarte antes a lo importante, con un resumen útil y un agente que ayuda a revisar impacto, requisitos y siguiente paso.",
  },
  {
    question: "¿Cómo decide si una publicación encaja con nuestra actividad?",
    answer:
      "Trabaja con criterios y fuentes ajustados a tu caso, combinando reglas, contexto y clasificación asistida. Así separa mejor lo que afecta a tu actividad de lo que no requiere movimiento del equipo.",
  },
  {
    question: "¿Qué pasa si la publicación o el PDF es muy largo?",
    answer:
      "El sistema no se queda en el titular. Guarda y consulta el contenido documental para que el agente pueda resumir, recuperar contexto y responder preguntas útiles incluso cuando la publicación es larga.",
  },
  {
    question: "¿Qué puede preguntarle el equipo al agente?",
    answer:
      "Puede preguntar si una publicación aplica, qué requisitos o plazos aparecen, qué cambia respecto a la situación anterior o qué siguiente paso conviene valorar. La idea es ayudar a procesar la publicación, no solo leerla.",
  },
  {
    question: "¿Encaja mejor para una sola persona o para varios usuarios?",
    answer:
      "Encaja en ambos casos. Pro está pensado para un responsable principal que quiere dejar de revisar el boletín a mano. Equipo y Empresa encajan mejor cuando varias personas necesitan compartir seguimiento, consulta y criterio.",
  },
] as const;

const BOPA_TARGET_CLIENTS = [
  "Ingenierías, consultoras y asesorías con seguimiento normativo recurrente",
  "Empresas que no pueden permitirse perder ayudas, cambios o convocatorias",
  "Equipos que necesitan procesar publicaciones sin abrir el boletín completo cada día",
  "Responsables técnicos que quieren más contexto antes de mover un expediente o una solicitud",
] as const;

const BOPA_FEATURES = [
  "Revisión automática diaria del boletín oficial según tus criterios",
  "Resumen claro de cada publicación relevante para tu actividad",
  "Agente con base RAG sobre publicaciones y documentos asociados",
  "Chat web para consultar impacto, requisitos, plazos o encaje",
  "Alerta diaria por email con lo importante para tu equipo",
  "Histórico consultable y exportable de publicaciones detectadas",
] as const;

const BOPA_HOW_IT_WORKS = [
  {
    step: 1,
    title: "Definimos qué debe vigilar el sistema",
    description:
      "Configuramos contigo qué tipos de publicación, palabras clave, organismos o criterios deben activar el seguimiento.",
  },
  {
    step: 2,
    title: "Filtra, prioriza y resume",
    description:
      "Boletín Inteligente revisa el boletín, detecta lo importante y lo convierte en una salida mucho más clara para el equipo.",
  },
  {
    step: 3,
    title: "Tu equipo consulta y decide",
    description:
      "El equipo recibe alertas, consulta al agente, revisa el historial y decide el siguiente paso con más criterio y menos tiempo perdido.",
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
    ? "Quiero ver el agente en acción"
    : service.defaultLeadType === "demo"
      ? "Solicitar demo"
      : "Solicitar diagnóstico";

  const heroSupport = isBopa
    ? "Boletín Inteligente revisa el boletín cada día, detecta las publicaciones que encajan con tus criterios y se las devuelve a tu equipo ya filtradas, resumidas y listas para consultar con un agente de IA."
    : "Pensado para equipos que necesitan menos carga manual, más trazabilidad y una forma más rápida de mover expedientes, documentación o decisiones operativas.";

  const resolutionTitle = isBopa ? "Lo que hace el agente por tu equipo" : "Qué resuelve";
  const featuresTitle = isBopa ? "Lo que recibe tu equipo" : "Incluye";
  const processTitle = isBopa ? "Cómo trabaja Boletín Inteligente" : "Cómo se implanta";
  const ctaTitle = isBopa
    ? "¿Quieres ver cómo encaja en tu actividad?"
    : "¿Quieres ver si encaja con tu operativa?";
  const ctaBody = isBopa
    ? "Te enseñamos cómo Boletín Inteligente puede detectar, resumir y ayudarte a procesar publicaciones de interés sin revisar el boletín a mano."
    : "Cuéntanos qué proceso, expediente o carga administrativa quieres mejorar. Te diremos si tiene sentido empezar por este servicio y cuál sería el siguiente paso más razonable.";
  const displayTagline = isBopa
    ? "El agente de IA que detecta lo importante en el boletín oficial y ayuda a tu equipo a decidir qué hacer"
    : service.tagline;
  const displayDescription = isBopa
    ? "No se limita a enviar alertas. Filtra ayudas, convocatorias y cambios relevantes, resume el contenido clave de cada publicación y deja a tu equipo un agente con base documental para preguntar por encaje, plazos, requisitos y siguiente paso."
    : service.description;
  const displayFeatures = isBopa ? BOPA_FEATURES : service.features;
  const displayTargetClients = isBopa ? BOPA_TARGET_CLIENTS : service.targetClients;
  const displayHowItWorks = isBopa ? BOPA_HOW_IT_WORKS : service.howItWorks;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    url: `${SITE.url}/servicios/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE.url}/servicios` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE.url}/servicios/${service.slug}`,
      },
    ],
  };

  const faqSchema = isBopa
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: BOPA_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-white pt-24">
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      {faqSchema ? <StructuredData data={faqSchema} /> : null}
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
                    Convierte cada publicación en contexto útil para actuar antes
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-[#64748B]">
                    La diferencia no está en recibir un aviso. Está en entender rápido si
                    una publicación aplica, qué cambia, qué requisitos trae y qué debería
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
                        Así convierte una publicación en una decisión más clara
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
                        Publicación detectada para tu perfil
                      </div>
                      <p className="mb-3 text-lg font-semibold">
                        Nueva ayuda para modernización de explotaciones agrarias
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
                        Conversación con el agente
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
                        En el día a día
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
                <SectionLabel className="mb-4">FAQ de Boletín Inteligente</SectionLabel>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A]">
                  Lo que más suelen preguntarnos antes de empezar
                </h2>
                <p className="text-lg leading-relaxed text-[#64748B]">
                  Estas son las dudas más habituales cuando un equipo quiere dejar de
                  revisar el boletín oficial a mano, pero necesita entender bien cómo ayuda el
                  agente y qué puede esperar de la solución.
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
              <p className="mt-6 text-sm text-[#94A3B8]">
                ¿Tu equipo va a usar un sistema de IA por primera vez?{" "}
                <Link
                  href="/alfabetizacion-ia"
                  className="font-medium text-[#2563EB] hover:underline"
                >
                  Lee qué exige el art. 4 del Reglamento de IA
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
