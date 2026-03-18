import type { Metadata } from "next";
import ServicePage from "@/components/services/service-page";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Agentes de IA a medida — Automatización personalizada para tu empresa",
  description:
    "Diseñamos y construimos agentes de IA adaptados a los procesos de ingenierías, consultoras y cooperativas asturianas. Automatización real, no genérica.",
};

export default function AgentesIAPage() {
  const service = SERVICES.find((s) => s.slug === "agentes-ia")!;
  return <ServicePage service={service} />;
}
