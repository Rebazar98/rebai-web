import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

const CTA_POINTS = [
  "Te decimos por dónde empezar y qué no merece la pena automatizar todavía.",
  "Recibes una recomendación clara: demo, plan o mejora operativa concreta.",
  "Respuesta humana, sin compromiso y en menos de 48 horas.",
] as const;

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#2563EB] opacity-10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#1B2A4A] opacity-30 blur-[80px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
          <MessageSquare size={12} />
          Hablemos de tu operativa real
        </div>

        <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Si hoy revisais demasiado a mano o llegais tarde a decisiones importantes,
          os ayudamos a detectar el siguiente paso correcto.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
          En una primera conversación aterrizamos si conviene Boletín Inteligente,
          el Asistente de Atención al Ciudadano, el Redactor de Planes
          Urbanísticos o el Radar de Satisfacción Municipal. Sales con una
          recomendación clara, no con una propuesta genérica.
        </p>

        <div className="mx-auto mb-10 grid max-w-4xl gap-3 text-left md:grid-cols-3">
          {CTA_POINTS.map((point) => (
            <div
              key={point}
              className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <CheckCircle2 size={16} className="text-[#93C5FD]" />
              </div>
              <p className="text-sm leading-relaxed text-white/75">{point}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition-all duration-150 hover:bg-[#3B82F6]"
          >
            Quiero una recomendación clara
            <ArrowRight
              size={18}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/servicios"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-150 hover:bg-white/10"
          >
            Ver todos los servicios
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/40">
          Sin compromiso · Respuesta en menos de 48 h · Enfoque práctico y local
        </p>
      </div>
    </section>
  );
}
