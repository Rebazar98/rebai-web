import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de RebAI.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-8">Aviso Legal</h1>
        <div className="prose prose-slate max-w-none text-[#64748B] space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">1. Datos identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley
              34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio
              Electrónico, se informa de los siguientes datos:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong className="text-[#0F172A]">Denominación:</strong> RebAI</li>
              <li><strong className="text-[#0F172A]">Email de contacto:</strong> {SITE.email}</li>
              <li><strong className="text-[#0F172A]">Domicilio:</strong> {SITE.location}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y la utilización del sitio web {SITE.url},
              cuya titularidad corresponde a RebAI. El acceso a la web implica la aceptación de las
              condiciones aquí recogidas.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son
              propiedad de RebAI o de terceros que han autorizado su uso. Queda prohibida su
              reproducción, distribución o comunicación pública sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">4. Limitación de responsabilidad</h2>
            <p>
              RebAI no se hace responsable de los daños derivados del uso del sitio web ni de la
              información contenida en el mismo, siempre que no sean imputables a RebAI por dolo
              o culpa grave.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">5. Legislación aplicable</h2>
            <p>
              Este Aviso Legal se rige por la legislación española. Para la resolución de conflictos,
              las partes se someten a los Juzgados y Tribunales del domicilio del usuario.
            </p>
          </section>

          <p className="text-xs text-[#94A3B8]">
            Última actualización: {new Date().toLocaleDateString("es-ES", { dateStyle: "long" })}
          </p>
        </div>
      </div>
    </div>
  );
}
