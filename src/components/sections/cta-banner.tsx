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
          Solicita una demo personalizada
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Cuéntanos tu caso. En 24 horas te mostramos cómo funciona
          adaptado a tu empresa y sector en Asturias.
        </p>

        <Link
          href="/contacto?tipo=demo"
          className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 group text-base"
        >
          Ver cómo funciona para mi empresa
          <ArrowRight
            size={18}
            className="group-hover:translate-x-0.5 transition-transform duration-150"
          />
        </Link>

        <p className="text-white/40 text-sm mt-8">
          Sin compromiso · Respondemos en menos de 48h · Empresa asturiana
        </p>
      </div>
    </section>
  );
}
