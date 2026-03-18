import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RebAI — Automatización con IA para el sector técnico en Asturias",
    template: "%s | RebAI",
  },
  description:
    "Automatizamos la burocracia que frena a tu empresa en Asturias. Agentes de IA, análisis del BOPA y automatización de procesos para ingenierías, consultoras y cooperativas del Principado.",
  keywords: [
    "automatización BOPA Asturias",
    "agente IA subvenciones IDEPA",
    "inteligencia artificial Asturias",
    "automatización burocracia Principado de Asturias",
    "gestión documental automatizada cooperativas Asturias",
  ],
  authors: [{ name: "RebAI" }],
  creator: "RebAI",
  metadataBase: new URL("https://rebai.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "RebAI",
    title: "RebAI — Automatización con IA para el sector técnico en Asturias",
    description:
      "Automatizamos la burocracia que frena a tu empresa. BOPA, subvenciones IDEPA y automatización para ingenierías y cooperativas asturianas.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "RebAI — Automatización con IA en Asturias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RebAI — Automatización con IA para el sector técnico en Asturias",
    description:
      "Automatizamos la burocracia que frena a tu empresa en Asturias.",
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
