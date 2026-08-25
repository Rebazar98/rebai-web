import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePage from "@/components/services/service-page";
import { SERVICES } from "@/lib/constants";

type ServiceParams = {
  slug: string;
};

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

function getServiceMetadata(slug: string, service: NonNullable<ReturnType<typeof getService>>) {
  if (slug === "bopa") {
    return {
      title: "Boletín Inteligente | Agente de IA para revisar y procesar boletines oficiales",
      description:
        "Filtra el boletín oficial, resume cada publicación relevante y ayuda a tu equipo a procesar ayudas, cambios y convocatorias con un agente de IA y chat web.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export function generateStaticParams(): ServiceParams[] {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServiceParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    ...getServiceMetadata(slug, service),
    alternates: {
      canonical: `/servicios/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<ServiceParams>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
