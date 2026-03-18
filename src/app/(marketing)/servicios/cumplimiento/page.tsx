import type { Metadata } from "next";
import ServicePage from "@/components/services/service-page";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Agente de Cumplimiento Normativo — Monitorización regulatoria automática",
  description:
    "Monitorización automática de cambios en el BOE, BOPA y reglamentos técnicos. Alertas de cumplimiento para ingenierías ambientales y empresas reguladas en Asturias.",
};

export default function CumplimientoPage() {
  const service = SERVICES.find((s) => s.slug === "cumplimiento")!;
  return <ServicePage service={service} />;
}
