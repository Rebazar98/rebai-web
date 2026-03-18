import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[#E2E8F0] font-bold text-9xl font-mono mb-8 select-none">
          404
        </div>
        <h1 className="text-2xl font-bold text-[#0F172A] mb-3">
          Página no encontrada
        </h1>
        <p className="text-[#64748B] mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform duration-150"
          />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
