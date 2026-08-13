"use server";

import { getPricingTierLabel } from "@/lib/contact";
import { SITE } from "@/lib/constants";
import { LeadValidationError, submitLead } from "@/lib/leads";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function getSuccessMessage(formData: FormData, nombre: string): string {
  const leadType = formData.get("leadType")?.toString();
  const rawPricingTier = formData.get("pricingTier")?.toString();
  const pricingTier =
    rawPricingTier === "basico" ||
    rawPricingTier === "profesional" ||
    rawPricingTier === "empresa"
      ? rawPricingTier
      : undefined;
  const pricingTierLabel = getPricingTierLabel(pricingTier);

  if (leadType === "demo") {
    return `Gracias, ${nombre}. Ya tenemos tu solicitud y te escribiremos para ver si encaja de verdad en tu operativa y por donde empezar.`;
  }

  if (leadType === "pricing" && pricingTierLabel) {
    return `Gracias, ${nombre}. Revisaremos tu caso y te diremos si el plan ${pricingTierLabel} es el correcto para tu equipo antes de proponerte el siguiente paso.`;
  }

  return `Gracias, ${nombre}. Ya tenemos tu caso y te responderemos con una orientacion clara y el siguiente paso mas sensato.`;
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = formData.get("nombre")?.toString().trim();

  try {
    const result = await submitLead({
      serviceSlug: formData.get("serviceSlug"),
      leadType: formData.get("leadType"),
      pricingTier: formData.get("pricingTier"),
      sourcePage: formData.get("sourcePage"),
      sourceSection: formData.get("sourceSection"),
      nombre,
      empresa: formData.get("empresa"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      challenge: formData.get("reto"),
      currentBopaSituation: formData.get("situacion"),
    });

    if (!result.ok) {
      console.error("Lead delivery failed", result.delivery);
      return {
        status: "error",
        message: `No hemos podido registrar tu consulta ahora mismo. Escribenos a ${SITE.email} y te respondemos cuanto antes.`,
      };
    }

    return {
      status: "success",
      message: getSuccessMessage(formData, nombre ?? "gracias"),
    };
  } catch (error) {
    if (error instanceof LeadValidationError) {
      return {
        status: "error",
        message: error.issues[0] ?? "Por favor revisa los campos del formulario.",
      };
    }

    console.error("Contact form error:", error);
    return {
      status: "error",
      message: `Ha ocurrido un error al enviar el mensaje. Por favor, escribenos directamente a ${SITE.email}`,
    };
  }
}
