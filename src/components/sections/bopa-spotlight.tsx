import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  FileText,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/shared/animated-section";
import SectionLabel from "@/components/shared/section-label";
import { SERVICES } from "@/lib/constants";
import { buildContactHref } from "@/lib/contact";

const BOPA_SERVICE = SERVICES.find((service) => service.slug === "bopa");

const VALUE_POINTS = [
  {
    icon: Search,
    title: "Filtra lo que si encaja con tu actividad",
    description:
      "El agente revisa las publicaciones del boletín oficial y separa el ruido de lo que de verdad puede afectar a tu empresa.",
  },
  {
    icon: Sparkles,
    title: "Resume y explica cada publicacion",
    description:
      "Cada publicacion relevante llega resumida, con contexto para tu caso y lista para consultarla sin leer el documento entero.",
  },
  {
    icon: Mail,
    title: "Ayuda al equipo a decidir que hacer",
    description:
      "El equipo puede preguntar al chat, validar requisitos, plazos o impacto y convertir la publicacion en una accion concreta.",
  },
] as const;

export default function BopaSpotlight() {
  if (!BOPA_SERVICE) {
    return null;
  }

  return (
    <section
      id="bopa"
      className="scroll-mt-24 border-y border-[#DCE8F5] bg-[linear-gradient(180deg,#EEF6FF_0%,#F8FBFF_100%)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <AnimatedSection direction="left">
            <div className="max-w-2xl">
              <SectionLabel className="mb-6">Solucion especializada</SectionLabel>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B2A4A] shadow-[0_10px_30px_rgba(27,42,74,0.18)]">
                  <FileText size={26} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
                    Boletines oficiales
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                    {BOPA_SERVICE.name}
                  </h2>
                </div>
              </div>

              <p className="mb-5 text-xl leading-relaxed text-[#36506F]">
                Un agente de IA que filtra, resume y te ayuda a procesar las
                publicaciones del boletín oficial que si importan para tu empresa.
              </p>

              <p className="mb-6 text-base leading-relaxed text-[#64748B]">
                Si tu actividad depende de ayudas, convocatorias o cambios
                normativos, el problema no es solo detectarlos: es entender si
                aplican, que implican y que tiene que hacer el equipo. TRAZEV
                convierte cada publicacion relevante en una salida util,
                consultable y accionable.
              </p>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-white px-4 py-2 text-sm font-semibold text-[#1D4ED8] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                <CheckCircle size={15} />
                Menos lectura manual y mas decisiones con contexto
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {BOPA_SERVICE.targetClients.slice(0, 4).map((target) => (
                  <span
                    key={target}
                    className="rounded-full border border-[#D8E7F8] bg-white px-3 py-1.5 text-xs font-medium text-[#36506F]"
                  >
                    {target}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {VALUE_POINTS.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <AnimatedSection key={point.title} delay={index * 90}>
                      <div className="h-full rounded-[18px] border border-[#D8E7F8] bg-white p-5 shadow-[0_10px_28px_rgba(37,99,235,0.08)]">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF]">
                          <Icon size={18} className="text-[#2563EB]" />
                        </div>
                        <h3 className="mb-2 text-sm font-semibold text-[#0F172A]">
                          {point.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#64748B]">
                          {point.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/servicios/bopa"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] transition-colors duration-150 hover:text-[#1E40AF]"
                >
                  Ver ficha completa de Boletín Inteligente
                  <ExternalLink size={15} />
                </Link>
                <span className="text-sm text-[#64748B]">
                  Una solucion concreta dentro de la propuesta de automatizacion
                  de TRAZEV.
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="overflow-hidden rounded-[32px] border border-[#D8E7F8] bg-[#14233F] shadow-[0_24px_80px_rgba(20,35,63,0.18)]">
              <div className="border-b border-white/10 bg-[linear-gradient(135deg,#1B2A4A_0%,#243A65_100%)] px-7 py-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93C5FD]">
                      Vista de producto
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Asi ayuda el agente a tu equipo
                    </h3>
                  </div>
                  <div className="rounded-full border border-[#60A5FA]/40 bg-[#1E3A8A]/30 px-3 py-1 text-xs font-semibold text-[#BFDBFE]">
                    con IA
                  </div>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-white/70">
                  Detecta publicaciones relevantes, las resume para tu caso y
                  permite que el equipo las consulte en un chat antes de mover
                  un expediente o descartar una oportunidad.
                </p>
              </div>

              <div className="space-y-5 bg-[#F8FBFF] p-7">
                <div className="rounded-[24px] border border-[#D7E7FB] bg-white shadow-[0_18px_45px_rgba(37,99,235,0.08)]">
                  <div className="border-b border-[#E2E8F0] px-5 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                          De: Boletín Inteligente
                        </p>
                        <h4 className="mt-2 text-lg font-semibold text-[#0F172A]">
                          Publicacion procesada por el agente
                        </h4>
                      </div>
                      <span className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
                        09:00
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#F59E0B]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">
                        Convocatoria
                      </span>
                      <span className="rounded-full border border-[#D7E7FB] px-3 py-1 text-xs font-semibold text-[#36506F]">
                        Prioridad alta
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-[#0F172A]">
                      Nueva convocatoria de subvenciones para modernizacion
                      y eficiencia energetica
                    </h4>

                    <p className="text-sm leading-relaxed text-[#64748B]">
                      Detectada en el boletín oficial de hoy. El agente la cruza con los
                      criterios definidos para tu organizacion y la marca como
                      relevante para revisar.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[18px] border border-[#DBEAFE] bg-[#EFF6FF] p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1D4ED8]">
                          Que entiende el agente
                        </p>
                        <p className="text-sm leading-relaxed text-[#36506F]">
                          Que afecta a tu ambito de actividad, que el plazo
                          esta abierto y que encaja con el perfil configurado
                          para tu organizacion.
                        </p>
                      </div>
                      <div className="rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                          Que puede hacer tu equipo
                        </p>
                        <p className="text-sm leading-relaxed text-[#36506F]">
                          Consultar la publicacion en el chat, validar si aplica
                          y decidir si se abre revision, seguimiento o
                          expediente.
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 text-sm text-[#36506F]">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="mt-0.5 shrink-0 text-[#2563EB]"
                        />
                        Resumen claro de la publicacion y su impacto potencial
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="mt-0.5 shrink-0 text-[#2563EB]"
                        />
                        Chat para preguntar por requisitos, plazos o encaje
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="mt-0.5 shrink-0 text-[#2563EB]"
                        />
                        Siguiente paso sugerido para el equipo responsable
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-[#D7E7FB] bg-white p-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                      Quiero evaluar el servicio
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-[#36506F]">
                      Agenda una demo contextual y vemos como puede ayudarte el
                      agente a procesar publicaciones de interes sin revisar el
                      boletín oficial a mano.
                    </p>
                    <Link
                      href={buildContactHref({ servicio: "bopa", tipo: "demo" })}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8]"
                    >
                      Solicitar demo
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="rounded-[20px] border border-[#1D4ED8]/15 bg-[#F4F8FF] p-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1D4ED8]">
                      Ya soy cliente
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-[#36506F]">
                      Entra directamente al panel para revisar publicaciones,
                      hablar con el agente y ajustar tu seguimiento.
                    </p>
                    <Link
                      href="/panel/login"
                      className="inline-flex items-center justify-center rounded-xl border border-[#1D4ED8] px-5 py-3 font-semibold text-[#1D4ED8] transition-colors duration-150 hover:bg-white"
                    >
                      Acceso clientes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
