import { NextResponse } from "next/server";

import { LeadValidationError, submitLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const result = await submitLead(body);

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "No se ha podido entregar el lead en este momento.",
          delivery: result.delivery,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      lead: result.lead,
      delivery: result.delivery,
    });
  } catch (error) {
    if (error instanceof LeadValidationError) {
      return NextResponse.json(
        {
          ok: false,
          error: error.issues[0] ?? "Payload de lead no valido.",
          issues: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "No se ha podido procesar el lead." },
      { status: 500 }
    );
  }
}
