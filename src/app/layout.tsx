import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "TRAZEV",
    template: "%s | TRAZEV",
  },
  description:
    "TRAZEV ayuda a ayuntamientos y empresas privadas de toda España a redactar planes urbanísticos, atender al ciudadano, vigilar el BOPA y medir la satisfacción ciudadana con IA.",
  keywords: [
    "automatizacion BOPA Asturias",
    "IA para ayuntamientos",
    "redacción de planes urbanísticos con IA",
    "asistente de atención al ciudadano",
    "satisfacción ciudadana ayuntamiento",
    "trazabilidad y protección de datos IA",
    "automatización administrativa para empresas",
  ],
  authors: [{ name: "TRAZEV" }],
  creator: "TRAZEV",
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "TRAZEV",
    title: "TRAZEV - IA y automatización para ayuntamientos y empresas",
    description:
      "Planes urbanísticos, atención al ciudadano, BOPA Inteligente y satisfacción ciudadana con IA para entidades locales y empresas de toda España.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "TRAZEV - IA y automatización para ayuntamientos y empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAZEV - IA y automatización para ayuntamientos y empresas",
    description:
      "Planes urbanísticos, atención al ciudadano, BOPA Inteligente y satisfacción ciudadana con IA.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
