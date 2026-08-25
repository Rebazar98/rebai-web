import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { SITE, NAV_LINKS, LEGAL_LINKS, SERVICES } from "@/lib/constants";

const FOOTER_SERVICES = SERVICES.filter((service) => service.category === "principal");

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <div className="inline-flex rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE.logoSrc}
                  alt={SITE.name}
                  className="h-11 w-auto object-contain lg:h-12"
                />
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#64748B]">
              IA y automatización con trazabilidad, para ayuntamientos y
              empresas de toda España.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors duration-150 hover:bg-[#2563EB]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors duration-150 hover:bg-[#2563EB]"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#64748B]">
              Servicios
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-sm text-[#94A3B8] transition-colors duration-150 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicios"
                  className="text-sm text-[#94A3B8] transition-colors duration-150 hover:text-white"
                >
                  Ver todos los servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/alfabetizacion-ia"
                  className="text-sm text-[#94A3B8] transition-colors duration-150 hover:text-white"
                >
                  Alfabetización en IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#64748B]">
              Empresa
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-sm text-[#3B82F6] transition-colors duration-150 hover:text-white"
              >
                {SITE.email}
              </a>
              <p className="mt-1 text-xs text-[#64748B]">{SITE.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} TRAZEV. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#64748B] transition-colors duration-150 hover:text-white"
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
