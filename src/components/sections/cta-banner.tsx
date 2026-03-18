import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#0F172A] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1B2A4A] opacity-30 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-8">
          <MessageSquare size={12} />
          Primera consulta sin compromiso
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 max-w-3xl mx-auto">
          ¿Listo para eliminar la carga burocrática?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Cuéntanos tu caso. En 48 horas te respondemos con una propuesta
          adaptada a tu empresa y sector.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 group text-base"
          >
            Solicitar consulta gratuita
            <ArrowRight
              size={18}
              className="group-hover:translate-x-0.5 transition-transform duration-150"
            />
          </Link>
          <a
            href="mailto:hola@rebai.es"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 border border-white/20 text-base"
          >
            hola@rebai.es
          </a>
        </div>

        <p className="text-white/40 text-sm mt-8">
          Sin compromiso · Respondemos en menos de 48h · Empresa asturiana
        </p>
      </div>
    </section>
  );
}
