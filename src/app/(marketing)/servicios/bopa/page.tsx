import type { Metadata } from "next";
import ServicePage from "@/components/services/service-page";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BOPA con IA — Monitorización automática del Boletín Oficial de Asturias",
  description:
    "Automatiza la descarga y análisis del BOPA. Alertas personalizadas, asistente conversacional y resúmenes automáticos para ingenierías y empresas técnicas en Asturias.",
};

export default function BOPAPage() {
  const service = SERVICES.find((s) => s.slug === "bopa")!;
  return <ServicePage service={service} />;
}
