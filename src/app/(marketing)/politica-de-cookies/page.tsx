import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de RebAI.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-8">Política de Cookies</h1>
        <div className="prose prose-slate max-w-none text-[#64748B] space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
              visitas un sitio web. Permiten que el sitio recuerde tus preferencias y mejore tu
              experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">Cookies que utilizamos</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el
              funcionamiento del sitio. No utilizamos cookies de seguimiento, publicidad o análisis
              de terceros que requieran consentimiento explícito.
            </p>
            <p>
              Podemos utilizar Vercel Analytics, que es una herramienta de análisis de privacidad
              mejorada que no usa cookies de seguimiento ni almacena datos personales identificables.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">Cómo desactivar las cookies</h2>
            <p>
              Puedes configurar tu navegador para rechazar todas las cookies o para que te avise
              cuando se envíe una. Si desactivas las cookies, es posible que algunas funciones del
              sitio no estén disponibles.
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
