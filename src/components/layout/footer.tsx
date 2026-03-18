import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { SITE, NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt={SITE.name} className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              Automatizamos la burocracia que frena a tu empresa en Asturias.
              Agentes de IA para el sector técnico y rural del Principado.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors duration-150"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748B] mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                { label: "BOPA con IA", href: "/servicios/bopa" },
                { label: "Agentes de IA a medida", href: "/servicios/agentes-ia" },
                { label: "Agente de Subvenciones", href: "/servicios/subvenciones" },
                { label: "Agente de Cumplimiento", href: "/servicios/cumplimiento" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#64748B] mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#3B82F6] hover:text-white text-sm transition-colors duration-150 font-mono"
              >
                {SITE.email}
              </a>
              <p className="text-[#64748B] text-xs mt-1">{SITE.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-xs">
            © {new Date().getFullYear()} RebAI. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#64748B] hover:text-white text-xs transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
