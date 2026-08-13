import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Map,
  MessageCircle,
  Radar,
  type LucideIcon,
} from "lucide-react";

import SectionLabel from "@/components/shared/section-label";
import { SITE, SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Map,
  MessageCircle,
  Radar,
};

const HERO_SERVICES = SERVICES.filter((service) => service.category === "principal");

const VALUE_POINTS = [
  "Detecta antes que cambia, que te afecta y que necesita movimiento del equipo.",
  "Reduce revision manual, retrasos y errores con mas contexto util para decidir.",
  "Empieza por una demo, un diagnostico o una mejora concreta, sin rehacer toda tu operativa.",
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1B2A4A 1px, transparent 1px), linear-gradient(to right, #1B2A4A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full bg-[#2563EB] opacity-[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#1B2A4A] opacity-[0.05] blur-[100px]" />

      <div className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[58%] lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/hero-tech-background.png"
            alt=""
            fill
            priority
            className="object-contain object-right opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.94)_22%,rgba(255,255,255,0.62)_48%,rgba(255,255,255,0.16)_72%,rgba(255,255,255,0)_100%)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto mb-16 max-w-5xl text-center lg:mb-20">
          <SectionLabel className="mb-6">
            Menos revision manual. Mas decisiones claras.
          </SectionLabel>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.06] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-[5rem]">
            IA y automatizacion para que tu equipo deje de perseguir
            publicaciones, expedientes y tareas repetitivas.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <p className="text-lg leading-relaxed text-[#4B6480] sm:text-xl">
              TRAZEV ayuda a ayuntamientos y empresas privadas a detectar lo
              importante, entender antes el impacto y trabajar con mas
              trazabilidad, mas seguridad y mejor control.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8]"
              >
                Quiero una recomendacion clara
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl border border-[#CBDCF2] bg-white px-6 py-3.5 font-semibold text-[#1D4ED8] transition-colors duration-150 hover:bg-[#EFF6FF]"
              >
                Ver servicios
              </Link>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B]">
              Diagnostico inicial sin compromiso · Respuesta en menos de 48 h ·{" "}
              {SITE.location}
            </p>

            <ul className="mt-8 space-y-3">
              {VALUE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <CheckCircle2 size={14} className="text-[#2563EB]" />
                  </div>
                  <span className="text-sm leading-relaxed text-[#36506F]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-[#D9E6F6] bg-[linear-gradient(180deg,rgba(16,32,58,0.94)_0%,rgba(27,42,74,0.92)_100%)] p-7 shadow-[0_24px_80px_rgba(16,32,58,0.18)] backdrop-blur-[3px] lg:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93C5FD]">
                    Donde gana tiempo tu equipo
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Cuatro formas de reducir carga y decidir antes
                  </h2>
                </div>
                <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-[#DBEAFE]">
                  Impacto primero
                </div>
              </div>

              <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/70">
                No vendemos tecnologia por vender. Aplicamos IA y automatizacion donde
                reducen trabajo manual, acortan tiempos y mejoran la capacidad real del
                equipo para actuar.
              </p>

              <div className="grid gap-3">
                {HERO_SERVICES.map((service) => {
                  const Icon = iconMap[service.icon];

                  return (
                    <div
                      key={service.slug}
                      className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          {Icon && <Icon size={18} className="text-white" />}
                        </div>
                        <div>
                          <h3 className="mb-1 text-sm font-semibold text-white">
                            {service.name}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/65">
                            {service.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Menos carga administrativa",
                  "Mas control operativo",
                  "Implantacion realista",
                  "Cobertura nacional",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs font-medium text-[#DBEAFE]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
