import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies del sitio de TRAZEV.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white pb-32 pt-24">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-8 text-3xl font-bold text-[#0F172A]">
          Política de Cookies
        </h1>
        <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-[#64748B]">
          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo cuando visitas un sitio web. Permiten que el sitio
              recuerde tus preferencias y mejore tu experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              Cookies que utilizamos
            </h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas estrictamente
              necesarias para el funcionamiento del sitio. No utilizamos cookies
              de seguimiento, publicidad o análisis de terceros que requieran
              consentimiento explícito.
            </p>
            <p>
              Podemos utilizar herramientas de analítica con privacidad
              reforzada que no usen cookies de seguimiento ni almacenen datos
              personales identificables.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[#0F172A]">
              Cómo desactivar las cookies
            </h2>
            <p>
              Puedes configurar tu navegador para rechazar todas las cookies o
              para que te avise cuando se envíe una. Si desactivas las cookies,
              es posible que algunas funciones del sitio no estén disponibles.
            </p>
          </section>

          <p className="text-xs text-[#94A3B8]">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", { dateStyle: "long" })}
          </p>
        </div>
      </div>
    </div>
  );
}
