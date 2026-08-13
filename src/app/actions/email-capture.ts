"use server";

import { LeadValidationError, submitLead } from "@/lib/leads";

export async function captureEmail(email: string): Promise<{ ok: boolean }> {
  try {
    const result = await submitLead({
      serviceSlug: "bopa",
      leadType: "interest",
      sourcePage: "/",
      sourceSection: "hero",
      email,
    });

    if (!result.ok) {
      console.error("Hero lead delivery failed", result.delivery);
    }

    return { ok: result.ok };
  } catch (error) {
    if (!(error instanceof LeadValidationError)) {
      console.error("Email capture error:", error);
    }
    return { ok: false };
  }
}
