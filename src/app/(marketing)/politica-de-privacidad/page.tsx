import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de RebAI.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-8">Política de Privacidad</h1>
        <div className="prose prose-slate max-w-none text-[#64748B] space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">1. Responsable del tratamiento</h2>
            <ul className="list-none pl-0 space-y-1">
              <li><strong className="text-[#0F172A]">Responsable:</strong> RebAI</li>
              <li><strong className="text-[#0F172A]">Email:</strong> {SITE.email}</li>
              <li><strong className="text-[#0F172A]">Domicilio:</strong> {SITE.location}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">2. Datos que recopilamos</h2>
            <p>
              A través del formulario de contacto recopilamos: nombre, empresa, email, teléfono
              (opcional) y descripción del reto o consulta. Estos datos se utilizan exclusivamente
              para responder a tu consulta y no se comparten con terceros salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">3. Base legal del tratamiento</h2>
            <p>
              El tratamiento se basa en el consentimiento del interesado (art. 6.1.a RGPD), otorgado
              al enviar el formulario de contacto.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">4. Plazos de conservación</h2>
            <p>
              Los datos se conservan durante el tiempo necesario para gestionar la relación
              comercial y, en su caso, durante los plazos legales de prescripción aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">5. Derechos del interesado</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
              portabilidad y limitación del tratamiento enviando un email a {SITE.email} con
              el asunto "Derechos RGPD".
            </p>
          </section>

          <section>
            <h2 className="text-[#0F172A] font-semibold text-base mb-2">6. Transferencias internacionales</h2>
            <p>
              En caso de utilizar servicios de terceros para el envío de emails (Resend), se
              garantiza que los datos se tratan en conformidad con el RGPD.
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
