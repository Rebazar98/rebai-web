import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Alfabetización en IA (art. 4 del Reglamento de IA)",
  description:
    "Qué exige el art. 4 del Reglamento de IA sobre alfabetización en IA, a quién aplica y qué implica en la práctica para ayuntamientos y empresas que usan sistemas de IA.",
};

export default function AlfabetizacionIAPage() {
  return (
    <div className="min-h-screen bg-white pb-32 pt-24">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          Introducción al tema
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
          Alfabetización en IA: qué exige el art. 4 del Reglamento de IA
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-[#64748B]">
          Una introducción práctica a una obligación real, ya en vigor, que afecta a
          cualquier organización que use o despliegue sistemas de IA — no solo a quien
          los desarrolla.
        </p>

        <div className="prose prose-slate max-w-none space-y-10 text-sm leading-relaxed text-[#475569]">
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
              <BookOpenCheck size={20} className="text-[#2563EB]" />
              ¿Qué es la alfabetización en IA?
            </h2>
            <p>
              El Reglamento de IA (Reglamento (UE) 2024/1689) define la alfabetización en
              IA como las capacidades, conocimientos y comprensión que permiten a
              proveedores, responsables del despliegue y personas afectadas hacer un uso
              informado de los sistemas de IA, y tomar conciencia de las oportunidades,
              los riesgos y los posibles daños que pueden causar. En la práctica: que las
              personas que operan o supervisan un sistema de IA entiendan qué hace, dónde
              puede fallar y cuándo hay que intervenir con criterio humano.
            </p>
          </section>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
              <ShieldCheck size={20} className="text-[#2563EB]" />
              ¿Qué dice exactamente el art. 4?
            </h2>
            <p>
              El artículo 4 obliga a que los proveedores y responsables del despliegue de
              sistemas de IA adopten medidas para garantizar, en la mayor medida posible,
              un nivel suficiente de alfabetización en IA de su personal y de cualquier
              otra persona que se ocupe del funcionamiento y la utilización de sistemas de
              IA en su nombre. Esta obligación está en vigor desde el <strong>2 de
              febrero de 2025</strong> — antes que la mayoría del resto del articulado del
              Reglamento, que se aplica de forma escalonada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
              <Users size={20} className="text-[#2563EB]" />
              ¿A quién aplica?
            </h2>
            <p>
              A cualquier organización que use sistemas de IA, no solo a quien los
              desarrolla o los vende. Un ayuntamiento que usa un asistente de atención
              ciudadana, una empresa que usa un chatbot para clientes, o un equipo técnico
              que se apoya en IA para redactar informes: todos son "responsables del
              despliegue" a efectos del Reglamento, y todos tienen que garantizar que las
              personas que operan o supervisan esos sistemas entienden lo básico de cómo
              funcionan y qué límites tienen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#0F172A]">
              ¿Qué implica en la práctica?
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Que el personal que opera un sistema de IA sepa qué tipo de decisiones
                toma el sistema y cuáles debe seguir tomando una persona.
              </li>
              <li>
                Que se entiendan los riesgos concretos del sistema usado (sesgos,
                errores, alucinaciones, límites de fiabilidad), no solo un discurso
                genérico sobre "la IA".
              </li>
              <li>
                Que exista algún tipo de formación o información adaptada al nivel de
                cada perfil (no es lo mismo quien supervisa el sistema que quien solo lo
                usa puntualmente).
              </li>
              <li>
                Que quede constancia de que esa formación se ha impartido — es lo que
                permite acreditar el cumplimiento si alguna vez se pide.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
            <p className="text-[#334155]">
              Este contenido es una introducción informativa al tema, no asesoramiento
              legal. Los plazos, obligaciones concretas y sanciones exactas conviene
              contrastarlos con el texto oficial del Reglamento o con asesoría legal
              especializada antes de tomar decisiones formales de cumplimiento.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#0F172A]">
              ¿Necesitas ayuda con esto?
            </h2>
            <p>
              Si tu organización usa o va a usar sistemas de IA y quieres una orientación
              concreta — no genérica — sobre qué implica el art. 4 en vuestro caso,
              podemos ayudaros.
            </p>
            <Link
              href="/contacto"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8]"
            >
              Hablar con {SITE.name}
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
