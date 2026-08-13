"use client";

import Link from "next/link";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/constants";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    await new Promise((resolve) => window.setTimeout(resolve, 700));

    setLoading(false);
    setError(
      "No hemos podido iniciar sesión. Comprueba tus credenciales e inténtalo de nuevo."
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="mb-4 inline-flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.logoSrc}
              alt={SITE.name}
              className="h-11 w-auto object-contain lg:h-12"
            />
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Área de clientes
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
              <LockKeyhole size={22} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0F172A]">
              Iniciar sesión
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              Accede a tu espacio privado para consultar y gestionar tus
              servicios de TRAZEV.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#334155]"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="nombre@empresa.com"
                className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#334155]"
                >
                  Contraseña
                </label>
                <Link
                  href="/contacto"
                  className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Introduce tu contraseña"
                  className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 pr-12 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-[#64748B] transition-colors hover:text-[#0F172A]"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#475569]">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded border-[#CBD5E1] accent-[#2563EB]"
              />
              Mantener la sesión iniciada
            </label>
          </div>

          {error ? (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] disabled:cursor-wait disabled:opacity-70"
          >
            {loading ? "Iniciando sesión…" : "Iniciar sesión"}
          </button>

          <p className="mt-6 text-center text-xs leading-relaxed text-[#94A3B8]">
            Acceso exclusivo para clientes autorizados de TRAZEV.
          </p>
        </form>

        <p className="mt-6 text-center text-sm text-[#64748B]">
          ¿Necesitas acceso?{" "}
          <Link
            href="/contacto"
            className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
          >
            Contacta con nosotros
          </Link>
        </p>
      </div>
    </div>
  );
}
