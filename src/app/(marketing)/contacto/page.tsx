import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/shared/contact-form";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una consulta gratuita con RebAI. Cuéntanos tu caso y te respondemos en menos de 48 horas con una propuesta adaptada a tu empresa.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
              Primera consulta gratuita
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
              Cuéntanos tu caso
            </h1>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Sin compromiso. En menos de 48 horas te respondemos con una
              propuesta adaptada a tu empresa y sector.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] p-6">
                <h2 className="text-[#0F172A] font-semibold text-base mb-4">
                  ¿Qué pasa después de enviar?
                </h2>
                <ol className="space-y-4">
                  {[
                    { n: "1", text: "Leemos tu mensaje y analizamos el reto que describes." },
                    { n: "2", text: "Te respondemos en menos de 48h con preguntas o propuesta directa." },
                    { n: "3", text: "Si encaja, agendamos una videollamada de 30 minutos sin coste." },
                  ].map((item) => (
                    <li key={item.n} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.n}
                      </div>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-[12px] border border-[#E2E8F0] hover:border-[#2563EB] group transition-colors duration-150"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-[#64748B] text-xs">Email directo</div>
                    <div className="text-[#2563EB] font-mono text-sm font-medium group-hover:underline">
                      {SITE.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-white rounded-[12px] border border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-[#64748B] text-xs">Tiempo de respuesta</div>
                    <div className="text-[#0F172A] text-sm font-medium">
                      Menos de 48 horas
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-[12px] border border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-[#64748B] text-xs">Ubicación</div>
                    <div className="text-[#0F172A] text-sm font-medium">
                      {SITE.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
