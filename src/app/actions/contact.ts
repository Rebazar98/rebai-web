"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = formData.get("nombre")?.toString().trim();
  const empresa = formData.get("empresa")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const telefono = formData.get("telefono")?.toString().trim();
  const reto = formData.get("reto")?.toString().trim();

  // Validation
  if (!nombre || !empresa || !email || !reto) {
    return {
      status: "error",
      message: "Por favor completa todos los campos obligatorios.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Por favor introduce un email válido.",
    };
  }

  // Send email via Resend (or fallback to mailto)
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "RebAI Web <noreply@rebai.es>",
          to: ["hola@rebai.es"],
          subject: `Nueva consulta de ${empresa} — RebAI`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F8FAFC; border-radius: 12px;">
              <div style="background: #1B2A4A; padding: 24px 32px; border-radius: 8px; margin-bottom: 24px;">
                <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">
                  RebAI — Nueva consulta
                </h1>
                <p style="color: #94A3B8; margin: 4px 0 0; font-size: 14px;">
                  Web de RebAI · ${new Date().toLocaleDateString("es-ES", { dateStyle: "full" })}
                </p>
              </div>

              <div style="background: white; padding: 24px 32px; border-radius: 8px; border: 1px solid #E2E8F0; margin-bottom: 16px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; width: 120px;">Nombre</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px; font-weight: 500;">${nombre}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px;">Empresa</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px; font-weight: 500;">${empresa}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #2563EB; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
                  </tr>
                  ${
                    telefono
                      ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px;">Teléfono</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px;">${telefono}</td>
                  </tr>`
                      : ""
                  }
                </table>
              </div>

              <div style="background: white; padding: 24px 32px; border-radius: 8px; border: 1px solid #E2E8F0; border-left: 4px solid #2563EB;">
                <div style="color: #64748B; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">
                  Reto principal
                </div>
                <p style="color: #0F172A; font-size: 15px; line-height: 1.6; margin: 0;">
                  ${reto.replace(/\n/g, "<br>")}
                </p>
              </div>

              <p style="color: #94A3B8; font-size: 12px; text-align: center; margin-top: 24px;">
                Enviado desde rebai.es · Responder en menos de 48h
              </p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Resend API error");
      }
    } else {
      // Log in development if no API key
      console.log("Contact form submission:", {
        nombre,
        empresa,
        email,
        telefono,
        reto,
      });
    }

    return {
      status: "success",
      message: `Gracias, ${nombre}. Te contactamos en menos de 48 horas.`,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      status: "error",
      message:
        "Ha ocurrido un error al enviar el mensaje. Por favor, escríbenos directamente a hola@rebai.es",
    };
  }
}
