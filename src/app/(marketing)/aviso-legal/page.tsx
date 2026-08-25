import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal del sitio de TRAZEV.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white pb-32 pt-24">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-8 text-3xl font-bold text-[#0F172A]">Aviso Legal</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-[#64748B]">
          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              1. Datos identificativos
            </h2>
            <p>
              En cumplimiento con el deber de información recogido en el
              artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y del Comercio Electrónico, se informa
              de los siguientes datos:
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>
                <strong className="text-[#0F172A]">Marca del sitio:</strong>{" "}
                TRAZEV
              </li>
              <li>
                <strong className="text-[#0F172A]">Email de contacto:</strong>{" "}
                {SITE.email}
              </li>
              <li>
                <strong className="text-[#0F172A]">Domicilio:</strong>{" "}
                {SITE.legalAddress}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              2. Objeto y ámbito de aplicación
            </h2>
            <p>
              El presente Aviso Legal regula el acceso y la utilización del
              sitio web {SITE.url}. El acceso a la web implica la aceptación de
              las condiciones aquí recogidas.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del sitio web, incluidos textos, imágenes,
              diseño y código fuente, son propiedad del titular del sitio o de
              terceros que han autorizado su uso. Queda prohibida su
              reproducción, distribución o comunicación pública sin autorización
              expresa.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              4. Limitación de responsabilidad
            </h2>
            <p>
              La persona o entidad titular del sitio no se hace responsable de
              los daños derivados del uso del sitio web ni de la información
              contenida en el mismo, siempre que no sean imputables por dolo o
              culpa grave.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              5. Legislación aplicable
            </h2>
            <p>
              Este Aviso Legal se rige por la legislación española. Para la
              resolución de conflictos, las partes se someten a los Juzgados y
              Tribunales del domicilio del usuario.
            </p>
          </section>

          <p className="text-xs text-[#94A3B8]">
            Última actualización:{" "}
            {new Date("2026-08-25").toLocaleDateString("es-ES", { dateStyle: "long" })}
          </p>
        </div>
      </div>
    </div>
  );
}
