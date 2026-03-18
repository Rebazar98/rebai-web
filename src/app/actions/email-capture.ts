"use server";

export async function captureEmail(email: string): Promise<{ ok: boolean }> {
  // Validación básica
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false };
  }

  try {
    // 1. Notificar a n8n (si está configurado)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "email-capture",
          email,
          origen: "hero",
          fecha: new Date().toISOString(),
        }),
      }).catch(() => {
        // Fallo silencioso — no bloquear al usuario si n8n falla
      });
    }

    // 2. Notificar internamente via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "RebAI Web <noreply@rebai.es>",
          to: ["hola@rebai.es"],
          subject: `Nuevo lead desde hero — ${email}`,
          html: `
            <p><strong>Nuevo lead desde el hero de rebai.es</strong></p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Origen: Captura rápida (hero)</p>
            <p>Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}</p>
          `,
        }),
      }).catch(() => {});
    } else {
      console.log("[email-capture] Lead:", email);
    }

    return { ok: true };
  } catch {
    return { ok: false };
  }
}
