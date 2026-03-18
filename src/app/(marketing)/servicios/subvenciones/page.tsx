import type { Metadata } from "next";
import ServicePage from "@/components/services/service-page";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Agente de Subvenciones — Detecta y gestiona subvenciones IDEPA automáticamente",
  description:
    "Monitorización automática de convocatorias del IDEPA, MAPA y CDTI. Alertas antes del cierre de plazo y preparación de documentación para empresas asturianas.",
};

export default function SubvencionesPage() {
  const service = SERVICES.find((s) => s.slug === "subvenciones")!;
  return <ServicePage service={service} />;
}
