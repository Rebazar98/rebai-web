"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E2E8F0] bg-white shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
          : "border-b border-[#EEF2F7] bg-white"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="flex h-full items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.logoSrc}
              alt={SITE.name}
              className="h-14 w-auto object-contain lg:h-[60px]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter((l) => l.label !== "Contacto").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1D4ED8] hover:text-[#1E40AF] text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/panel/login"
              className="text-[#1D4ED8] hover:text-[#1E40AF] text-sm font-semibold transition-colors duration-150"
            >
              Área clientes
            </Link>
            <Link
              href="/contacto"
              className="text-[#1D4ED8] hover:text-[#1E40AF] text-sm font-medium transition-colors duration-150"
            >
              Contacto
            </Link>
            <Link
              href="/contacto"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
            >
              Hablar con TRAZEV
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#64748B] hover:text-[#0F172A] transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1D4ED8] font-medium py-2 border-b border-[#F1F5F9] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/panel/login"
            onClick={() => setMenuOpen(false)}
            className="text-[#1D4ED8] font-semibold py-2 border-b border-[#F1F5F9]"
          >
            Área clientes
          </Link>
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-[#2563EB] text-white font-semibold px-4 py-3 rounded-lg text-center mt-2"
          >
            Hablar con TRAZEV
          </Link>
        </div>
      )}
    </header>
  );
}
